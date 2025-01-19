import { createOrUpdateUser } from "./models/User";
import { findShopById, updateShop } from "./models/Shop";
import { sendInvitation } from "./services/Superagent";

const AUTH_URL = "https://url.to.auth.system.com/invitation";

const USER_INVITATION_SUCCESFUL = "User invited successfully";
const USER_ALREADY_INVITED = "User already invited to this shop";
const ERROR_MESSAGE = "An error occurred";

export const inviteUser = async (req, res) => {
    const { body: invitationBody } = req;
    const { shopId } = req.params;

    try {
        const invitationResponse = await sendInvitation(invitationBody);

        if (invitationResponse.status === 201) {   
            await processSuccessfulInvitation(
                invitationResponse,
                invitationBody,
                shopId
            );
            const result = { message: USER_INVITATION_SUCCESFUL };
            return res.status(201).json(result);
        } else if (invitationResponse.status === 200) {
            return res.status(400).json({
                error: true,
                message: USER_ALREADY_INVITED,
            });
        }
    } catch (error) {
        console.error("Error in inviteUser:", error);
        return res.status(500).json({ message: ERROR_MESSAGE, error });
    }
};

const processSuccessfulInvitation = async (invitationResponse, invitationBody, shopId) => {
    const { authId, invitationId } = invitationResponse.body;
    const createdUser = await createOrUpdateUser(authId, invitationBody.email);
    const shop = await findShopById(shopId);
    await updateShop(shop, invitationId, createdUser._id);
};







