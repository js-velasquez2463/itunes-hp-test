
export const sendInvitation = async (invitationBody) => {
    return await superagent.post(AUTH_URL).send(invitationBody);
};