create database hackathondb;
use hackathondb;

create table members (
	memberid int primary key auto_increment,
    memberName varchar(200) not null
);

create table books (
	bookid int primary key,
    title varchar(100) not null,
    price double not null,
    genre varchar(50) not null,
    availability boolean not null default true
);

create table borrowed (
	bookId int not null,
    memberid int not null,
    issueDate date not null,
    dueDate date not null
);

alter table borrowed add constraint fk_book_1 foreign key(bookid) references books(bookid);
alter table borrowed add constraint fk_member_1 foreign key(memberid) references members(memberid);
alter table borrowed add column id int not null unique;

insert into members (membername) values
('Ramesh'), ('Suresh'), ('Mark'), ('Alan');

insert into books values
(1, 'Harry Potter and the Goblet of Fire', 350.00, 'Fantasy', true),
(2, 'This was a Man', 450.00, 'Fiction', true),
(3, 'And then there were none', 260.00, 'Thriller', true),
(4, 'To kill a mocking bird', 500.00, 'Thriller', true),
(5, 'Fever', 400.00, 'Thriller', true);


-- select * from books where availability = true;


-- update books set availability = false where bookid = 1;

-- select * from books order by bookId desc limit 1;

-- select b.bookId, b.title, b.genre, br.issueDate, br.dueDate
-- from books b, borrowed br
-- where b.bookId = br.bookId;

-- alter table members drop column member_id;
-- alter table members drop column member_name;

-- alter table members rename column memberid to member_id;
-- alter table members rename column membername to member_name

-- alter table borrowed drop column book_id;
-- alter table borrowed rename column bookId to book_id;

-- alter table books drop column book_id;