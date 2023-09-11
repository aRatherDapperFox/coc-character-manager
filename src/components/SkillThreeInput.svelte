<script lang="ts">
    import type { Skill } from "./Skill";

    export let skill: Skill;
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
</script>

<label for="sp_{skill.name}">{skill.name}: </label>
<span class="w-max" id="sp_{skill.name}">
    <input
        class="w-9 text-right pr-2 border-gray-400 hover:border-gray-600 border rounded-s-xl"
        type="text"
        readonly={!edit_mode}
        bind:value={skill.reg}
        on:click={() => skillRoll(skill)}
    />
    <input
        class="w-9 text-center border-gray-400 hover:border-gray-600 border"
        type="text"
        bind:value={skill.half}
        readonly
    />
    <input
        class="w-9 text-left pl-2 border-gray-400 hover:border-gray-600 border rounded-e-xl"
        type="text"
        bind:value={skill.fifth}
        readonly
    />
</span>
