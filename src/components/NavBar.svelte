<script lang="ts">
    const miskatonic = {
        name: "Miskatonic",
        route: "/"
    }
    const characters = {
        name: "Characters",
        route: "/characters"
    }
    const about = {
        name: "About",
        route: "/about"
    }

    const nav_links = [miskatonic, characters, about]
</script>

<nav class="text-primary-200 w-full shadow-md bg-gradient-to-t from-primary-700 to-primary-500">
    <ul class="flex h-16 gap-x-5 items-center text-center px-3 text-lg">
        {#each nav_links as link}
            <li class="hover:text-white transition-all"><a href={link.route}>{link.name}</a></li>
        {/each}
    </ul>
</nav>
