"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migration20200830113714 = void 0;
const migrations_1 = require("@mikro-orm/migrations");
class Migration20200830113714 extends migrations_1.Migration {
    up() {
        return __awaiter(this, void 0, void 0, function* () {
            this.addSql('create table "post" ("id" serial primary key, "title" text not null, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null);');
            this.addSql('create table "member" ("id" serial primary key, "username" varchar(255) not null, "email" varchar(255) not null, "password" text not null, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null);');
            this.addSql('alter table "member" add constraint "member_username_unique" unique ("username");');
            this.addSql('alter table "member" add constraint "member_email_unique" unique ("email");');
        });
    }
}
exports.Migration20200830113714 = Migration20200830113714;
//# sourceMappingURL=Migration20200830113714.js.map