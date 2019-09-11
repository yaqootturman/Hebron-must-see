BEGIN;

drop table if exists places, guides, users, arabic_words, guides_reviews, places_reviews
CASCADE;

create table places
(
place_id serial primary key,
name varchar(100) not null,
type text not null,
image1 text not null,
image2 text,
image3 text,
description text,
availability text not null,
price text not null,
address text not null
);

insert into places
(name,type,image1,image2,image3,description,availability,price,address)
values
    ('Abrahams Oak Holy','Religious','https://www.al-monitor.com/pulse/files/live/sites/almonitor/files/images/almpics/2019/01/28337390_1837733302927367_6534267545063584875_o.jpg','https://forums.graaam.com/images/images_thumbs/d18968c69b0b91183697576821a55a89.jpg','https://mohammadhamdan64.files.wordpress.com/2017/09/img_0320.jpg','Abrahams Oak Holy Trinity Monastery: is a Russian Orthodox monastery in Hebron founded in the 20th century on the site of the ancient Oak of Mamre.

Two km from the Hebron city center, on a high hill lies the Russian Orthodox Church of Al-Maskobiyeh. The Church was built in 1871 AD around an old oak tree and is the only church in the city of Hebron.',' 8:00 AM – 4:00 PM'
,'3‏₪','Al Maskobiya Street-Al-jalada-Hebron'),

('The Oak of Abraham','Religious','https://static1.shasha.ps/cachedImages/resize/740/494/shasha_images/%D8%A8%D9%84%D9%88%D8%B7%D8%A9-%D8%A7%D8%A8%D8%B1%D8%A7%D9%87%D9%8A%D9%85-597x300-jpg-95491255341137155.jpg','http://mjdna.com/Files/watermarked/20120526-132245744079359.jpg','http://mjdna.com/Files/watermarked/20120526-132245726065549.jpg','The Oak of Mamre (also called the Oak of Sibta), at Herbert es-Sibte, located near Abrahams Oak Holy and two kilometers southwest of Mamre, also called The Oak of Abraham is an ancient tree which, in tradition, is said to mark the place where Abraham pitched his tent. It is estimated that this oak is approximately 5,000 years old.

The site of the oak was acquired in 1868 by the Church of Russia and the nearby Monastery of the Holy Trinity was founded nearby. The site is a major attraction for Christian pilgrims.
',' 8:00 AM – 4:00 PM'
,'3‏₪','Al Maskobiya Street-Al-jalada-Hebron'),

('Al-Haram al-Ibrahimi','Religious'
,'https://upload.wikimedia.org/wikipedia/commons/3/32/Hebron_Cave_of_the_Patriarchs.jpg','http://www.travelpalestine.ps//files/image/hebron/haram.jpg','https://www.aljazeera.net/file/GetImageCustom/664788ee-6aa8-4cfb-9a11-a5e9fa28fce0/1200/630','Al-Haram al-Ibrahimi is located at the southeast corner of modern Hebron and in the heart of its old town. It is considered the fourth holiest site in Islam and the second holiest site in Palestine. Historical evidence suggests that the Prophet Ibrahim resided in Hebron approximately four thousand years ago. 

Al-Ibrahimi Mosque was built within an enclosure originally constructed by Herod the Great, who ruled over Palestine during the early Roman period (37–4 BC). It is built of largely drafted ashlars (the largest is 7.5 x 1.4 meters) and is 15 meters high. 

Al-Ibrahimi Mosque was given special attention, and the cenotaphs of the prophets were constructed and richly decorated with green tapestries embroidered with Qur’anic verses and other pious inscriptions.
',' Daily; 7:30 AM – 5:00 PM.
Note: The Mosque is closed on Fridays, the Jewish area is closed on Saturdays. 
Passports are checked by Israeli police before entering.
'
,'3‏₪','Old City, Hebron'),

('Wadi al-Qaf','cultural','https://ultrapal.ultrasawt.com/sites/default/files/117582961.jpg','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdjF3emNvGmahjj-bFpaxAkAqL4oM2X0MqNGeyhuinYEhnOvCh','https://mohammadhamdan64.files.wordpress.com/2017/07/img_1316.jpg?w=1108','About six kilometers northwest of Hebron, the largest nature reserve in the West Bank has been preserved, its beauty and the lushness of its trees dates back hundreds of years ago. The area maintained its greenery despite the fact that no new trees were planted since the Ottoman era. 

Wadi al-Qaf is a protected area of 4,600 dunums of the state’s land. The cultivated area is about 2,800 dunums, according to the estimates of the Palestinian Ministry of Agriculture. The nature reserve is surrounded by several villages. It is located to the West of Tarqumiya and the town of Beit Ula, and to the southeast of Hebron.

As one looks out from the hills of western Hebron, he views a mountainous valley full of various kinds of trees including pine, cedar, oak, and hawthorn among others. The dense trees became a safe haven for many migratory birds and butterflies.
','always open','5‏₪','Tarqomia, Hebron'),

('Mamre (Haram Ramat Al Khalil)','Historical',
'http://storage.googleapis.com/alquds-cdn/images/1461451555637781200/1461451555000/700x414.jpg','http://1remva49c8bs3jvwod2dqqqs.wpengine.netdna-cdn.com/wp-content/uploads/2015/10/mamre01.jpg','https://www.palinfo.com/Uploads/Models/Media/Images/2018/12/11/-689804095.jpg','The site of Mamre, known in Arabic as Haram Ramat Al Khalil, is located approximately 3 km north of Hebron.

The Bible describes Mamre as Abrahams dwelling place, where Abraham settled after separating from his nephew Lot.

The visible ruins include a haram constructed by Herod the Great in the 1st century AD during the Roman and Byzantine periods.','always open','3‏₪','Haram Al-Rama Street, Hebron'),

('THE OLD TOWN OF HEBRON','Historical','https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Hebron-Ibn_Othman.jpg/240px-Hebron-Ibn_Othman.jpg','http://www.alhayat-j.com/files/image/hebronmrkt.jpg','https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Old_City_of_Hebron.jpg/240px-Old_City_of_Hebron.jpg','The old town of Hebron is located in the southeast corner of the modern city of Hebron, with Al-Haram al-Ibrahimi (Ibrahimi Mosque) at its center.

The old town encompassing a diversified social and architectural conglomerate of quarters, alleys, ahwash (sing. hosh) or courtyards, suqs or markets, khans or inns, mosques, schools and zawayas (sing. zawiya). The buildings in the old town of Hebron model representation of traditional Islamic architecture, in which Mamluk and Ottoman characteristics are prevalent. 
','7:30 AM – 5:00 PM.','5‏₪','Old City, Hebron'),

('Beni bark ','Entertainment','https://scontent.fjrs1-1.fna.fbcdn.net/v/t1.0-9/941599_10151432874330911_1233268260_n.jpg?_nc_cat=106&_nc_oc=AQn_FLB9mv786XPSPn_vAluOjLRTfFUp4CJBKllN_svuJMp4egkWzJ7c5L5J6y16FgU&_nc_ht=scontent.fjrs1-1.fna&oh=eea75ae006eb797db15cc1e7cb841f17&oe=5DFBE1CE','https://www.palestineeconomy.ps/public/files/image/mlahee.jpg','https://i.ytimg.com/vi/B47JPkai5g0/hqdefault.jpg',null,'Always open','10‏₪','Halhul, Hebron'),

('Palm Park(Al-Nakheel-Tafooh park)','Entertainment','http://taffouh.org/sites/default/files/14_0.JPG','http://taffouh.org/sites/default/files/26.JPG','https://upload.wikimedia.org/wikipedia/commons/e/ea/%D9%85%D9%86%D8%AA%D8%B2%D8%A9_%D8%A7%D9%84%D9%86%D8%AE%D9%8A%D9%84_-_%D8%A8%D9%84%D8%AF%D8%A9_%D8%AA%D9%81%D9%88%D8%AD_-_%D9%85%D8%AF%D9%8A%D9%86%D8%A9_%D8%A7%D9%84%D8%AE%D9%84%D9%8A%D9%84.jpg',null,'Always open','10‏₪','Tafooh, Hebron');

create table places_reviews
(
id serial primary key,
review text not null,
place_id INTEGER,
FOREIGN KEY
(place_id) REFERENCES places (place_id)
);

insert into places_reviews (review,place_id)
values 
('good place','1');

create table users
(
user_id serial primary key,
name varchar(100) not null,
email text not null,
password text not null
);

insert into users(name,email,password)

values 
('Aya','Aya@gmail.com','123456'),
('Rana','Rana@gmail.com','123'),
('salam','salam@gmail.com','12345'),
('jane','jane@gmail.com','123456');

create table guides
(
guide_id serial primary key,
type text not null,
photo text not null,
description text not null,
availability text not null,
phone text not null,
age text not null,
user_id INTEGER,
FOREIGN KEY
(user_id) REFERENCES users (user_id)
);

insert into guides(type,photo,description,availability,phone,age,user_id)
values ('English','https://cdn5.vectorstock.com/i/1000x1000/98/89/woman-girl-female-hair-person-face-head-icon-vector-10189889.jpg','Aya mohamad is an English teacher, work as aguide two years ago.','sunday: 1pm- 4pm','+970595786545','26','1'),

('French','https://cdn5.vectorstock.com/i/1000x1000/98/89/woman-girl-female-hair-person-face-head-icon-vector-10189889.jpg','/rana taha is a history teacher, work as aguide two years ago.','Monday: 1pm- 4pm','+97059578665','36','2'),

('Italian','https://cdn5.vectorstock.com/i/1000x1000/98/89/woman-girl-female-hair-person-face-head-icon-vector-10189889.jpg','Salam is a student, work as aguide two years ago.','Saturday: 1pm- 4pm','+970595786545','21','3');

create table guides_reviews
(
id serial primary key,
review text not null,
user_id INTEGER,
FOREIGN KEY
(user_id) REFERENCES users (user_id),
guide_id INTEGER,
FOREIGN KEY
(guide_id) REFERENCES guides (guide_id)
);

insert into guides_reviews (review,user_id,guide_id)
values 
('good guide','1','1');

create table arabic_words
(
id serial primary key,
arabic text not null,
english text not null,
pronunciation text not null,
type text not null
);

insert into arabic_words (arabic,english,pronunciation,type)
values ('صباح الخير','Good morning','Sabah Al kheer','greetings'),
('مرحبا','Hello','Marhaba','greetings'),
('كيف حالك','How are you','kef halk','greetings'),
('الى اللقاء','Good bye','ela al-lekaa','greetings'),
('شكرا لك','Thank you','shokran lak','greetings'),
('كم هو','How much is it','kam hoa','getting around'),
(' بدي واحد قهوة','one coffee please',' bde wahd kahwa','getting around'),
(' هل تتكلم الانجليزية','Do you speak English','hal tat-kalam english?','getting around'),
(' فاتورة الحساب','bill','fatorat Al hesab','getting around'),
(' موقف سيارات','Bus Station','Mawqif Al Sayarat','getting around')
;






COMMIT;
