export const units = [
  {
    id: 1,
    name: 'Major Industrial Complex',
    cost: '30',
    attack: '-',
    defense: 'Self-defense antiaircraft ability',
    move: '-',
    characteristics: `Factories: Industrial complexes are the point of entry for all purchased air, land, and sea units. There are two types of
    industrial complexes, major and minor. Major industrial complexes have a “10” printed on them. Each of these major
    industrial complexes can produce up to 10 combat (land, air, or sea) units per turn. Minor industrial complexes can produce
    up to 3 combat units per turn. They have a “3” printed on them. A minor industrial complex can be upgraded to a major one at
    a cost of 20 IPCs. The industrial complex to be upgraded must be located on an originally controlled (not captured) territory
    that you have controlled since the beginning of your turn and that has an IPC value of 3 or higher.
    You can’t place your new units at an industrial complex owned by a friendly power. Even if you liberate a territory with an
    industrial complex in it, you can’t use the complex; the original controller can use it on his or her next turn. If you capture it,
    you can use it on your next turn. You can use an industrial complex that you controlled at the beginning of your turn.
    Subject to Damage: For each damage marker that is under an industrial complex (see above), that complex can mobilize 1
    less unit. Industrial complexes can have at least as many damage markers as they have production ability. In such case, no
    new units can enter the game through that complex until it’s repaired. A damaged minor complex may not be upgraded, so
    any damage on the industrial complex must be repaired at the same time that the upgrade is purchased.`,
    img: '/images/major_complex.JPG',
    clicked: false
  },
  {   
    id: 2,
    name: 'Minor Industrial Complex',
    cost: '12',
    attack: '-',
    defense: 'Self-defense antiaircraft ability',
    move: '-',
    characteristics: `Factories: Industrial complexes are the point of entry for all purchased air, land, and sea units. There are two types of
    industrial complexes, major and minor. Major industrial complexes have a “10” printed on them. Each of these major
    industrial complexes can produce up to 10 combat (land, air, or sea) units per turn. Minor industrial complexes can produce
    up to 3 combat units per turn. They have a “3” printed on them. A minor industrial complex can be upgraded to a major one at
    a cost of 20 IPCs. The industrial complex to be upgraded must be located on an originally controlled (not captured) territory
    that you have controlled since the beginning of your turn and that has an IPC value of 3 or higher.
    You can’t place your new units at an industrial complex owned by a friendly power. Even if you liberate a territory with an
    industrial complex in it, you can’t use the complex; the original controller can use it on his or her next turn. If you capture it,
    you can use it on your next turn. You can use an industrial complex that you controlled at the beginning of your turn.
    Subject to Damage: For each damage marker that is under an industrial complex (see above), that complex can mobilize 1
    less unit. Industrial complexes can have at least as many damage markers as they have production ability. In such case, no
    new units can enter the game through that complex until it’s repaired. A damaged minor complex may not be upgraded, so
    any damage on the industrial complex must be repaired at the same time that the upgrade is purchased.`,
    img: '/images/minor_complex.JPG',
    clicked: false
  },
  {   
    id: 3,
    name: 'Air Base',
    cost: '15',
    attack: '-',
    defense: 'Self-defense antiaircraft ability',
    move: '-',
    characteristics: `Increased Air Unit Range: When taking off from a friendly territory that has an operative air base, air units gain 1 additional
    point of movement range. At that point fighters and tactical bombers can move 5 spaces, and strategic bombers can move 7
    spaces. Note: Air units on carriers in a sea zone adjacent to a territory containing an air base don’t benefit from this additional
    movement range.
    Scramble: You can move air units defending on an island or coastal territory that has an operative air base to the sea zones
    adjacent to that territory to participate in the defense of those sea zones. See “Scramble,” page 15, for more details.
    Subject to Damage: An air base is considered to be inoperative if it has 3 or more damage points. It can’t increase air unit
    range or allow air units to scramble.`,
    img: '/images/air_base.JPG',
    clicked: false
  },
  {   
    id: 4,
    name: 'Naval Base',
    cost: '15',
    attack: '-',
    defense: 'Self-defense antiaircraft ability',
    move: '-',
    characteristics: `Services Sea Zones: All sea zones that border a territory containing an operative naval base are considered to be serviced by
    that naval base. Sea zones serviced by a naval base confer the benefits of that base onto all friendly sea units in those zones.
    Increased Sea Unit Range: All ships beginning their movement from a sea zone serviced by an operative friendly naval base
    gain 1 additional point of movement range. Sea units in this position can move 3 spaces instead of 2.
    26
    Repairs: Capital ships (aircraft carriers and battleships) can be repaired by moving those units to a sea zone serviced by
    an operative controlled or friendly naval base. Damaged ships are repaired at no IPC cost during the Purchase and Repair
    Units phase of their owning player’s turn if they are in a sea zone serviced by an operative friendly naval base, including one
    repaired in the current turn.
    Subject to Damage: A naval base is considered to be inoperative if it has 3 or more damage points. It can’t service sea
    zones, increase sea unit range, or conduct repairs.`,
    img: '/images/naval_base.JPG',
    clicked: false
  },
  {   
    id: 5,
    name: 'Infantry',
    cost: '3',
    attack: '1 (2 when supported by artillery)',
    defense: '2',
    move: '1',
    characteristics: `Supported by Artillery: When an infantry attacks along with an artillery, the infantry’s attack increases to 2. Each infantry
    must be matched one-for-one with a supporting artillery unit. If your infantry outnumber your artillery, the excess infantry
    units still have an attack of 1. For example, if you attack with 2 artillery and 5 infantry, 2 of your infantry have an attack of 2
    and the rest have an attack of 1. Infantry are not supported by artillery on defense.`,
    img: '/images/infantry.JPG',
    clicked: false
  },
  {   
    id: 6,
    name: 'Artillery',
    cost: '4',
    attack: '2',
    defense: '2',
    move: '1',
    characteristics: `Supports Infantry and Mechanized Infantry: When an infantry or mechanized infantry attacks along with an artillery, its
    attack increases to 2. Each infantry and/or mechanized infantry must be matched one-for-one with a supporting artillery unit.
    Artillery doesn’t support infantry or mechanized infantry on defense.`,
    img: '/images/artillery.JPG',
    clicked: false
  },
  {   
    id: 7,
    name: 'Mechanized Infantry',
    cost: '4',
    attack: '1 (2 when supported by artillery)',
    defense: '2',
    move: '2',
    characteristics: `Blitz: A mechanized infantry unit must normally stop when it enters an enemy controlled territory. However, when paired
    one-for-one with a tank, it can make a blitz movement (see “Tanks,” page 27) along with that tank. The movement of both
    units must start and end in the same territories.
    Supported by Artillery: When mechanized infantry attacks along with an artillery, the mechanized infantry attack increases
    to 2. Each mechanized infantry must be matched one-for-one with a supporting artillery unit. If your mechanized infantry
    outnumber your artillery, the excess mechanized infantry units still have an attack of 1. For example, if you attack with
    2 artillery and 5 mechanized infantry, 2 of your mechanized infantry have an attack of 2 and the rest have an attack of 1.
    Mechanized infantry are not supported by artillery on defense.`,
    img: '/images/mechanized.JPG',
    clicked: false
  },
  {   
    id: 8,
    name: 'Tanks',
    cost: '6',
    attack: '3)',
    defense: '3',
    move: '2',
    characteristics: `Blitz: Tanks can “blitz” by moving through an unoccupied hostile territory as the first part of a 2-space move that can end in a
    friendly or hostile territory. This complete move must occur during the Combat Move phase. By blitzing, the tank establishes
    control of the first territory before it moves to the next. The second territory can be friendly or hostile, or even the space the
    tank came from. A tank may not blitz through a territory that contains an enemy unit, even if the unit is an AAA (antiaircraft
    artillery), industrial complex, air base, or naval base.
    Combined Arms: Tanks can be combined with tactical bombers or mechanized infantry.
    • Combining a tank and a tactical bomber increases the tactical bomber’s attack number from 3 to 4 (see “Tactical Bombers,”
    page 29).
    • Each mechanized infantry unit combined with a tank can blitz along with it (see “Mechanized Infantry,” page 26).`,
    img: '/images/tank.JPG',
    clicked: false
  },
  {   
    id: 9,
    name: 'AAA (Antiaircraft Artillery)',
    cost: '5',
    attack: '-',
    defense: '-',
    move: '1 (noncombat only)',
    characteristics: `Limited Move: Normally this unit can be moved only during the Noncombat Move phase. An AAA unit cannot move during
    the Combat Move phase (other than being carried on a transport if the unit was loaded on a prior turn).
    No Combat Value: Even though an AAA unit can defend, either alone or with other units, it has a combat value of 0. This
    means that an AAA unit cannot fire in the defending units fire step. It can, however, be taken as a casualty. If a territory
    containing AAA units and no combat units is attacked, the AAA units are automatically destroyed. AAA units may never
    attack.
    Air Defense: An AAA unit can fire at an air unit only when that unit attacks land and/or air units in the territory containing
    that AAA unit. AAA units fire only once, before the first round of combat. Each AAA unit in the territory may fire up to 3
    shots, but each attacking air unit may only be fired upon once. In other words, the total number of air defense dice rolled is 3
    times the number of AAA units, or the number of attacking air units, whichever is the lesser. For example, 5 fighters attacking
    a territory containing 2 AAA units would have 5 shots fired against them, while those same 5 fighters would have only 3 shots
    fired against them if there were only 1 defending AAA unit.
    Once the number of air defense dice is determined, the dice are rolled. For each “1” rolled, the attacker must choose 1 air unit
    as a casualty. These casualties are removed immediately and will not participate in the remainder of the battle. This AAA fire
    occurs immediately before normal combat occurs in the territory containing the AAA unit. AAA units do not defend facilities
    against strategic or tactical bombing. Facilities have their own built-in air defenses (see “Industrial Complexes and Bases
    (Facilities),” page 24).`,
    img: '/images/aaa.JPG',
    clicked: false
  },
  {   
    id: 10,
    name: 'Fighters',
    cost: '10',
    attack: '3',
    defense: '4',
    move: '4',
    characteristics: `Carrier Operations: Fighters can land on and take off from a carrier. (See “Aircraft Carriers,” page 30.)
    Fighter Escorts and Interceptors: Fighters can participate in strategic and tactical bombing raids as escorts or interceptors. Any
    or all defending fighters based in a territory that is about to be bombed can participate in the defense of the industrial complex
    and/or bases that are targeted. Escort fighters (those accompanying the bombers) can escort and protect the bombers, and they
    can originate from any territory or sea zone, range permitting. (See “Strategic and Tactical Bombing Raids,” page 16.)`,
    img: '/images/fighter.JPG',
    clicked: false
  },
  {   
    id: 11,
    name: 'Tactical Bombers',
    cost: '11',
    attack: '3',
    defense: '3',
    move: '4',
    characteristics: `Tactical bombers represent dive bombers in land operations and torpedo or dive bombers in naval operations.
    Carrier Operations: Tactical bombers can land on and take off from a carrier. (See “Aircraft Carriers,” page 30.)
    Air Superiority: Fighters can be combined with tactical bombers. A matched pair of a fighter and a tactical bomber increases
    the tactical bomber’s attack value from 3 to 4.
    Combined Arms: Tanks can be combined with tactical bombers. A matched pair of a tank and a tactical bomber increases the
    tactical bomber’s attack value from 3 to 4.
    Tactical Bombing Raid: A tactical bomber can either participate in normal combat or make a direct attack against an enemy
    air or naval base. Such an attack on a facility is a tactical bombing raid (see “Strategic and Tactical Bombing Raids,” page
    16).`,
    img: '/images/tac_bomber.JPG',
    clicked: false
  },
  {   
    id: 12,
    name: 'Strategic Bombers',
    cost: '12',
    attack: '4',
    defense: '1',
    move: '6',
    characteristics: `Strategic Bombing Raid: A strategic bomber can either participate in normal combat, or make a direct attack against an enemy
    industrial complex, air base, or naval base. Such an attack on a facility is a strategic bombing raid (see “Strategic and Tactical
    Bombing Raids,” page 16).`,
    img: '/images/strat_bomber.JPG',
    clicked: false
  },
  {   
    id: 13,
    name: 'Battleships',
    cost: '20',
    attack: '4',
    defense: '4',
    move: '2',
    characteristics: `Capital Ship: Battleships require 2 hits to destroy. If an undamaged battleship is hit once, even by a submarine’s Surprise Strike,
    turn it on its side to mark its damaged status. Don’t remove an attacking battleship from play or move a defending battleship behind
    the casualty strip unless it takes a second hit. If a battleship survives a combat having taken 1 hit, it can be repaired by a visit to an
    operative friendly naval base (see “Naval Bases,” page 25).
    Offshore Bombardment: Your battleships (along with your cruisers) can conduct offshore bombardment during an
    amphibious assault (see “Amphibious Assaults—Step 2. Battleship and Cruiser Bombardment,” page 17).`,
    img: '/images/battleship.JPG',
    clicked: false
  },
  {   
    id: 14,
    name: 'Aircraft Carriers',
    cost: '16',
    attack: '0',
    defense: '2',
    move: '2',
    characteristics: `Capital Ship: Aircraft carriers require 2 hits to destroy. If an undamaged carrier is hit once, even by a submarine’s Surprise Strike,
    turn it on its side to mark its damaged status. Don’t remove an attacking carrier from play or move a defending carrier behind
    the casualty strip unless it takes a second hit. If a carrier survives a combat having taken 1 hit, it can be repaired by a visit to an
    operative friendly naval base (see “Naval Bases,” page 25).
    Carry Aircraft: An aircraft carrier can carry up to 2 air units, including those belonging to friendly powers (provided both powers
    are at war). These air units may be of two types: fighters and tactical bombers. Air units on a friendly power’s carrier are always
    treated as cargo on the carrier owner’s turn.
    Carrier-based aircraft move independently of the carrier on their own turn. They move along with the carrier on its turn if they
    belong to different powers. On the air units’ turn, they launch before the carrier moves, even if they are not leaving the sea zone
    themselves. It’s possible for the carrier to make a combat movement while leaving its aircraft behind to make a noncombat
    movement later.
    During noncombat movement, fighters and tactical bombers may use their remaining movement to move into sea zones with
    carriers in order to land on them. Carriers may also move, providing that they didn’t move during combat movement or participate
    in combat. In fact, a carrier must move if it’s able, or remain in place, in order to provide a landing space for an air unit that would
    not otherwise have one. Landing doesn’t actually occur until the Mobilize New Units phase, so air units and carriers must end their
    movement in the same sea zone. Any air units that are not in an eligible landing space by the end of the Noncombat Move phase are
    destroyed (note that this can include a sea zone in which a new carrier will be placed during the Mobilize New Units phase).
    A damaged carrier can’t conduct air operations, which means that no air units may take off from or land on it. Any guest air units
    31
    that were on board the carrier as cargo at the time when it was damaged are trapped onboard and can’t leave, attack, or defend until
    the carrier is repaired. Any air units that planned to land on the carrier must find another landing space by the end of noncombat
    movement or be destroyed. (See “Phase 4: Noncombat Move,” page 21.)
    Air Defense: Whenever an undamaged carrier is attacked, its aircraft (even those belonging to friendly powers) are considered
    to be defending in the air and fight normally, even if only submarines are attacking and the air units cannot hit them because
    there is no defending destroyer.
    Air units based on a defending carrier must land on the same carrier if possible after the battle. If that carrier is destroyed
    or damaged in combat, they must try to land on a different friendly carrier in the same sea zone, move 1 space to a friendly
    carrier or territory, or be destroyed. This movement occurs during the Noncombat Move phase, before the acting player
    makes any noncombat movements.
    When a damaged carrier is attacked, any air units on board are considered cargo and can’t defend. If the carrier is lost, they
    are lost along with it.`,
    img: '/images/carrier.JPG',
    clicked: false
  },
  {   
    id: 15,
    name: 'Cruisers',
    cost: '12',
    attack: '3',
    defense: '3',
    move: '2',
    characteristics: `Offshore Bombardment: Your cruisers (along with your battleships) can conduct offshore bombardment during an amphibious
    assault (see “Amphibious Assaults—Step 2. Battleship and Cruiser Bombardment,” page 17).`,
    img: '/images/cruiser.JPG',
    clicked: false
  },
  {   
    id: 16,
    name: 'Destroyers',
    cost: '8',
    attack: '2',
    defense: '2',
    move: '2',
    characteristics: `Anti-Sub Vessel: Destroyers are specially equipped for anti-submarine warfare. As a result, they have the capability of
    cancelling many of the unit characteristics of enemy submarines.
    A destroyer cancels the Treat Hostile Sea Zones as Friendly unit characteristic of any enemy submarine that moves into the
    sea zone with it. This means that the submarine must immediately end its movement, whether combat or noncombat, upon
    entering the sea zone. If a submarine ends its combat movement in a sea zone with an enemy destroyer, combat will result.
    If a destroyer is in a battle, it cancels the following unit characteristics of all enemy submarines in that battle: Surprise Strike,
    Submersible, and Can’t Be Hit by Air Units. Note that destroyers belonging to a power friendly to the attacker that happen to be in the
    same sea zone as the battle don’t actually participate in it, therefore they don’t cancel any of these abilities of defending submarines.`,
    img: '/images/destroyer.JPG',
    clicked: false
  },
  {   
    id: 17,
    name: 'Submarines',
    cost: '6',
    attack: '2',
    defense: '1',
    move: '2',
    characteristics: `Submarines have several unit characteristics. Most of them are cancelled by the presence of an enemy destroyer.
    Surprise Strike: Both attacking and defending submarines can make a Surprise Strike by firing before any other units fire in
    a sea battle. As detailed in step 2 of the General Combat sequence (page 18), submarines make their rolls before any other
    units, unless an enemy destroyer is present. If neither side was eligible for a Surprise Strike, there is no step 2. Players move
    directly to step 3 of the General Combat sequence.
    32
    Submersible: A submarine has the option of submerging. It can do this anytime it would otherwise make a Surprise Strike.
    The decision is made before any dice are rolled by either side (the attacker decides first) and takes effect immediately. When a
    submarine submerges, it’s immediately removed from the battle strip and placed back on the map. As a result, it can no longer
    fire or take hits in that combat. However, a submarine can’t submerge if an enemy destroyer is present in the battle.
    On Station: Each submarine in a convoy sea zone is considered to be “On Station.” As such, it’s spending more time in the
    sea zone and is more focused on locating and destroying convoys. While “On Station,” each submarine rolls 2 dice when
    disrupting a convoy (see “Conduct Convoy Disruptions,” page 22).
    Treat Hostile Sea Zones as Friendly: A submarine can move through a sea zone that contains enemy units, either in combat or
    noncombat movement. However, if a submarine enters a sea zone containing an enemy destroyer, it must end its movement
    there. If it ends its combat move in a hostile sea zone, combat will occur.
    Doesn’t Block Enemy Movement: The “stealth” ability of submarines also allows enemy ships to ignore their presence.
    Any sea zone that contains only enemy submarines doesn’t stop the movement of a sea unit. Sea units ending their combat
    movement in a sea zone containing only enemy submarines may choose to attack them or not. Sea units can also end their
    noncombat movement in a sea zone containing only enemy submarines.
    Can’t Hit Air Units: When attacking or defending, submarines can’t hit air units.
    Can’t Be Hit by Air Units: When attacking or defending, hits scored by air units can’t be assigned to submarines unless there
    is a destroyer that is friendly to the air units in the battle.`,
    img: '/images/sub.JPG',
    clicked: false
  },
  {   
    id: 18,
    name: 'Transports',
    cost: '7',
    attack: '0',
    defense: '0',
    move: '2',
    characteristics: `No Combat Value: Even though a transport can attack or defend, either alone or with other units, it has a combat value of
    0. This means that a transport can’t fire in the attacking units’ or the defending units’ fire steps. Transports may not attack
    without being accompanied by at least 1 unit with an attack value, unless they are conducting an amphibious assault from a
    friendly sea zone that is free of enemy submarines.
    Doesn’t Block Enemy Movement: Any sea zone that contains only enemy transports doesn’t stop the movement of a sea
    unit. Air or sea units with an attack value ending their combat movement in a sea zone containing only enemy transports
    automatically destroy those transports (unless they are ignoring them to support an amphibious assault instead). This counts
    as a sea combat for those sea units. Sea units can also end their noncombat movement in a sea zone containing only enemy
    transports, in which case there would be no combat.
    Chosen Last: Transports can be chosen as casualties only if there are no other eligible units. Normally this will occur when
    only transports are left, but it can also occur under other circumstances. For example, air units attacking transports and
    submarines will hit the transports because they can’t hit the submarines without a friendly destroyer present.
    Carry Land Units: A transport can carry land units belonging to you or to friendly powers (provided both powers are at war).
    Its capacity is any 1 land unit, plus 1 additional infantry. Thus, a full transport may carry 2 infantry or 1 tank, mechanized
    infantry, artillery, or AAA unit plus 1 infantry. A transport can’t carry an industrial complex, an air base, or a naval base. Land
    units on a transport are cargo; they can’t attack or defend while at sea and are destroyed if their transport is destroyed.
    Loading and Offloading: A transport can load cargo in friendly sea zones before, during, and after it moves. A transport can pick
    up cargo, move 1 sea zone, pick up more cargo, move 1 more sea zone, and offload the cargo at the end of its movement. It can also
    remain at sea with the cargo still aboard (but only if the cargo remaining aboard was loaded in a previous turn, was loaded this turn
    in the Noncombat Move phase, or was loaded this turn for an amphibious assault from which the transport retreated).
    Loading onto and/or offloading from a transport counts as a land unit’s entire move; it can’t move before loading or after
    offloading. Place the land units alongside the transport in the sea zone. If the transport moves in the Noncombat Move phase,
    any number of units aboard can offload into a single friendly territory.
    Land units belonging to friendly powers must load on their controller’s turn, be carried on your turn, and offload on a later
    turn of their controller. This is true even if the transport remains in the same sea zone.
    33
    Whenever a transport offloads, it can’t move again that turn. If a transport retreats, it can’t offload that turn. A transport can’t
    offload in two territories during a single turn, nor can it offload cargo onto another transport. A transport can’t load or offload
    while in a hostile sea zone. Remember that hostile sea zones contain enemy units, but that for purposes of determining the
    status of a sea zone, submarines and transports are ignored.
    A transport can load and offload units without moving from the friendly sea zone it’s in (this is known as “bridging”). Each such transport
    is still limited to its cargo capacity. It can offload in only one territory, and once it offloads, it can’t move, load, or offload again that turn.
    Amphibious Assaults: A transport can take part in an amphibious assault step of the Conduct Combat phase. That is the only
    time a transport can offload into a hostile territory.
    During an amphibious assault, a transport must either offload al units that were loaded during the Combat Move phase or retreat during
    sea combat. It can also offload any number of units owned by the transport’s power that were already on board at the start of the turn.`,
    img: '/images/transport.JPG',
    clicked: false
  },
];
