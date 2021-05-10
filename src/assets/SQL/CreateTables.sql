CREATE TABLE IF NOT EXISTS Events(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    [date] TEXT,
    [description] TEXT,
    [start] TEXT,
    [stop] TEXT,
    [location] TEXT,
    recurring TEXT,
    ringer_disable INTEGER

);
