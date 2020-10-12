import {MigrationInterface, QueryRunner} from "typeorm";

export class FakePosts1602478331321 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            insert into post (title, text, "creatorId", "createdAt") values ('Sinbad: The Fifth Voyage', 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.', 1, '2019-12-06T09:20:02Z');
            insert into post (title, text, "creatorId", "createdAt") values ('B. Monkey', 'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.', 1, '2020-08-06T01:46:37Z');
            insert into post (title, text, "creatorId", "createdAt") values ('Time in the Minors', 'Sed ante. Vivamus tortor. Duis mattis egestas metus.', 2, '2020-05-28T03:33:18Z');
            insert into post (title, text, "creatorId", "createdAt") values ('Il Mare (Siworae)', 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.', 2, '2020-04-18T16:34:53Z');
            insert into post (title, text, "creatorId", "createdAt") values ('Best Man, The', 'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.', 2, '2019-11-08T15:52:52Z');
            insert into post (title, text, "creatorId", "createdAt") values ('Wilby Conspiracy, The', 'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.', 1, '2020-03-07T16:31:06Z');
            insert into post (title, text, "creatorId", "createdAt") values ('Talking About Sex', 'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.', 1, '2020-05-16T22:38:45Z');
            insert into post (title, text, "creatorId", "createdAt") values ('Hell Drivers', 'Sed ante. Vivamus tortor. Duis mattis egestas metus.', 1, '2019-10-19T00:17:23Z');
            insert into post (title, text, "creatorId", "createdAt") values ('Over-Eater, The (L''outremangeur)', 'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.', 1, '2020-07-13T19:39:44Z');
            insert into post (title, text, "creatorId", "createdAt") values ('Last Seduction, The', 'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.', 2, '2020-06-20T00:41:21Z');
            insert into post (title, text, "creatorId", "createdAt") values ('Hamburg Syndrome, The (Die Hamburger Krankheit)', 'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.', 1, '2020-02-02T08:44:47Z');
            insert into post (title, text, "creatorId", "createdAt") values ('Win/win', 'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.', 1, '2020-07-05T03:33:14Z');
            insert into post (title, text, "creatorId", "createdAt") values ('Man Called Gannon, A', 'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.', 1, '2020-03-12T07:26:46Z');
            insert into post (title, text, "creatorId", "createdAt") values ('Calculator', 'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.', 2, '2020-04-13T14:11:50Z');
            insert into post (title, text, "creatorId", "createdAt") values ('Loose Change 9/11: An American Coup', 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.', 2, '2020-07-05T21:26:05Z');
            insert into post (title, text, "creatorId", "createdAt") values ('Nazty Nuisance', 'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus.', 1, '2019-09-11T05:24:02Z');
            insert into post (title, text, "creatorId", "createdAt") values ('Blue Gate Crossing (Lan se da men)', 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.', 1, '2020-02-25T18:03:20Z');
            insert into post (title, text, "creatorId", "createdAt") values ('Cargo', 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 1, '2020-07-02T22:31:18Z');
            insert into post (title, text, "creatorId", "createdAt") values ('Dragon Ball Z: The History of Trunks (Doragon bôru Z: Zetsubô e no hankô!! Nokosareta chô senshi - Gohan to Torankusu)', 'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl.', 1, '2020-03-13T16:00:37Z');
            insert into post (title, text, "creatorId", "createdAt") values ('I Give It a Year', 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.  Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.', 1, '2019-10-26T21:28:42Z');
            insert into post (title, text, "creatorId", "createdAt") values ('Adrift (À Deriva)', 'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.', 2, '2019-10-01T21:50:59Z');
            insert into post (title, text, "creatorId", "createdAt") values ('Master of the Flying Guillotine (Du bi quan wang da po xue di zi)', 'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo.', 2, '2020-01-04T06:01:01Z');
            insert into post (title, text, "creatorId", "createdAt") values ('Babyfever', 'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.', 2, '2020-06-17T05:20:43Z');
            insert into post (title, text, "creatorId", "createdAt") values ('Independents', 'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.', 1, '2020-01-23T04:49:00Z');
            insert into post (title, text, "creatorId", "createdAt") values ('Now and Then', 'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.', 1, '2020-02-07T15:05:27Z');
            insert into post (title, text, "creatorId", "createdAt") values ('My Crazy Life (Mi vida loca)', 'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.', 1, '2020-01-02T03:21:00Z');
            insert into post (title, text, "creatorId", "createdAt") values ('In Bloom (Grzeli nateli dgeebi)', 'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.', 1, '2020-07-11T06:44:28Z');
            insert into post (title, text, "creatorId", "createdAt") values ('Garbage Warrior', 'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.', 2, '2020-01-16T17:30:14Z');
            insert into post (title, text, "creatorId", "createdAt") values ('Late Show, The', 'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.', 1, '2019-09-17T10:18:17Z');
            insert into post (title, text, "creatorId", "createdAt") values ('Paper Lion', 'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus.', 1, '2019-08-30T12:19:57Z');
            insert into post (title, text, "creatorId", "createdAt") values ('Time Changer', 'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.', 1, '2019-09-11T08:27:17Z');
            insert into post (title, text, "creatorId", "createdAt") values ('Tattooed Life (Irezumi ichidai)', 'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.', 2, '2020-08-10T02:28:47Z');
            insert into post (title, text, "creatorId", "createdAt") values ('Hysteria: The Def Leppard Story', 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.', 1, '2020-06-29T08:23:31Z');
            insert into post (title, text, "creatorId", "createdAt") values ('Thampu', 'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.', 2, '2019-11-15T22:48:06Z');
            insert into post (title, text, "creatorId", "createdAt") values ('Haunted Echoes', 'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', 2, '2019-11-02T07:16:32Z');
            insert into post (title, text, "creatorId", "createdAt") values ('Beautiful Girl', 'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.', 2, '2019-10-09T08:45:48Z');
            insert into post (title, text, "creatorId", "createdAt") values ('Fantastic Four, The', 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.', 2, '2019-10-13T07:16:08Z');
            insert into post (title, text, "creatorId", "createdAt") values ('Just Friends?', 'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.', 1, '2020-04-10T06:29:55Z');
            insert into post (title, text, "creatorId", "createdAt") values ('Minnie and Moskowitz', 'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.', 2, '2019-12-07T17:43:15Z');
            insert into post (title, text, "creatorId", "createdAt") values ('Rabbit', 'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.', 2, '2020-06-13T07:40:43Z');
        `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
