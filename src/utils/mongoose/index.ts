export function sanitizeUser(user: any) {
    if (!user) return null;
    const userObj = typeof user.toObject === "function" ? user.toObject() : user;
    const { password, resetToken, createdAt, updatedAt, ...safeUser } = userObj;

    return safeUser;
}