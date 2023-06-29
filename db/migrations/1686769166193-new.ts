import { MigrationInterface, QueryRunner } from "typeorm";

export class New1686769166193 implements MigrationInterface {
    name = 'New1686769166193'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "shops" ALTER COLUMN "shop_banner" SET DEFAULT ''`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "shops" ALTER COLUMN "shop_banner" DROP DEFAULT`);
    }

}
