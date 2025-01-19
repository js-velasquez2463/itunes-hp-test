export const findShopById = async (shopId) => {
    try {
        const shop = await Shop.findById(shopId);
        if (!shop) {
            throw new Error("Shop not found");
        }
        return shop;
    } catch (error) {
        throw new Error(`Failed to find shop: ${error.message}`);
    }
};

export const updateShop = async (shop, invitationId, userId) => {
    try {
        if (!shop.invitations.includes(invitationId)) {
            shop.invitations.push(invitationId);
        }
        if (!shop.users.includes(userId)) {
            shop.users.push(userId);
        }
        await shop.save();
    } catch (error) {
        throw new Error(`Failed to update shop: ${error.message}`);
    }
};