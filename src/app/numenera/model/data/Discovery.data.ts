import { ActionType } from '../Ability.model';
import { Descriptor } from '../Descriptor.model';
import { Focus } from '../Focus.model';
import { SourceBook } from '../Origin.model';
import { Attribute, CharacterType } from '../Type.model';

const TITLE = 'Discovery';

const FOCI: Array<Focus> = [
  {
    name: 'Bears A Halo Of Fire',
    origin: { title: TITLE, page: 58 },
    description: `You can create a sheath of flames around your body. 
    You leave scorch marks wherever you go, and you can’t handle combustible objects without first dousing your inherent flames. 
    If you perform esoteries (or similar effects beyond the abilities of normal humans), all your effects are tainted with flame. 
    Fiery visuals accompany your powers, and in some cases, your predilection for flame actually reshapes your abilities to take on a fiery nature where none existed before.
    You probably wear red and yellow, or perhaps black Although most of those who take up this mantle are nanos, flame-wielding glaives and jacks are fearsome indeed.`,
    benefits: [
      {
        name: 'Connection',
        description: `Choose one of the following.
        1. Pick one other PC. Through a quirk of fate, your fire cannot harm that character.
        2. Pick one other PC. You burned this character by accident, and they still have a scar
        3. Pick one other PC. You’re always trying to impress them with your fire, but you’re not sure why
        4. Pick one other PC. When you’re near this character, sometimes your flames burn with weird patterns`,        
        upgrade: (char) => console.log(char),
      },
      {
        name: 'Additional Equipment',
        description: `You have an artifact—a device that sprays inanimate objects to make them fireresistant. All your starting gear has already been treated unless you don’t want it to be.`,
        upgrade: (char) => char.equipment.push({
          name: 'Fire Resistantspray',
          description: `An artifact that sprays inanimate objects to make them fire-resistant`,
        }),
      },
      {
        name: 'Fire Esoteries',
        description: `Your special abilities that would normally use force or other energy (such as electricity) instead use fire. For example, force
        blasts from Onslaught are blasts of flame, and Flash is a burst of fire. These alterations change nothing except the type of damage and the fact
        that it might start fires. As another example, Barrier produces a wall of roaring flames. In
        this case, the alteration changes the esotery so that the barrier is not solid but instead inflicts
        1 point of damage to anything that touches it and 4 points of damage to anyone who passes
        through it. Even fighting moves such as No Need for Weapons might mean your hands and fists are surrounded by flames.`,
        upgrade: (char) => char.abilities.push('Fire esoteries'),
      },
    ],
    tiers: [
      {
        level: 1,
        abilities: 
        [
          {
            name: 'Shroud of Flame',
            type: ActionType.ENABLER,
            description: `At your command, your entire body becomes
            shrouded in flames that last up to ten minutes. The
            fire doesn’t burn you, but it automatically inflicts
            2 points of damage to anyone who tries to touch
            you or strike you with a melee attack. Flames from
            another source can still hurt you. While the shroud
            is active, you gain +2 points of Armor that protect
            only against damage from fire from another source.
            Enabler.`,
            cost: { attribute: Attribute.INTELLECT, value: 1 },
            upgrade: (char) => char.abilities.push('Shroud of Flame'),
          },
        ]
      },
      {
        level: 2,
        abilities: [
          {
            name: 'Hurl Flame',
            type: ActionType.ACTION,
            description: `While your Shroud of Flame is active, you can reach into your halo and hurl a handful of fire at a target. 
            This is a ranged attack with short range that deals 4 points of fire damage. Action.`,
            cost: { attribute: Attribute.INTELLECT, value: 2 },
            upgrade: (char) => char.abilities.push('Hurl Flame'),
          },
          {
            name: 'Fiery Power',
            type: ActionType.ENABLER,  
            description: `When you use the Onslaught force blast esotery or the Flash esotery, increase the damage by 1 point. 
            If you don’t have either of those abilities, this ability has no effect. 
            Fiery Power does not affect damage from the Onslaught mindslice. Enabler.`,
            upgrade: (char) => char.abilities.push('Fiery Power'),
          },

        ]
      },
      {
        level: 3,
        abilities: [
          {
            name: 'Fiery Hand of Doom',
            type: ActionType.ACTION,
            description: `While your Shroud of Flame is active, you can
            reach into your halo and produce a hand made of
            animate flame that is twice the size of a human’s
            hand. The hand acts as you direct, floating in the
            air. Directing the hand is an action. Without a
            command, the hand does nothing. It can move
            a long distance in a round, but it never moves
            farther away from you than long range. The hand
            can grab, move, and carry things, but anything it
            touches takes 1 point of damage per round from
            the heat. The hand can also attack. It’s a level 3
            creature and deals 1 extra point of damage from
            fire when it attacks. Once created, the hand lasts
            for ten minutes. Action to create; action to direct.`,
            cost: { attribute: Attribute.INTELLECT, value: 3 },
            upgrade: (char) => char.abilities.push('Fiery Hand of Doom'),
          },
          {
            name: 'Wings of Fire',
            type: ActionType.ACTION,
            description: `While your
            Shroud of Flame is active, you can spread wings
            of fire and can levitate, moving at a rate of up
            to 20 feet (6 m) per round in any direction for
            one minute. You can also take one other nonmovement
            action on your turn. Action.`,
            cost: { attribute: Attribute.INTELLECT, value: 4 },
            upgrade: (char) => char.abilities.push('Wings of Fire'),
          },
        ]
      },
      {
        level: 4,
        abilities: [
          {
            name: 'Flameblade',
            type: ActionType.ENABLER,
            description: `When you wish it, you extend your halo of fire to cover
            a weapon you wield in flame for one hour. The
            flame ends if you stop holding or carrying the
            weapon. While the flame lasts, the weapon inflicts 2
            additional points of damage. Enabler.`,
            cost: { attribute: Attribute.INTELLECT, value: 4 },
            upgrade: (char) => char.abilities.push('Flameblade'),
          },
        ]
      },
      {
        level: 5,
        abilities: [
          {
            name: 'Fire Tendrils',
            type: ActionType.ENABLER,
            description: `When you wish it, your halo sprouts three tendrils of flame that last for up to ten minutes. 
            As an action, you can use the tendrils to attack, making a separate attack roll for each. 
            Each tendril inflicts 4 points of damage.
            Otherwise, the attacks function as standard attacks. 
            If you don’t use the tendrils to attack, they remain but do nothing. Enabler.`,
            cost: { attribute: Attribute.INTELLECT, value: 5 },
            upgrade: (char) => char.abilities.push('Fire Tendrils'),
          },
        ]
      },
      {
        level: 6,
        abilities: [
          {
            name: 'Fire Servant',
            type: ActionType.ACTION,
            description: `You reach into your halo
            and produce an automaton of fire
            that is your general shape and size. It
            acts as you direct each round. Directing
            the servant is an action, and you can
            command it only when you are within
            long range of it. Without a command, the
            servant continues to follow your previous
            command. You can also give it a simple
            programmed action, such as “Wait here,
            and attack anyone who comes within
            short range until they’re dead.” The servant
            lasts for ten minutes, is a level 5 creature,
            and deals 1 extra point of damage
            from fire when it attacks. Action to
            create; action to direct.`,
            cost: { attribute: Attribute.INTELLECT, value: 6 },
            upgrade: (char) => char.abilities.push('Fire Servant'),
          },
          {
            name: 'Inferno Trail',
            type: ActionType.ACTION,
            description: `For the next
            minute, you leave a trail of flame in your wake.
            The trail matches your path and lasts for up to
            a minute, creating a wall of flame about 6 feet
            (2 m) high that inflicts 5 points of damage to
            any creature that passes through it, potentially
            catching them on fire for an additional 1 point of
            damage each round (if they are flammable) until
            they spend a round putting out the fire. Action.`,
            cost: { attribute: Attribute.INTELLECT, value: 6 },
            upgrade: (char) => char.abilities.push('Inferno Trail'),
          },
        ]
      },      
    ],
  },{
    name: 'Commands Mental Powers',
    origin: { title: TITLE, page: 60 },
    description: `You have always had special abilities that others didn’t seem to share. Through practice
    and devotion, you have honed this unique talent so that you can harness the power of
    your mind to perform deeds. No one can tell that you have this ability just
    by looking at you, although you wear a crystal or jewel somewhere on your head to help focus your
    power. Either this focusing object was given to you by someone who recognized your ability, or
    you came upon it by accident and it triggered your abilities. Some people with mental powers—
    often called psychics or psionics by ordinary folks—are secretive and a little paranoid.
    Although Nanos frequently command mental powers, psionic characters of every other type are not uncommon.`,
    benefits: [
      {
        name: 'Additional Equipment',
        description: `You have a crystal
        or jewel artifact that, when worn against your
        forehead or temple, adds 1 point to your
        Intellect Pool. If you’re ever without the artifact,
        subtract 5 points from your Intellect Pool; the
        points are restored if you regain the item.`,        
        upgrade: (char) => char.equipment.push({
          name: 'Intellect Crystal',
          description: `a crystal
          or jewel artifact that, when worn against your
          forehead or temple, adds 1 point to your
          Intellect Pool. If you’re ever without the artifact,
          subtract 5 points from your Intellect Pool; the
          points are restored if you regain the item.`
        }),
      },
      {
        name: 'Mental Esoteries',
        description: `When you apply Effort to
        the special abilities that control minds, like the
        Mind Control esotery, the Mind Reading esotery, or the Crowd Control trick of the trade, you get a free level of Effort on that task. Enabler.`,
        upgrade: (char) => console.log(char),
      },
    ],
    tiers: [
      {
        level: 1,
        abilities: [
          {
            name: 'Telepathic',
            type: ActionType.ACTION,
            description: `You can speak telepathically with others who are within short
            range. Communication is two-way, but the other party must be willing and able to communicate.
            You don’t have to see the target, but you must know that it’s within range. You can have more
            than one active contact at once, but you must establish contact with each target individually.
            Each contact lasts up to ten minutes. If you apply a level of Effort to increase the duration rather than
            affect the difficulty, the contact lasts for 28 hours.
            Action to establish contact.`,
            cost: { attribute: Attribute.INTELLECT, value: 1 },
            upgrade: (char) => console.log(char),
          },
        ]
      },
      {
        level: 2,
        abilities: [
          {
            name: 'Mind Reading',
            type: ActionType.ACTION,
            description: `You can read the surface thoughts of a creature within
            short range, even if the target doesn’t want you to. You must be able to see your target. Once
            you have established contact, you can read the target’s thoughts for up to one minute. If you
            also have the Mind Reading special ability from your type, you can use this ability at long range,
            and you don’t need to be able to see the target (but you do have to know that the target is
            within range). Action to initiate.`,
            cost: { attribute: Attribute.INTELLECT, value: 2 },
            upgrade: (char) => console.log(char),
          },
        ]
      },
      {
        level: 3,
        abilities: [
          {
            name: 'Psychic Burst',
            type: ActionType.ACTION,  
            description: `You blast waves of mental force into the minds of up to 
            three targets within short range (make an Intellect roll against each target). 
            This burst inflicts 3 points of Intellect damage (and thus ignores Armor). 
            For each 2 additional Intellect points you spend, you can make an Intellect 
            attack roll against an additional target. Action.`,
            cost: { attribute: Attribute.INTELLECT, value: 3 },
            upgrade: (char) => console.log(char),
          },
          {
            name: 'Psychic Suggestion',
            type: ActionType.ACTION,
            description: `You attempt to make the target take the action you
            indicate on its next turn. If the action you wish the target to take would cause direct harm to
            the target or its allies, your mental attack is hindered. Action.`,
            cost: { attribute: Attribute.INTELLECT, value: 4 },
            upgrade: (char) => console.log(char),
          },
        ]
      },
      {
        level: 4,
        abilities: [
          {
            name: 'Use Senses of Others',
            type: ActionType.ACTION,
            description: `You can see, hear, smell, touch, and taste through the senses of anyone with whom
            you have telepathic contact. You can attempt to use this ability on a willing or unwilling
            target within long range; an unwilling target can try to resist. You don’t need to see the
            target, but you must know that it’s within range. Your shared senses last ten minutes.
            Action to establish.`,
            cost: { attribute: Attribute.INTELLECT, value: 4 },
            upgrade: (char) => console.log(char),
          },
        ]
      },
      {
        level: 5,
        abilities: [
          {
            name: 'Precognition',
            type: ActionType.ENABLER,
            description: `You dimly sense the future for the next ten
            minutes. This has the following effects until the duration expires:
            Your defense tasks gain an asset.
            You can predict the actions of those around you. You gain an asset to seeing through
            deceptions and attempts to betray you as well as avoiding traps and ambushes.
            You know what people are probably thinking and what they will say before they say it, which
            gives you an edge. You gain an asset to all interaction skills.
            Enabler.`,
            cost: { attribute: Attribute.INTELLECT, value: 6 },
            upgrade: (char) => console.log(char),
          },
        ]
      },
      {
        level: 6,
        abilities: [
          {
            name: 'Mind Control',
            type: ActionType.ACTION,
            description: `You control the actions of another creature you touch. This
            effect lasts for one minute. The target must be level 2 or lower. Once you have established
            control, you maintain mental contact with the target and sense what it senses. You can allow it
            to act freely or override its control on a case-bycase basis. In addition to the normal options
            for using Effort, you can choose to use Effort to increase the maximum level of the target or
            increase the duration by one minute. Thus, to control the mind of a level 5 target (three levels
            above the normal limit) or control a target for four minutes (three levels above the normal
            duration), you must apply three levels of Effort.
            If you also have the Mind Control special ability from your type, the normal level limit is 3 rather
            than 2. When the effect ends, the creature doesn’t remember being controlled or anything it did
            while under your command. Action to initiate.`,
            cost: { attribute: Attribute.INTELLECT, value: 6 },
            upgrade: (char) => console.log(char),
          },
          {
            name: 'Telepathic Network',
            type: ActionType.ENABLER,
            description: `When you wish it, you can contact up to ten
            creatures known to you, no matter where they are. All targets must be willing and able to
            communicate. You automatically succeed at establishing a telepathic network; no roll is
            required. All creatures in the network are linked and can communicate telepathically with one
            another. They can also “overhear” anything said in the network, if they wish. Activating this
            ability doesn’t require an action and doesn’t cost Intellect points; to you, it’s as easy as speaking
            out loud. The network lasts until you choose to end it. If you spend 5 Intellect points, you can
            contact twenty creatures at once, and for every 1 Intellect point you spend above that, you can add
            ten more creatures to the network. These larger networks last for ten minutes. Creating a network
            of twenty or more creatures does require an action to establish contact. Enabler.`,
            cost: { attribute: Attribute.INTELLECT, value: 0 },
            upgrade: (char) => console.log(char),
          },
        ]
      },
    ],
  },
]

const DESCRIPTORS: Array<Descriptor> = [
  {
    name: 'Charming',
    origin: { title: TITLE, page: 53 },
    description: `You’re a smooth talker and a charmer. 
    Whether through seemingly supernatural means or just a way with words, you can convince others to do as you wish.
    Most likely, you’re physically attractive or at least highly charismatic, and others enjoy listening to your voice.
    You probably pay attention to your appearance, keeping yourself well groomed. You make friends easily.
    You play up the personality facet of your Intellect stat; intelligence is not your strong suit. 
    You’re personable, not necessarily studious or strong-willed.`,
    benefits: [
      {
        name: 'Personable',
        description: `+2 to your Intellect Pool.`,
        upgrade: (char) => char.intPool = char.intPool + 2,
      },
      {
        name: 'Skill',
        description: `You’re trained in all tasks involving positive or pleasant social interaction`,
        upgrade: (char) => char.addTrainedSkill('Positive or pleasant social interactions'),
      },
      {
        name: 'Skill',
        description: ` You’re trained when using esoteries or special abilities that influence the minds of others.`,
        upgrade: (char) => char.addTrainedSkill('Using esoteries or abilities to influence the minds of others'),
      },
      {
        name: 'Contact',
        description: `You have an important contact who is in an influential position, such as a minor noble, the captain of the town guard, an Aeon Priest, or the head of a large gang of thieves. You and the GM should work out the details together.`,
        upgrade: (char) => char.extraNotes.push('Contact: you have an important contact in a influential position.'),
      },
      {
        name: 'Inability',
        description: `You were never good at studying or retaining facts. The difficulty of any task involving lore, knowledge, or understanding is increased by one step.`,
        upgrade: (char) => char.addInabilitySkill(`Studying or retaining facts`),
      },
      {
        name: 'Inability',
        description: `Your willpower is not one of your strong points. Whenever you try to resist a mental attack, the difficulty is increased by one step.`,
        upgrade: (char) => char.addInabilitySkill(`Resisting mental attacks`),
      },
      {
        name: 'Additional Equipment',
        description: `You’ve managed to talk your way into some decent discounts and bonuses in recent weeks. As a result, you have 10 extra shins jangling in your pocket.`,
        upgrade: (char) => char.shins = char.shins + 10,
      },
    ],
  },
  {
    name: 'Clever',
    origin: { title: TITLE, page: 54 },
    description: `You’re quick-witted, thinking well on your feet. 
    You understand people, so you can fool them but are rarely fooled. 
    Because you easily see things for what they are, you get the lay of the land swiftly, 
    size up threats and allies, and assess situations with accuracy.
    Perhaps you’re physically attractive, or maybe you use your wit to overcome any physical or mental imperfections.`,
    benefits: [
      {
        name: 'Smart',
        description: `+2 to your Intellect Pool`,
        upgrade: (char) => char.intPool = char.intPool + 2,
      },
      {
        name: 'Skill',
        description: `You’re trained in all interactions involving lies or trickery.`,
        upgrade: (char) => char.addTrainedSkill('All interactions involving lies or trickery'),
      },
      {
        name: 'Skill',
        description: `: You’re trained in defense rolls to resist mental effects.`,
        upgrade: (char) => char.addTrainedSkill('Defense to resist mental effects'),
      },
      {
        name: 'Skill',
        description: `You’re trained in all tasks involving, identifying, or assessing danger, lies, quality, importance, function, or power. `,
        upgrade: (char) => char.addTrainedSkill('All tasks involving, identifying, or assessing danger, lies, quality, importance, function, or power'),
      },
      {
        name: 'Inability',
        description: `You were never good at studying or retaining trivial knowledge. The difficulty of any task involving lore, knowledge, or understanding is hindered.`,
        upgrade: (char) => { 
          char.addInabilitySkill(`Studying or retaining trivial knowledge`),
          char.addInabilitySkill(`Any task involving lore, knowledge, or understanding`)
        }
      },
      {
        name: 'Additional Equipment',
        description: `You see through the schemes of others and occasionally convince them to believe you—even when, perhaps, they should not. Thanks to your clever behavior, you have 10 extra shins.`,
        upgrade: (char) => char.shins = char.shins + 10,
      },
    ],
  },
]

const TYPES: Array<CharacterType> = [
  {
  name: 'Glaive',
    origin: { title: TITLE, page: 28 },
    description: `Glaives are the elite warriors of the Ninth World, using weapons and armor to fight their enemies.
    Hunters, guardians, and soldiers could be glaives. Sometimes scouts, warlords, bandits, and even
    athletes are glaives. “Glaive” is a common slang term used almost everywhere in the Steadfast and
    the Beyond for any person skilled with weapons or a martial art, but in truth, it applies only to the best of
    the best. Glaives are warriors who command abilities far beyond those of a typical person with a sword.
    Most glaives are either strong—using the heaviest armor and weapons available and having a high
    Might—or fast, sticking with light weapons and armor and having a high Speed. A few attempt to
    use both Might and Speed and stay somewhere in the middle. Glaives also use ranged weapons such
    as bows or darts. Some don’t rely on weapons at all, preferring to use their bodies in hand-to-hand
    combat—punching, kicking, grabbing, throwing, and so on`,
    attributes: [
      { type: Attribute.MIGHT, value: 11 },
      { type: Attribute.SPEED, value: 10 },
      { type: Attribute.INTELLECT, value: 7 },
    ],
    edges: [
      { type: Attribute.MIGHT, value: 1 },
      { type: Attribute.SPEED, value: 1 },
      { type: Attribute.INTELLECT, value: 0 },
    ],
    tiers: [
      {
        level: 1,
        abilities: [
          {
            name: 'Starting Equipment',
            description: `You start with clothing, two weapons (or one weapon and a shield),
            light or medium armor, an explorer’s pack, two cyphers (chosen for you by the GM), one
            oddity (chosen for you by the GM), and 5 shins (coins). If you start with a ranged weapon that
            requires ammunition (arrows, for example), you start with 12 of that type of ammunition. Before
            selecting your weapons, armor, and other gear, you might want to wait until after you’ve chosen
            your fighting moves, descriptor, and focus.`,
            upgrade: (char) => {
              char.cypheruse = 2;
              char.oddities = 1;
              char.shins = char.shins + 5;
              char.equipment.push(
                {
                  name: 'Clothing',
                  description: 'Standard clothing'
                },
                {
                  name: `Two weapons (or one weapon and a shield)`,
                  description: `Two weapons (or one weapon and a shield.) If you start with a ranged weapon that
                    requires ammunition (arrows, for example), you start with 12 of that type of ammunition.`
                },
                {
                  name: 'Explorer’s pack',
                  description: 'An explorer’s pack'
                },
              );
            }
          },
          {
            name: `Combat Prowess`,
            type: ActionType.ENABLER,
            description: `You add +1 damage to one type of attack of your choice: melee attacks or
            ranged attacks. Enabler.`,
            upgrade: (char) => char.abilities.push('Combat Prowess')
          },
          {
            name: `Trained in Armor`,
            type: ActionType.ENABLER,
            description: `You can wear armor for long periods of time without tiring and can
            compensate for slowed reactions from wearing armor. You reduce the Speed Effort cost for
            wearing armor by 1. Enabler.`,
            upgrade: (char) => char.abilities.push('Trained in Armor')
          },
          {
            name: `Physical Skills`,
            description: `Choose one of the following skills in which you aren’t already trained:
            balancing, climbing, jumping, or swimming. You are trained in this skill. You have an
            inability in crafting numenera, salvaging numenera, and understanding numenera.`,
            upgrade: (char) => { 
              char.addInabilitySkill('Crafting Numenera');
              char.addInabilitySkill('Salvaging Numenera');
              char.addInabilitySkill('Understanding Numenera');
            }
          },
        ]
      },
      {
        level: 2,
        abilities: [
          {
            name: `Skill With Attacks`,
            type: ActionType.ENABLER,
            description: `Choose one type of attack in which you are not already trained: light bashing,
            light bladed, light ranged, medium bashing, medium bladed, medium ranged, heavy bashing,
            heavy bladed, or heavy ranged. You are trained in attacks using that type of weapon. Enabler.`,
            upgrade: (char) => console.log(char)
          },
        ]
      },
      {
        level: 3,
        abilities: [
          {
            name: `Skill With Attacks`,
            type: ActionType.ENABLER,
            description: `Choose one type of attack in which you are not already trained: light bashing,
            light bladed, light ranged, medium bashing, medium bladed, medium ranged, heavy bashing,
            heavy bladed, or heavy ranged. You are trained in attacks using that type of weapon. Enabler.`,
            upgrade: (char) => console.log(char)
          },
          {
            name: `Expert Cypher Use`,
            description: `You can bear three cyphers at a time.`,
            upgrade: (char) => char.cypheruse = 3
          },  
        ]
      },
      {
        level: 4,
        abilities: [
          {
            name: `Skill With Attacks`,
            type: ActionType.ENABLER,
            description: `Choose one type of attack in which you are not already trained: light bashing,
            light bladed, light ranged, medium bashing, medium bladed, medium ranged, heavy bashing,
            heavy bladed, or heavy ranged. You are trained in attacks using that type of weapon. Enabler.`,
            upgrade: (char) => console.log(char)
          },  
        ]
      },
      {
        level: 5,
        abilities: [
          {
            name: `Adept Cypher Use`,
            description: `You can bear four cyphers at a time.`,
            upgrade: (char) => char.cypheruse = 4
          },
          {
            name: `Mastery With Attacks`,
            type: ActionType.ENABLER,
            description: `Choose one type of attack in which you are trained: light bashing,
            light bladed, light ranged, medium bashing, medium bladed, medium ranged, heavy
            bashing, heavy bladed, or heavy ranged. You are specialized in attacks using that type of
            weapon. Enabler. (In place of this ability, you may instead select Skill With Attacks to become
            trained in one type of attack.).`,
            upgrade: (char) => console.log(char)
          },
        ]
      },
      {
        level: 6,
        abilities: [
          {
            name: `Mastery With Attacks`,
            type: ActionType.ENABLER,
            description: `Choose one type of attack in which you are trained: light bashing,
            light bladed, light ranged, medium bashing, medium bladed, medium ranged, heavy
            bashing, heavy bladed, or heavy ranged. You are specialized in attacks using that type of
            weapon. Enabler. (In place of this ability, you may instead select Skill With Attacks to become
            trained in one type of attack.).`,
            upgrade: (char) => console.log(char)
          },
        ]
      },
      
    ],
    talents: {
      name: 'Fighting Moves',
      description: `You have a special talent for combat and can perform feats that others can
      barely imagine. These feats are called fighting moves. Some fighting moves are constant, ongoing
      effects, and others are specific actions that usually cost points from one of your stat Pools.`,
      tiers: [
        {
          level: 1,
          talents: [
            {
              name: `Aggression`,
              type: ActionType.ENABLER,
              description: `You focus on making attacks to such an extent that you
              leave yourself vulnerable to your opponents. While this ability is active, you gain an
              asset on your melee attacks, and your Speed defense rolls against melee and ranged attacks
              are hindered. This effect lasts for as long as you wish, but it ends if no combat is taking
              place within range of your senses. Enabler.`,
              cost: {attribute: Attribute.MIGHT, value: 2}
            },
            {
              name: `Fleet of Foot`,
              type: ActionType.ENABLER,
              description: `You can move a short distance as part of another
              action. You can move a long distance as your entire action for a turn. If you apply a
              level of Effort to this ability, you can move a long distance and make an attack as your
              entire action for a turn, but the attack is hindered. Enabler.`,
              cost: {attribute: Attribute.SPEED, value: 1}
            },
            {
              name: `Impressive Display`,
              type: ActionType.ACTION,
              description: `You perform a feat of strength, speed, or combat, impressing those nearby. For
              the next minute you gain an asset in all interaction tasks with people who saw you
              use this ability. Action.`,
              cost: {attribute: Attribute.MIGHT, value: 2}
            },
            {
              name: `Misdirect`,
              type: ActionType.ACTION,
              description: `When an opponent misses you, you can redirect
              their attack to another target (a creature or object) of your choosing that’s within
              immediate range of you. Make an unmodified attack roll against the new
              target (do not use any of your or the opponent’s modifiers to the attack roll, but
              you can apply Effort for accuracy). If the attack hits, the target takes damage from
              your opponent’s attack. Enabler.`,
              cost: {attribute: Attribute.SPEED, value: 3}
            },
            {
              name: `No Need for Weapons`,
              type: ActionType.ENABLER,
              description: `When you make an unarmed attack (such as a punch or kick),
              it counts as a medium weapon instead of a light weapon. Enabler.`,
            },
            {
              name: `Trained Without Armor`,
              type: ActionType.ENABLER,
              description: `You are trained in Speed defense actions when not wearing
              armor. Enabler.`,
            },

          ]
        },
        {
          level: 2,
          talents: [
            {
              name: `Crushing Blow`,
              type: ActionType.ACTION,
              description: `When you use a bashing or bladed weapon in both
              hands and apply Effort on the attack, you get a free level of Effort on the damage. (If
              fighting unarmed, this attack is made with both fists or both feet together.) Action.`,
              cost: {attribute: Attribute.MIGHT, value: 2}
            }, 
          ]
        }
      ] 
    },
  },
  {
    name: 'Nano',
    origin: { title: TITLE, page: 36 },
    description: `Nanos are sometimes called mages, wizards, sorcerers,
    or witches by the people of the Ninth World. Nanosorcerer is also a common term, with their abilities
    referred to as nano-sorcery. Some claim to be the
    representatives of gods or other supernatural agencies.
    Whatever they’re called, nanos master the mysteries
    of the past to the degree that they seem to perform
    miracles. They tap into the numenera to alter reality or
    learn things that they couldn’t otherwise know.
    The term “nano” is derived from the
    nanotechnology that is omnipresent throughout
    the Ninth World (whether anyone realizes it or not).
    Sometimes people call these invisible, numinous
    particles that infuse the landscape nano-spirits.
    Sometimes these spirits take on a devastating
    manifestation called the Iron Wind and move
    through the air in clouds, which can be far more
    dangerous than any conventional storm. In truth,
    nanites are literally everywhere.`,
    attributes: [
      { type: Attribute.MIGHT, value: 7 },
      { type: Attribute.SPEED, value: 9 },
      { type: Attribute.INTELLECT, value: 12 },
    ],
    edges: [
      { type: Attribute.MIGHT, value: 0 },
      { type: Attribute.SPEED, value: 0 },
      { type: Attribute.INTELLECT, value: 1 },
    ],
    tiers: [
      {
        level: 1,
        abilities: [
          {
            name: `Expert Cypher Use`,
            description: `You can bear three cyphers at a time.`,
            upgrade: (char) => char.cypheruse = 3
          }
        ]
      },
    ],
    talents: {
      name: 'Esoteries:',
      description: `You can tap into the numenera to reshape the world around you. Similar in
      appearance to the way a fabled wizard might seem to cast spells, these expressions of your
      knowledge are called esoteries. People who are not Nanos sometimes call them spells or charms.
      Most esoteries must be activated, which requires that you have a free hand and spend 1
      or more Intellect points. If no Intellect point cost is given for an esotery, it functions continuously
      without needing to be activated. Some esoteries specify a duration, but you can always end one of
      your own esoteries anytime you wish.`,
      tiers: [
        {
          level: 1,
          talents: [
            {
              name: `Hedge Magic`,
              type: ActionType.ACTION,
              description: `You can perform small tricks: temporarily change
              the color or basic appearance of a small object, cause small objects to float through
              the air, clean a small area, mend a broken object, prepare (but not create) food, and
              so on. You can’t use Hedge Magic to harm another creature or object. Action.`,
              cost: {attribute: Attribute.INTELLECT, value: 1}
            },
            {
              name: `Onslaught`,
              type: ActionType.ACTION,
              description: `You attack a foe using energies that assail either their
              physical form or their mind. In either case, you must be able to see your target. If the
              attack is physical, you emit a short-range ray of force that inflicts 4 points of damage. If
              the attack is mental, you focus your mental energy to blast the thought processes of
              another creature within short range. This mindslice inflicts 2 points of Intellect damage
              (and thus ignores Armor). Some creatures without minds (such as automatons) might
              be immune to your mindslice. Action.`,
              cost: {attribute: Attribute.INTELLECT, value: 1}
            },
            {
              name: `Push`,
              type: ActionType.ACTION,
              description: `You push a creature or object an immediate distance
              in any direction you wish. You must be able to see the target, which must be your size
              or smaller, must not be affixed to anything, and must be within short range. The push
              is quick, and the force is too crude to be manipulated. For example, you can’t use
              this esotery to pull a lever or even close a door. Action.`,
              cost: {attribute: Attribute.INTELLECT, value: 2}
            },
            {
              name: `Scan`,
              type: ActionType.ACTION,
              description: `You scan an area equal in size to a 10-foot (3 m) cube,
              including all objects or creatures within that area. The area must be within short
              range. Scanning a creature or object always reveals its level (a measure of how powerful,
              dangerous, or difficult it is). You also learn whatever facts the GM feels are pertinent
              about the matter and energy in that area. For example, you might learn that the wooden
              box contains a device of metal and synth. You might learn that the glass cylinder is full of poisonous gas, and that its metal stand
              has an electrical field running through it that connects to a metal mesh in the floor.
              You might learn that the creature standing before you is a mammal with a small brain.
              However, this esotery doesn’t tell you what the information means. Thus, in the first
              example, you don’t know what the metal and synth device does. In the second, you
              don’t know if stepping on the floor causes the cylinder to release the gas. In the third,
              you might suspect that the creature is not very intelligent, but scans, like looks, can be
              deceiving. Many materials and energy fields prevent or resist scanning. Action.`,
              cost: {attribute: Attribute.INTELLECT, value: 2}
            },
            {
              name: `Ward`,
              type: ActionType.ENABLER,
              description: `You have a shield of energy around you at all times that helps deflect attacks.
              You gain +1 to Armor. Enabler`,
            },
          ]
        },
        {
          level: 2,
          talents: [
            {
              name: `Adaptation`,
              type: ActionType.ACTION,
              description: `You adapt to a hostile environment for 28 hours.
              As a result, you can breathe safely, the temperature doesn’t kill you (though it might
              be extremely uncomfortable or debilitating), crushing gravity doesn’t incapacitate or
              harm you (though, again, you might be seriously hindered), and so on. In extreme
              environments, the GM might increase the cost of activating this esotery to a maximum
              cost of 10 Intellect points. Roughly speaking, the cost should equal the amount of damage
              you would sustain in a given round. For example, if you enter a hostile environment
              that would normally deal 6 points of damage per round, using Adaptation to avoid that
              damage costs 6 points. You can protect other creatures in addition to yourself,
              but each additional creature costs you the same number of Intellect points as it costs
              to protect you. Thus, if it costs 6 points to protect yourself, it costs 12 more to protect
              two other people. This esotery never protects against quick, instantaneous threats, like an
              attack with a weapon or a sudden explosion of fire. Action to initiate.`,
              cost: {attribute: Attribute.INTELLECT, value: 2}
            },
            {
              name: `Flash`,
              type: ActionType.ACTION,
              description: `You create an explosion of energy at a point within close
              range, affecting an area up to immediate range from that point. You must be able to
              see the location where you intend to center the explosion. The blast inflicts 2 points of
              damage to all creatures or objects within the area. Because this is an area attack,
              adding Effort to increase your damage works differently than it does for singletarget
              attacks. If you apply a level of Effort to increase the damage, add 2 points of
              damage for each target, and even if you fail your attack roll, all targets in the area still
              take 1 point of damage. Action.`,
              cost: {attribute: Attribute.INTELLECT, value: 4}
            },
            {
              name: `Hover`,
              type: ActionType.ACTION,
              description: `You float slowly into the air. If you concentrate, you
              can control your movement to remain motionless in the air or float up to a short
              distance as your action; otherwise, you drift with the wind or with any momentum 
              you have gained. This effect lasts for up to ten minutes. Action to initiate.`,
              cost: {attribute: Attribute.INTELLECT, value: 2}
            },
            {
              name: `Mind Reading`,
              type: ActionType.ACTION,
              description: `You can read the surface thoughts of a creature
              within short range of you, even if the target doesn’t want you to. You must be able to
              see the target. Once you have established contact, you can read the target’s thoughts
              for up to one minute. If you or the target move out of range, the connection is
              broken. Action to initiate.`,
              cost: {attribute: Attribute.INTELLECT, value: 4}
            },
            {
              name: `Stasis`,
              type: ActionType.ACTION,
              description: `You surround a foe of your size or smaller with scintillating
              energy, keeping it from moving or acting for one minute, as if frozen solid. You must be
              able to see the target, and it must be within short range. While in stasis, the target is
              impervious to harm, cannot be moved, and is immune to all effects. Action.`,
              cost: {attribute: Attribute.INTELLECT, value: 3}
            },
          ]
        },
        {
          level: 3,
          talents: [            
            {
              name: `Barrier`,
              type: ActionType.ACTION,
              description: `You create an opaque, stationary barrier of solid energy
              within immediate range. The barrier is 10 feet by 10 feet (3 m by 3 m) and of
              negligible thickness. It is a level 2 barrier and lasts for ten minutes. It can be placed
              anywhere it fits, whether against a solid object (including the ground) or floating
              in the air. Each level of Effort you apply strengthens the barrier by one level. For
              example, applying two levels of Effort creates a level 4 barrier. Action.`,
              cost: {attribute: Attribute.INTELLECT, value: 3}
            },
          ]
        },
      ]
    },
  },
  {
    name: 'Jack',
    origin: { title: TITLE, page: 44 },
    description: `Jacks are intrepid explorers and adventurers. They are
    jacks of all trades—hence the name—although the
    word also hearkens back to fables involving a wily,
    resourceful hero who always seems to be named Jack.
    Used as a verb, “to jack” means to steal, to deceive, or
    to get out of a tight scrape through ingenuity or luck.
    Jacks don’t use one skill or tactic exclusively;
    they use whatever weapons, armor, esoteries, or
    anything else that might help them. They are hunters
    (particularly treasure hunters), con artists, skalds,
    rogues, scouts, and experts in a variety of fields.`,
    attributes: [
      { type: Attribute.MIGHT, value: 10 },
      { type: Attribute.SPEED, value: 10 },
      { type: Attribute.INTELLECT, value: 10 },
    ],
    edges: [
      { type: Attribute.MIGHT, value: 0 },
      { type: Attribute.SPEED, value: 0 },
      { type: Attribute.INTELLECT, value: 0 },
    ],
    tiers: [
      {
        level: 1,
        abilities: [
          {
            name: 'Jack of All Trades',
            description: `You have an Edge of 1 for one stat of your choice: Might, Speed, or Intellect.
            You have an Edge of 0 for the other two stats.`,
            upgrade: (char) => char.edgePointsToAdd = char.edgePointsToAdd + 1
          }
        ]
      }
    ],
    talents: {
      name: 'Tricks of the Trade:',
      description: `You have a wide range of abilities that keep people guessing. Some of
      these tricks of the trade are technically esoteries,
      using the numenera, while others are more mundane. Some tricks are constant, ongoing
      effects; others are specific actions that usually cost points from one of your stat Pools.`,
      tiers: []
    },
  },
]

export const NUMENERA_DISCOVERY: SourceBook = {
  title: TITLE,
  descriptors: DESCRIPTORS,
  foci: FOCI,
  types: TYPES,
};