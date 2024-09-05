# task-management

CREATE TABLE project (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    color VARCHAR(255),
    status VARCHAR(255)
);

CREATE TABLE teammembers (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    role VARCHAR(255)
);

CREATE TABLE project_teammembers (
    project_id VARCHAR(255) REFERENCES project(id) ON DELETE CASCADE,
    teammember_id VARCHAR(255) REFERENCES teammembers(id) ON DELETE CASCADE,
    PRIMARY KEY (project_id, teammember_id)
);

