export const queriesUser = {
	createOne: `
        INSERT INTO users (username, password)
        VALUES ($1, $2)
    `,
	updateOne: `
        UPDATE users
        SET username = $1, password = COALESCE($2, password)
        WHERE id = $3
    `,
	deleteOne: `
        DELETE FROM users
        WHERE id = $1
    `,
}
