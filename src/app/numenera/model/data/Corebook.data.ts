import { ActionType } from '../Ability.model';
import { Descriptor } from '../Descriptor.model';
import { Focus } from '../Focus.model';
import { SourceBook } from '../Origin.model';
import { Attribute, CharacterType } from '../Type.model';

const TITLE = 'Numenera Corebook';

const FOCI: Array<Focus> = [
  {
    name: 'Bears A Halo Of Fire',
    origin: { title: TITLE, page: 52 },
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
        cost: { attribute: Attribute.INTELLECT, value: 1 },
      },
      {
        name: 'Hurl Flame',
        level: 2,
        type: ActionType.ACTION,
        description: `While your Shroud of Flame is active, you can reach into your halo and hurl a handful of fire at a target. 
        This is a ranged attack with short range that deals 4 points of fire damage. Action.`,
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
        cost: { attribute: Attribute.INTELLECT, value: 6 },
      },
    ],
  },
  {
    name: 'Carries A Quiver',
    origin: { title: TITLE, page: 54 },
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
      },
      {
        name: 'Powerful Shot',
        level: 6,
        type: ActionType.ENABLER,
        description: `You inflict 3 additional points of damage with a bow. The Might points spent to use this ability are in addition to any Speed points spent on the attack. Enabler.`,
      },
    ],
  },
  {
    name: 'Commands Mental Powers',
    origin: { title: TITLE, page: 54 },
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
        cost: { attribute: Attribute.INTELLECT, value: 0 },
      },
    ],
  },
  {
    name: 'Controls Beasts',
    origin: { title: TITLE, page: 55 },
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
      },
      {
        name: 'Soothe the Savage',
        level: 2,
        type: ActionType.ACTION,
        description: ``,
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
        description: `A level 3 creature serves you as a
        mount and follows your instructions. While you’re
        mounted on it, the creature can move and you can
        attack on your turn, or it can attack foes when you
        do. You and the GM must work out the details of
        the creature, and you’ll probably make rolls for it in
        combat or when it takes actions. The mount acts on
        your turn. If your mount dies, you can hunt in the
        wild for 3d6 days to find a new one. Enabler.`,
      },
      {
        name: 'Beast Eyes',
        level: 4,
        type: ActionType.ACTION,
        description: `You can sense
        through your beast companion’s senses if it is within
        1 mile (1.6 km) of you. This effect lasts up to ten
        minutes. Action to establish`,
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
        cost: { attribute: Attribute.INTELLECT, value: 5 },
      },
      {
        name: 'Control the Savage',
        level: 6,
        type: ActionType.ACTION,
        description: `You
        can control a calm nonhuman beast within 30 feet
        (9 m). You control it for as long as you focus all your
        attention on it, using your turn each round. The
        GM has final say over what counts as a nonhuman
        beast, but unless some kind of deception is at work,
        you should know whether you can affect a creature
        before you attempt to use this ability on it. Aliens,
        extradimensional entities, very intelligent creatures,
        and automatons never count. Action.`,
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
    origin: { title: TITLE, page: 56 },
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
        cost: { attribute: Attribute.INTELLECT, value: 1 },
      },
      {
        name: 'Lessening Gravity`s Pull',
        level: 2,
        type: ActionType.ENABLER,
        description: `By manipulating gravity’s pull on yourself, you gain +1 to your Speed Edge. Enabler.`,
      },
      {
        name: 'Gravity Cleave',
        level: 3,
        type: ActionType.ACTION,
        description: `By manipulating gravity’s pull on yourself, you gain +1 to your Speed Edge. Enabler.`,
        cost: { attribute: Attribute.INTELLECT, value: 3 },
      },
      {
        name: 'Field of Gravity',
        level: 4,
        type: ActionType.ENABLER,
        description: `When you wish it, a field of manipulated gravity around you pulls incoming ranged projectile attacks to the ground. You are immune to such attacks until your turn in the next round. You must be aware of an attack to foil it. This ability does not work on energy attacks. Enabler`,
        cost: { attribute: Attribute.INTELLECT, value: 4 },
      },
      {
        name: 'Flight',
        level: 5,
        type: ActionType.ACTION,
        description: `You can float and fly through the air for one hour. For each level of Effort applied, you can affect one additional creature of your size or smaller. You must touch the creature to bestow the power of flight. You direct the other creature’s movement, and while flying, it must remain within sight of you or fall. In terms of overland movement, a flying creature moves about 20 miles (32 km) per hour and is not affected by terrain. Action to initiate.`,
        cost: { attribute: Attribute.INTELLECT, value: 4 },
      },
      {
        name: 'Weight of the World',
        level: 6,
        type: ActionType.ACTION,
        description: `You can increase a target’s weight dramatically. The target is pulled to the ground and can’t move physically under its own power for one minute. The target must be within short range. For each level of Effort applied, you can affect one additional creature. Action.`,
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
    origin: { title: TITLE, page: 57 },
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
        cost: { attribute: Attribute.INTELLECT, value: 8 },
      },
    ],
  },
  {
    name: 'Crafts Unique Objects',
    origin: { title: TITLE, page: 58 },
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
      },
      {
        name: 'Cyphersmith',
        level: 4,
        type: ActionType.ENABLER,
        description: `All cyphers you use function at one level higher than normal. If given a week and the right tools, chemicals, and parts, you can tinker with one of your cyphers, transforming it into
        another cypher of the same type (anoetic or occultic) that you had in the past. The GM and player should collaborate to ensure that the transformation is logical—for example, you probably can’t transform a pill into a helmet. Enabler.`,
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
      },
      {
        name: 'Inventor',
        level: 6,
        type: ActionType.ENABLER,
        description: `You can create new artifacts in half the time, as if they were two levels lower, by spending  half the normal XP. Enabler.`,
      },
    ],
  },
  {
    name: 'Employs Magnetism',
    origin: { title: TITLE, page: 59 },
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
        cost: { attribute: Attribute.INTELLECT, value: 1 },
      },
      {
        name: 'Repel Metal',
        level: 2,
        type: ActionType.ENABLER,
        description: `By manipulating magnetism,
        you are trained in Speed defense tasks against any
        incoming attack that uses metal. Enabler.`,
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
    origin: { title: TITLE, page: 60 },
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
      },
      {
        name: 'Knowledge',
        level: 3,
        type: ActionType.ENABLER,
        description: `Your stories and songs contain
        truth. You are trained in two areas of knowledge of
        your choosing. Enabler.`,
      },
      {
        name: 'Calm',
        level: 4,
        type: ActionType.ACTION,
        description: `Through jokes, song,
        or other art, you prevent a living foe from attacking
        anyone or anything for one round. Action.`,
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
      },
      {
        name: 'Master Entertainer',
        level: 6,
        type: ActionType.ACTION,
        description: `Your Inspiration ability
        works more effectively, allowing your friends to
        decrease the difficulty of a task by two steps rather
        than one step. Enabler.`,
      },
    ],
  },
  {
    name: 'Exists Partially Out Of Phase',
    origin: { title: TITLE, page: 60 },
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
        cost: { attribute: Attribute.INTELLECT, value: 5 },
      },
    ],
  },
  {
    name: 'Explores Dark Places',
    origin: { title: TITLE, page: 61 },
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
      },
      {
        name: 'Trained Infiltrator',
        level: 2,
        type: ActionType.ENABLER,
        description: `You are trained in lockpicking and tinkering with devices. Enabler`,
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
        cost: { attribute: Attribute.SPEED, value: 3 },
      },
    ],
  },
  {
    name: 'Fights With Panache',
    origin: { title: TITLE, page: 62 },
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
      },
      {
        name: 'Quick Block',
        level: 2,
        type: ActionType.ENABLER,
        description: `If you use a light or medium
        weapon, you decrease the difficulty of your Speed
        defense actions by one step. Enabler.`,
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
      },
    ],
  },
  {
    name: 'Focuses Mind Over Matter',
    origin: { title: TITLE, page: 63 },
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
        difficulty equal to 1 plus the level of the finished object.`,
        cost: { attribute: Attribute.INTELLECT, value: 6 },
      },
    ],
  },
  {
    name: 'Fuses Flesh And Steel',
    origin: { title: TITLE, page: 64 },
    description: `At some point in your past, some of your organic
    parts were replaced with artificial components.
    (Alternatively, you belong to a secret race
    of biomechanical hybrids.) These artificial
    components might be subdermal, or they might
    resemble more overt metal or synth plating on
    your skin. They can also take the form of threadlike
    tendrils of circuitry winding across your flesh.
    Whatever their appearance, these components give
    you special abilities. As you advance, you can add
    to, modify, or discover new functions for them.
    Unfortunately, your artificial body also has special
    requirements when it takes damage.
    You probably wear a cloak with a hood or
    something similar to hide your artificial parts from
    those who would persecute you. Because your
    components are tricky to repair, as time goes on, it
    might become more difficult to conceal your true
    nature, with exposed circuitry, metal plates, and
    more in a state of partial disassembly.
    Anyone—glaive, jack, or nano—might be a
    cybernetic organism.`,
    benefits: [
      {
        name: 'Connection',
        description: `Pick one other PC. This
        character knows your true nature, even if
        no one else does. If your components
        are not particularly hidden, she
        knows a different secret of yours,
        such as a preprogrammed word that
        will shut you down for ten minutes.`,
        upgrade: (char) => console.log(char),
      },
      {
        name: 'Additional Equipment',
        description: `You have a bag of light tools and a variety of parts to repair yourself.
        Minor Effect Suggestions: Your servos learn from your successful actions. You gain a +1 bonus to similar actions involving the same task (such as making attacks against the same foe or operating the same device). 
        Major Effect Suggestions: You discharge a small pulse of power into your foe. Make an immediate attack against that foe (using the same stat as the action that caused the major effect). If the attack succeeds, it deals 4 points of electrical damage.`,
        upgrade: (char) => console.log(char),
      },
    ],
    tiers: [
      {
        name: 'Enhance Body',
        level: 1,
        type: ActionType.ENABLER,
        description: `You
        gain +1 to Armor, +3 to your
        Might Pool, and +3 to your
        Speed Pool. Enabler.`,
        benefit: {
          name: 'Special Healing',
          description: `Traditional healing skills,
          medicines, and techniques work only half as well
          for you. Each time you start at full health, the first 5
          points of damage you take can never be healed in
          these ways or recovered normally. Instead, you must
          use repairing skills and abilities to restore those
          points. For example, if you start with a full Might
          Pool of 10 and take 8 points of damage, you can use
          recovery rolls to restore 3 points, but the remaining 5
          points must be restored using repairing methods.`,
          upgrade: (char) => console.log(char),
        },
      },
      {
        name: 'Interface',
        level: 2,
        type: ActionType.ENABLER,
        description: `By directly plugging into a device,
        you can identify and learn to operate it as though the
        task were one level lower. Enabler.`,
      },
      {
        name: 'Weaponization',
        level: 3,
        type: ActionType.ENABLER,
        description: `One light or medium melee
        weapon of your choice is built into your body, and
        you are trained in this weapon (even if you are not
        trained in other weapons of that type). The weapon is
        concealed until you wish to use it. Enabler.`,
      },
      {
        name: 'Fusion',
        level: 4,
        type: ActionType.ENABLER,
        description: `You can fuse your cyphers and
        artifacts with your body. These fused devices function
        as if they were one level higher. Enabler.`,
      },
      {
        name: 'Deep Reserves',
        level: 5,
        type: ActionType.ACTION,
        description: `Once each day, you can
        transfer up to 5 points between your Pools in any
        combination, at a rate of 1 point per round. For
        example, you could transfer 3 points of Might to
        Speed and 2 points of Intellect to Speed, which
        would take a total of five rounds. Action.`,
      },
      {
        name: 'Ultra Enhancement',
        level: 6,
        type: ActionType.ENABLER,
        description: `You gain +1 to Armor and +5 to each of your three stat Pools. Enabler.`,
      },
    ],
  },
  {
    name: 'Howls At The Moon',
    origin: { title: TITLE, page: 64 },
    description: `Sometimes the numenera is a double-edged sword.
    You are cursed and blessed to be able to transform
    into a powerful creature, drawing additional mass
    from a transdimensional source. You and the GM
    should work out the exact nature of the creature,
    including its appearance, but it’s a wild beast of
    rage and blood—at least until you learn to control it.
    Creatures like you are often called “lycanthropes.”
    Style and appearance are probably low on your list
    of concerns. Your clothes might be ragged because
    your transformation is hard on them (or they’re
    cheap because you know they’ll be destroyed the next
    time you transform).
    Anyone—glaive, jack, or nano—can be a
    lycanthrope, although a glaive likely benefits the
    most from the transformation.`,
    benefits: [
      {
        name: 'Connection',
        description: `Pick one other PC. That character is
        able to soothe you when you’re in beast form. You’ll
        never attack him while transformed, and if he spends
        three consecutive turns using his action to calm you
        down, you can revert to your normal form without
        having to make a roll.`,
        upgrade: (char) => console.log(char),
      },
      {
        name: 'Additional Equipment',
        description: `You have an accurate chronometer artifact that always lets you know when the next transformation is coming.
        Minor Effect Suggestions: The target is so intimidated by your bestial attack that it is dazed for one round, during which time the difficulty of all tasks it performs is modified by one step to its detriment.
        Major Effect Suggestions: Your attack conveys a small bit of your lycanthropy. If your foe survives, one month later, he transforms into an uncontrolled beast. The GM decides what happens from there.`,
        upgrade: (char) => console.log(char),
      },
    ],
    tiers: [
      {
        name: 'Beast Form',
        level: 1,
        type: ActionType.ACTION,
        description: `On five consecutive nights each
        month, you change into a monstrous beast for up to
        one hour each night. In this new form, you gain +8 to
        your Might Pool, +1 to your Might Edge, +2 to your
        Speed Pool, and +1 to your Speed Edge. While in beast
        form, you can’t spend Intellect points for any reason
        other than to try to change to your normal form before
        the one-hour duration is over (a difficulty 2 task). In
        addition, you attack any and every living creature within
        short range. After you revert to your normal form, you
        take a –1 penalty to all rolls for one hour. If you did not
        kill and eat at least one substantial creature while in
        beast form, the penalty increases to –2 and affects all
        your rolls for the next 28 hours. Action to change back.`,
      },
      {
        name: 'Controlled Change',
        level: 2,
        type: ActionType.ACTION,
        description: `You can try to change into
        your beast form on any night you wish (a difficulty 3
        Intellect task). Any transformations you make using
        this power are in addition to the five nights per month
        that you change involuntarily. Action to change.`,
      },
      {
        name: 'Greater Beast Form',
        level: 3,
        type: ActionType.ENABLER,
        description: `Your beast form gains
        the following additional bonuses: +1 to your Might
        Edge, +2 to your Speed Pool, and +1 to your Speed
        Edge. Enabler.`,
      },
      {
        name: 'Greatewr Controlled Change',
        level: 4,
        type: ActionType.ENABLER,
        description: `You no longer
        change into your beast form unless you want to.
        Transforming into your beast form or back to your
        normal form is now a difficulty 1 Intellect task.
        Enabler.`,
      },
      {
        name: 'Enhanced Beast Form',
        level: 5,
        type: ActionType.ENABLER,
        description: `Your beast form gains
        the following additional bonuses: +3 to your Might
        Pool, +2 to your Speed Pool, and +2 to Armor.
        Enabler`,
      },
      {
        name: 'Perfect Control',
        level: 6,
        type: ActionType.ENABLER,
        description: `You no longer need to make
        a roll to change into your beast form or your normal
        form. You can change back and forth as your action.
        When you return to your normal form, you no longer
        take a penalty to your rolls. Enabler`,
      },
    ],
  },
  {
    name: 'Hunts With Great Skill',
    origin: { title: TITLE, page: 65 },
    description: `You are a tracker. Perhaps you hunt animals or
    more deadly creatures. Perhaps you go after people
    as a bounty hunter, law enforcer, or killer for hire.
    Whatever form your hunting takes, you are trained in
    stalking your quarry and bringing it down. You are a
    dangerous individual.
    If you hunt animals or creatures, you might
    carry the trophies of past kills, such as teeth or
    skins. If you’re a bounty hunter, you probably wear
    whatever your quarry would find most intimidating
    so it feels as though it has no chance of getting
    away from you. Most hunters are glaives, but jacks and nanos
    bring unique skills to the chase.`,
    benefits: [
      {
        name: 'Connection',
        description: `Pick one other PC. That person
        once saw you show surprising mercy toward your
        prey, and now you hope she keeps that information
        quiet—it might harm your reputation.`,
        upgrade: (char) => console.log(char),
      },
      {
        name: 'Additional Equipment',
        description: `You wear boots that muffle your footsteps, giving you a +1 bonus to any roll made involving sneaky movement.
        Minor Effect Suggestions: You can attempt an intimidating task to cause your foe to immediately surrender.
        Major Effect Suggestions: Your foe pauses, terrified by your prowess, and takes no action on his turn.`,
        upgrade: (char) => console.log(char),
      },
    ],
    tiers: [
      {
        name: 'Tracker',
        level: 1,
        type: ActionType.ENABLER,
        description: `You are trained in following and identifying tracks. Enabler.`,
        benefit: {
          name: 'Stalker',
          description: `You are trained in all types of movement tasks (including climbing, swimming, jumping, and balancing). Enabler`,
          upgrade: (char) => console.log(char),
        },
      },
      {
        name: 'Sneak',
        level: 2,
        type: ActionType.ENABLER,
        description: `You are trained in stealth and initiative tasks. Enabler`,
        benefit: {
          name: 'Sprint and Grab',
          description: `You can run a
          short distance and make a melee attack to grab a foe
          of your size or smaller. A successful attack means you
          grab the foe and bring it to a halt if it was moving (this
          can be treated as a tackle, if appropriate). Action.`,
          cost: { attribute: Attribute.SPEED, value: 2 },
          upgrade: (char) => console.log(char),
        },
      },
      {
        name: 'Quarry',
        level: 3,
        type: ActionType.ACTION,
        description: `Choose a quarry
        (a single individual creature that you can see).
        You are trained in all tasks involving following,
        understanding, interacting with, or fighting that
        creature. You can have only one quarry at a time.
        Action to initiate.`,
        cost: { attribute: Attribute.INTELLECT, value: 2 },
      },
      {
        name: 'Surprise Attack',
        level: 4,
        type: ActionType.ENABLER,
        description: `If attacking from a hidden
        vantage, with surprise, or before your opponent has
        acted, you decrease the difficulty of your attack by
        one step. On a successful hit, you inflict 2 additional
        points of damage. Enabler.`,
      },
      {
        name: 'Hunter`s Drive',
        level: 5,
        type: ActionType.ENABLER,
        description: `Through
        force of will, when you wish it, you grant yourself
        greater prowess in the hunt for ten minutes. During
        this time, you decrease the difficulty of all tasks
        involving your quarry, including attacks, by one step.
        Your quarry is the creature you selected with your
        third-tier ability. Enabler.`,
        cost: { attribute: Attribute.INTELLECT, value: 5 },
      },
      {
        name: 'Multiple Quarry',
        level: 6,
        type: ActionType.ACTION,
        description: `This
        ability functions like the third-tier Quarry ability
        except that you can select up to three creatures as
        quarry. You must be able to see all three creatures
        when you initiate this ability. Your Hunter’s Drive
        ability applies to all three creatures. Action to initiate.`,
        cost: { attribute: Attribute.INTELLECT, value: 6 },
      },
    ],
  },
  {
    name: 'Leads',
    origin: { title: TITLE, page: 66 },
    description: `Using charisma, natural leadership, and perhaps
    some training, you command the actions of others,
    who follow you willingly. You are a commander, a
    captain, a leader, or a general. Your skills allow you
    to make people do what you want, but you also have
    the wisdom to know what actions would be best for
    your followers and allies.
    Since you need the respect of others, you probably
    dress and carry yourself in such a way that inspires,
    endears, or intimidates. You have a voice suited to
    barking orders that can be heard even on a noisy
    battlefield.
    Glaives make excellent military leaders, but a
    jack could easily lead a group of explorers or a den
    of thieves. A nano might be the head of a group of
    “mages” or scholars, or she might have a gang of
    bodyguards as followers.`,
    benefits: [
      {
        name: 'Connection',
        description: `Pick one other PC. That character was
        once a follower of yours, but you have since grown to
        think of him as a peer.`,
        upgrade: (char) => console.log(char),
      },
      {
        name: 'Additional Equipment',
        description: `You have an artifact that
        allows you to tag up to seven followers. By looking
        into the glass plate on the device, you can determine
        their distance and direction relative to you. The
        tagging process is somewhat demeaning, so it is
        likely that only your followers would ever submit to it.
        Minor Effect Suggestions: The next time you attempt to command, captivate, or otherwise influence the same foe, the difficulty of the task is decreased by one step.
        Major Effect Suggestions: The foe is influenced, captivated, or otherwise affected by your ability for twice as long as normal. `,
        upgrade: (char) => console.log(char),
      },
    ],
    tiers: [
      {
        name: 'Natural Charisma',
        level: 1,
        type: ActionType.ENABLER,
        description: `You are trained in all social
        interactions, whether they involve charm, learning a
        person’s secrets, or intimidating others. Enabler.`,
        benefit: {
          name: 'Good Advice',
          description: `You have a clear mind for determining the best way to proceed. When you give another character a suggestion involving his next action, the character is trained in that action for one round. Action.`,
          cost: { attribute: Attribute.INTELLECT, value: 1 },
          upgrade: (char) => console.log(char),
        },
      },
      {
        name: 'Follower',
        level: 2,
        type: ActionType.ENABLER,
        description: `You gain a level 2 NPC follower
        who is completely devoted to you. You and the GM
        must work out the details of the follower and you’ll
        probably make rolls for it in combat or when it takes
        actions. The follower acts on your turn. As a level 2
        follower, it has a target number of 6 and a health of
        6, and it inflicts 2 points of damage. If the follower
        dies, you gain a new one after at least two weeks and
        proper recruitment. Enabler.`,
      },
      {
        name: 'Command',
        level: 3,
        type: ActionType.ACTION,
        description: `Through
        sheer force of will and charisma, you issue a
        simple command to a single living creature, which
        attempts to carry out your command as its next
        action. The creature must be within short range
        and be able to understand you. The command can’t
        inflict direct harm on the creature or its allies, so
        “Commit suicide” won’t work, but “Flee” might.
        In addition, the command can require the creature
        to take only one action, so “Open the door” might
        work, but “Open the door and run through it”
        won’t. Action.`,
        cost: { attribute: Attribute.INTELLECT, value: 3 },
        benefit: {
          name: 'Capable Follower',
          description: `Your first follower increases to level 3. As a level 3 follower, it has a target number of 9 and a health of 9, and it inflicts 3 points of damage. Enabler.`,
          upgrade: (char) => console.log(char),
        },
      },
      {
        name: 'Captivate or Inspire',
        level: 4,
        type: ActionType.ACTION,
        description: `You
        can use this ability in one of two ways. Either your
        words keep the attention of all NPCs that hear them
        for as long as you speak, or your words inspire all
        NPCs (of your choosing) that hear them to function
        as if they were one level higher for the next hour.
        Action.`,
        cost: { attribute: Attribute.INTELLECT, value: 4 },
        benefit: {
          name: 'Capable Follower',
          description: `Your first follower increases to
          level 4. As a level 4 follower, it has a target number
          of 12 and a health of 12, and it inflicts 4 points of
          damage. Enabler.`,
          upgrade: (char) => console.log(char),
        },
      },
      {
        name: 'Band of Followers',
        level: 5,
        type: ActionType.ENABLER,
        description: `You gain six level 2 NPC
        followers who are completely devoted to you. (They
        are in addition to the follower you gained at second
        tier.) You and the GM must work out the details of
        these followers. If a follower dies, you gain a new
        one after at least two weeks and proper recruitment.
        Enabler.`,
      },
      {
        name: 'Mind of a Leader',
        level: 6,
        type: ActionType.ACTION,
        description: `When
        you develop a plan that involves your followers, you
        can ask the GM one very general question about what
        is likely to happen if you carry out the plan, and you
        will get a simple, brief answer. Action.`,
        cost: { attribute: Attribute.INTELLECT, value: 6 },
        benefit: {
          name: 'Capable Followers',
          description: `Your first follower increases to
          level 5. As a level 5 follower, it has a target number
          of 15 and a health of 15, and it inflicts 5 points of
          damage. Each of your level 2 followers increases to
          level 3. Enabler.`,
          upgrade: (char) => console.log(char),
        },
      },
    ],
  },
  {
    name: 'Lives In The Wilderness',
    origin: { title: TITLE, page: 67 },
    description: `You dwell in the wilds. You probably have done so
    most, if not all, of your life, coming to understand
    the mysteries of nature, weather, and survival. The
    ways of flora and fauna are your ways.
    Your rough, rugged clothing shows little concern
    for style. Most of the time, covering yourself in natural
    smells to keep your scent from arousing suspicion in
    the wilderness is more important than bathing to keep
    yourself presentable to other humans.
    Glaives and jacks are the most likely characters
    to live in the wilderness, perhaps working as guides,
    hunters, trappers, scouts, or trackers. A nano that does
    so might be seen as a nature priest or wild wizard.`,
    benefits: [
      {
        name: 'Connection',
        description: `Pick one other PC who isn’t from the
        wilderness. You can’t help but feel a little contempt
        for that character and her “civilized” ways, which
        show disdain for all things natural and (to your
        mind) true.`,
        upgrade: (char) => console.log(char),
      },
      {
        name: 'Additional Equipment',
        description: `You have a directional compass.
        Minor Effect Suggestions: A foe that is a natural creature flees rather than continue to fight you.
        Major Effect Suggestions: A foe that is a natural creature becomes warily passive.`,
        upgrade: (char) => console.log(char),
      },
    ],
    tiers: [
      {
        name: 'Wilderness Life',
        level: 1,
        type: ActionType.ENABLER,
        description: `You are trained in climbing and swimming tasks. Enabler.`,
        benefit: {
          name: 'Wilderness Lore',
          description: `You are trained in wilderness navigation and in identifying plants and creatures. Enabler.`,
          upgrade: (char) => console.log(char),
        },
      },
      {
        name: 'Living of the Land',
        level: 2,
        type: ActionType.ENABLER,
        description: `Given an hour or so, you
        can always find edible food and potable water in the
        wilderness. You can even find enough for a small
        group of people, if need be. Further, since you’re
        so hardy and have gained resistance over time, the
        difficulty of resisting the effects of natural poisons
        (such as those from plants or living creatures)
        is decreased by one step. You’re also immune to
        natural diseases. Enabler.`,
      },
      {
        name: 'Animal Senses and Sensibilities',
        level: 3,
        type: ActionType.ENABLER,
        description: `You are
        trained in listening and spotting things. In addition,
        most of the time, the GM should alert you if you’re
        about to walk into an ambush or a trap that is lower
        than level 3. Enabler.`,
        benefit: {
          name: 'Wilderness Explorer',
          description: `While taking any action
          (including fighting) in the wild, you ignore any
          penalties due to natural causes such as tall grass,
          thick brush, rugged terrain, weather, and so on.
          Enabler.`,
          upgrade: (char) => console.log(char),
        },
      },
      {
        name: 'Wilderness Awareness',
        level: 4,
        type: ActionType.ACTION,
        description: `Your connection to the natural world extends to a
        degree that some would call supernatural. While in
        the wilderness, you can extend your senses up to a
        mile in any direction and ask the GM a very simple,
        general question about that area, such as “Where
        is the margr camp?” or “Is my friend Deithan still
        alive?” If the answer you seek is not in the area, you
        receive no information. Action.`,
        cost: { attribute: Attribute.INTELLECT, value: 4 },
      },
      {
        name: 'The Wild Is on Your Side',
        level: 5,
        type: ActionType.ACTION,
        description: `While you’re in the wilderness, foes within short
        range are tripped by rocks, tangled in vines, bitten by
        insects, and distracted or confused by small animals.
        The difficulty of any tasks performed by those foes
        is increased by one step. This effect lasts for ten
        minutes. Action to initiate.`,
        cost: { attribute: Attribute.INTELLECT, value: 5 },
      },
      {
        name: 'On With the Wild',
        level: 6,
        type: ActionType.ACTION,
        description: `For the
        next ten minutes, natural animals and plants within
        long range will not knowingly harm you or those you
        designate. Action.`,
        cost: { attribute: Attribute.INTELLECT, value: 6 },
        benefit: {
          name: 'Master of the Wild',
          description: `While you’re in the wilderness,
          your Might Edge, Speed Edge, and Intellect Edge
          increase by 1. When you make a recovery roll in
          the wilderness, you recover twice as many points.
          Enabler.`,
          upgrade: (char) => console.log(char),
        },
      },
    ],
  },
  {
    name: 'Masters Defense',
    origin: { title: TITLE, page: 68 },
    description: `Protecting yourself is obviously important in
    dangerous situations, and you are particularly
    good at it. Cautious and prudent, you learn
    techniques to defend against all kinds of
    attacks, both physical and mental. The winner
    is often the last person standing, and you’ve
    done all you can to ensure that person will
    be you. You carry a shield and
    probably wear the best armor you can find.
    Glaives make excellent defensive masters, but jacks and 
    nanos also find at least some of these skills of great value`,
    benefits: [
      {
        name: 'Connection',
        description: `Pick one other PC. This character protected you from harm recently, and you feel indebted to him for saving your life.`,
        upgrade: (char) => console.log(char),
      },
      {
        name: 'Additional Equipment',
        description: `You have a shield.
        Minor Effect Suggestions: You gain a +1 bonus to Speed defense rolls for one round.
        Major Effect Suggestions: You gain a +2 bonus to Speed defense rolls for one round.`,
        upgrade: (char) => console.log(char),
      },
    ],
    tiers: [
      {
        name: 'Shield master',
        level: 1,
        type: ActionType.ENABLER,
        description: `When you use a shield, in
        addition to the asset it gives you (lowering the difficulty
        of Speed defense tasks by one step), you can act as if
        you are trained in Speed defense tasks. However, in
        any round in which you use this benefit, the difficulty of
        your attacks increases by one step. Enabler.`,
      },
      {
        name: 'Sturdy',
        level: 2,
        type: ActionType.ENABLER,
        description: `You are trained in Might defense tasks. Enabler.`,
        benefit: {
          name: 'Armor Expert',
          description: `When you wear any armor, you reduce the armor’s penalties (Might cost per hour and Speed reduction) by 1. Enabler.`,
          upgrade: (char) => console.log(char),
        },
      },
      {
        name: 'Doge and Resist',
        level: 3,
        type: ActionType.ENABLER,
        description: `You can
        reroll any of your Might, Speed, or Intellect defensive
        rolls and take the better of the two results. Enabler.`,
        cost: { attribute: Attribute.SPEED, value: 3 },
      },
      {
        name: 'Tower of Will',
        level: 4,
        type: ActionType.ENABLER,
        description: `You are trained in Intellect defense tasks. Enabler.`,
        benefit: {
          name: 'Armor Master',
          description: `When you wear any armor, you
          reduce the armor’s penalties (Might cost per hour
          and Speed reduction) to 0. Enabler.`,
          upgrade: (char) => console.log(char),
        },
      },
      {
        name: 'Nothing but Defend',
        level: 5,
        type: ActionType.ACTION,
        description: `If you do nothing on
        your turn other than defend, you are specialized in
        all defensive tasks for that one round. Action.`,
      },
      {
        name: 'Defense Master',
        level: 6,
        type: ActionType.ENABLER,
        description: `Every time you succeed at
        a Speed defense task, you can make an immediate
        attack against your foe. Your attack must be the
        same type (melee weapon, ranged weapon, or
        unarmed) as the attack you defend against. If you
        don’t have an appropriate type of weapon ready, you
        can’t use this ability. Enabler.`,
      },
    ],
  },
  {
    name: 'Masters of Weaponry',
    origin: { title: TITLE, page: 69 },
    description: `You have worked long and hard with one particular
    type of weapon: swords, axes, daggers, whips, or
    whatever you choose. Thus, you are a swordsman,
    an axemaster, a mistress of knives, or whatever is
    appropriate to your chosen weapon. A master of the
    rapier is different from a master of the warhammer.
    You might wear a symbol—a badge, a pin, a
    tattoo, an amulet, certain colors, and so on—that
    indicates the school in which you trained, the style
    of fighting you have mastered, or the name of your
    mentor. Your weapon is almost certainly your finest
    possession. Not only is it well cared for and of
    high quality, but you probably keep it in a beautiful
    scabbard, harness, belt, case, or something similar.
    Many glaives are weapon masters, but sometimes
    a jack might choose this path, particularly with
    lighter weapons.`,
    benefits: [
      {
        name: 'Connection',
        description: `Pick one other PC. That character
        shows potential in the use of your weapon. You
        would like to train her, but you’re not necessarily
        qualified to teach (that’s up to you), and she might
        not be interested (that’s up to her).`,
        upgrade: (char) => console.log(char),
      },
      {
        name: 'Additional Equipment',
        description: `You have a high-quality weapon of your choosing.`,
        upgrade: (char) => console.log(char),
      },
      {
        name: 'Weaponry Esoteries',
        description: `: If you perform esoteries, your
        attacks always look like your chosen weapon. So the
        force blast of the Onslaught esotery appears to be a
        large weapon made of force, and the Flash esotery
        produces a flurry of weaponry. These alterations change
        nothing other than the appearance of the effects. As
        another example, Barrier becomes a wall of swirling
        blades of energy. This alteration changes the esotery
        such that it is not a solid barrier but rather inflicts 1
        point of damage to anyone who touches it and 4 points
        of damage to anyone who passes through it.
        Minor Effect Suggestions: The target is so dazzled by your expertise that it is dazed for one round, during which time the difficulty of all tasks it performs is modified by one step to its detriment.
        Major Effect Suggestions: Make an immediate additional attack with the weapon as part of your turn.`,
        upgrade: (char) => console.log(char),
      },
    ],
    tiers: [
      {
        name: 'Weapon Master',
        level: 1,
        type: ActionType.ENABLER,
        description: `You gain a +1 bonus to damage with your chosen weapon. Enabler.`,
      },
      {
        name: 'Weapon Defense',
        level: 2,
        type: ActionType.ENABLER,
        description: `While your chosen weapon
        is in your hand or hands, you are trained in Speed
        defense rolls. Enabler.`,
      },
      {
        name: 'Rapid Attack',
        level: 3,
        type: ActionType.ENABLER,
        description: `Once per
        round, you can make an additional attack with your
        chosen weapon. Enabler.`,
        cost: { attribute: Attribute.SPEED, value: 3 },
      },
      {
        name: 'Never Fumble',
        level: 4,
        type: ActionType.ENABLER,
        description: `If you roll a natural 1 when
        attacking with your chosen weapon, you can ignore
        or countermand the GM’s intrusion for that roll. You
        can never be disarmed of your chosen weapon, nor
        will you ever drop it accidentally. Enabler.`,
      },
      {
        name: 'Extreme Mastery',
        level: 5,
        type: ActionType.ENABLER,
        description: `When
        using your chosen weapon, you can reroll any attack
        roll you wish and take the better of the two results.
        Enabler`,
      },
      {
        name: 'Damage Dealer',
        level: 6,
        type: ActionType.ACTION,
        description: `You gain a +2 bonus to
        damage with your chosen weapon. This bonus adds
        to the one from the Weapon Master ability, giving
        you a total bonus of +3. Enabler.`,
        benefit: {
          name: 'Death Dealer',
          description: `If you strike a foe of level 3 or less with your chosen weapon, you kill the target instantly. Action.`,
          upgrade: (char) => console.log(char),
        },
      },
    ],
  },
  {
    name: 'Murders',
    origin: { title: TITLE, page: 70 },
    description: `The murderous assassin is a master of dealing
    death. No one is better at sneaking into a location,
    eliminating a target, and slipping out again. Obviously,
    a professional killer is not likely to have a lot of friends.
    You probably wear dark colors—black, charcoal
    grey, or midnight blue—to help blend into the
    shadows. But since you’re also a master of disguise,
    in truth you could look like anyone.
    Any character could be an assassin. Jacks are the
    most likely choice, but nanos with their esoteries
    or glaives with their combat abilities would make
    efficient killers as well.`,
    benefits: [
      {
        name: 'Connection',
        description: `Pick one other PC. That character
        knows your real identity, profession, and
        background. To all others, the truth about you is a
        closely guarded secret.`,
        upgrade: (char) => console.log(char),
      },
      {
        name: 'Additional Equipment',
        description: `You start with a disguise kit and three doses of a level 2 blade poison that inflicts 5 points of damage.
        Minor Effect Suggestions: No one but the foe notices that you make the attack
        Major Effect Suggestions: If you have poison amid your belongings, you were able to apply it just before the strike, adding the poison’s effects to the normal attack damage.`,
        upgrade: (char) => console.log(char),
      },
    ],
    tiers: [
      {
        name: 'Surprise Attack',
        level: 1,
        type: ActionType.ENABLER,
        description: `If attacking from a hidden
        vantage, with surprise, or before an opponent has
        acted, you reduce the difficulty of your attack by one
        step. On a successful hit with this surprise attack,
        you inflict 2 additional points of damage. Enabler.`,
        benefit: {
          name: 'Trained Assassin',
          description: `You are trained in stealth and disguise tasks. Enabler`,
          upgrade: (char) => console.log(char),
        },
      },
      {
        name: 'Quick Death',
        level: 2,
        type: ActionType.ACTION,
        description: `You know how
        to kill quickly. When you hit with a melee or ranged
        attack, you deal 4 additional points of damage. You
        can’t make this attack in two consecutive rounds.
        Action.`,
      },
      {
        name: 'Poison Crafter',
        level: 3,
        type: ActionType.ENABLER,
        description: `You are trained in crafting,
        sensing, identifying, and resisting poisons. Enabler`,
        benefit: {
          name: 'Trained Infiltrator',
          description: `You are trained in all interactions involving lies or trickery. Enabler.`,
          upgrade: (char) => console.log(char),
        },
      },
      {
        name: 'Better Surprise Attack',
        level: 4,
        type: ActionType.ENABLER,
        description: `If attacking from a
        hidden vantage, with surprise, or before an opponent
        has acted, you reduce the difficulty of your attack
        by one step. On a successful hit with this surprise
        attack, you inflict 2 additional points of damage.
        These effects add to those from Surprise Attack,
        giving you a total decrease of two steps and a total of
        4 additional points of damage. Enabler.`,
      },
      {
        name: 'Slayer',
        level: 5,
        type: ActionType.ACTION,
        description: `With a swift and
        sudden attack, you strike a foe in a vital spot. If the
        target is level 3 or less, it is slain outright. Action.`,
        cost: { attribute: Attribute.SPEED, value: 5 },
      },
      {
        name: 'Escape Plan',
        level: 6,
        type: ActionType.ENABLER,
        description: `When you kill a foe, you can
        attempt a sneaking action to immediately hide from
        anyone around, assuming that a suitable hiding
        place is nearby. Enabler.`,
      },
    ],
  },
  {
    name: 'Rages',
    origin: { title: TITLE, page: 71 },
    description: `The berserker is a feared fighter who cannot be
    stopped. You put yourself into a howling battle frenzy
    that can make you a terror on the battlefield. You
    might hail from a less civilized society, perhaps even
    a tribal one.
    You likely wear little or no armor so as not to
    restrict your speed or maneuverability. Your clothing
    is probably simple and utilitarian.
    Glaives make the best berserkers.`,
    benefits: [
      {
        name: 'Connection',
        description: `Choose one other PC. You feel
        strangely protective toward that character and don’t
        want to see her come to harm.
        Minor Effect Suggestions: When fighting multiple foes, you knock one into another, putting both off balance. As a result, treat both foes as one level lower for one round.
        Major Effect Suggestions: Your foe is terrified of your rage and uses his next two actions to flee.`,
        upgrade: (char) => console.log(char),
      },
    ],
    tiers: [
      {
        name: 'Frenzy',
        level: 1,
        type: ActionType.ENABLER,
        description: `When you wish,
        while in combat, you can enter a state of frenzy.
        While in this state, you can’t use Intellect points,
        but you gain +1 to your Might Edge and your Speed
        Edge. This effect lasts for as long as you wish, but
        it ends if no combat is taking place within range of
        your senses. Enabler.`,
      },
      {
        name: 'Hardy',
        level: 2,
        type: ActionType.ENABLER,
        description: `You gain +5 to your Might Pool.
        These additional points can be used only to absorb
        damage. You can’t spend them to apply Effort to
        rolls. Enabler.`,
        benefit: {
          name: 'Mobile Fighter',
          description: `You are trained in climbing and jumping tasks. Enabler.`,
          upgrade: (char) => console.log(char),
        },
      },
      {
        name: 'Power Strike',
        level: 3,
        type: ActionType.ENABLER,
        description: `If you
        successfully attack a target, you knock it prone in
        addition to inflicting damage. The target must be
        your size or smaller. You can knock down a target
        larger than you if you apply a level of Effort to do so
        (rather than to decrease the difficulty of the attack).
        Enabler`,
        benefit: {
          name: 'Unamored Fighter',
          description: `While unarmored, you are trained in Speed defense tasks. Enabler.`,
          upgrade: (char) => console.log(char),
        },
      },
      {
        name: 'Greater Frenzy',
        level: 4,
        type: ActionType.ENABLER,
        description: `When you
        wish, while in combat, you can enter a state of frenzy.
        While in this state, you can’t use Intellect points,
        but you gain +2 to your Might Edge and your Speed
        Edge. This effect lasts for as long as you wish, but
        it ends if no combat is taking place within range of
        your senses. You can use this ability or your first-tier
        Frenzy ability, but you can’t use both at the same
        time. Enabler.`,
      },
      {
        name: 'Attack and Attack Again',
        level: 5,
        type: ActionType.ENABLER,
        description: `Rather than granting
        additional damage or a minor or major effect, a
        natural 17 or higher on your attack roll allows you
        the option of immediately making another attack.
        Enabler`,
      },
      {
        name: 'Tough and Fast',
        level: 6,
        type: ActionType.ENABLER,
        description: `You gain +6 to your Might Pool and your Speed Pool. Enabler.`,
      },
    ],
  },
  {
    name: 'Rides the Lighting',
    origin: { title: TITLE, page: 71 },
    description: `The ancients harnessed electricity in strange and
    wonderful ways. Through practice and inherent
    ability (or the subtle use of hidden or implanted
    devices), you control the same energy. Not only can
    you create and discharge electrical power, but you
    can eventually learn to use it to transport yourself.
    You probably wear tight-fitting clothing that allows
    you to move quickly. Your garments might be blue
    and black, perhaps with a lightning-bolt motif.
    Although nanos seem most suited to wielding
    lightning, jacks can make good use of the varied
    lightning abilities.`,
    benefits: [
      {
        name: 'Connection',
        description: `Pick one other PC. This character
        has been your friend for a long time, and you
        have learned to bring her along when you ride the
        lightning. If the character is standing right next to
        you, you can take her with you when you use the Bolt
        Rider or Electrical Flight powers. (Normally, neither
        ability allows you to transport other creatures.)`,
        upgrade: (char) => console.log(char),
      },
      {
        name: 'Additional Equipment',
        description: `You have a bag of
        miscellaneous batteries and power cells. Whenever you
        find a new device that operates on batteries or cells
        (GM discretion), there is a 75 percent chance that the
        bag contains one that will power it if it depletes.`,
        upgrade: (char) => console.log(char),
      },
      {
        name: 'Electrical Esoteries',
        description: `If you perform esoteries,
        those that would normally use force or other energy
        instead use electricity. For example, a Flash or an
        Onslaught force blast is a blast of lightning. This
        alteration changes nothing other than the type of
        damage and the fact that it might start fires.
        Minor Effect Suggestions: The target is dazed by electricity for one round, during which time the difficulty of all tasks it performs is modified by one step to its detriment. Electricity can also shut down an android, robot, or other automaton for one round.        
        Major Effect Suggestions: Devices filled with electrical power explode. You can target and destroy an artifact that a foe is holding or wearing.`,
        upgrade: (char) => console.log(char),
      },
    ],
    tiers: [
      {
        name: 'Shock',
        level: 1,
        type: ActionType.ACTION,
        description: `Your hands crackle
        with electricity, and the next time you touch a
        creature, you inflict 3 points of damage. Alternatively,
        if you wield a weapon, for ten minutes it crackles
        with electricity and inflicts 1 additional point of
        damage per attack. Action for touch; enabler for
        weapon.`,
        cost: { attribute: Attribute.INTELLECT, value: 1 },
        benefit: {
          name: 'Charge',
          description: `You can charge an
          artifact or other device (except a cypher) so that it
          can be used once. The cost is 1 Intellect point plus 1
          point per level of the device. Action.`,
          cost: { attribute: Attribute.INTELLECT, value: 1 },
          upgrade: (char) => console.log(char),
        },
      },
      {
        name: 'Bolt Rider',
        level: 2,
        type: ActionType.ACTION,
        description: `You can move
        a long distance from one location to another almost
        instantaneously, carried by a bolt of lightning. You
        must be able to see the new location, and there must
        be no intervening barriers. Action.`,
      },
      {
        name: 'Lightning Swift',
        level: 3,
        type: ActionType.ENABLER,
        description: `You gain +3 to your Speed
        Pool and +1 to your Speed Edge. Enabler.`,
        benefit: {
          name: 'Drain Charge',
          description: `You can drain the power from an
          artifact or device, allowing you to regain 1 Intellect
          point per level of the device. You regain points at
          the rate of 1 point per round and must give your
          full concentration to the process each round. The
          GM determines whether the device is fully drained
          (likely true of most handheld or smaller devices) or
          retains some power (likely true of large machines).
          Action to initiate; action each round to drain.`,
          upgrade: (char) => console.log(char),
        },
      },
      {
        name: 'Bolts of Power',
        level: 4,
        type: ActionType.ACTION,
        description: `You blast
        a fan of lightning out to short range in an arc that is
        approximately 50 feet (15 m) wide at the end. This
        discharge inflicts 4 points of damage. If you apply
        Effort to increase the damage rather than to decrease
        the difficulty, you deal 2 additional points of damage
        per level of Effort (instead of 3 points); however,
        targets in the area take 1 point of damage even if you
        fail the attack roll. Action.`,
        cost: { attribute: Attribute.INTELLECT, value: 5 },
      },
      {
        name: 'Electrical Flight',
        level: 5,
        type: ActionType.ACTION,
        description: `You exude
        an aura of crackling electricity that lets you fly for ten
        minutes. You can’t carry other creatures with you.
        Action to activate.`,
        cost: { attribute: Attribute.INTELLECT, value: 5 },
      },
      {
        name: 'Wall of Lightning',
        level: 6,
        type: ActionType.ACTION,
        description: `You
        create a barrier of crackling electricity up to 2,500
        square feet (230 sq. m) in size, shaped as you wish.
        The wall is a level 7 barrier. Anyone within immediate
        distance of the wall automatically takes 10 points of
        damage. The wall lasts for one hour. Action to create.`,
        cost: { attribute: Attribute.INTELLECT, value: 6 },
      },
    ],
  },
  {
    name: 'Talks To Machines',
    origin: { title: TITLE, page: 72 },
    description: `Since you were young, you had an affinity for
    machines. It seemed almost like you were speaking
    to them.
    You were. You have the ability to use your organic
    brain like a computer, interfacing “wirelessly” with
    any electronic device. You can control and influence
    them in ways that others can’t. Computers are your
    friends and companions. You have also learned to
    repair machines of all kinds because the better they
    work, the better off you are as well.
    You likely wear a tool belt full of various implements,
    and machine oils stain your clothes and fingertips.
    All types of characters can spend their time talking to
    machines, although this practice fits the nano best of all.`,
    benefits: [
      {
        name: 'Connection',
        description: `Pick one other PC. That character
        seems to have a terrible relationship with
        machines—or at least the machines that you
        communicate with. If she is next to a machine that
        you interact with in a friendly manner, that machine
        is treated in all ways as being one level lower than
        normal (unless doing so benefits you or her, in
        which case the level does not change).`,
        upgrade: (char) => console.log(char),
      },
      {
        name: 'Additional Equipment',
        description: `A bag of small tools.
        Minor Effect Suggestions: The duration of influence or control is doubled.
        Major Effect Suggestions: The duration of influence or control becomes 28 hours.`,
        upgrade: (char) => console.log(char),
      },
    ],
    tiers: [
      {
        name: 'Machine Affinity',
        level: 1,
        type: ActionType.ENABLER,
        description: `You are trained in all tasks involving electrical machines. Enabler.`,
        benefit: {
          name: 'Distant Activation',
          description: `You can
          activate or deactivate any machine you can see
          within short range, even if normally you would have
          to touch or manually operate the device. To use
          this ability, you must understand the function of
          the machine, it must be your size or smaller, and
          it can’t be connected to another intelligence (or be
          intelligent itself). Action.`,
          upgrade: (char) => console.log(char),
        },
      },
      {
        name: 'Coaxing Power',
        level: 2,
        type: ActionType.ACTION,
        description: `You boost the power or function of a machine so that
        it operates at one level higher than normal for one
        hour. Action to initiate.`,
        benefit: {
          name: 'Charm Machine',
          description: `You convince
          an unintelligent machine to “like” you. A machine
          that likes you is 50 percent less likely to function if
          said function would cause you harm. Thus, if a foe
          attempts to detonate a bomb near you controlled
          by a detonator that likes you, there is a 50 percent
          chance that it won’t explode. Action to initiate.`,
          upgrade: (char) => console.log(char),
        },
      },
      {
        name: 'Intelligent Interface',
        level: 3,
        type: ActionType.ENABLER,
        description: `You can
        speak telepathically with any intelligent machine within
        long range. Further, you are trained in all interactions
        with intelligent machines. Such machines and
        automatons that normally would never communicate
        with a human might talk to you. Enabler.`,
        cost: { attribute: Attribute.INTELLECT, value: 3 },
      },
      {
        name: 'Machine Companion',
        level: 4,
        type: ActionType.ENABLER,
        description: `You create a level 3
        animate, intelligent machine that accompanies
        you and acts as you direct. As a level 3 machine
        companion, it has a target number of 9 and a health of
        9, and it inflicts 3 points of damage. If it’s destroyed, it
        takes you one month to create a new one. Enabler.`,
        benefit: {
          name: 'Robot Fight',
          description: `When fighting an automaton or
          intelligent machine, you are trained in attacks and
          defense. Enabler.`,
          upgrade: (char) => console.log(char),
        },
      },
      {
        name: 'Information Gathering',
        level: 5,
        type: ActionType.ACTION,
        description: `You
        speak telepathically with any or all machines within 1
        mile (1.6 km). You can ask one basic question about
        themselves or anything happening near them and
        receive a simple answer. For example, while in an area
        with many machines, you could ask “Where is the ravage
        bear?” and if the creature is within a mile of you, one or
        more machines will probably provide the answer. Action`,
        cost: { attribute: Attribute.INTELLECT, value: 5 },
      },
      {
        name: 'Control Machine',
        level: 6,
        type: ActionType.ACTION,
        description: `You can
        control the functions of any machine, intelligent or
        otherwise, within short range. This effect lasts ten
        minutes. Action.`,
        cost: { attribute: Attribute.INTELLECT, value: 6 },
      },
    ],
  },
  {
    name: 'Wears A Sheen Of Ice',
    origin: { title: TITLE, page: 73 },
    description: `Through your studies, you have learned to focus your
    natural talents to command the powers of ice and cold.
    People might refer to you as an ice mage. Sometimes
    ice mages are thought to come into conflict with those
    known as fire mages, but this is a fallacy believed by
    ordinary folks more than anything based in truth.
    You likely wear white or blue garments that are
    heavier than they need to be—unless you live in
    a cold region or wintry clime, in which case you
    probably wear less clothing than other people do
    because the cold doesn’t bother you.
    Most ice mages are nanos, but a glaive armored
    in ice, perhaps wielding an ice sword, would be quite
    impressive.`,
    benefits: [
      {
        name: 'Connection',
        description: `Pick one other PC. Due to a quirk of
        the numenera, if that character is standing next to
        you when you use your Ice Armor ability, he is also
        protected by a sheen of ice. (He does not get the
        added protection of your Resilient Ice Armor ability.)`,
        upgrade: (char) => console.log(char),
      },
      {
        name: 'Additional Equipment',
        description: `You have a bladed weapon made of stronglass that looks like ice.`,
        upgrade: (char) => console.log(char),
      },
      {
        name: 'Ice Esoteries',
        description: `If you perform esoteries, those that would
        normally use force or other energy instead use cold and ice.
        For example, an Onslaught force blast is a ray of frost, and
        Flash produces a blast of cold and ice shards. This alteration
        changes nothing other than the type of damage. As another
        example, Barrier creates a wall of ice. This alteration
        changes nothing except the wall’s appearance and the fact
        that it takes 2 additional points of damage from fire.
        Minor Effect Suggestions: The surface around the target becomes slick and difficult to stand on.
        Major Effect Suggestions: The target is covered in ice that hinders its movement for one minute, during which time the difficulty of all tasks it performs is modified by one step to its detriment.`,
        upgrade: (char) => console.log(char),
      },
    ],
    tiers: [
      {
        name: 'Ice Armor',
        level: 1,
        type: ActionType.ENABLER,
        description: `When you wish
        it, your body is covered in a sheen of ice for ten
        minutes that gives you +1 to Armor. While the sheen
        is active, you feel no discomfort from normal cold
        temperatures and have an additional +2 to Armor
        versus cold damage specifically. Enabler.`,
        cost: { attribute: Attribute.INTELLECT, value: 1 },
      },
      {
        name: 'Frost Touch',
        level: 2,
        type: ActionType.ACTION,
        description: `Your hands
        become so cold that the next time you touch a
        creature, you inflict 3 points of damage. Alternatively,
        you can use this ability on a weapon, and for ten
        minutes, it inflicts 1 additional point of damage from
        the cold. Action for touch; enabler for weapon.`,
        cost: { attribute: Attribute.INTELLECT, value: 1 },
      },
      {
        name: 'Freezing Touch',
        level: 3,
        type: ActionType.ACTION,
        description: `Your hands
        become so cold that, in addition to inflicting damage
        as described under Frost Touch, your touch freezes
        solid a living target of your size or smaller, rendering
        it immobile for one round. Action.`,
        cost: { attribute: Attribute.INTELLECT, value: 4 },
      },
      {
        name: 'Resilient Ice Armor',
        level: 4,
        type: ActionType.ENABLER,
        description: `The sheen of ice you
        generate using your Ice Armor ability gives you an
        additional +1 to Armor. Enabler`,
      },
      {
        name: 'Cold Burst',
        level: 5,
        type: ActionType.ACTION,
        description: `You emit a
        blast of cold in all directions, up to short range. All
        within the burst take 5 points of damage. If you apply
        Effort to increase the damage rather than to decrease
        the difficulty, you deal 2 additional points of damage
        per level of Effort (instead of 3 points); however,
        targets in the area take 1 point of damage even if you
        fail the attack roll. Action.`,
        cost: { attribute: Attribute.INTELLECT, value: 5 },
      },
      {
        name: 'Ice Creation',
        level: 6,
        type: ActionType.ACTION,
        description: ` You create
        a solid object of ice that is your size or smaller.
        The object is crude and can have no moving
        parts, so you can make a sword, a shield, a short
        ladder, and so on. Your ice objects are as strong
        as iron, but if you’re not in constant contact
        with them, they function for only 1d6 + 6 rounds
        before breaking or melting. For example, you can
        make and wield an ice sword, but if you give it to
        another PC, the sword won’t last as long for that
        character. Action.`,
        cost: { attribute: Attribute.INTELLECT, value: 6 },
      },
    ],
  },
  {
    name: 'Wields Power With Precision',
    origin: { title: TITLE, page: 74 },
    description: `Not only are you blessed with a great command
    of the numenera, but you are also trained to
    exploit esoteries in ways that elevate you above
    other nanos and jacks. Some people believe that
    those who perform esoteries are born with the
    ability, but you know that skill and intelligence
    play important roles. The ancients created the
    numenera through knowledge, discovery, and
    intellect, and to use it properly, you must follow
    the same path.
    You probably wear spectacles and dapper
    outfits, carrying extra books, notebooks, and pens
    so you can continually focus on your studies and
    experiments.
    Nanos usually receive this instruction and focus,
    but some jacks do as well. Glaives never do.`,
    benefits: [
      {
        name: 'Connection',
        description: `Pick one other PC. You’ve placed an
        immutable, one-time ward that renders her immune
        to the esoteries you perform unless she wants to be
        affected.`,
        upgrade: (char) => console.log(char),
      },
      {
        name: 'Additional Equipment',
        description: `You have an additional book on the subject of the numenera.
        Minor Effect Suggestions: The esotery overwhelms and dazzles the target for one round, during which time the difficulty of all tasks it performs is modified by one step to its detriment.
        Major Effect Suggestions: The esotery terrifies the target, who uses its next two turns to flee.`,
        upgrade: (char) => console.log(char),
      },
    ],
    tiers: [
      {
        name: 'Genius',
        level: 1,
        type: ActionType.ENABLER,
        description: `Your Intellect Pool increases by 5 points. Enabler`,
      },
      {
        name: 'Training and Precision',
        level: 2,
        type: ActionType.ENABLER,
        description: `You are trained in all
        esoteries. As a result, you reduce the difficulty of any
        task involved in the use of an esotery by one step.
        Enabler.`,
      },
      {
        name: 'Enhanced Esoteries',
        level: 3,
        type: ActionType.ENABLER,
        description: `Your esoteries that have
        durations last twice as long. Your esoteries that
        have short ranges reach to long range instead. Your
        esoteries that inflict damage deal 1 additional point
        of damage. Enabler.`,
      },
      {
        name: 'Greater Repetoire',
        level: 4,
        type: ActionType.ENABLER,
        description: `You can learn one additional esotery of fourth tier or lower. Enabler.`,
      },
      {
        name: 'Greater Training',
        level: 5,
        type: ActionType.ENABLER,
        description: `You are specialized in all
        esoteries. As a result, you reduce the difficulty of any
        task involved in the use of an esotery by two steps.
        Enabler.`,
      },
      {
        name: 'Supra-Genius',
        level: 6,
        type: ActionType.ENABLER,
        description: `Your Intellect Pool increases by 5, and your Intellect Edge increases by 1. Enabler.`,
      },
    ],
  },
  {
    name: 'Wields Two Weapons At Once',
    origin: { title: TITLE, page: 75 },
    description: `You bear steel with both hands, ready to take on any
    foe. You fight with two weapons in melee, sometimes
    called dual wielding. A fearsome warrior, quick and
    strong, you believe that the best defense is a strong
    offense.
    You probably sheathe one weapon on each side or
    both crossed behind your back. They are likely your
    most prized possessions, and you might have names
    for them.
    Many glaives and jacks train to fight with two
    weapons at once. Very rarely would a nano spend the
    time required to learn such a purely physical art, but
    it’s possible.`,
    benefits: [
      {
        name: 'Connection',
        description: `: Pick one other PC. You have trained
        with this character so much that if the two of you
        stand back to back in a fight, you both gain a +1
        bonus to Speed defense tasks.`,
        upgrade: (char) => console.log(char),
      },
      {
        name: 'Additional Equipment',
        description: `You start with an additional light melee weapon.
        Minor Effect Suggestions: The target is intimidated and flees as its next action
        Major Effect Suggestions: You can make an immediate additional attack with one of your weapons`,
        upgrade: (char) => console.log(char),
      },
    ],
    tiers: [
      {
        name: 'Dual Light Wield',
        level: 1,
        type: ActionType.ENABLER,
        description: `You can use two light
        weapons at the same time, making two separate
        attacks on your turn as a single action. You remain
        limited by the amount of Effort you can apply on
        one action, but because you make separate attacks,
        your opponent’s Armor applies to both. Anything
        that modifies your attack or damage applies to both
        attacks, unless it’s specifically tied to one of the
        weapons. Enabler.`,
      },
      {
        name: 'Double Strike',
        level: 2,
        type: ActionType.ACTION,
        description: `When you
        wield two weapons, you can choose to make one
        attack roll against a foe. If you hit, you inflict damage
        with both weapons plus 2 additional points of
        damage, and because you made a single attack, the
        target’s Armor is subtracted only once. Action.`,
        cost: { attribute: Attribute.MIGHT, value: 3 },
      },
      {
        name: 'Dual Medium Wield',
        level: 3,
        type: ActionType.ENABLER,
        description: `You can use two light
        weapons or medium weapons at the same time (or
        one light weapon and one medium weapon), making
        two separate attacks on your turn as a single action.
        This ability otherwise works like the Dual Light Wield
        ability. Enabler.`,
      },
      {
        name: 'Dual Defence',
        level: 4,
        type: ActionType.ENABLER,
        description: `When you wield two weapons, you are trained in Speed defense tasks. Enabler.`,
      },
      {
        name: 'Dual Distraction',
        level: 5,
        type: ActionType.ENABLER,
        description: `When you
        wield two weapons, your opponent’s next attack is
        hindered. As a result, the difficulty of your defense
        roll against that attack is reduced by one step, and
        the difficulty of your next attack is reduced by one
        step. Enabler.`,
        cost: { attribute: Attribute.SPEED, value: 4 },
      },
      {
        name: 'Whirling Dervish',
        level: 6,
        type: ActionType.ENABLER,
        description: `When you wield two
        weapons, you can attack up to six times in one round
        as a single action, but you must make each attack
        against a different foe. Make a separate attack roll
        for each attack. You remain limited by the amount
        of Effort you can apply on one action, but because
        you make separate attacks, Armor applies to each of
        them. Anything that modifies your attack or damage
        applies to all attacks (positively or negatively), unless
        it’s specifically tied to one of the weapons, in which
        case it applies to only half of the attacks. Enabler.`,
      },
    ],
  },
  {
    name: 'Works Miracles',
    origin: { title: TITLE, page: 75 },
    description: `You manipulate matter and time to help others
    and are beloved by everyone you encounter. Some
    people consider you a representative of the gods
    or a power from beyond this world. Perhaps they’re
    right—transdimensional experiments in the prior
    worlds might be what created the energies that you
    now wield.
    You probably wear simple clothes—nothing too flashy or
    stylish. There’s no need to call more attention to yourself.
    Nanos are the likeliest miracle workers, using their
    mental fortitude to focus the power of healing. A
    glaive who can heal himself, though, is an interesting
    and dangerous proposition.`,
    benefits: [
      {
        name: 'Connection',
        description: `Pick one other PC. This character
        quietly suspects that you’re a messiah or
        supernatural being. You can choose whether or not
        you’re aware of his suspicion.
        Minor Effect Suggestions: The target is healed for 1 additional point.
        Major Effect Suggestions: The target is healed for 2 additional points`,
        upgrade: (char) => console.log(char),
      },
    ],
    tiers: [
      {
        name: 'Healing Touch',
        level: 1,
        type: ActionType.ACTION,
        description: `With a
        touch, you restore 1d6 points to one stat Pool of any
        creature. This ability is a difficulty 2 Intellect task. Each
        time you attempt to heal the same creature, the task
        difficulty increases by one step. The difficulty returns
        to 2 after that creature rests for ten hours. Action.`,
        cost: { attribute: Attribute.INTELLECT, value: 1 },
      },
      {
        name: 'Alleviate',
        level: 2,
        type: ActionType.ACTION,
        description: `You attempt
        to cancel or cure one malady (such as disease or
        poison) in one creature. Action.`,
        cost: { attribute: Attribute.INTELLECT, value: 3 },
      },
      {
        name: 'Font of Healing',
        level: 3,
        type: ActionType.ENABLER,
        description: `With your approval, other
        creatures can touch you and regain 1d6 points to either
        their Might Pool or their Speed Pool. This healing costs
        them 2 Intellect points. A single creature can benefit
        from this ability only once each day. Enabler.`,
      },
      {
        name: 'Inspiration',
        level: 4,
        type: ActionType.ACTION,
        description: `Through mental
        inspiration and the manipulation of time, one creature
        you choose within short range is granted an additional,
        immediate action, which it can take out of turn. Action.`,
        cost: { attribute: Attribute.INTELLECT, value: 4 },
      },
      {
        name: 'Undo',
        level: 5,
        type: ActionType.ACTION,
        description: `You turn back
        time a few seconds, effectively undoing a single
        creature’s most recent action. That creature can then
        immediately repeat the same action or try something
        different. Action.`,
        cost: { attribute: Attribute.INTELLECT, value: 5 },
      },
      {
        name: 'Greater Healing Touch',
        level: 6,
        type: ActionType.ACTION,
        description: `You touch a creature and restore its Might Pool,
        Speed Pool, and Intellect Pool to their maximum
        values, as if it were fully rested. A single creature can
        benefit from this ability only once each day. Action.`,
      },
    ],
  },
  {
    name: 'Works The Back Alleys',
    origin: { title: TITLE, page: 76 },
    description: `The thief, the burglar, the pickpocket: these are the
    dangerous individuals who haunt the back alleys of
    every community. You are a thief in a city or town,
    making your livelihood at the expense of the wealthy.
    Your talents, however, prepare you for all kinds of
    pursuits, even when you’re not crouching in an alley
    or climbing into a window.
    Usually, you dress to blend in with the crowd.
    When you’re on a mission, black, form-fitting
    clothing allows you to swim in the shadows.
    Most thieves are jacks, but nanos make interesting
    burglars as well. A glaive thief likely adds a little more
    physicality to his crimes.`,
    benefits: [
      {
        name: 'Connection',
        description: `Pick one other PC. The character knew
        you beforehand and convinced you to leave your life
        of crime for other pursuits—at least temporarily.`,
        upgrade: (char) => console.log(char),
      },
      {
        name: 'Additional Equipment',
        description: `You start with a bag of light tools
        Minor Effect Suggestions: You can immediately attempt to hide after this action.
        Major Effect Suggestions: You can immediately take a second action during this turn.`,
        upgrade: (char) => console.log(char),
      },
    ],
    tiers: [
      {
        name: 'Thief',
        level: 1,
        type: ActionType.ENABLER,
        description: `You are trained in sneaking,
        pickpocketing, and lockpicking tasks. Enabler`,
      },
      {
        name: 'Underworld COntacts',
        level: 2,
        type: ActionType.ENABLER,
        description: `You know many
        people in a variety of communities who engage in
        illegal activities. These people are not necessarily
        your friends and might not be trustworthy, but they
        recognize you as a peer. You and the GM should
        work out the details of your underworld contacts.
        Enabler.`,
      },
      {
        name: 'Pull a Fast One',
        level: 3,
        type: ActionType.ENABLER,
        description: `When you’re
        running a con, picking a pocket, fooling or tricking a
        dupe, sneaking something by a guard, and so on, you
        treat the task as if it were one level lower. Enabler.`,
        cost: { attribute: Attribute.INTELLECT, value: 3 },
      },
      {
        name: 'Master Thief',
        level: 4,
        type: ActionType.ENABLER,
        description: `You are trained in climbing,
        escaping from bonds, slipping through narrow
        places, and other contortionist moves. Enabler.`,
      },
      {
        name: 'Dirty Fighter',
        level: 5,
        type: ActionType.ACTION,
        description: `You distract,
        blind, annoy, hamper, or otherwise interfere with a foe,
        hindering his attack and defense rolls for one minute.
        As a result, the difficulty of your defense rolls and attack
        rolls against the foe is reduced by one step. Action.`,
        cost: { attribute: Attribute.SPEED, value: 2 },
      },
      {
        name: 'Alley Rat',
        level: 6,
        type: ActionType.ACTION,
        description: `While in a city,
        you find or create a significant shortcut, secret
        entrance, or emergency escape route where it looked
        like none existed. You and the GM should work out
        the details. Action.`,
        cost: { attribute: Attribute.INTELLECT, value: 4 },
      },
    ],
  },
];

const DESCRIPTORS: Array<Descriptor> = [
  {
    name: 'Charming',
    origin: { title: TITLE, page: 47 },
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
    origin: { title: TITLE, page: 48 },
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
    origin: { title: TITLE, page: 48 },
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
    origin: { title: TITLE, page: 48 },
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
    origin: { title: TITLE, page: 48 },
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
    origin: { title: TITLE, page: 49 },
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
    origin: { title: TITLE, page: 49 },
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
    origin: { title: TITLE, page: 50 },
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
    origin: { title: TITLE, page: 50 },
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
    origin: { title: TITLE, page: 50 },
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
    origin: { title: TITLE, page: 51 },
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
    origin: { title: TITLE, page: 51 },
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

const TYPES: Array<CharacterType> = [
  {
    name: 'Glaive',
    origin: { title: TITLE, page: 26 },
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
    origin: { title: TITLE, page: 32 },
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
    origin: { title: TITLE, page: 40 },
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

export const NUMENERA_COREBOOK: SourceBook = {
  title: TITLE,
  descriptors: DESCRIPTORS,
  foci: FOCI,
  types: TYPES,
};
