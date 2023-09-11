<script lang=ts>
    import type Skill from "../components/Skill.svelte";

    export let ricky: any;
    export let edit_mode: boolean;

    function random(min: number, max: number) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    function skillRoll(skill: Skill) {
        if (!edit_mode) {
            let roll = random(1, 100);

            if (roll <= skill.fifth) {
                alert(roll + ": Critical Success!");
                return "crit";
            } else if (roll <= skill.half) {
                alert(roll + ": Hard Success!");
                return "hard";
            } else if (roll <= skill.reg) {
                alert(roll + ": Success!");
                return "pass";
            } else {
                alert(roll + ": Fail.");
                return "fail";
            }
        }
    }

    function basicCompRoll(num: number) {
        if (!edit_mode) {
            let roll = random(1, 100);

            if (roll <= num) {
                alert(roll + ": Success!");
            } else {
                alert(roll + ": Fail.");
            }
        }
    }

    function basicRoll() {
        let roll = random(1, 100);

        alert("You rolled: " + roll);
    }
</script>

<div class="grid grid-cols-6 gap-2 w-3/4 mb-3">
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

<hr class="w-5/6 border-gray-300" />

<div class="grid grid-cols-6 gap-1 w-3/4 mt-3">
    <label for="sp_str">Str: </label>
    <span class="w-max">
        <input
            class="w-9 text-right pr-2 border-gray-400 hover:border-gray-600 border rounded-s-xl"
            type="text"
            readonly={!edit_mode}
            bind:value={ricky.str.reg}
            on:click={() => skillRoll(ricky.str)}
        />
        <input
            class="w-9 text-center border-gray-400 hover:border-gray-600 border"
            type="text"
            bind:value={ricky.str.half}
            readonly
        />
        <input
            class="w-9 text-left pl-2 border-gray-400 hover:border-gray-600 border rounded-e-xl"
            type="text"
            bind:value={ricky.str.fifth}
            readonly
        />
    </span>

    <label for="sp_siz">Siz: </label>
    <span class="w-max">
        <input
            class="w-9 text-right pr-2 border-gray-400 hover:border-gray-600 border rounded-s-xl"
            type="text"
            readonly={!edit_mode}
            bind:value={ricky.siz.reg}
            on:click={() => skillRoll(ricky.siz)}
        />
        <input
            class="w-9 text-center border-gray-400 hover:border-gray-600 border"
            type="text"
            bind:value={ricky.siz.half}
            readonly
        />
        <input
            class="w-9 text-left pl-2 border-gray-400 hover:border-gray-600 border rounded-e-xl"
            type="text"
            bind:value={ricky.siz.fifth}
            readonly
        />
    </span>

    <label for="sp_hit_points">Hit Points: </label>
    <span class="w-max">
        <input
            class="w-9 text-right pr-2 border-gray-400 hover:border-gray-600 border rounded-s-xl"
            type="text"
            readonly={!edit_mode}
            bind:value={ricky.max_hit_points}
        />
        <input
            class="w-9 text-left pl-2 border-gray-400 hover:border-gray-600 border rounded-e-xl"
            type="text"
            bind:value={ricky.curr_hit_points}
        />
    </span>

    <label for="sp_con">Con: </label>
    <span class="w-max">
        <input
            class="w-9 text-right pr-2 border-gray-400 hover:border-gray-600 border rounded-s-xl"
            type="text"
            readonly={!edit_mode}
            bind:value={ricky.con.reg}
            on:click={() => skillRoll(ricky.con)}
        />
        <input
            class="w-9 text-center border-gray-400 hover:border-gray-600 border"
            type="text"
            bind:value={ricky.con.half}
            readonly
        />
        <input
            class="w-9 text-left pl-2 border-gray-400 hover:border-gray-600 border rounded-e-xl"
            type="text"
            bind:value={ricky.con.fifth}
            readonly
        />
    </span>

    <label for="sp_pow">Pow: </label>
    <span class="w-max">
        <input
            class="w-9 text-right pr-2 border-gray-400 hover:border-gray-600 border rounded-s-xl"
            type="text"
            readonly={!edit_mode}
            bind:value={ricky.pow.reg}
            on:click={() => skillRoll(ricky.pow)}
        />
        <input
            class="w-9 text-center border-gray-400 hover:border-gray-600 border"
            type="text"
            bind:value={ricky.pow.half}
            readonly
        />
        <input
            class="w-9 text-left pl-2 border-gray-400 hover:border-gray-600 border rounded-e-xl"
            type="text"
            bind:value={ricky.pow.fifth}
            readonly
        />
    </span>

    <label for="sp_magic_points">Magic Points: </label>
    <span class="w-max">
        <input
            class="w-9 text-right pr-2 border-gray-400 hover:border-gray-600 border rounded-s-xl"
            type="text"
            readonly={!edit_mode}
            bind:value={ricky.max_magic_points}
        />
        <input
            class="w-9 text-left pl-2 border-gray-400 hover:border-gray-600 border rounded-e-xl"
            type="text"
            bind:value={ricky.curr_magic_points}
        />
    </span>

    <label for="sp_dex">Dex: </label>
    <span class="w-max">
        <input
            class="w-9 text-right pr-2 border-gray-400 hover:border-gray-600 border rounded-s-xl"
            type="text"
            readonly={!edit_mode}
            bind:value={ricky.dex.reg}
            on:click={() => skillRoll(ricky.dex)}
        />
        <input
            class="w-9 text-center border-gray-400 hover:border-gray-600 border"
            type="text"
            bind:value={ricky.dex.half}
            readonly
        />
        <input
            class="w-9 text-left pl-2 border-gray-400 hover:border-gray-600 border rounded-e-xl"
            type="text"
            bind:value={ricky.dex.fifth}
            readonly
        />
    </span>

    <label for="sp_app">App: </label>
    <span class="w-max">
        <input
            class="w-9 text-right pr-2 border-gray-400 hover:border-gray-600 border rounded-s-xl"
            type="text"
            readonly={!edit_mode}
            bind:value={ricky.app.reg}
            on:click={() => skillRoll(ricky.app)}
        />
        <input
            class="w-9 text-center border-gray-400 hover:border-gray-600 border"
            type="text"
            bind:value={ricky.app.half}
            readonly
        />
        <input
            class="w-9 text-left pl-2 border-gray-400 hover:border-gray-600 border rounded-e-xl"
            type="text"
            bind:value={ricky.app.fifth}
            readonly
        />
    </span>

    <label for="sp_luck">Luck: </label>
    <span class="w-max">
        <input
            class="w-9 text-right pr-2 border-gray-400 hover:border-gray-600 border rounded-s-xl"
            type="text"
            readonly={!edit_mode}
            bind:value={ricky.max_luck}
            on:click={() => basicCompRoll(ricky.curr_luck)}
        />
        <input
            class="w-9 text-left pl-2 border-gray-400 hover:border-gray-600 border rounded-e-xl"
            type="text"
            bind:value={ricky.curr_luck}
        />
    </span>

    <label for="sp_int">Int: </label>
    <span class="w-max">
        <input
            class="w-9 text-right pr-2 border-gray-400 hover:border-gray-600 border rounded-s-xl"
            type="text"
            readonly={!edit_mode}
            bind:value={ricky.int.reg}
            on:click={() => skillRoll(ricky.int)}
        />
        <input
            class="w-9 text-center border-gray-400 hover:border-gray-600 border"
            type="text"
            bind:value={ricky.int.half}
            readonly
        />
        <input
            class="w-9 text-left pl-2 border-gray-400 hover:border-gray-600 border rounded-e-xl"
            type="text"
            bind:value={ricky.int.fifth}
            readonly
        />
    </span>

    <label for="sp_edu">Edu: </label>
    <span class="w-max">
        <input
            class="w-9 text-right pr-2 border-gray-400 hover:border-gray-600 border rounded-s-xl"
            type="text"
            readonly={!edit_mode}
            bind:value={ricky.edu.reg}
            on:click={() => skillRoll(ricky.edu)}
        />
        <input
            class="w-9 text-center border-gray-400 hover:border-gray-600 border"
            type="text"
            bind:value={ricky.edu.half}
            readonly
        />
        <input
            class="w-9 text-left pl-2 border-gray-400 hover:border-gray-600 border rounded-e-xl"
            type="text"
            bind:value={ricky.edu.fifth}
            readonly
        />
    </span>

    <label for="sp_sanity">Sanity: </label>
    <span class="w-max">
        <input
            class="w-9 text-right pr-2 border-gray-400 hover:border-gray-600 border rounded-s-xl"
            type="text"
            readonly={!edit_mode}
            bind:value={ricky.max_sanity}
            on:click={() => basicCompRoll(ricky.curr_sanity)}
        />
        <input
            class="w-9 text-left pl-2 border-gray-400 hover:border-gray-600 border rounded-e-xl"
            type="text"
            bind:value={ricky.curr_sanity}
        />
    </span>
</div>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<div class="grid grid-cols-5 w-3/4 mt-3">
    <label
        class="cursor-pointer w-max"
        for="ch_temp_insanity"
        on:click={() => (ricky.temp_insanity = !ricky.temp_insanity)}
    >
        <input
            type="checkbox"
            bind:checked={ricky.temp_insanity}
        /> Temporary Insanity
    </label>

    <label
        class="cursor-pointer w-max"
        for="ch_perm_insanity"
        on:click={() => (ricky.perm_insanity = !ricky.perm_insanity)}
    >
        <input
            type="checkbox"
            bind:checked={ricky.perm_insanity}
        /> Indefinite Insanity
    </label>

    <label
        class="cursor-pointer w-max"
        for="ch_major_wound"
        on:click={() => (ricky.major_wound = !ricky.major_wound)}
    >
        <input
            type="checkbox"
            bind:checked={ricky.major_wound}
        /> Major Wound
    </label>

    <label
        class="cursor-pointer w-max"
        for="ch_unconscious"
        on:click={() => (ricky.unconscious = !ricky.unconscious)}
    >
        <input
            type="checkbox"
            bind:checked={ricky.unconscious}
        /> Unconscious
    </label>

    <label
        class="cursor-pointer w-max"
        for="ch_dying"
        on:click={() => (ricky.dying = !ricky.dying)}
    >
        <input
            type="checkbox"
            bind:checked={ricky.dying}
        /> Dying
    </label> 
</div>