create database tournament;
use tournament;

create table groups (
    name varchar(255) not null primary key
);



create table teams (
    name varchar(255) not null primary key,
    details varchar(255),
    image varchar(255),
    points int unsigned,
    `group` varchar(255),
    foreign key (`group`) references groups(name)
);

create table matches(
    id int unsigned not null auto_increment,
    teamA varchar(255) not null,
    teamB varchar(255) not null,
    pointsSet1A tinyint unsigned not null,
    pointsSet1B tinyint unsigned not null,
    pointsSet2A tinyint unsigned not null,
    pointsSet2B tinyint unsigned not null,
    pointsSet3A tinyint unsigned not null,
    pointsSet3B tinyint unsigned not null,
    pointsFairPlayA tinyint unsigned not null,
    pointsFairPlayB tinyint unsigned not null,
    datetime datetime not null default now(),
    primary key(id),
    foreign key(teamA) references teams(name),
    foreign key(teamB) references teams(name)
);