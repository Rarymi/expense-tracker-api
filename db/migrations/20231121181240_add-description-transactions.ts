import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.alterTable('transactions', (table) => {
        table.text('description')
    })
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.alterTable('transactio ns', (table) => {
        table.dropColumn('description')
    })
}

