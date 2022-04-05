<template>
<div class="footer">
    <div class="card-carousel-wrapper">
        <div class="card-carousel">
            <div class="card-carousel--overflow-container">
                <div class="card-carousel-cards" :style="{
              transform: 'translateX' + '(' + currentOffset + 'px' + ')',
            }">
                    <div class="card-carousel--card" v-for="ski in ski" :key="ski.id">
                        <router-link :to="{name: 'Skis' , params : {id : ski.ID}}">
                            <img id="brand" :src="ski.Image" :title="ski.Name" />
                        </router-link>
                    </div>
                    <div class="card-carousel--card" v-for="snowboard in snowboard" :key="snowboard.id">
                        <router-link :to="{name: 'Snowboards' , params : {id : ski.ID}}">
                            <img id="brand" :src="snowboard.Image" :title="snowboard.Name" />
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import {
    db
} from "../firebaseDb";

export default {
    name: "menu_sport_select",
    data() {
        return {
            currentOffset: 0,
            windowSize: 12,
            paginationFactor: 170,
            ski: [],
            snowboard: [],
        };
    },

    created() {
        db.collection("ski").onSnapshot((snapshotChange) => {
            this.ski = [];
            snapshotChange.forEach((doc) => {
                this.ski.push({
                    key: doc.id,
                    Image: doc.data().image,
                    Name: doc.data().name,
                    ID: doc.data().ID,
                });
            });
        });

        db.collection("snowboard").onSnapshot((snapshotChange) => {
            this.snowboard = [];
            snapshotChange.forEach((doc) => {
                this.snowboard.push({
                    key: doc.id,
                    Image: doc.data().image,
                    Name: doc.data().name,
                    ID: doc.data().ID,
                });
            });
        });

    },

    computed: {
        atEndOfList() {
            return (
                this.currentOffset <=
                this.paginationFactor * -1 * (this.skis.length - this.windowSize)
            );
        },
        atHeadOfList() {
            return this.currentOffset === 0;
        },
    },
};
</script>

<style scoped>
a {
    display: inherit;
}

#brand {
    width: 100px;
    height: 100px;
    padding: 10px;
}

.footer {
    width: 100%;
    position: fixed;
    background: #000;
    bottom: 0;
}

.card-carousel-wrapper {
    display: flex;
    align-ski: center;
    justify-content: center;
    margin: 20px 0 20px;
    color: #666a73;
}

.card-carousel {
    display: flex;
    justify-content: center;
    width: 90vw;
}

.card-carousel--overflow-container {
    width: inherit;
}

.card-carousel-cards {
    display: inline-flex;
    transition: transform 150ms ease-out;
    transform: translatex(0px);
}

.card-carousel-cards .card-carousel--card {
    margin: 0 10px;
    cursor: pointer;
    box-shadow: 0 4px 15px 0 rgba(40, 44, 53, 0.06),
        0 2px 2px 0 rgba(40, 44, 53, 0.08);
    background-color: #fff;
    border-radius: 4px;
    z-index: 3;
    margin-bottom: 2px;
}

.card-carousel-cards .card-carousel--card:first-child {
    margin-left: 0;
}

.card-carousel-cards .card-carousel--card:last-child {
    margin-right: 0;
}

.card-carousel-cards .card-carousel--card img {
    vertical-align: bottom;
    border-radius: 10px;
    transition: opacity 150ms linear;
    user-select: none;
}

.card-carousel-cards .card-carousel--card img:hover {
    opacity: 0.5;
}
</style>
