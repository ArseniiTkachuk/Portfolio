<template>
    <div class="conteiner">
        <div class="content">

            <h1 class="header">{{ $t("introduce.title.part1") }}<span class="introduce">{{ $t("introduce.title.part2")
                    }}</span>{{ $t("introduce.title.part3") }}</h1>
            <p>{{ $t("introduce.text.part1") }}</p>

            <p>{{ $t("introduce.text.part2.part1") }}<span class="introduce">JavaScript, C++, Node.js, {{
                $t("introduce.text.part2.and") }} Python</span>
                {{ $t("introduce.text.part2.part2") }}</p>

            <p>{{ $t("introduce.text.part3.part1") }}<span class="introduce">Node.js</span>{{
                $t("introduce.text.part3.part2") }}<span class="introduce">Vue</span>{{ $t("introduce.text.part3.part3")
                }}
            </p>

        </div>
    </div>

</template>
<script>

</script>
<style scoped>
.conteiner {
    background-color: rgb(0, 0, 0);
    padding: 10vh;
    text-align: center;
}

.content {
    width: 70vh;
    justify-self: center;
    text-shadow:
        0 0 10px rgba(24, 226, 203, 0.7),
        0 0 50px rgba(24, 226, 203, 0.5),
        0 0 100px rgba(24, 226, 203, 0.2);

}

.header {
    color: azure;
    margin-bottom: 5vh;
    font-size: 30px;
}

.introduce {
    color: blueviolet;
}

p {
    color: azure;
    font-size: 20px;
}

@media (max-width: 768px) {
    .header {
        font-size: 25px;
    }

    .content {
        width: 45vh;
    }
}
</style>
