<template>
<header class="g-hd">
    <nav class="app-nav navbar navbar-tiffany">
        <div class="container">
            <div class="navbar-header">
               <!--  <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button> -->
                <a class="navbar-brand" href="javascript:;">Nimo</a>
                <div class="navbar-text">Web Developer</div>
            </div>
        </div>
    </nav>
</header>
</template>

<style lang="less">
@black: #000;
@white: #fff;
.navbar-tiffany{
    background: linear-gradient(45deg, fade(@black, 0) 48%, fade(@black, 10%) 50%, fade(@black, 0) 52%), linear-gradient(-45deg, fade(@black, 0) 48%, fade(@black, 10%) 50%, fade(@black, 0) 52%);
    background-size: 1em 1em;
}
.app-nav{
    border-top: 1px solid rgba(255,255,255,0.2);
    border-bottom: 1px solid rgba(0,0,0,0.1);
    border-radius: 0;
    box-shadow: 2px 4px 5px rgba(3,3,3,0.2);
    background-color: #2ca6cb;
    font-size: 18px;
    .container{
        color: @white;
    }
    .navbar-toggle{
        border-color: @white;
        .icon-bar{
            background-color: @white;
        }
    }
    a{
        color: #fff;
    }
    .navbar-text{
        margin-bottom: 10px;
    }
}
</style>

<script>

export default {
    
}
</script>
