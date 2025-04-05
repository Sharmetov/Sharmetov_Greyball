-- 1. Organizations
CREATE TABLE organization (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    country VARCHAR(100),
    found_year DATE,
    website VARCHAR(255)
);

-- 2. Team
CREATE TABLE team (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    city VARCHAR(100),
    country VARCHAR(100)
);

-- 3. Fighters
CREATE TABLE fighter (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    nickname VARCHAR(255),
    dob DATE,
    nationality VARCHAR(100),
    weight_class VARCHAR(50),
    team_id INT REFERENCES team(id),
    organization_id INT REFERENCES organization(id)
);

-- 4. Staff
CREATE TABLE staff (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    role VARCHAR(100),
    organization_id INT REFERENCES organization(id)
);

-- 5. Events
CREATE TABLE event (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    event_date DATE NOT NULL,
    location VARCHAR(255),
    venue VARCHAR(255),
    organization_id INT REFERENCES organization(id)
);

-- 6. Fights
CREATE TABLE fight (
    id SERIAL PRIMARY KEY,
    event_id INT REFERENCES event(id) ON DELETE CASCADE,
    fighter1_id INT REFERENCES fighter(id),
    fighter2_id INT REFERENCES fighter(id),
    winner_id INT REFERENCES fighter(id),
    method VARCHAR(100),
    round INT,
    time VARCHAR(10) -- time the whole fight lasted
);

-- 7. Pre-fight Stats
CREATE TABLE pre_fight_stats (
    id SERIAL PRIMARY KEY,
    fight_id INT REFERENCES fight(id) ON DELETE CASCADE,
    fighter_id INT REFERENCES fighter(id),
    height_cm INT,
    weight_kg INT,
    reach_cm INT,
    stance VARCHAR(50),
    record_wins INT,
    record_losses INT,
    record_draws INT
);

-- 8. Fight Bonuses
CREATE TABLE fight_bonuses (
    id SERIAL PRIMARY KEY,
    fight_id INT REFERENCES fight(id) ON DELETE CASCADE,
    bonus_type VARCHAR(100), 
    amount DECIMAL(10,2),
    awarded_to INT REFERENCES fighter(id)
);

-- 9. Betting Odds
CREATE TABLE betting_odds (
    id SERIAL PRIMARY KEY,
    fight_id INT REFERENCES fight(id) ON DELETE CASCADE,
    fighter_id INT REFERENCES fighter(id),
    decimal_odds DECIMAL(6,3),
    moneyline INT,
    implied_probability FLOAT
);

-- 10. Rankings
CREATE TABLE rankings (
    id SERIAL PRIMARY KEY,
    organization_id INT REFERENCES organization(id),
    fighter_id INT REFERENCES fighter(id),
    weight_class VARCHAR(50),
    rank INT,
    points INT,
    is_champion BOOLEAN DEFAULT FALSE,
    ranking_type VARCHAR(100) -- e.g., 'pound-for-pound', 'division'
);

-- 11. News Articles
CREATE TABLE news_article (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content TEXT,
    published_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    author VARCHAR(255),
    event_id INT REFERENCES event(id),
    fighter_id INT REFERENCES fighter(id),
    organization_id INT REFERENCES organization(id)
);
