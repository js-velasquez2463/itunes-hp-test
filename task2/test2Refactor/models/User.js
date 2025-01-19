export const createOrUpdateUser = async (authId, email) => {
    return await User.findOneAndUpdate(
        { authId },
        { authId, email },
        { upsert: true, new: true }
    );
};