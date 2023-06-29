import { MigrationInterface, QueryRunner } from "typeorm";

export class Addedbanner1687993848648 implements MigrationInterface {
    name = 'Addedbanner1687993848648'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" ADD "categories" text NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "categories"`);
    }

}
