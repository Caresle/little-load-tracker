export const itemsQuery = {
	createOne: `
        INSERT INTO items (name, description)
        VALUES ($1, $2)
    `,
	updateOne: `
        UPDATE items
        SET name = $1, description = $2
        WHERE id = $3
    `,
	deleteOne: `
        DELETE FROM items
        WHERE id = $1
    `,
}
