<script lang="ts">
    import type { Skill } from "./Skill";

    export let skill_name: string;
    export let skill_max: number;
    export let skill_curr: number;
    export let edit_mode: boolean;

    function random(min: number, max: number) {
        return Math.floor(Math.random() * (max - min + 1) + min);
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
</script>

<label for="sp_{skill_name}">{skill_name}: </label>
<span class="w-max" id="sp_{skill_name}">
    <input
        class="w-9 text-right pr-2 border-gray-400 hover:border-gray-600 border rounded-s-xl"
        type="text"
        readonly={!edit_mode}
        bind:value={skill_max}
        on:click={() => basicCompRoll(skill_curr)}
    />
    <input
        class="w-9 text-left pl-2 border-gray-400 hover:border-gray-600 border rounded-e-xl"
        type="text"
        bind:value={skill_curr}
        readonly
    />
</span>