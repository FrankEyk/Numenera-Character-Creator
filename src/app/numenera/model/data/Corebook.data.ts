import { ActionType } from '../Action.model';
import { Descriptor } from '../Descriptor.model';
import { Focus } from '../Focus.model';
import { Attribute, CharacterType } from '../Type.model';

const CORE_BOOK = 'Numenera Corebook';

export const FOCI: Array<Focus> = [
  {
    name: 'Bears A Halo Of Fire',
    origin: { title: CORE_BOOK, page: 52 },
    description: `You can create a sheath of flames around your body. 
    You leave scorch marks wherever you go, and you can’t handle combustible objects without first dousing your inherent flames. 
    If you perform esoteries (or similar effects beyond the abilities of normal humans), all your effects are tainted with flame. 
    Fiery visuals accompany your powers, and in some cases, your predilection for flame actually reshapes your abilities to take on a fiery nature where none existed before.
    You probably wear red and yellow, or perhaps black Although most of those who take up this mantle are nanos, flame-wielding glaives and jacks are fearsome indeed.`,
    benefits: [
      {
        name: 'Connection',
        description: `Pick one other PC. Through a quirk of fate, your fire cannot harm that character.`,
        upgrade: (char) => console.log(char),
      },
      {
        name: 'Additional Equipment',
        description: `You have an artifact—a device that sprays inanimate objects to make them fireresistant. All your starting gear has already been treated unless you don’t want it to be.`,
        upgrade: (char) => console.log(char),
      },
      {
        name: 'Fire Esoteries',
        description: `If you perform esoteries, those that would normally use force or other energy (such as electricity) instead use fire. 
        For example, force blasts from Onslaught are blasts of flame, and Flash is a burst of fire. 
        These alterations change nothing except the type of damage and the fact that it might start fires. 
        As another example, Barrier produces a wall of roaring flames. 
        In this case, the alteration changes the esotery so that the barrier is not solid but instead inflicts 1 point of damage to anything that touches it and 4 points of damage to anyone who passes through it.
        Minor Effect Suggestions: The target or something near the target catches fire.
        Major Effect Suggestions: An important item on the target’s person is destroyed.`,
        upgrade: (char) => console.log(char),
      },
    ],
    tiers: [
      {
        name: 'Shroud of Flame',
        level: 1,
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
        origin: { title: CORE_BOOK, page: 53 },
        cost: { attribute: Attribute.INTELLECT, value: 1 },
      },
      {
        name: 'Hurl Flame',
        level: 2,
        type: ActionType.ACTION,
        description: `While your Shroud of Flame is active, you can reach into your halo and hurl a handful of fire at a target. 
        This is a ranged attack with short range that deals 4 points of fire damage. Action.
        `,
        origin: { title: CORE_BOOK, page: 53 },
        cost: { attribute: Attribute.INTELLECT, value: 2 },
        benefit: {
          name: 'Fiery Power',
          description: `When you use the Onslaught force blast esotery or the Flash esotery, increase the damage by 1 point. 
          If you don’t have either of those abilities, this ability has no effect. 
          Fiery Power does not affect damage from the Onslaught mindslice. Enabler.`,
          type: ActionType.ENABLER,
          upgrade: (char) => console.log(char),
        },
      },
      {
        name: 'Fiery Hand of Doom',
        level: 3,
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
        origin: { title: CORE_BOOK, page: 53 },
        cost: { attribute: Attribute.INTELLECT, value: 3 },
      },
      {
        name: 'Flameblade',
        level: 4,
        type: ActionType.ENABLER,
        description: `When you wish it, you extend your halo of fire to cover
        a weapon you wield in flame for one hour. The
        flame ends if you stop holding or carrying the
        weapon. While the flame lasts, the weapon inflicts 2
        additional points of damage. Enabler.`,
        origin: { title: CORE_BOOK, page: 53 },
        cost: { attribute: Attribute.INTELLECT, value: 4 },
      },
      {
        name: 'Firre Tendrils',
        level: 5,
        type: ActionType.ENABLER,
        description: `When you wish it, your halo sprouts three tendrils of flame that last for up to ten minutes. 
        As an action, you can use the tendrils to attack, making a separate attack roll for each. 
        Each tendril inflicts 4 points of damage.
        Otherwise, the attacks function as standard attacks. 
        If you don’t use the tendrils to attack, they remain but do nothing. Enabler.`,
        origin: { title: CORE_BOOK, page: 53 },
        cost: { attribute: Attribute.INTELLECT, value: 5 },
      },
      {
        name: 'Fire Servant',
        level: 6,
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
        origin: { title: CORE_BOOK, page: 54 },
        cost: { attribute: Attribute.INTELLECT, value: 6 },
      },
    ],
  },
  {
    name: 'Carries A Quiver',
    origin: { title: CORE_BOOK, page: 54 },
    description: `The archer is a skilled combatant, deadly in any fight.
    With a keen eye and quick reflexes, you can eliminate
    foes at range before they reach you. A good archer
    also learns to make his own arrows and bows.
    You probably wear no more than light armor so
    you can move quickly when needed.
    Many glaives and jacks are archers.
    You can use this focus with crossbows instead of
    bows if you wish`,
    benefits: [
      {
        name: 'Connection',
        description: `Pick one other PC to be the true friend who gave you the excellent bow that you currently use. Secretly pick a second PC (preferably one who is likely to get in the way of your attacks). When you miss with than your target, you hit the second character, if possible`,
        upgrade: (char) => console.log(char),
      },
      {
        name: 'Additional Equipment',
        description: `You start with a well-made bow and two dozen arrows
        Minor Effect Suggestions: Hit in a tendon or muscle, the target takes 2 points of Speed damage as well as normal damage.
        Major Effect Suggestion: The target is pinned in place with an arrow.`,
        upgrade: (char) => console.log(char),
      },
    ],
    tiers: [
      {
        name: 'Archer',
        level: 1,
        type: ActionType.ENABLER,
        description: `To be truly deadly with a bow, you must know where to aim. You can spend points from either your Speed Pool or your Intellect Pool to apply levels of Effort to increase your bow damage. Each level of Effort adds 3 points of damage to a successful attack. Enabler.`,
        origin: { title: CORE_BOOK, page: 54 },
        benefit: {
          name: 'Fletcher',
          description: `You are trained in making arrows.`,
          type: ActionType.ENABLER,
          upgrade: (char) => console.log(char),
        },
      },
      {
        name: 'Covering Fire',
        level: 2,
        type: ActionType.ENABLER,
        description: `In a round where you attack with your bow, if you fire an additional arrow, the difficulty of attacks and special abilities used by the target is increased by one step. Enabler.`,
        origin: { title: CORE_BOOK, page: 54 },
        cost: { attribute: Attribute.SPEED, value: 1 },
        benefit: {
          name: 'Bowyer',
          description: `You are trained in making bows. Enabler.`,
          type: ActionType.ENABLER,
          upgrade: (char) => console.log(char),
        },
      },
      {
        name: 'Trained Archer',
        level: 3,
        description: `You are trained in using bows. Enabler.`,
        type: ActionType.ENABLER,
        origin: { title: CORE_BOOK, page: 54 },
        benefit: {
          name: 'Master Fletcher',
          description: `You are specialized in making arrows. Enabler`,
          type: ActionType.ENABLER,
          upgrade: (char) => console.log(char),
        },
      },
      {
        name: 'Quick Shot',
        level: 4,
        type: ActionType.ENABLER,
        description: `If you roll a natural 17 or higher with a bow attack, instead of adding damage or a minor or major effect, you can make another attack with your bow. This attack reuses the same Effort and bonuses (if any) from the first attack. Enabler`,
        origin: { title: CORE_BOOK, page: 54 },
        benefit: {
          name: 'Master Bowyer',
          description: `You are specialized in making bows. Enabler.`,
          type: ActionType.ENABLER,
          upgrade: (char) => console.log(char),
        },
      },
      {
        name: 'Phenomenal Archer',
        level: 5,
        type: ActionType.ENABLER,
        description: `You are specialized in using bows. Enabler.`,
        origin: { title: CORE_BOOK, page: 54 },
      },
      {
        name: 'Powerful Shot',
        level: 6,
        type: ActionType.ENABLER,
        description: `You inflict 3 additional points of damage with a bow. The Might points spent to use this ability are in addition to any Speed points spent on the attack. Enabler.`,
        origin: { title: CORE_BOOK, page: 54 },
      },
    ],
  },
  {
    name: 'Commands Mental Powers',
    origin: { title: CORE_BOOK, page: 54 },
    description: `You have always had special abilities that others
    didn’t seem to share. Through practice and
    devotion, you have honed this unique talent so that
    you can harness the power of your mind to perform
    deeds.
    No one can tell that you have this ability just by
    looking at you, although you wear a crystal or jewel
    somewhere on your head to help focus your power.
    Either this focusing object was given to you by
    someone who recognized your ability, or you came
    upon it by accident and it triggered your abilities.
    Some people with mental powers—often called
    psychics or psionics by ordinary folks—are secretive
    and a little paranoid.
    Although nanos frequently command mental
    powers, psionic glaives or jacks are not uncommon.`,
    benefits: [
      {
        name: 'Connection',
        description: `Pick one other PC. You have found that this character is particularly tuned into your mental powers. While you’re within short range of him, the two of you are always in telepathic contact, and he is never harmed by your Psychic Bursts`,
        upgrade: (char) => console.log(char),
      },
      {
        name: 'Additional Equipment',
        description: `You have a crystal or jewel artifact that, when worn against your forehead or temple, adds 1 point to your Intellect Pool. If you’re ever without the artifact, subtract 5 points from your Intellect Pool; the points are restored if you regain the item`,
        upgrade: (char) => console.log(char),
      },
      {
        name: 'Mental Esoteries',
        description: `If you have the Mind Control esotery or the Mind Reading esotery, you’re automatically trained in it. If you have both esoteries, you’re trained in both. Enabler.
        Minor Effec Suggestion: The range or duration of the mental power is doubled.
        Major Effect Suggestion: You can take another action on that same turn.`,
        type: ActionType.ENABLER,
        upgrade: (char) => console.log(char),
      },
    ],
    tiers: [
      {
        name: 'Telepathic',
        level: 1,
        type: ActionType.ACTION,
        description: ` You can speak
        telepathically with others who are within short range.
        Communication is two-way, but the other party must
        be willing and able to communicate. You don’t have
        to see the target, but you must know that it’s within
        range. You can have more than one active contact at
        once, but you must establish contact with each target
        individually. Each contact lasts up to ten minutes.
        If you apply a level of Effort to increase the duration
        rather than affect the difficulty, the contact lasts for
        28 hours. Action to establish contact.`,
        origin: { title: CORE_BOOK, page: 55 },
        cost: { attribute: Attribute.INTELLECT, value: 1 },
      },
      {
        name: 'Mind Reading',
        level: 2,
        type: ActionType.ACTION,
        description: `You can read the surface thoughts of a creature within
        short range, even if the target doesn’t want you
        to. You must be able to see your target. Once you
        have established contact, you can read the target’s
        thoughts for up to one minute. If you also have the
        Mind Reading esotery or trick of the trade, you can
        use this ability at long range, and you don’t need to
        be able to see the target (but you do have to know
        that the target is within range). Action to initiate.`,
        origin: { title: CORE_BOOK, page: 55 },
        cost: { attribute: Attribute.INTELLECT, value: 2 },
      },
      {
        name: 'Psychic Burst',
        level: 3,
        type: ActionType.ACTION,
        description: `You blast waves of mental force into the minds of up to three
        targets within short range (make an Intellect roll
        against each target). This burst inflicts 3 points of
        Intellect damage (and thus ignores Armor). For each 2
        additional Intellect points you spend, you can make an
        Intellect attack roll against an additional target. Action.`,
        origin: { title: CORE_BOOK, page: 55 },
        cost: { attribute: Attribute.INTELLECT, value: 3 },
      },
      {
        name: 'Use Senses of Others',
        level: 4,
        type: ActionType.ACTION,
        description: `You can see, hear, smell, touch, and taste through the
        senses of anyone with whom you have telepathic
        contact. You can attempt to use this ability on a willing
        or unwilling target within long range; an unwilling
        target can try to resist. You don’t need to see the
        target, but you must know that it’s within range. Your
        shared senses last ten minutes. Action to establish.`,
        origin: { title: CORE_BOOK, page: 55 },
        cost: { attribute: Attribute.INTELLECT, value: 4 },
      },
      {
        name: 'Mind Control',
        level: 5,
        type: ActionType.ACTION,
        description: `You control the actions of another creature you touch. This
        effect lasts for ten minutes. The target must be level
        2 or lower. Once you have established control, you
        maintain mental contact with the target and sense
        what it senses. You can allow it to act freely or override
        its control on a case-by-case basis. Instead of applying
        Effort to decrease the difficulty, you can apply Effort
        to increase the maximum level of the target. Thus, to
        control the mind of a level 5 target (three levels above
        the normal limit), you must apply three levels of
        Effort. If you also have the Mind Control esotery, the
        normal level limit is 3 rather than 2. When the effect
        ends, the creature doesn’t remember being controlled
        or anything it did while under your command. Action
        to initiate.`,
        origin: { title: CORE_BOOK, page: 55 },
        cost: { attribute: Attribute.INTELLECT, value: 6 },
      },
      {
        name: 'Telepathic Network',
        level: 6,
        type: ActionType.ENABLER,
        description: `When you wish it, you can contact up to ten creatures known
        to you, no matter where they are. All targets must be
        willing and able to communicate. You automatically
        succeed at establishing a telepathic network; no roll
        is required. All creatures in the network are linked and
        can communicate telepathically with one another.
        They can also “overhear” anything said in the network,
        if they wish. Activating this ability doesn’t require an
        action and doesn’t cost Intellect points; to you, it’s as
        easy as speaking out loud. The network lasts until you
        choose to end it. If you spend 5 Intellect points, you
        can contact twenty creatures at once, and for every 1
        Intellect point you spend above that, you can add ten
        more creatures to the network. These larger networks
        last for ten minutes. Creating a network of twenty or
        more creatures does require an action to establish
        contact. Enabler.`,
        origin: { title: CORE_BOOK, page: 55 },
        cost: { attribute: Attribute.INTELLECT, value: 0 },
      },
    ],
  },
  {
    name: 'Controls Beasts',
    origin: { title: CORE_BOOK, page: 55 },
    description: `To say that you have a way with animals and
    nonhuman creatures doesn’t begin to cover it. Your
    mastery and communication with beasts is positively
    uncanny. They come to you fearlessly, and it’s not
    uncommon for birds to alight on your shoulder or
    for small animals to climb up your arms or legs.
    You probably wear tough clothing and have a
    disheveled or grizzled appearance that suggests a
    rugged, outdoor life. Perhaps you even smell like an
    animal.Any type of character is likely to have this focus.`,
    benefits: [
      {
        name: 'Connection',
        description: `Pick one other PC. That character
        seems to disturb your creatures in a way that you
        can’t explain. You know that you must keep your
        animals away from him if possible, or you might lose
        control of them.`,
        upgrade: (char) => console.log(char),
      },
      {
        name: 'Additional Equipment',
        description: `You have three days’ worth of food for your beast companion, plus a harness, collar, or similar accouterment.
        Minor Effect Suggestion: The duration of calmness or control is doubled.
        Major Effect Suggestion: The duration of calmness or control extends to 28 hours.`,
        upgrade: (char) => console.log(char),
      },
    ],
    tiers: [
      {
        name: 'Beast Companion',
        level: 1,
        type: ActionType.ENABLER,
        description: `A level 2 creature of your
        size or smaller accompanies you and follows your
        instructions. You and the GM must work out the
        details of your creature, and you’ll probably make rolls
        for it in combat or when it takes actions. The beast
        companion acts on your turn. As a level 2 creature,
        it has a target number of 6 and a health of 6, and it
        inflicts 2 points of damage. Its movement is based on
        its creature type (avian, swimmer, and so on). If your
        beast companion dies, you can hunt in the wild for
        1d6 days to find a new companion. Enabler.`,
        origin: { title: CORE_BOOK, page: 56 },
      },
      {
        name: 'Soothe the Savage',
        level: 2,
        type: ActionType.ACTION,
        description: ``,
        origin: { title: CORE_BOOK, page: 56 },
        cost: { attribute: Attribute.INTELLECT, value: 2 },
        benefit: {
          name: 'Communication',
          type: ActionType.ACTION,
          description: `You can
          convey a basic concept to a creature that normally
          can’t speak or understand speech. The creature
          can also give you a very basic answer to a simple
          question. Action.`,
          cost: { attribute: Attribute.INTELLECT, value: 2 },
          upgrade: (char) => console.log(char),
        },
      },
      {
        name: 'Mount',
        level: 3,
        type: ActionType.ENABLER,
        description: ` A level 3 creature serves you as a
        mount and follows your instructions. While you’re
        mounted on it, the creature can move and you can
        attack on your turn, or it can attack foes when you
        do. You and the GM must work out the details of
        the creature, and you’ll probably make rolls for it in
        combat or when it takes actions. The mount acts on
        your turn. If your mount dies, you can hunt in the
        wild for 3d6 days to find a new one. Enabler.`,
        origin: { title: CORE_BOOK, page: 56 },
      },
      {
        name: 'Beast Eyes',
        level: 4,
        type: ActionType.ACTION,
        description: `You can sense
        through your beast companion’s senses if it is within
        1 mile (1.6 km) of you. This effect lasts up to ten
        minutes. Action to establish`,
        origin: { title: CORE_BOOK, page: 56 },
        cost: { attribute: Attribute.INTELLECT, value: 3 },
        benefit: {
          name: 'Improved Companion',
          description: `Your beast companion increases to level 4. As a level 4 creature, it has a target number of 12 and a health of 12, and it inflicts 4 points of damage. Enabler`,
          type: ActionType.ENABLER,
          upgrade: (char) => console.log(char),
        },
      },
      {
        name: 'Beasts Call',
        level: 5,
        type: ActionType.ACTION,
        description: `You summon a horde of small animals or a single level 4 beast
        to help you temporarily. These creatures do your
        bidding for as long as you focus your attention, but
        you must use your action each turn to direct them.
        Creatures are native to the area and arrive under their
        own power, so if you’re in an unreachable place, this
        ability won’t work. Action.`,
        origin: { title: CORE_BOOK, page: 56 },
        cost: { attribute: Attribute.INTELLECT, value: 5 },
      },
      {
        name: 'Control the Savage',
        level: 6,
        type: ActionType.ACTION,
        description: ``,
        origin: { title: CORE_BOOK, page: 56 },
        cost: { attribute: Attribute.INTELLECT, value: 6 },
        benefit: {
          name: 'Improved Companion',
          description: `Your beast companion increases to level 5. As a level 5 creature, it has a target number of 15 and a health of 15, and it inflicts 5 points of damage. Enabler.`,
          type: ActionType.ENABLER,
          upgrade: (char) => console.log(char),
        },
      },
    ],
  },
  {
    name: 'Controls Gravity',
    origin: { title: CORE_BOOK, page: 56 },
    description: `Gravity must have been quite a concern for the
    people of prior epochs because there are many paths
    within the numenera to control it. Through a quirk
    of fate, some unique device(s), or supreme devotion
    (or a combination of all three), you have learned to
    tap into the power of gravity. With one foot planted
    in the distant past, you are a mysterious individual.
    Most likely, you are also older, having spent much of
    your life honing your odd, ancient talents.
    You might prefer billowy garments that display
    your mastery of gravity’s pull and conceal your
    identity and intentions.
    No one type of character is more likely to control
    gravity than another, but the power is rare.`,
    benefits: [
      {
        name: 'Connection',
        description: `Pick one other PC. In the recent past, while using your gravitational powers, you accidentally sent that character hurtling into the air or plummeting toward the ground. Either way, she barely survived. It is up to the player of that character to decide whether she resents, fears, or forgives you.`,
        upgrade: (char) => console.log(char),
      },
      {
        name: 'Additional Equipment',
        description: `You have a pen-sized oddity that tells the weight of whatever you point it at (within short range). The weight is displayed on a small glass plate in runes that only you can decipher.
        Minor Effect Suggestion: The duration of the effect is doubled.
        Major Effekt Suggestion: An important item on the target’s person is destroyed.`,
        upgrade: (char) => console.log(char),
      },
    ],
    tiers: [
      {
        name: 'Hover',
        level: 1,
        type: ActionType.ACTION,
        description: ` You float slowly
        into the air. As your action, you can concentrate to
        remain motionless in the air, or float up to a short
        distance, but no more; otherwise, you drift with the
        wind or with any momentum you have gained. This
        effect lasts for up to ten minutes. If you also have the
        Hover esotery or trick of the trade, you can hover for
        twenty minutes and move your normal speed. Action
        to initiate.`,
        origin: { title: CORE_BOOK, page: 57 },
        cost: { attribute: Attribute.INTELLECT, value: 1 },
      },
      {
        name: 'Lessening Gravity`s Pull',
        level: 2,
        type: ActionType.ENABLER,
        description: `By manipulating gravity’s pull on yourself, you gain +1 to your Speed Edge. Enabler.`,
        origin: { title: CORE_BOOK, page: 57 },
      },
      {
        name: 'Gravity Cleave',
        level: 3,
        type: ActionType.ACTION,
        description: `By manipulating gravity’s pull on yourself, you gain +1 to your Speed Edge. Enabler.`,
        origin: { title: CORE_BOOK, page: 57 },
        cost: { attribute: Attribute.INTELLECT, value: 3 },
      },
      {
        name: 'Field of Gravity',
        level: 4,
        type: ActionType.ENABLER,
        description: `When you wish it, a field of manipulated gravity around you pulls incoming ranged projectile attacks to the ground. You are immune to such attacks until your turn in the next round. You must be aware of an attack to foil it. This ability does not work on energy attacks. Enabler`,
        origin: { title: CORE_BOOK, page: 57 },
        cost: { attribute: Attribute.INTELLECT, value: 4 },
      },
      {
        name: 'Flight',
        level: 5,
        type: ActionType.ACTION,
        description: `You can float and fly through the air for one hour. For each level of Effort applied, you can affect one additional creature of your size or smaller. You must touch the creature to bestow the power of flight. You direct the other creature’s movement, and while flying, it must remain within sight of you or fall. In terms of overland movement, a flying creature moves about 20 miles (32 km) per hour and is not affected by terrain. Action to initiate.`,
        origin: { title: CORE_BOOK, page: 57 },
        cost: { attribute: Attribute.INTELLECT, value: 4 },
      },
      {
        name: 'Weight of the World',
        level: 6,
        type: ActionType.ACTION,
        description: `You can increase a target’s weight dramatically. The target is pulled to the ground and can’t move physically under its own power for one minute. The target must be within short range. For each level of Effort applied, you can affect one additional creature. Action.`,
        origin: { title: CORE_BOOK, page: 57 },
        cost: { attribute: Attribute.INTELLECT, value: 6 },
      },
    ],
  },
  {
    name: 'Craft Illusions',
    description: `You use the numenera to create holographic images
    that appear real. You are, in effect, an artist—a
    crafter of light and sound. Holographic images can
    never inflict direct harm or exert real force, but they
    can fool creatures, changing opinions and even
    behaviors if you craft them cleverly.
    You likely dress with flair and color. The
    appearance of things is important to you, both their
    beauty and their ugliness. You are a visual performer
    who can entertain, terrify, or fool everyone you
    encounter.
    A nano is the most likely character to be an
    illusionist, but jacks find illusions to be helpful as
    well. The rare glaive illusionist can find ways to use
    tricks in battle.`,
    origin: { title: CORE_BOOK, page: 57 },
    benefits: [
      {
        name: 'Connection',
        description: `Pick one other PC. This character is never fooled by your illusions and is never affected by the trickery of your special abilities. You can choose whether or not you know this fact.`,
        upgrade: (char) => console.log(char),
      },
      {
        name: 'Additional Equipment',
        description: `You have an oddity that appears to be a piece of clear glass in a synth frame. By manipulating hidden switches on the frame,
        you can make random moving images appear on the glass. The images are usually strange and sometimes incomprehensible`,
        upgrade: (char) => console.log(char),
      },
      {
        name: 'Psychedelic Esoteries',
        description: `If you perform esoteries, they take on flamboyant visual and auditory qualities of your choosing. This alteration changes
        nothing other than the appearance of the effects. For example, your attack esoteries might look like monsters made of energy that assail your foes. Your
        Stasis esotery might look like a tentacled beast that holds the victim in place. Your Teleportation esotery might seem like a hole in space opens up and
        swallows you.
        Minor Effect Suggestion: Your illusion has a special quality to it—perhaps an observer sees an image of something from his past. 
        Major Effect Suggestion: The illusion lasts for one hour, or if it already lasts that long, it lasts for 28 hours.`,
        upgrade: (char) => console.log(char),
      },
    ],
    tiers: [
      {
        name: 'Minor Illusion',
        level: 1,
        type: ActionType.ACTION,
        description: `You create
        a single image of a creature or object within
        immediate range. The image must fit within a
        10-foot (3-meter) cube. The image can move (for
        example, you could make the illusion of a person
        walk or attack), but it can’t leave the area defined
        by the cube. The illusion includes sound but not
        smell. It lasts for ten minutes, but if you want to
        change the original illusion significantly—such as
        making a creature appear to be wounded—you must
        concentrate on it again (though doing so doesn’t
        cost additional Intellect points). If you move beyond
        immediate range of the cube, the illusion vanishes.
        Action to create; action to modify.`,
        origin: { title: CORE_BOOK, page: 57 },
        cost: { attribute: Attribute.INTELLECT, value: 1 },
      },
      {
        name: 'Disguise',
        level: 2,
        type: ActionType.ACTION,
        description: `You appear to be someone or something else, roughly of your
        size and shape, for up to one hour. Once created,
        the disguise requires no concentration. For each
        additional Intellect point you spend, you can
        disguise one other creature. All disguised creatures
        must stay within sight of you or lose their disguise.
        Action to create.`,
        origin: { title: CORE_BOOK, page: 57 },
        cost: { attribute: Attribute.INTELLECT, value: 2 },
      },
      {
        name: 'Major Illusion',
        level: 3,
        type: ActionType.ACTION,
        description: `You create
        a complex scene of images within immediate
        range. The entire scene must fit within a 100-foot
        (30-meter) cube. The images can move, but they
        can’t leave the area defined by the cube. The illusion
        includes sound and smell. It lasts for ten minutes
        and changes as you direct (no concentration is
        needed). If you move beyond immediate range of the
        cube, the illusion vanishes. Action to create.`,
        origin: { title: CORE_BOOK, page: 58 },
        cost: { attribute: Attribute.INTELLECT, value: 3 },
      },
      {
        name: 'Illusory Selves',
        level: 4,
        type: ActionType.ACTION,
        description: `You create
        four holographic duplicates of yourself within short
        range. The duplicates last for one minute. You
        mentally direct their actions, and the duplicates
        aren’t mirror images—each one can do different
        things. If struck violently, they either disappear
        permanently or freeze motionless (your choice).
        Action to create.`,
        origin: { title: CORE_BOOK, page: 58 },
        cost: { attribute: Attribute.INTELLECT, value: 4 },
      },
      {
        name: 'Terrifying Image',
        level: 5,
        type: ActionType.ACTION,
        description: `You use
        a bit of subtle telepathy to learn which images would
        appear terrifying to creatures that you choose within
        long range. Those images appear within that area
        and menace the appropriate creatures. Make an
        Intellect attack roll against each creature you want
        to affect. Success means the creature flees in terror
        for one minute, pursued by its nightmares. Failure
        means the creature ignores the images, which do not
        hamper it in any way. Action.`,
        origin: { title: CORE_BOOK, page: 58 },
        cost: { attribute: Attribute.INTELLECT, value: 6 },
      },
      {
        name: 'Grandiose Illusion',
        level: 6,
        type: ActionType.ACTION,
        description: `You
        create a fantastically complex scene of images that
        fit within a 1-mile (1.6-km) cube that you are also
        within. You must be able to see the images when you
        create them. The images can move in the cube and
        act in accordance with your desires. They can also
        act logically (such as reacting appropriately to fire
        or attacks) when you aren’t directly observing them.
        The illusion includes sound and smell. For example,
        armies can clash in battle, with air support from
        machines or flying creatures, on and above terrain
        of your creation. The illusion lasts for one hour (or
        longer, if you concentrate on it after that time). Action.`,
        origin: { title: CORE_BOOK, page: 58 },
        cost: { attribute: Attribute.INTELLECT, value: 8 },
      },
    ],
  },
  {
    name: 'Crafts Unique Objects',
    origin: { title: CORE_BOOK, page: 58 },
    description: `With the remains of previous civilizations all around,
    the raw materials for a crafter offer themselves to
    those who know where to look. You are a maker, a
    crafter, and a builder. You might start out working
    with wood or metal as understood by the people of
    the Ninth World, but eventually you will master even
    the mysteries of the ancients. Call it magic or call it
    technology—you know that you can master it and
    use it for your own designs.
    You likely carry a wide array of tools and spare
    parts wherever you go. Your work apron is probably
    a mainstay of your wardrobe, its pockets and loops
    brimming with the instruments of your trade. Your
    calloused fingers might be stained with grease that
    will never come completely clean, but these marks
    are badges of honor among your kind.
    Nanos make interesting crafters, supplementing
    their esoteries with tools and devices. A glaive
    builder likely focuses on weapons or armor. Jacks
    might be the most common crafters, making things
    that work in a variety of ways for a variety of uses.`,
    benefits: [
      {
        name: 'Connection',
        description: `Pick one other PC. The character
        has an extra item of regular equipment that you
        fashioned for her. (She chooses the item.)`,
        upgrade: (char) => console.log(char),
      },
      {
        name: 'Additional Equipment',
        description: `You begin the game with
        a bag of light tools, the tools needed to make your
        first-tier crafts, and any normal item (of level 1 or 2)
        that you can make with your skills. You also have an
        additional oddity
        Minor Effecct Suggestions: Any rolls you make regarding that artifact gain a +1 bonus for 28 hours.
        Major Effect Suggestions: Any rolls you make regarding that artifact gain a +2 bonus for 28 hours.`,
        upgrade: (char) => console.log(char),
      },
    ],
    tiers: [
      {
        name: 'Crafter',
        level: 1,
        type: ActionType.ENABLER,
        description: `You are trained in the crafting of two kinds of items. Enabler.`,
        origin: { title: CORE_BOOK, page: 58 },
        benefit: {
          name: 'Master Identifier',
          type: ActionType.ENABLER,
          description: `You are trained in identifying the function of any kind of device. Enabler`,
          upgrade: (char) => console.log(char),
        },
      },
      {
        name: 'Tinkerer',
        level: 2,
        type: ActionType.ENABLER,
        description: `If you spend at least one day tinkering with an artifact in your possession, it functions at one level higher than normal. This applies to all artifacts in your possession, but they retain this bonus only for you. Enabler`,
        origin: { title: CORE_BOOK, page: 58 },
        benefit: {
          name: 'Quick Work',
          type: ActionType.ACTION,
          cost: { attribute: Attribute.INTELLECT, value: 3 },
          description: `One use of any artifact (or one minute of its continuous function) is increased by one level if you use it within the next minute. If you spend 4 additional Intellect points, the use is increased by two levels if you use it within the next minute. Action.`,
          upgrade: (char) => console.log(char),
        },
      },
      {
        name: 'Master Crafter',
        level: 3,
        type: ActionType.ENABLER,
        description: `You are trained in the crafting of two more kinds of items, or you are specialized in two kinds of items that you are already trained in. Enabler. `,
        origin: { title: CORE_BOOK, page: 58 },
      },
      {
        name: 'Cyphersmith',
        level: 4,
        type: ActionType.ENABLER,
        description: `All cyphers you use function at one level higher than normal. If given a week and the right tools, chemicals, and parts, you can tinker with one of your cyphers, transforming it into
        another cypher of the same type (anoetic or occultic) that you had in the past. The GM and player should collaborate to ensure that the transformation is logical—for example, you probably can’t transform a pill into a helmet. Enabler.`,
        origin: { title: CORE_BOOK, page: 58 },
      },
      {
        name: 'Innovator',
        level: 5,
        type: ActionType.ENABLER,
        description: `another cypher of the same type (anoetic or occultic)
        that you had in the past. The GM and player should
        collaborate to ensure that the transformation is
        logical—for example, you probably can’t transform a
        pill into a helmet. Enabler.`,
        origin: { title: CORE_BOOK, page: 59 },
      },
      {
        name: 'Inventor',
        level: 6,
        type: ActionType.ENABLER,
        description: `You can create new artifacts in half the time, as if they were two levels lower, by spending  half the normal XP. Enabler.`,
        origin: { title: CORE_BOOK, page: 59 },
      },
    ],
  },
  {
    name: 'Employs Magnetism',
    origin: { title: CORE_BOOK, page: 59 },
    description: `Electromagnetism is a fundamental force in the
    universe, and it is yours to command. You are a
    master of metal.
    You probably wear a lot of metal, perhaps as part
    of your clothing or armor, as part of your accessories
    (such as jewelry or piercings), embedded into your
    body surgically, or in some combination of these
    options.
    No one type of character is more likely than
    any other to employ magnetism, although glaives
    who wield weapons and wear armor will find it an
    interesting complement to their powers.`,
    benefits: [
      {
        name: 'Connection',
        description: `Pick one other PC. Whenever you use your powers, the metallic items on that character’s body shudder, rattle, clink, and shake if he is within short range.
        Minor Effect Suggestions: The duration of the effect is doubled
        Major Effect Suggestions: An important item on the target’s person is destroyed.`,
        upgrade: (char) => console.log(char),
      },
    ],
    tiers: [
      {
        name: 'Move Metal',
        level: 1,
        type: ActionType.ACTION,
        description: `You can exert
        force on metal objects within short range for one
        round. Once activated, your power has an effective
        Might Pool of 10, a Might Edge of 1, and an Effort
        of 2 (approximately equal to the strength of a fit,
        capable, adult human), and you can use it to move
        metal objects, push against metal objects, and so
        on. For example, in your round, you could lift and
        pull a light metal object anywhere within range
        to yourself or move a heavy object (like a piece of
        furniture) about 10 feet (3 m). This power lacks the
        fine control to wield a weapon or move objects with
        much speed, so in most situations, it’s not a means
        of attack. You can’t use this ability on your own
        body. Action.`,
        origin: { title: CORE_BOOK, page: 59 },
        cost: { attribute: Attribute.INTELLECT, value: 1 },
      },
      {
        name: 'Repel Metal',
        level: 2,
        type: ActionType.ENABLER,
        description: `By manipulating magnetism,
        you are trained in Speed defense tasks against any
        incoming attack that uses metal. Enabler.`,
        origin: { title: CORE_BOOK, page: 59 },
      },
      {
        name: 'Destroy Metal',
        level: 3,
        type: ActionType.ACTION,
        description: `You
        instantly tear, rip, or burst a metal object that is
        within sight, within short range, and no bigger than
        half your size. Make an Intellect roll to destroy the
        object; the difficulty of this task is decreased by three
        steps (compared to breaking it with brute strength).
        Action.`,
        origin: { title: CORE_BOOK, page: 59 },
        cost: { attribute: Attribute.INTELLECT, value: 4 },
      },
      {
        name: 'Magnetic Field',
        level: 4,
        type: ActionType.ENABLER,
        description: `When
        you wish it, a field of magnetism around you pulls
        incoming, ranged, metallic projectile attacks (such
        as arrows, bullets, a thrown metal knife, and so on)
        to the ground. You are immune to such attacks for
        one round. You must be aware of an attack to foil it.
        Enabler.`,
        origin: { title: CORE_BOOK, page: 60 },
        cost: { attribute: Attribute.INTELLECT, value: 4 },
      },
      {
        name: 'Command Metal',
        level: 5,
        type: ActionType.ACTION,
        description: `You
        reshape a metallic item as you desire. The item must
        be within sight and within short range, and its mass
        can be no greater than your own. You can affect
        multiple items at once as long as their combined
        mass falls within these limits. You can fuse multiple
        items together. You can use this power to destroy a
        metal object (as the Destroy Metal ability), or you
        can craft it into another desired shape (crudely,
        unless you have the proper crafting skills). You can
        then move the new object anywhere within range.
        For example, you could take a few metal shields, fuse
        them together, and use the resulting shape to block a
        doorway. You can use this ability to make an attack—
        causing a foe’s armor to constrict, rendering a metal
        item into shards that you fling across the battlefield,
        and so on—against one target within short range.
        Regardless of the form of the attack, it is an Intellect
        action that deals 7 points of damage. Action.`,
        origin: { title: CORE_BOOK, page: 60 },
        cost: { attribute: Attribute.INTELLECT, value: 5 },
      },
      {
        name: 'Diamagnetism',
        level: 6,
        type: ActionType.ENABLER,
        description: `You magnetize any
        nonmetallic object within short range so that it can
        be affected by your other powers. Thus, with Move
        Metal, you can move any object. With Repel Metal,
        you are trained in all Speed defense tasks, regardless
        of whether the incoming attack uses metal. And so
        on. Enabler.`,
        origin: { title: CORE_BOOK, page: 60 },
      },
    ],
  },
  {
    name: 'Entertains',
    description: `You are an entertainer: a singer, dancer, poet,
    storyteller, or something similar. You perform for the
    benefit of others. Naturally charismatic and talented,
    you have also studied to master your art. You know
    all the old poems, songs, jokes, and stories, and
    you’re skilled at creating new ones, too.
    You probably wear flamboyant or at least
    fashionable clothes and use cosmetics, tattoos, or
    hair stylings for dramatic effect.
    The role of the entertainer fits the jack best, but
    glaives and nanos sometimes entertain as well.`,
    origin: { title: CORE_BOOK, page: 60 },
    benefits: [
      {
        name: 'Connection',
        description: `Pick one other PC. This character is your worst critic. Your abilities to help or inspire others don’t function for her.`,
        upgrade: (char) => console.log(char),
      },
      {
        name: 'Additional Equipment',
        description: `You start with a musical instrument or other tools needed to perform.
        Minor Effect Suggestions: You enchant the target, who remains enchanted as long as you focus all your attention on keeping her that way 
        Major Effect Suggestions: The target is forever favorably disposed toward you.`,
        upgrade: (char) => console.log(char),
      },
    ],
    tiers: [
      {
        name: 'Levity',
        level: 1,
        type: ActionType.ENABLER,
        description: `Through wit, charm, humor, and grace,
        you are trained in all social interactions other than
        those involving coercion or intimidation. During
        rests, you put friends and comrades at ease so much
        that they gain +1 to their recovery rolls. Enabler.`,
        origin: { title: CORE_BOOK, page: 60 },
      },
      {
        name: 'Inspiration',
        level: 2,
        type: ActionType.ENABLER,
        description: `Through stories, songs, art,
        or other forms of entertainment, you inspire your
        friends. After spending 28 hours with you, once per
        day each of your friends can decrease the difficulty
        of a task by one step. This benefit is ongoing while
        you remain in the friend’s company. It ends if you
        leave, but it resumes if you return to the friend’s
        company within 28 hours. If you leave the friend’s
        company for more than 28 hours, you must spend
        another 28 hours together to reactivate the benefit.
        Enabler.`,
        origin: { title: CORE_BOOK, page: 60 },
      },
      {
        name: 'Knowledge',
        level: 3,
        type: ActionType.ENABLER,
        description: `Your stories and songs contain
        truth. You are trained in two areas of knowledge of
        your choosing. Enabler.`,
        origin: { title: CORE_BOOK, page: 60 },
      },
      {
        name: 'Calm',
        level: 4,
        type: ActionType.ACTION,
        description: `Through jokes, song,
        or other art, you prevent a living foe from attacking
        anyone or anything for one round. Action.`,
        origin: { title: CORE_BOOK, page: 60 },
        cost: { attribute: Attribute.INTELLECT, value: 3 },
      },
      {
        name: 'Able Assistance',
        level: 5,
        type: ActionType.ENABLER,
        description: `When you help someone
        with a task, you always reduce the difficulty of the
        task by one step regardless of your own skill at that
        task. Enabler.`,
        origin: { title: CORE_BOOK, page: 60 },
      },
      {
        name: 'Master Entertainer',
        level: 6,
        type: ActionType.ACTION,
        description: `Your Inspiration ability
        works more effectively, allowing your friends to
        decrease the difficulty of a task by two steps rather
        than one step. Enabler.`,
        origin: { title: CORE_BOOK, page: 60 },
      },
    ],
  },
  {
    name: 'Exists Partially Out Of Phase',
    origin: { title: CORE_BOOK, page: 60 },
    description: `You have the ability to change your phase state. In
    fact, you’re always slightly out of phase, giving you
    a ghostly translucence. With concentration, you can
    pass your hand through a solid object, allow a solid
    object to pass harmlessly through you, or literally
    walk through walls. However, moving in and out
    of different phase states requires extreme force of
    will and can be mentally taxing. The explanation for 
    your strange power lies within some aspect of the
    numenera. Perhaps the ability emerged through the
    use of (or exposure to) lingering transdimensional
    technology or as the result of an encounter with
    a creature not native to this world or dimension.
    Perhaps one of your ancestors first developed
    the power and passed it down through generations.
    You might do whatever you can to play up your translucent
    appearance by wearing diaphanous, billowy clothing,
    or, depending on your personality, you might do
    just the opposite. Jacks enjoy the infiltration
    possibilities of changing their phase state, and nanos
    appreciate the defensive capabilities. Glaives can use
    the offensive and defensive aspects but might find them
    a bit hindering as well.`,
    benefits: [
      {
        name: 'Connection',
        description: `Pick one other PC. You have known that character for a while, and he helped you gain control of your phase states.
        Minor Effect Suggestion: While out of phase, you also gain +1 to all Speed defense tasks.
        Major Effect Suggestion: While out of phase, you are also invisible.`,
        upgrade: (char) => console.log(char),
      },
    ],
    tiers: [
      {
        name: 'Walk Through Walls',
        level: 1,
        type: ActionType.ACTION,
        description: `You
        can slowly pass through physical barriers at a rate of
        1 inch (2.5 cm) per round (minimum of one round
        to pass through any barrier). You can’t act (other
        than moving) or perceive anything until you pass
        entirely through the barrier. You can’t pass through
        energy barriers. Action.`,
        origin: { title: CORE_BOOK, page: 61 },
        cost: { attribute: Attribute.INTELLECT, value: 2 },
      },
      {
        name: 'Defensive Phasing',
        level: 2,
        type: ActionType.ACTION,
        description: `You can change your phase so that some attacks
        pass through you harmlessly. For the next ten
        minutes, reduce the difficulty of all your Speed
        defensive tasks by one step, but during this time
        you lose any benefit from armor you wear. Action
        to initiate.`,
        origin: { title: CORE_BOOK, page: 61 },
        cost: { attribute: Attribute.INTELLECT, value: 2 },
      },
      {
        name: 'Phased Attack',
        level: 3,
        type: ActionType.ENABLER,
        description: `The attack
        you make on this turn ignores your foe’s armor. The
        ability works for whatever kind of attack you use
        (melee, ranged, energy, and so on). Enabler.`,
        origin: { title: CORE_BOOK, page: 61 },
      },
      {
        name: 'Ghost',
        level: 4,
        type: ActionType.ACTION,
        description: `For the next ten
        minutes, you are trained in sneaking tasks. During
        this time, you can move through solid barriers (but
        not energy barriers) at a rate of 1 foot (30 cm) per
        round, and you can perceive while phased within a
        barrier or object, which allows you to peek through
        walls. Action to initiate.`,
        origin: { title: CORE_BOOK, page: 61 },
        cost: { attribute: Attribute.INTELLECT, value: 4 },
      },
      {
        name: 'Untouchable',
        level: 5,
        type: ActionType.ACTION,
        description: `You change
        your phase state for the next one minute so that you
        can’t affect or be affected by normal matter or energy.
        Only mental attacks and special transdimensional
        energies, devices, or abilities can affect you, but likewise
        you can’t attack, touch, or otherwise affect anything.
        Action to initiate.`,
        origin: { title: CORE_BOOK, page: 61 },
        cost: { attribute: Attribute.INTELLECT, value: 6 },
      },
      {
        name: 'Enhanced Phase',
        level: 6,
        type: ActionType.ENABLER,
        description: `This
        ability works like the third-tier Phased Attack ability except
        that your attack also disrupts the foe’s vitals, dealing an
        additional 5 points of damage. Enabler.`,
        origin: { title: CORE_BOOK, page: 61 },
        cost: { attribute: Attribute.INTELLECT, value: 5 },
      },
    ],
  },
  {
    name: 'Explores Dark Places',
    origin: { title: CORE_BOOK, page: 61 },
    description: `You explore the foreboding ruins and mysterious
    locales of the ancient eras, trained in such activities
    by those who have gone before you. You’re the
    archetypical treasure hunter, scavenger, and finder of
    lost things. You spend so much of your time in the
    dark that you slowly adapt to it, almost becoming
    a creature of the gloom yourself. Even in civilized
    areas, you prefer to keep to the shadows.
    Most likely, you wear dark clothing to help you blend
    into the blackness. On the other hand, you might wear
    sensible garments and gear because you have serious
    and dangerous business to attend to in the dark.
    Jacks in particular are suited to exploring dark
    places; those who do so are called shadowjacks.
    Glaives who follow this path are known as shadow
    warriors, and nanos are called shadowcasters.`,
    benefits: [
      {
        name: 'Connection',
        description: ` Pick one other PC. This character
        has been your adventuring partner in previous
        expeditions, and the two of you work so well together
        that you both gain +1 to any die rolls when you
        collaborate on the same task, fight the same foe, and
        so on.`,
        upgrade: (char) => console.log(char),
      },
      {
        name: 'Additional Equipment',
        description: `You start with an explorer’s pack. If you already have one, you can instead take 50 extra feet (15 m) of rope, rations for two more days, and two minor glowglobes.`,
        upgrade: (char) => console.log(char),
      },
      {
        name: 'Dark Esoteries',
        description: `If you perform esoteries, they make almost no sound, and whatever visual displays they produce are dark and shadowy. These alterations change nothing other than the appearance of the effects. A Flash esotery is a silent burst of shadows, a Barrier esotery is a mass of shadowy wisps, and so on.
        Minor Effect Suggestions: The target is also dazed for one round, during which time the difficulty of all tasks it performs is modified by one step to its detriment.
        Major Effect Suggestions: The target is also stunned and loses its next turn.`,
        upgrade: (char) => console.log(char),
      },
    ],
    tiers: [
      {
        name: 'Trained Explorer',
        level: 1,
        type: ActionType.ENABLER,
        description: `You are trained in searching, listening, climbing, balancing, and jumping tasks. Enabler.`,
        origin: { title: CORE_BOOK, page: 62 },
      },
      {
        name: 'Trained Infiltrator',
        level: 2,
        type: ActionType.ENABLER,
        description: `You are trained in lockpicking and tinkering with devices. Enabler`,
        origin: { title: CORE_BOOK, page: 62 },
        benefit: {
          name: 'Eyes Adjusted',
          description: `You can see in extremely dim light as though it were bright light. You can see in total darkness as if it were extremely dim. Enabler.`,
          upgrade: (char) => console.log(char),
        },
      },
      {
        name: 'Slippery Customer',
        level: 3,
        type: ActionType.ENABLER,
        description: `You are trained in
        escaping from bonds, fitting in tight spaces, and
        other contortionist tasks. Thanks to your experience,
        you also are trained in Speed defense tasks while
        wearing light armor or no armor. Enabler.`,
        origin: { title: CORE_BOOK, page: 62 },
      },
      {
        name: 'Resilient',
        level: 4,
        type: ActionType.ENABLER,
        description: `In your explorations of dark places,
        you’ve been exposed to all sorts of terrible things
        and are developing a general resistance. You gain
        +1 to Armor and are trained in Might defense tasks.
        Enabler.`,
        origin: { title: CORE_BOOK, page: 62 },
      },
      {
        name: 'Dark Explorer',
        level: 5,
        type: ActionType.ENABLER,
        description: `You ignore penalties for any
        action (including fighting) in extremely dim light
        or in cramped spaces. Combined with your Eyes
        Adjusted ability, you can act without penalty even in
        total darkness. You are also trained in sneaking tasks
        while in dim or no light. Enabler.`,
        origin: { title: CORE_BOOK, page: 62 },
      },
      {
        name: 'Blinding Attack',
        level: 6,
        type: ActionType.ACTION,
        description: `If you have
        a source of light, you can use it to make a melee
        attack against a target. If successful, the attack deals
        no damage, but the target is blinded for one minute.
        Action.`,
        origin: { title: CORE_BOOK, page: 62 },
        cost: { attribute: Attribute.SPEED, value: 3 },
      },
    ],
  },
  {
    name: 'Fights With Panache',
    origin: { title: CORE_BOOK, page: 62 },
    description: `You know that style is at least as important as
    substance. Defeating foes is secondary to looking
    good while doing it. Some might call you a
    swashbuckler or daredevil. You leap through the air,
    make a flourish with your weapon, and attack, usually
    with a clever, biting show of wit. Your enemies hate
    you, but your allies adore you. Just watching you fight
    is entertaining.
    You very likely wear no armor, instead preferring
    stylish clothing—perhaps even a hat with a feather.
    Jacks and glaives make the best swashbucklers,
    and they are the most common types of character to
    fight with panache.`,
    benefits: [
      {
        name: 'Connection',
        description: `Pick one other PC. You’re always
        trying to impress this character with your skill, wit,
        appearance, or bravado. Perhaps she is a rival,
        perhaps you need her respect, or perhaps you’re
        romantically interested in her.`,
        upgrade: (char) => console.log(char),
      },
      {
        name: 'Additional Equipment',
        description: `You begin with a set of extremely stylish clothes and a jeweled weapon.
        Minor Effect Suggestions: The target is so dazzled by your style that it is dazed for one round, during which time the difficulty of all tasks it performs is modified by one step to its detriment.
        Major Effect Suggestions: Make an additional attack with your weapon on your turn.`,
        upgrade: (char) => console.log(char),
      },
    ],
    tiers: [
      {
        name: 'Attack Flourish',
        level: 1,
        type: ActionType.ENABLER,
        description: `With your attack, you add
        stylish moves, entertaining quips, or a certain
        “something” that entertains or impresses others.
        Choose any number of creatures within short range
        who can see you; each of them gains a +1 bonus to
        its next die roll. Enabler.`,
        origin: { title: CORE_BOOK, page: 62 },
      },
      {
        name: 'Quick Block',
        level: 2,
        type: ActionType.ENABLER,
        description: `If you use a light or medium
        weapon, you decrease the difficulty of your Speed
        defense actions by one step. Enabler.`,
        origin: { title: CORE_BOOK, page: 62 },
      },
      {
        name: 'Acrobatic Attack',
        level: 3,
        type: ActionType.ENABLER,
        description: `You leap
        into the attack, twisting or flipping through the air.
        This motion decreases the difficulty of your attack
        by one step. If you roll a natural 17 or 18, you can
        choose to have a minor effect rather than deal extra
        damage. You can’t use this ability if your Speed is
        reduced from wearing armor. Enabler.`,
        origin: { title: CORE_BOOK, page: 62 },
        cost: { attribute: Attribute.SPEED, value: 3 },
      },
      {
        name: 'Mobile Fighter',
        level: 4,
        type: ActionType.ENABLER,
        description: `As part of
        your attack, you can leap on or over obstacles, swing
        from ropes, run along narrow surfaces, or otherwise
        move around the battlefield at your normal speed
        as if such tasks were routine (difficulty 0). You can’t
        use this ability if your Speed is reduced from wearing
        armor. Enabler.`,
        origin: { title: CORE_BOOK, page: 62 },
        cost: { attribute: Attribute.SPEED, value: 3 },
      },
      {
        name: 'Block for Another',
        level: 5,
        type: ActionType.ENABLER,
        description: `If you use a light or medium
        weapon, you can block attacks made against an ally
        near you. Choose one creature within immediate
        range. You decrease the difficulty of that creature’s
        Speed defense actions by one step. You can’t use
        Quick Block while using Block for Another. Enabler`,
        origin: { title: CORE_BOOK, page: 62 },
      },
      {
        name: 'Agile Wit',
        level: 6,
        type: ActionType.ENABLER,
        description: `When attempting a Speed task, you
        instead can roll (and spend points) as if it were an
        Intellect action. If you apply Effort to this task, you
        can spend points from your Intellect Pool instead
        of your Speed Pool (in which case you also use your
        Intellect Edge instead of your Speed Edge). Enabler.`,
        origin: { title: CORE_BOOK, page: 63 },
      },
    ],
  },
  {
    name: 'Focuses Mind Over Matter',
    origin: { title: CORE_BOOK, page: 63 },
    description: `Telekinesis. Psychokinesis. Mind over matter. The
    power has many names, but in the end, it all boils
    down to one thing—the molecules that make up all
    matter are yours to command. You likely call yourself
    a telekinetic or just a TK.
    Many telekinetics prefer to wear tight clothing
    without much accouterment so there is little another
    TK could grab hold of psychically. On the other hand,
    you have the power to create very minor telekinetic
    effects at will, so your hair might always be in
    motion, you could have a few tiny objects floating
    around you, or you might wear a long cape that’s
    always billowing.
    Jacks are the most likely characters to be
    telekinetics, but glaives find that the abilities add
    to their combat prowess, and nanos, of course,
    appreciate the additional power`,
    benefits: [
      {
        name: 'Connection',
        description: `Pick one other PC. This character
        can cause your telekinetic powers to act oddly. Every
        once in a while, if he stands directly next to you, your
        powers are cancelled, but at other times, they seem
        improved when used near him.`,
        upgrade: (char) => console.log(char),
      },
      {
        name: 'Mental Esoteries',
        description: `If you perform esoteries, those
        that would normally use force or other energy instead
        use telekinetic force. For example, a Flash or an
        Onslaught force blast is a telekinetic blast from your
        mind. This alteration changes nothing except that you
        don’t need a free hand to perform esoteries. Enabler.
        Minor Effect Suggestions: An object moves faster or more efficiently.
        Major Effect Suggestions: You can move or affect twice as much as normal.`,
        upgrade: (char) => console.log(char),
      },
    ],
    tiers: [
      {
        name: 'Deflect Attacks',
        level: 1,
        type: ActionType.ACTION,
        description: `Using your
        mind, you protect yourself from incoming attacks.
        For the next ten minutes, you are trained in Speed
        defense tasks. Action to initiate.`,
        origin: { title: CORE_BOOK, page: 63 },
        cost: { attribute: Attribute.INTELLECT, value: 1 },
      },
      {
        name: 'Telekinesis',
        level: 2,
        type: ActionType.ACTION,
        description: ` You can exert
        force on objects within short range. Once activated,
        your power has an effective Might Pool of 10, a
        Might Edge of 1, and an Effort of 2 (approximately
        equal to the strength of a fit, capable, adult human),
        and you can use it to move objects, push against
        objects, and so on. For example, you could lift and
        pull a light object anywhere within range to yourself
        or move a heavy object (like a piece of furniture)
        about 10 feet (3 m). This power lacks the fine control
        to wield a weapon or move objects with much
        speed, so in most situations, it’s not a means of
        attack. You can’t use this ability on your own body.
        The power lasts for one hour or until its Might Pool
        is depleted—whichever comes first. Action.`,
        origin: { title: CORE_BOOK, page: 63 },
        cost: { attribute: Attribute.INTELLECT, value: 2 },
      },
      {
        name: 'Enhance Strenght',
        level: 3,
        type: ActionType.ACTION,
        description: `For the
        next ten minutes, tasks that depend on brute force—
        such as moving a heavy object, smashing down a
        door, or hitting someone with a melee weapon—are
        easier for you. The difficulty of all such tasks is
        decreased by one step. Action to initiate.`,
        origin: { title: CORE_BOOK, page: 63 },
        cost: { attribute: Attribute.INTELLECT, value: 3 },
      },
      {
        name: 'Apportation',
        level: 4,
        type: ActionType.ACTION,
        description: `You call a
        physical object to you. You can choose any piece of
        normal equipment on the standard equipment list,
        or (no more than once per day) you can allow the
        GM to determine the object randomly. If you call a
        random object, it has a 10 percent chance of being
        a cypher or artifact, a 10 percent chance of being
        an oddity, a 40 percent chance of being a piece of
        standard equipment, and a 40 percent chance of
        being a bit of worthless junk. You can’t use this
        ability to take an item held by another creature.
        Action.`,
        origin: { title: CORE_BOOK, page: 63 },
        cost: { attribute: Attribute.INTELLECT, value: 4 },
      },
      {
        name: 'Psychokinetic Attack',
        level: 5,
        type: ActionType.ACTION,
        description: `You
        can use this attack in one of two ways. The first way
        is to pick up a heavy object and hurl it at someone
        within short range. This attack is an Intellect action,
        and if successful, it deals 6 points of damage to
        the target and to the hurled object (which could be
        another foe, although that would require two rolls—
        one roll to grab the first foe and another roll to hit
        the second foe with the first). The second way is to
        unleash a shattering burst of power that works only
        against an inanimate object no larger than half your
        size. Make an Intellect roll to instantly destroy the
        object; the difficulty of this task is decreased by three
        steps (compared to breaking it with brute strength).
        Action.`,
        origin: { title: CORE_BOOK, page: 63 },
        cost: { attribute: Attribute.INTELLECT, value: 5 },
      },
      {
        name: 'Reshape Matter',
        level: 6,
        type: ActionType.ACTION,
        description: `Your
        mastery of telekinesis is so great that you can reshape
        objects on a molecular level. You can affect a single
        object no larger than you, and the object must be
        visible and close enough for you to touch. You can
        use this ability to damage the object (as if using
        Psychokinetic Attack, except the difficulty of the task
        is decreased by four steps instead of three), or you
        can attempt a crafting task to reshape the object
        into another form. Reshaping an object usually has a
        difficulty equal to 1 plus the level of the finished object. `,
        origin: { title: CORE_BOOK, page: 63 },
        cost: { attribute: Attribute.INTELLECT, value: 6 },
      },
    ],
  },
  //TODO add more foci 64ff.
];

export const DESCRIPTORS: Array<Descriptor> = [
  {
    name: 'Charming',
    origin: { title: CORE_BOOK, page: 47 },
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
        upgrade: (char) => console.log(char),
      },
      {
        name: 'Skill',
        description: `You’re trained in all tasks involving positive or pleasant social interaction`,
        upgrade: (char) => console.log(char),
      },
      {
        name: 'Skill',
        description: ` You’re trained when using esoteries or special abilities that influence the minds of others.`,
        upgrade: (char) => console.log(char),
      },
      {
        name: 'Contact',
        description: `You have an important contact who is in an influential position, such as a minor noble, the captain of the town guard, an Aeon Priest, or the head of a large gang of thieves. You and the GM should work out the details together.`,
        upgrade: (char) => console.log(char),
      },
      {
        name: 'Inability',
        description: `You were never good at studying or retaining facts. The difficulty of any task involving lore, knowledge, or understanding is increased by one step.`,
        upgrade: (char) => console.log(char),
      },
      {
        name: 'Inability',
        description: `Your willpower is not one of your strong points. Whenever you try to resist a mental attack, the difficulty is increased by one step.`,
        upgrade: (char) => console.log(char),
      },
      {
        name: 'Additional Equipment',
        description: `You’ve managed to talk your way into some decent discounts and bonuses in recent weeks. As a result, you have 10 extra shins jangling in your pocket.`,
        upgrade: (char) => console.log(char),
      },
    ],
  },
  {
    name: 'Clever',
    origin: { title: CORE_BOOK, page: 48 },
    description: `You’re quick-witted, thinking well on your feet. 
    You understand people, so you can fool them but are rarely fooled. 
    Because you easily see things for what they are, you get the lay of the land swiftly, 
    size up threats and allies, and assess situations with accuracy.
    Perhaps you’re physically attractive, or maybe you use your wit to overcome any physical or mental imperfections.`,
    benefits: [
      {
        name: 'Smart',
        description: `+2 to your Intellect Pool`,
        upgrade: (char) => console.log(char),
      },
      {
        name: 'Skill',
        description: `You’re trained in all interactions involving lies or trickery.`,
        upgrade: (char) => console.log(char),
      },
      {
        name: 'Skill',
        description: `: You’re trained in defense rolls to resist mental effects.`,
        upgrade: (char) => console.log(char),
      },
      {
        name: 'Skill',
        description: `You’re trained in all tasks involving, identifying or assessing danger, lies, quality, `,
        upgrade: (char) => console.log(char),
      },
      {
        name: 'Inability',
        description: `You were never good at studying or retaining trivial knowledge. The difficulty of any task involving lore, knowledge, or understanding is increased by one step.`,
        upgrade: (char) => console.log(char),
      },
      {
        name: 'Additional Equipment',
        description: `You see through the schemes of others and occasionally convince them to believe you—even when, perhaps, they should not. Thanks to your clever behavior, you have 10 extra shins.`,
        upgrade: (char) => console.log(char),
      },
    ],
  },
  {
    name: 'Graceful',
    origin: { title: CORE_BOOK, page: 48 },
    description: `You have a perfect sense of balance, moving and speaking with grace and beauty. 
    You’re quick, lithe, flexible, and dexterous. 
    Your body is perfectly suited to dance, and you use that advantage in combat to dodge blows. 
    You might wear garments that enhance your agile movement and sense of style.`,
    benefits: [
      {
        name: 'Agile',
        description: `+2 to your Speed Pool.`,
        upgrade: (char) => console.log(char),
      },
      {
        name: 'Skill',
        description: `You’re trained in all tasks involving balance and careful movement.`,
        upgrade: (char) => console.log(char),
      },
      {
        name: 'Skill',
        description: `You’re trained in all tasks involving physical performing arts.`,
        upgrade: (char) => console.log(char),
      },
      {
        name: 'Skill',
        description: `You’re trained in all Speed defense tasks.`,
        upgrade: (char) => console.log(char),
      },
    ],
  },
  {
    name: 'Intelligent',
    origin: { title: CORE_BOOK, page: 48 },
    description: `You’re quite smart. Your memory is sharp, and you easily grasp concepts that others might struggle with. 
    This aptitude doesn’t necessarily mean that you’ve had years of formal education, but you have learned a great deal in your life, 
    primarily because you pick things up quickly and retain so much.`,
    benefits: [
      {
        name: 'Smart',
        description: `+2 to your Intellect Pool.`,
        upgrade: (char) => console.log(char),
      },
      {
        name: 'Skill',
        description: ` You’re trained in an area of knowledge of your choice.`,
        upgrade: (char) => console.log(char),
      },
      {
        name: 'Skill',
        description: `You’re trained in all actions that involve remembering or memorizing things you experience directly. For example, instead of being good at recalling details of geography that you read about in a book, you can remember a path through a set of tunnels that you’ve explored before`,
        upgrade: (char) => console.log(char),
      },
    ],
  },
  {
    name: 'Lerned',
    description: `You have studied, either on your own or with an instructor.
    You know many things and are an expert on a few topics, such as history, biology, geography, the numenera, nature, or any other area of study.
    Learned characters typically carry a few books around with them and spend their spare time reading.`,
    origin: { title: CORE_BOOK, page: 48 },
    benefits: [
      {
        name: 'Smart',
        description: `+2 to your Intellect Pool`,
        upgrade: (char) => console.log(char),
      },
      {
        name: 'Skill',
        description: `You’re trained in three areas of knowledge of your choice.`,
        upgrade: (char) => console.log(char),
      },
      {
        name: 'Inability',
        description: `You have few social graces. The difficulty of any task involving charm, persuasion, or etiquette is increased by one step`,
        upgrade: (char) => console.log(char),
      },
      {
        name: 'Additional Equipment',
        description: `You have two additional books on topics of your choice.`,
        upgrade: (char) => console.log(char),
      },
    ],
  },
  {
    name: 'Mystical/Mechanical',
    origin: { title: CORE_BOOK, page: 49 },
    description: `You have a special talent that can be viewed in two
    ways. You might think of yourself as “mystical,”
    and thus attuned with the mysterious and the
    paranormal, or you might think of yourself as
    “mechanical,” and thus adept with devices and
    machines. In either case, your true talents lie with the
    numenera. You likely have experience with ancient
    lore, and you can sense and wield the numenera—
    though whether that means “magic” or “technology”
    is up to you (and probably up to those around you as
    well). Mystical characters often wear jewelry, such as
    a ring or an amulet, or have tattoos or other marks
    that show their interests. Mechanical characters
    tend to carry a lot of tools and treat them almost like
    talismans`,
    benefits: [
      {
        name: 'Smart',
        description: `+ 2 to your Intellect Pool`,
        upgrade: (char) => console.log(char),
      },
      {
        name: 'Skill',
        description: `You’re trained in all actions involving identifying or understanding the numenera.`,
        upgrade: (char) => console.log(char),
      },
      {
        name: 'Sense “magic”',
        description: `You can sense whether the numenera is active in situations where its presence is not obvious. You must study an object or location closely for a minute to get a feel for whether the touch of the ancients is at work.`,
        upgrade: (char) => console.log(char),
      },
      {
        name: 'Esotery',
        description: `You can perform the esotery known as Hedge Magic when you have a free hand and can pay the Intellect point cost:
        hedge Magic (1 Intellect point):
        You can perform small tricks: 
        temporarily change the color or basic appearance of a small object, 
        cause small objects to float through the air, clean a small area, 
        mend a broken object, prepare (but not create) food, and so on. 
        You can’t use hedge magic to harm another creature or object. Action.`,
        upgrade: (char) => console.log(char),
      },
      {
        name: 'Inabillity',
        description: `You have a manner or an aura that others find a bit unnerving. The difficulty of any task involving charm, persuasion, or deception is increased by one step.`,
        upgrade: (char) => console.log(char),
      },
      {
        name: 'Additional Equipment',
        description: `You have an extra oddity, determined by the GM.`,
        upgrade: (char) => console.log(char),
      },
    ],
  },
  {
    name: 'Rugged',
    origin: { title: CORE_BOOK, page: 49 },
    description: `You’re a nature lover accustomed to living rough,
    pitting your wits against the elements. Most likely,
    you’re a skilled hunter, gatherer, or naturalist. Years
    of living in the wild have left their mark with a worn
    countenance, wild hair, or scars. Your clothing is
    probably much less refined than the garments worn
    by city dwellers`,
    benefits: [
      {
        name: 'Skill',
        description: `You’re trained in all tasks involving climbing, jumping, running, and swimming.`,
        upgrade: (char) => console.log(char),
      },
      {
        name: 'Skill',
        description: `You’re trained in all tasks involving training, riding, or placating natural animals.`,
        upgrade: (char) => console.log(char),
      },
      {
        name: 'Skill',
        description: `You’re trained in all tasks involving identifying or using natural plants`,
        upgrade: (char) => console.log(char),
      },
      {
        name: 'Inability',
        description: `You have no social graces and prefer animals to people. The difficulty of any task involving charm, persuasion, etiquette, or deception is increased by one step.`,
        upgrade: (char) => console.log(char),
      },
      {
        name: 'Additional Equipment:',
        description: `You carry an explorer’s pack. 
        If you already have one, you can instead take 50 extra feet (15 m) of rope, 
        two more days’ worth of rations, and an extra ranged weapon.`,
        upgrade: (char) => console.log(char),
      },
    ],
  },
  {
    name: 'Stealthy',
    origin: { title: CORE_BOOK, page: 50 },
    description: `You’re sneaky, slippery, and fast. 
    These talents help you hide, move quietly, and pull off tricks that require sleight of hand. 
    Most likely, you’re wiry and small.
    However, you’re not much of a sprinter—you’re more dexterous than fleet of foot.`,
    benefits: [
      {
        name: 'Quick',
        description: `+2 to your Speed Pool`,
        upgrade: (char) => console.log(char),
      },
      {
        name: 'Skill',
        description: `You’re trained in all stealthy tasks.`,
        upgrade: (char) => console.log(char),
      },
      {
        name: 'Skill',
        description: `You’re trained in all interactions involving lies or trickery.`,
        upgrade: (char) => console.log(char),
      },
      {
        name: 'Skill',
        description: `You’re trained in all esoteries or special abilities involving illusions or trickery.`,
        upgrade: (char) => console.log(char),
      },
      {
        name: 'Inability',
        description: `You’re sneaky but not fast. The difficulty of all movement-related tasks is one step higher for you`,
        upgrade: (char) => console.log(char),
      },
    ],
  },
  {
    name: 'Strong',
    origin: { title: CORE_BOOK, page: 50 },
    description: `You’re extremely strong and physically powerful, and you use these qualities well, 
    whether through violence or feats of prowess. 
    You  likely have a brawny build and impressive muscles.`,
    benefits: [
      {
        name: 'Very Powerful',
        description: `+4 to your Might Pool`,
        upgrade: (char) => console.log(char),
      },
      {
        name: 'Skill',
        description: `You’re trained in all actions involving breaking inanimate objects.`,
        upgrade: (char) => console.log(char),
      },
      {
        name: 'Skill',
        description: `You’re trained in all jumping actions.`,
        upgrade: (char) => console.log(char),
      },
      {
        name: 'Additional Equipment',
        description: `: You have an extra medium weapon or heavy weapon.`,
        upgrade: (char) => console.log(char),
      },
    ],
  },
  {
    name: 'String-Willed',
    origin: { title: CORE_BOOK, page: 50 },
    description: `You’re tough-minded, willful, and independent. 
    No one can talk you into anything or change your mind when you don’t want it changed. 
    This quality doesn’t necessarily make you smart, but it does make you a bastion of willpower and resolve. 
    You likely dress and act with unique style and flair, not caring what others think.`,
    benefits: [
      {
        name: 'Willful',
        description: ` +4 to your Intellect Pool.`,
        upgrade: (char) => console.log(char),
      },
      {
        name: 'Skill',
        description: `You’re trained in resisting mental effects.`,
        upgrade: (char) => console.log(char),
      },
      {
        name: 'Skill',
        description: `You’re trained in tasks requiring incredible focus or concentration.`,
        upgrade: (char) => console.log(char),
      },
      {
        name: 'Inability',
        description: `Willful doesn’t mean brilliant. The difficulty of any task that involves figuring out puzzles or problems, memorizing things, or using lore is increased by one step.`,
        upgrade: (char) => console.log(char),
      },
    ],
  },
  {
    name: 'Swift',
    origin: { title: CORE_BOOK, page: 51 },
    description: `You move quickly, able to sprint in short bursts and work with your hands with dexterity. 
    You’re great at crossing distances quickly but not always smoothly.
    You are likely slim and muscular.`,
    benefits: [
      {
        name: 'Fast',
        description: `+4 to your Speed`,
        upgrade: (char) => console.log(char),
      },
      {
        name: 'Skill',
        description: `You’re trained in initiative actions (to determine who goes first in combat).`,
        upgrade: (char) => console.log(char),
      },
      {
        name: 'Skill',
        description: `You’re trained in running actions.`,
        upgrade: (char) => console.log(char),
      },
      {
        name: 'Inability',
        description: `You’re fast but not necessarily graceful. The difficulty of any task involving balance is increased by one step`,
        upgrade: (char) => console.log(char),
      },
    ],
  },
  {
    name: 'Tough',
    origin: { title: CORE_BOOK, page: 51 },
    description: `You’re strong and can take a lot of physical punishment. 
    You might have a large frame and a square jaw. 
    Tough characters frequently have visible scars.`,
    benefits: [
      {
        name: 'Resilient',
        description: `+1 to Armor`,
        upgrade: (char) => console.log(char),
      },
      {
        name: 'Healthy',
        description: `Add 1 to the points you regain when you make a recovery roll.`,
        upgrade: (char) => console.log(char),
      },
      {
        name: 'Skill',
        description: `You’re trained in Might defense actions.`,
        upgrade: (char) => console.log(char),
      },
      {
        name: 'Additional Equipment',
        description: `You have an extra light weapon.`,
        upgrade: (char) => console.log(char),
      },
    ],
  },
];

export const TYPES: Array<CharacterType> = [
  {
    name: 'Glaive',
    origin: { title: CORE_BOOK, page: 26 },
    description: `Glaives are the elite warriors of the Ninth World,
    using weapons and armor to fight their enemies.
    Hunters, guardians, and soldiers could be glaives.
    Sometimes scouts, warlords, bandits, and even
    athletes are glaives. “Glaive” is a common slang
    term used almost everywhere in the Steadfast and
    the Beyond for any person skilled with weapons or a
    martial art, but in truth, it applies only to the best of
    the best. Glaives are warriors who command abilities
    far beyond those of a typical person with a sword.
    Most glaives are either strong—using the heaviest
    armor and weapons available and having a high
    Might—or fast, sticking with light weapons and
    armor and having a high Speed. A few attempt to
    use both Might and Speed and stay somewhere in
    the middle. Glaives also use ranged weapons such
    as bows or darts. Some don’t rely on weapons at
    all, preferring to use their bodies in hand-to-hand
    combat—punching, kicking, grabbing, throwing, and
    so on`,
    attributes: [
      { type: Attribute.MIGHT, value: 11 },
      { type: Attribute.SPEED, value: 10 },
      { type: Attribute.INTELLECT, value: 7 },
    ],
  },
  {
    name: 'Nano',
    origin: { title: CORE_BOOK, page: 32 },
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
  },
  {
    name: 'Jack',
    origin: { title: CORE_BOOK, page: 40 },
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
  },
];
