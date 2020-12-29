<template>
    <div class="welcome">

        <div class="welcome__text">
            <div class="circle_blob">
                <img alt="Blob" src="../assets/svg/circle-blob.svg"/>
            </div>
            <h1>It's not just Food. It's an Experience!</h1>
            <p>Clean. Healthy. Eating. 100% Local Cuisine.</p>
            <BigButtonDefault>Get Started</BigButtonDefault>
            <button class="welcome__location">
                Get Location
                <i class="fas fa-map-marker-alt"></i>
            </button>
        </div>
        <div class="welcome__image_blob-right">
            <img alt="Blob" src="../assets/svg/blob.svg"/>
        </div>
        <div class="welcome__image_flatlay">
            <img alt="Blob" src="../assets/flatlay.png"/>
        </div>
    </div>
</template>

<script>
export default {
  name: "HomePage",
};
</script>

<style lang="scss" scoped>
    .welcome {
        margin-top: 80px;
        /* height: 200px; */
        display: flex;
        justify-content: space-between;
        align-items: center;
        line-height: 1;
		position: relative;


        &__text {
            width: 48%;
            font-size: 40px;
            text-align: left;
            position: relative;


            p {
                font-size: 18px;
                font-weight: 700;
                margin-top: 50px;
                color: #39485f;
                margin-bottom: 50px;
                z-index: 1000000;
            }

            .circle_blob {
                position: absolute;
                top: -20%;
                left: -42%;
                width: 100%;
                height: 90%;
				z-index: -1;
            }
        }

        &__image {
            width: 48%;
            align-self: baseline;

            img {
                width: 100%;
            }

			&_blob-right {
				position: absolute;
				width: 150%;
				top: -50%;
				right: -16%;
				z-index: -1;
				opacity: .7;
			}

        }

        &_circle_blob {
            position: absolute;
            top: 20%;
            left: 8%;
            width: 100%;
            height: 100%;
        }

        &__location {
            padding: 2.5rem 3rem;
            background: none;
            cursor: pointer;
            font-size: 18px;
            background-color: rgb(204, 204, 204);
            border: none;
            transition: all 0.2s;
            color: #233547;
            margin-left: 30px;
            font-weight: 700;

            &:hover {
                background-color: rgb(182, 182, 182);
            }

            &:focus {
                outline: none;
            }

            .fas {
                margin-left: 20px;
            }
        }
    }
</style>