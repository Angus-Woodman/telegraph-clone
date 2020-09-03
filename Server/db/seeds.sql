DROP TABLE IF EXISTS posts;

CREATE TABLE posts (
    id serial PRIMARY KEY,
    name varchar(255) NOT NULL,
    title varchar(255) NOT NULL,
    content varchar(2000) NOT NULL
);

INSERT INTO posts (name, title, content)
VALUES
    ('woody', 'Test', 'There is something quite enchanting about a disco ball shot in black and white, it reverses its purpose; What was once a shining ball of reflection and light is now a captured in shades of grey.' ),
    ('kimi', 'Test 2', 'When traveling the world, I believe there is a moment that shocks everyone, a moment when you walk down to the water’s edge only to find that the sad oceans that are drowning in litter. This image looks to capture our think polluted waters and evoke a sense of the inner darkness. ' );
