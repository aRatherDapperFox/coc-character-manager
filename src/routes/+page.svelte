<script lang="ts">
    import SkillThreeInput from "../components/SkillThreeInput.svelte";
    import { Skill } from "../components/Skill";
    import SkillTwoInput from "../components/SkillTwoInput.svelte";
    import StatusToggle from "../components/StatusToggle.svelte";

    const ricky = {
        name: "Ricky Bullard",
        birthplace: "Brooklyn",
        pronoun: "He/Him",
        occupation: "Journalist",
        residence: "Brooklyn",
        age: 32,
        str: new Skill("Str", 30),
        con: new Skill("Con", 35),
        dex: new Skill("Dex", 45),
        int: new Skill("Int", 80),
        siz: new Skill("Siz", 80),
        pow: new Skill("Pow", 60),
        app: new Skill("App", 65),
        edu: new Skill("Edu", 80),
        max_hit_points: 11,
        curr_hit_points: 7,
        max_magic_points: 0,
        curr_magic_points: 0,
        max_luck: 60,
        curr_luck: 42,
        max_sanity: 60,
        curr_sanity: 35,
        temp_insanity: false,
        perm_insanity: false,
        major_wound: false,
        unconscious: false,
        dying: false,
        skills: [
            new Skill("Accounting", 5),
            new Skill("Anthropology", 1),
            new Skill("Appraise", 5),
            new Skill("Archaeology", 1),
            new Skill("Photography", 40),
            new Skill("Art/Craft", 5),
            new Skill("Charm", 5),
            new Skill("Climb", 20),
            new Skill("Computer Use", 5),
            new Skill("Credit Rating", 30),
            new Skill("Cthulhu Mythos", 0),
            new Skill("Disguise", 5),
            new Skill("Dodge", 23),
            new Skill("Drive Auto", 50),
            new Skill("Elec. Repair", 10),
            new Skill("Electronics", 1),
            new Skill("Fast Talk", 75),
            new Skill("Fighting (Brawl)", 31),
            new Skill("Fighting Blank", 0),
            new Skill("Firearms (Handgun)", 35),
            new Skill("Firearms (Rifle/Shotgun)", 25),
            new Skill("Firearms Blank", 0),
            new Skill("First Aid", 35),
            new Skill("History", 40),
            new Skill("Intimidate", 15),
            new Skill("Jump", 20),
            new Skill("Language", 1),
            new Skill("Language", 1),
            new Skill("Language", 1),
            new Skill("English", 10),
            new Skill("Law", 5),
            new Skill("Library Use", 20),
            new Skill("Listen", 20),
            new Skill("Locksmith", 1),
            new Skill("Mech. Repair", 10),
            new Skill("Medicine", 1),
            new Skill("Natural World", 10),
            new Skill("Navigate", 10),
            new Skill("Occult", 26),
            new Skill("Persuade", 10),
            new Skill("Pilot", 1),
            new Skill("Science", 1),
            new Skill("Science", 1),
            new Skill("Science", 1),
            new Skill("Psychoanalysis", 1),
            new Skill("Psychology", 60),
            new Skill("Ride", 5),
            new Skill("Sleight of Hand", 10),
            new Skill("Spot Hidden", 25),
            new Skill("Stealth", 20),
            new Skill("Survival", 10),
            new Skill("Swim", 20),
            new Skill("Throw", 20),
            new Skill("Track", 10),
            new Skill("Blank", 0),
            new Skill("Blank", 0),
            new Skill("Blank", 0)
    ],
        move: 7,
        build: 0,
        dam_bonus: 0,
        story: "",
        description: "",
        traits: "",
        beliefs: "",
        inj_scars: "",
        sig_people: "",
        phobias: "",
        loc_meaningful: "",
        spells: "",
        obj_treasured: "",
        encounters: "",
        gear: "",
        spend_lvl: 0,
        cash: 0,
        assets: ""
    };

    let edit_mode = false;
    let baseball_bat = new Skill("Baseball Bat", 30);
</script>

<h1 class="text-2xl w-full text-center m-3 font-bold">Investigator</h1>

<div
    class="flex flex-wrap place-content-center border-2 rounded-3xl mx-5 p-3 drop-shadow-sm font-mono text-sm"
>
    <div class="grid grid-cols-6 gap-2 w-4/5">
        <label class="w-max" for="tx_name">Name: </label>
        <input
            class="w-5/6 border-gray-400 hover:border-gray-600 border px-1 rounded-md"
            type="text"
            name="tx_name"
            readonly={!edit_mode}
            bind:value={ricky.name}
        />

        <label class="w-max" for="tx_birthplace">Birthplace: </label>
        <input
            class="w-5/6 border-gray-400 hover:border-gray-600 border px-1 rounded-md"
            type="text"
            name="tx_birthplace"
            readonly={!edit_mode}
            bind:value={ricky.birthplace}
        />

        <label class="w-max" for="tx_pronouns">Pronouns: </label>
        <input
            class="w-5/6 border-gray-400 hover:border-gray-600 border px-1 rounded-md"
            type="text"
            name="tx_pronouns"
            readonly={!edit_mode}
            bind:value={ricky.pronoun}
        />

        <label class="w-max" for="tx_occupation">Occupation: </label>
        <input
            class="w-5/6 border-gray-400 hover:border-gray-600 border px-1 rounded-md"
            type="text"
            name="tx_occupation"
            readonly={!edit_mode}
            bind:value={ricky.occupation}
        />

        <label class="w-max" for="tx_residence">Residence: </label>
        <input
            class="w-5/6 border-gray-400 hover:border-gray-600 border px-1 rounded-md"
            type="text"
            name="tx_residence"
            readonly={!edit_mode}
            bind:value={ricky.residence}
        />

        <label class="w-max" for="tx_age">Age: </label>
        <input
            class="w-5/6 border-gray-400 hover:border-gray-600 border px-1 rounded-md"
            type="text"
            name="tx_age"
            readonly={!edit_mode}
            bind:value={ricky.age}
        />
    </div>

    <hr class="w-5/6 border-gray-300 my-3" />

    <div class="grid grid-cols-6 gap-1 w-4/5">
        <SkillThreeInput skill={ricky.str} {edit_mode} />
        <SkillThreeInput skill={ricky.siz} {edit_mode} />
        <SkillTwoInput
            skill_name="Hit Points"
            skill_max={ricky.max_hit_points}
            skill_curr={ricky.curr_hit_points}
            {edit_mode}
        />

        <SkillThreeInput skill={ricky.con} {edit_mode} />
        <SkillThreeInput skill={ricky.pow} {edit_mode} />
        <SkillTwoInput
            skill_name="Magic Points"
            skill_max={ricky.max_magic_points}
            skill_curr={ricky.curr_magic_points}
            {edit_mode}
        />

        <SkillThreeInput skill={ricky.dex} {edit_mode} />
        <SkillThreeInput skill={ricky.app} {edit_mode} />
        <SkillTwoInput
            skill_name="Luck"
            skill_max={ricky.max_luck}
            skill_curr={ricky.curr_luck}
            {edit_mode}
        />

        <SkillThreeInput skill={ricky.int} {edit_mode} />
        <SkillThreeInput skill={ricky.edu} {edit_mode} />
        <SkillTwoInput
            skill_name="Sanity"
            skill_max={ricky.max_sanity}
            skill_curr={ricky.curr_sanity}
            {edit_mode}
        />
    </div>

    <div class="grid grid-cols-5 w-3/4 mt-3">
        <StatusToggle name="Temporary Insanity" bool={ricky.temp_insanity} />
        <StatusToggle name="Indefinite Insanity" bool={ricky.perm_insanity} />
        <StatusToggle name="Major Wound" bool={ricky.major_wound} />
        <StatusToggle name="Unconscious" bool={ricky.unconscious} />
        <StatusToggle name="Dying" bool={ricky.dying} />
    </div>

    <hr class="w-5/6 border-gray-300 my-3" />

    <h1 class="w-full text-center mb-3 text-lg font-bold">Skills</h1>
    <div class="grid grid-cols-6 w-4/5 gap-1">
        {#each ricky.skills as skill}
            <SkillThreeInput {skill} {edit_mode} />
        {/each}
    </div>
</div>
