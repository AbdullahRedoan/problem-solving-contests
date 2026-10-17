function generateProfileCard(user) {
    const { address, name, social } = user;
    return profile = `${name ?? "Anonymous"} | ${address?.city ?? "Unknown"} | followers: ${social?.followers ?? "0"}`
}

console.log(generateProfileCard({}));