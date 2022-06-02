puts "🏕 Seeding owners..."

# Owner seeds
owner1 = Owner.create(    
    name: "Leonard Cohen",
    number: "206-909-2323",
    email: "lcohen@email.com",
    notes: "This customer is pretty cool. Lots of good music. Pays on time."
)
owner2 = Owner.create(
    name: "Dr. Fauci",
    number: "949-303-4141",
    email: "infectious@disease.com",
    notes: "Fauci is never home. Pays online. Code for interior work is: 30344"
)
owner3 = Owner.create(
    name: "William Gate",
    number: "425-400-4444",
    email: "william@soft.com",
    notes: "Billing will be handled through assistant. Never met him."
)
owner4 = Owner.create(
    name: "Neo",
    number: "222-222-2222",
    email: "neo@thematrix.com",
    notes: "Weird guy. Seems to glitch through time/space. Avoid mirrors in his house."
)
owner5 = Owner.create(
    name: "Buzz Lightyear",
    number: "454-323-4343",
    email: "toinfinity@beyond.com",
    notes: "Weird guy. Talks constantly. Will try to convince you he is a real space man and not a toy."
)

puts "🏕 Seeding Houses..."

# House seeds

house1 = House.create(
    address: "444 E Fourth Dr, Seattle Wa 98134",
    sq_footage: 1500,
    floor_count: 2,
    window_count: 42,
    roof_pitch: "9/12",
    notes: "This house is in poor condition. Windows have blowouts and roof is worn through in many sections."
)
house2 = House.create(
    address: "12 Highland Dr, Bellevue Wa 45323",
    sq_footage: 5000,
    floor_count: 3,
    window_count: 120,
    roof_pitch: "1/12",
    notes: "Roof is mellow to work on. Schedule extra time for the high interior windows."
)
house3 = House.create(
    address: "450 Yerba Mate St, Portland Or 12343",
    sq_footage: 900,
    floor_count: 1,
    window_count: 45,
    roof_pitch: "6/12",
    notes: "Quick house to complete. Usually exterior only windows and roof cleaning."
)
house4 = House.create(
    address: "5354 Data Ln, Eugene Or 32412",
    sq_footage: 2500,
    floor_count: 2,
    window_count: 98,
    roof_pitch: "8/12",
    notes: "Fun house to work on."
)
house5 = House.create(
    address: "500 E 500 St, Seattle Wa 23423",
    sq_footage: 6600,
    floor_count: 5,
    window_count: 1,
    roof_pitch: "12/12",
    notes: "Weird house. Only has one window at the top floor. Looks like a pillar. Roof is inaccessible."
)
house6 = House.create(
    address: '400 E 400 St, Seattle Wa 23423',
    sq_footage: 200,
    floor_count: 1,
    window_count: 13,
    roof_pitch: "1/12",
    notes: "Very tiny house. Can be completed in 15 minutes."
)
house7 = House.create(
    address: 'Example St, Seattle Wa 00000',
    sq_footage: 40000,
    floor_count: 1,
    window_count: 12000,
    roof_pitch: "3/12",
    notes: "This house is the size of a mall. Plan on a full week of work to finish just the windows. Roof cleaning will take another week and need a truck rental."
)
house8 = House.create(
    address: 'Bored E 400 St, Bellevue Wa 90009',
    sq_footage: 1200,
    floor_count: 2,
    window_count: 70,
    roof_pitch: "1/12",
    notes: "It's a house, thats for sure."
)
house9 = House.create(
    address: '666 Underground Ave, Lucifer Oh 66669',
    sq_footage: 100000,
    floor_count: 6,
    window_count: 0,
    roof_pitch: "0/12",
    notes: "Wear shorts, it's hot here. No windows. Lots of ground cleanup. Careful of snakes."
)
house10 = House.create(
    address: 'The Dark Side, Crater Moon 1000',
    sq_footage: 10,
    floor_count: 1,
    window_count: 1,
    roof_pitch: "12/12",
    notes: "Will need a space ship to get here. Be careful not to slip into a different dimension. Size and window count are subject to change."
)

puts "🏕 Seeding house owners..."

# HouseOwner seeds

HouseOwner.create(owner_id: owner1.id, house_id: house1.id, user_id: 1)
HouseOwner.create(owner_id: owner1.id, house_id: house2.id, user_id: 1)
HouseOwner.create(owner_id: owner2.id, house_id: house3.id, user_id: 1)
HouseOwner.create(owner_id: owner3.id, house_id: house4.id, user_id: 1)
HouseOwner.create(owner_id: owner2.id, house_id: house4.id, user_id: 1)
HouseOwner.create(owner_id: owner4.id, house_id: house5.id, user_id: 2)
HouseOwner.create(owner_id: owner5.id, house_id: house6.id, user_id: 2)
HouseOwner.create(owner_id: owner5.id, house_id: house7.id, user_id: 2)
HouseOwner.create(owner_id: owner1.id, house_id: house8.id, user_id: 2)
HouseOwner.create(owner_id: owner2.id, house_id: house9.id, user_id: 2)
HouseOwner.create(owner_id: owner1.id, house_id: house10.id, user_id: 2)

puts "✅ Done seeding!"

