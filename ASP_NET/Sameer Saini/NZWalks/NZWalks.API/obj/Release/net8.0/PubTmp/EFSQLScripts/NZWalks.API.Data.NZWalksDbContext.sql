IF OBJECT_ID(N'[__EFMigrationsHistory]') IS NULL
BEGIN
    CREATE TABLE [__EFMigrationsHistory] (
        [MigrationId] nvarchar(150) NOT NULL,
        [ProductVersion] nvarchar(32) NOT NULL,
        CONSTRAINT [PK___EFMigrationsHistory] PRIMARY KEY ([MigrationId])
    );
END;
GO

BEGIN TRANSACTION;
IF NOT EXISTS (
    SELECT * FROM [__EFMigrationsHistory]
    WHERE [MigrationId] = N'20250903014840_Initial Seed'
)
BEGIN
    CREATE TABLE [ActiveTables] (
        [Id] uniqueidentifier NOT NULL,
        [Name] nvarchar(max) NOT NULL,
        CONSTRAINT [PK_ActiveTables] PRIMARY KEY ([Id])
    );
END;

IF NOT EXISTS (
    SELECT * FROM [__EFMigrationsHistory]
    WHERE [MigrationId] = N'20250903014840_Initial Seed'
)
BEGIN
    CREATE TABLE [Difficulties] (
        [Id] uniqueidentifier NOT NULL,
        [Name] nvarchar(max) NULL,
        CONSTRAINT [PK_Difficulties] PRIMARY KEY ([Id])
    );
END;

IF NOT EXISTS (
    SELECT * FROM [__EFMigrationsHistory]
    WHERE [MigrationId] = N'20250903014840_Initial Seed'
)
BEGIN
    CREATE TABLE [Images] (
        [Id] uniqueidentifier NOT NULL,
        [FileName] nvarchar(max) NOT NULL,
        [FileDescription] nvarchar(max) NULL,
        [FileExtension] nvarchar(max) NOT NULL,
        [FileSizeInBytes] bigint NOT NULL,
        [FilePath] nvarchar(max) NOT NULL,
        CONSTRAINT [PK_Images] PRIMARY KEY ([Id])
    );
END;

IF NOT EXISTS (
    SELECT * FROM [__EFMigrationsHistory]
    WHERE [MigrationId] = N'20250903014840_Initial Seed'
)
BEGIN
    CREATE TABLE [Regions] (
        [Id] uniqueidentifier NOT NULL,
        [Code] nvarchar(max) NOT NULL,
        [Name] nvarchar(max) NOT NULL,
        [RegionImageUrl] nvarchar(max) NULL,
        CONSTRAINT [PK_Regions] PRIMARY KEY ([Id])
    );
END;

IF NOT EXISTS (
    SELECT * FROM [__EFMigrationsHistory]
    WHERE [MigrationId] = N'20250903014840_Initial Seed'
)
BEGIN
    CREATE TABLE [Walks] (
        [Id] uniqueidentifier NOT NULL,
        [Name] nvarchar(max) NOT NULL,
        [Description] nvarchar(max) NOT NULL,
        [LengthInKm] float NOT NULL,
        [WalkImageUrl] nvarchar(max) NULL,
        [DifficultyId] uniqueidentifier NOT NULL,
        [RegionId] uniqueidentifier NOT NULL,
        CONSTRAINT [PK_Walks] PRIMARY KEY ([Id]),
        CONSTRAINT [FK_Walks_Difficulties_DifficultyId] FOREIGN KEY ([DifficultyId]) REFERENCES [Difficulties] ([Id]) ON DELETE CASCADE,
        CONSTRAINT [FK_Walks_Regions_RegionId] FOREIGN KEY ([RegionId]) REFERENCES [Regions] ([Id]) ON DELETE CASCADE
    );
END;

IF NOT EXISTS (
    SELECT * FROM [__EFMigrationsHistory]
    WHERE [MigrationId] = N'20250903014840_Initial Seed'
)
BEGIN
    IF EXISTS (SELECT * FROM [sys].[identity_columns] WHERE [name] IN (N'Id', N'Name') AND [object_id] = OBJECT_ID(N'[ActiveTables]'))
        SET IDENTITY_INSERT [ActiveTables] ON;
    EXEC(N'INSERT INTO [ActiveTables] ([Id], [Name])
    VALUES (''0f4589c3-c386-44b5-9b76-518513670386'', N''Walks'')');
    IF EXISTS (SELECT * FROM [sys].[identity_columns] WHERE [name] IN (N'Id', N'Name') AND [object_id] = OBJECT_ID(N'[ActiveTables]'))
        SET IDENTITY_INSERT [ActiveTables] OFF;
END;

IF NOT EXISTS (
    SELECT * FROM [__EFMigrationsHistory]
    WHERE [MigrationId] = N'20250903014840_Initial Seed'
)
BEGIN
    IF EXISTS (SELECT * FROM [sys].[identity_columns] WHERE [name] IN (N'Id', N'Name') AND [object_id] = OBJECT_ID(N'[Difficulties]'))
        SET IDENTITY_INSERT [Difficulties] ON;
    EXEC(N'INSERT INTO [Difficulties] ([Id], [Name])
    VALUES (''54466f17-02af-48e7-8ed3-5a4a8bfacf6f'', N''Easy''),
    (''ea294873-7a8c-4c0f-bfa7-a2eb492cbf8c'', N''Medium''),
    (''f808ddcd-b5e5-4d80-b732-1ca523e48434'', N''Hard'')');
    IF EXISTS (SELECT * FROM [sys].[identity_columns] WHERE [name] IN (N'Id', N'Name') AND [object_id] = OBJECT_ID(N'[Difficulties]'))
        SET IDENTITY_INSERT [Difficulties] OFF;
END;

IF NOT EXISTS (
    SELECT * FROM [__EFMigrationsHistory]
    WHERE [MigrationId] = N'20250903014840_Initial Seed'
)
BEGIN
    IF EXISTS (SELECT * FROM [sys].[identity_columns] WHERE [name] IN (N'Id', N'Code', N'Name', N'RegionImageUrl') AND [object_id] = OBJECT_ID(N'[Regions]'))
        SET IDENTITY_INSERT [Regions] ON;
    EXEC(N'INSERT INTO [Regions] ([Id], [Code], [Name], [RegionImageUrl])
    VALUES (''14ceba71-4b51-4777-9b17-46602cf66153'', N''BOP'', N''Bay Of Plenty'', N''https://images.pexels.com/photos/5169056/pexels-photo-5169056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1''),
    (''6884f7d7-ad1f-4101-8df3-7a6fa7387d81'', N''NTL'', N''Northland'', N''https://images.pexels.com/photos/5169056/pexels-photo-5169056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1''),
    (''906cb139-415a-4bbb-a174-1a1faf9fb1f6'', N''NSN'', N''Nelson'', N''https://images.pexels.com/photos/5169056/pexels-photo-5169056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1''),
    (''cfa06ed2-bf65-4b65-93ed-c9d286ddb0de'', N''WGN'', N''Wellington'', N''https://images.pexels.com/photos/5169056/pexels-photo-5169056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1''),
    (''f077a22e-4248-4bf6-b564-c7cf4e250263'', N''STL'', N''Southland'', N''https://images.pexels.com/photos/5169056/pexels-photo-5169056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1''),
    (''f7248fc3-2585-4efb-8d1d-1c555f4087f6'', N''AKL'', N''Auckland'', N''https://images.pexels.com/photos/5169056/pexels-photo-5169056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'')');
    IF EXISTS (SELECT * FROM [sys].[identity_columns] WHERE [name] IN (N'Id', N'Code', N'Name', N'RegionImageUrl') AND [object_id] = OBJECT_ID(N'[Regions]'))
        SET IDENTITY_INSERT [Regions] OFF;
END;

IF NOT EXISTS (
    SELECT * FROM [__EFMigrationsHistory]
    WHERE [MigrationId] = N'20250903014840_Initial Seed'
)
BEGIN
    IF EXISTS (SELECT * FROM [sys].[identity_columns] WHERE [name] IN (N'Id', N'Description', N'DifficultyId', N'LengthInKm', N'Name', N'RegionId', N'WalkImageUrl') AND [object_id] = OBJECT_ID(N'[Walks]'))
        SET IDENTITY_INSERT [Walks] ON;
    EXEC(N'INSERT INTO [Walks] ([Id], [Description], [DifficultyId], [LengthInKm], [Name], [RegionId], [WalkImageUrl])
    VALUES (''04ab77f0-e145-4fbf-b641-989df24e5573'', N''This coastal walk takes you along the unique Boulder Bank, a long narrow bar of rocks that extends into Tasman Bay.'', ''f808ddcd-b5e5-4d80-b732-1ca523e48434'', 8.0E0, N''Boulder Bank Walkway'', ''906cb139-415a-4bbb-a174-1a1faf9fb1f6'', N''https://images.pexels.com/photos/808466/pexels-photo-808466.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1''),
    (''09601132-f92d-457c-b47e-da90e117b33c'', N''Explore the beautiful Botanic Garden of Wellington on this leisurely walk, with a wide variety of plants and flowers to admire.'', ''54466f17-02af-48e7-8ed3-5a4a8bfacf6f'', 2.0E0, N''Botanic Garden Walk'', ''cfa06ed2-bf65-4b65-93ed-c9d286ddb0de'', N''https://images.pexels.com/photos/4350631/pexels-photo-4350631.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1''),
    (''135a6e58-969f-47e1-8278-d7fbf2b3bd69'', N''Explore the lush and peaceful White Pine Bush on this easy walk, with a variety of native flora and fauna to discover.'', ''ea294873-7a8c-4c0f-bfa7-a2eb492cbf8c'', 2.0E0, N''The White Pine Bush Track'', ''14ceba71-4b51-4777-9b17-46602cf66153'', N''https://images.pexels.com/photos/808466/pexels-photo-808466.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1''),
    (''1cc5f2bc-ff4b-47c0-a475-1add56c6497b'', N''This walk takes you along the wild and rugged coastline of Makara Beach, with breathtaking views of the Tasman Sea.'', ''ea294873-7a8c-4c0f-bfa7-a2eb492cbf8c'', 8.1999999999999993E0, N''Makara Beach Walkway Test Import'', ''cfa06ed2-bf65-4b65-93ed-c9d286ddb0de'', N''https://images.pexels.com/photos/4350631/pexels-photo-4350631.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1''),
    (''1ea0b064-2d44-4324-91ee-6dd86c91b713'', N''Explore the picturesque Maitai Valley on this easy walk, with a tranquil river and native bush to enjoy.'', ''ea294873-7a8c-4c0f-bfa7-a2eb492cbf8c'', 5.0E0, N''Maitai Valley Walk'', ''906cb139-415a-4bbb-a174-1a1faf9fb1f6'', N''https://images.pexels.com/photos/808466/pexels-photo-808466.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1''),
    (''24ef9346-17e2-467e-bfc0-d062a9042bf1'', N''This walk takes you to the top of Bluff Hill, with panoramic views of Bluff and the surrounding coastline.'', ''ea294873-7a8c-4c0f-bfa7-a2eb492cbf8c'', 6.0E0, N''The Bluff Hill Walkway'', ''f077a22e-4248-4bf6-b564-c7cf4e250263'', N''https://images.pexels.com/photos/2226900/pexels-photo-2226900.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1''),
    (''2d9d6604-bef9-4b0a-805d-630240a29595'', N''This walk provides scenic vistas of countryside farms and meadows. A pleasant stroll for a family on the weekend'', ''ea294873-7a8c-4c0f-bfa7-a2eb492cbf8c'', 8.9000000000000004E0, N''The Papamoa Hills Regional Park Walk'', ''14ceba71-4b51-4777-9b17-46602cf66153'', N''https://images.pexels.com/photos/808466/pexels-photo-808466.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1''),
    (''30d654c7-89ac-4704-8333-5065b740150b'', N''This walk takes you to the summit of Mount Eden, the highest natural point in Auckland, with panoramic views of the city.'', ''54466f17-02af-48e7-8ed3-5a4a8bfacf6f'', 2.0E0, N''Mount Eden Summit Walk'', ''f7248fc3-2585-4efb-8d1d-1c555f4087f6'', N''https://images.pexels.com/photos/5342974/pexels-photo-5342974.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1''),
    (''327aa9f7-26f7-4ddb-8047-97464374bb63'', N''This scenic walk takes you around the top of Mount Victoria, offering stunning views of Wellington and its harbor.'', ''54466f17-02af-48e7-8ed3-5a4a8bfacf6f'', 3.5E0, N''Mount Victoria Loop'', ''cfa06ed2-bf65-4b65-93ed-c9d286ddb0de'', N''https://images.pexels.com/photos/4350631/pexels-photo-4350631.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1''),
    (''43132402-3d5e-467a-8cde-351c5c7c5dde'', N''This walk takes you to the geographical centre of New Zealand, with stunning views of Nelson and its surroundings.'', ''54466f17-02af-48e7-8ed3-5a4a8bfacf6f'', 1.0E0, N''Centre of New Zealand Walkway'', ''906cb139-415a-4bbb-a174-1a1faf9fb1f6'', N''https://images.pexels.com/photos/808466/pexels-photo-808466.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1''),
    (''570810dd-5792-4706-bf93-5fd4183feca3'', N''This coastal walk takes you along the beautiful beaches of Takapuna and Milford, with stunning views of Rangitoto Island.'', ''ea294873-7a8c-4c0f-bfa7-a2eb492cbf8c'', 5.0E0, N''Takapuna to Milford Coastal Walk'', ''f7248fc3-2585-4efb-8d1d-1c555f4087f6'', N''https://images.pexels.com/photos/5342974/pexels-photo-5342974.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1''),
    (''a7796ab6-5426-46af-b755-65d9b9e12978'', N''Experience the stunning scenery of the southern Fiordland and the coast on this challenging multi-day walk, with beautiful forest and alpine views.'', ''f808ddcd-b5e5-4d80-b732-1ca523e48434'', 60.0E0, N''The Hump Ridge Track'', ''f077a22e-4248-4bf6-b564-c7cf4e250263'', N''https://images.pexels.com/photos/2226900/pexels-photo-2226900.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1''),
    (''b5aa2791-3616-4db6-ab33-c54d03d17f62'', N''This walk takes you to the summit of Mount Maunganui, with stunning views of the ocean and surrounding landscape.'', ''ea294873-7a8c-4c0f-bfa7-a2eb492cbf8c'', 11.4E0, N''Mount Maunganui Summit Walk'', ''cfa06ed2-bf65-4b65-93ed-c9d286ddb0de'', N''https://images.pexels.com/photos/808466/pexels-photo-808466.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1''),
    (''f2b56c63-eb99-475a-881c-278f3da03e3d'', N''Not a walk for the faint of heart. The rugid train and steap hills provides a challenge for the most experienced hickers.'', ''f808ddcd-b5e5-4d80-b732-1ca523e48434'', 32.0E0, N''The Kepler Track'', ''f077a22e-4248-4bf6-b564-c7cf4e250263'', N''https://images.pexels.com/photos/2226900/pexels-photo-2226900.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1''),
    (''f7578324-f025-4c86-83a9-37a7f3d8fe81'', N''Explore the beautiful Cornwall Park on this leisurely walk, with a wide variety of trees, gardens, and animals to admire.'', ''ea294873-7a8c-4c0f-bfa7-a2eb492cbf8c'', 5.2000000000000002E0, N''Cornwall Park Walk'', ''14ceba71-4b51-4777-9b17-46602cf66153'', N''https://images.pexels.com/photos/5342974/pexels-photo-5342974.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'')');
    IF EXISTS (SELECT * FROM [sys].[identity_columns] WHERE [name] IN (N'Id', N'Description', N'DifficultyId', N'LengthInKm', N'Name', N'RegionId', N'WalkImageUrl') AND [object_id] = OBJECT_ID(N'[Walks]'))
        SET IDENTITY_INSERT [Walks] OFF;
END;

IF NOT EXISTS (
    SELECT * FROM [__EFMigrationsHistory]
    WHERE [MigrationId] = N'20250903014840_Initial Seed'
)
BEGIN
    CREATE INDEX [IX_Walks_DifficultyId] ON [Walks] ([DifficultyId]);
END;

IF NOT EXISTS (
    SELECT * FROM [__EFMigrationsHistory]
    WHERE [MigrationId] = N'20250903014840_Initial Seed'
)
BEGIN
    CREATE INDEX [IX_Walks_RegionId] ON [Walks] ([RegionId]);
END;

IF NOT EXISTS (
    SELECT * FROM [__EFMigrationsHistory]
    WHERE [MigrationId] = N'20250903014840_Initial Seed'
)
BEGIN
    INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
    VALUES (N'20250903014840_Initial Seed', N'9.0.8');
END;

COMMIT;
GO

