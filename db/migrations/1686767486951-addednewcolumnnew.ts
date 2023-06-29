import { MigrationInterface, QueryRunner } from "typeorm";

export class Addednewcolumnnew1686767486951 implements MigrationInterface {
    name = 'Addednewcolumnnew1686767486951'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "shops" ALTER COLUMN "location" SET DEFAULT ''`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "shops" ALTER COLUMN "location" DROP DEFAULT`);
    }

}
