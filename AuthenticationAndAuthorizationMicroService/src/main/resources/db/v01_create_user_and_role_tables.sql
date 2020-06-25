create database healthcare;
use healthcare;
create table authentication_role (
    authentication_role_id BIGINT AUTO_INCREMENT,
    role_name varchar(255) default null,
    role_description varchar(255) default null,
    primary key (authentication_role_id)
);

create table authentication_user (
    authentication_user_id BIGINT not null AUTO_INCREMENT,
    user_name varchar(255) unique not null,
    email varchar(255) not null,
    password varchar(255) not null,
    primary key (authentication_user_id)
);

create table authentication_user_role (
    authentication_user_id BIGINT not null,
    authentication_role_id BIGINT not null,
    primary key (authentication_user_id, authentication_role_id),
    KEY FK_user_role (authentication_role_id),
    constraint FK_authentication_user foreign key (authentication_user_id) references authentication_user (authentication_user_id),
    constraint FK_authentication_user_role foreign key (authentication_role_id) references authentication_role (authentication_role_id)
)