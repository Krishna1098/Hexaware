use LMSone

create table Manager( 
managerId int identity(100,1), 
mName varchar(120) not null 
); 
 
 
create table Employee( 
empid int identity(1,1), 
empName varchar(120) not null, 
email varchar(120) not null, 
leavesInHand int not null, 
leavestatus Bit not null default 'TRUE' 
 
 
);

create table Login(LoginId int primary key,password varchar(50))
insert into Login values(1,'krishna'),(100,'amlan') 
 
select *from Employee 
select *from Manager 
select *from Leave 
select *from Login

 
 
 
create table Leave( 
leaveid int Identity(1,1), 
empId int not null, 
managerId int not null, 
fromDate date, 
toDate date, 
leaveType varchar(120) not null, 
leaveDescription varchar(120) not null, 
NoOfDays As DATEDIFF(DAY,fromDate,toDate)- (datediff(wk, fromDate, toDate) * 2) -
       case when datepart(dw, fromDate) = 1 then 1 else 0 end +
      case when datepart(dw, toDate) = 1 then 1 else 0 end+1,
primary key(leaveid)
); 

drop table leave


 
 
alter table Leave add constraint fk_Employee_1 foreign key(empId) references Employee(empid); 
alter table Leave add constraint fk_manager_1 foreign key(managerId) references Manager(managerId); 
alter table Leave add id int not null unique; 
alter table Leave add status varchar(120) not null default 'pending'



alter table Employee add department varchar(100),designation varchar(100),location varchar(100)

update Employee set department='.net',designation='Software developer',location='chennai' where empName='vry'
update Employee set department='.net',designation='Software developer',location='chennai' where empName='shanmkhi'

update Employee set department='.net',designation='Software developer',location='chennai' where empName='chinmay'

update Employee set department='.net',designation='Software developer',location='chennai' where empName='akshat'


 
 
insert into Manager values('Amlan'),('Narmadha') 
 
insert into Employee values('krishna','kk@gmail.com',20,'TRUE') 
insert into Employee values('shanmkhi','SS@gmail.com',25,'False') 
insert into Employee values('chinmay','CT@gmail.com',10,'TRUE') 
 
 
insert into Leave(empId,managerId,fromDate,toDate,leaveType,leaveDescription) values(1,100,'2022-09-01','2022-09-06','casual','covid') 
insert into Leave(empId,managerId,fromDate,toDate,leaveType,leaveDescription) values(2,101,'2022-09-01','2022-09-07','casual','covid') 
insert into Leave(empId,managerId,fromDate,toDate,leaveType,leaveDescription) values(1,100,'2022-09-01','2022-09-10','earned','covid')


insert into Employee values('ManMohan','MM@gmail.com',20,1,'GTM cloud','Azure developer','Pune')
insert into Employee values('Krishna','kk@gmail.com',23,1,'GTM cloud','Azure developer','Pune')
insert into Employee values('Ram','ram@gmail.com',22,1,'.net','mvc core developer','Mumbai')
insert into Employee values('Raghu','raghu@gmail.com',24,1,'GTM cloud','Azure developer','chennai')
insert into Employee values('varshith','vrs@gmail.com',15,1,'GTM cloud','Deveops Trainee','Pune')
insert into Employee values('Manas','manas@gmail.com',10,1,'java','SpringBoot developer','Pune')
insert into Employee values('Madusudan','madhu@gmail.com',20,1,'GTM cloud','Azure developer','Mumbai')
insert into Employee values('Bindu','bindu@gmail.com',21,1,'GTM cloud','AWS developer','Pune')
insert into Employee values('Sanjana','sanjana@gmail.com',10,1,'.net','Software developer','Pune')
insert into Employee values('Vishnu','vs@gmail.com',10,1,'.net','Software developer','chennai')
insert into Employee values('S Sanjana','ssanjana@gmail.com',10,1,'.net','Software developer','Pune')
insert into Employee values('Sandhya','sandhya@gmail.com',10,1,'.net','Software developer','Pune')
