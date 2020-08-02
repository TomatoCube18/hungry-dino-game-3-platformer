enum ActionKind {
    action_walking_right,
    action_idling_right,
    action_idling_left,
    action_walking_left,
    Walking,
    Idle,
    Jumping,
    action_dying_right,
    action_dying_left,
    Dying
}
namespace SpriteKind {
    export const background = SpriteKind.create()
}
function create_dino_animation () {
    anim_walk_left = animation.createAnimation(ActionKind.action_walking_left, 100)
    anim_walk_left.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . f f f f f f f f . . . . . . 
        . f 7 7 7 7 7 7 7 7 f 4 . . . . 
        . f 7 7 1 f 1 7 7 7 f 4 . . . . 
        . f 7 7 1 f 1 7 7 7 f f . . . . 
        . f 7 7 1 1 1 7 7 7 f 4 . . . . 
        . f 7 7 7 7 7 f 7 7 f 4 4 . . . 
        . . f f f f f f 7 7 7 f f . . . 
        . . . . f 7 7 7 7 7 7 f 4 . . . 
        . . . . f 7 7 7 7 7 7 f 4 4 . . 
        . . . . f 7 7 7 7 7 7 7 f f . . 
        . . . . f 7 d d f 7 7 7 f 4 4 . 
        . . . . f 7 d f 7 7 7 7 7 f f 4 
        . . . . f 7 f 7 7 7 f 7 7 7 7 f 
        . . . . f f f 7 7 f f f f f f f 
        . . . . . . . f f f . . . . . . 
        `)
    anim_walk_left.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . f f f f f f f f . . . . . . 
        . f 7 7 7 7 7 7 7 7 f 4 . . . . 
        . f 7 7 1 f 1 7 7 7 f 4 . . . . 
        . f 7 7 1 f 1 7 7 7 f f . . . . 
        . f 7 7 1 1 1 7 7 7 f 4 . . . . 
        . f 7 7 7 7 7 f 7 7 f 4 4 . . . 
        . . f f f f f f 7 7 7 f f . . . 
        . . . . f 7 7 7 7 7 7 f 4 . . . 
        . . . . f 7 7 7 7 7 7 f 4 4 . . 
        . . . . f 7 7 7 7 7 7 7 f f . . 
        . . . . f 7 7 f 7 7 7 7 f 4 4 . 
        . . . . f 7 7 f 7 7 7 7 7 f f 4 
        . . . . f 7 7 d f 7 7 7 7 7 7 f 
        . . . . f 7 7 d f 7 7 f f f f f 
        . . . . f f f . . f f f . . . . 
        `)
    anim_walk_left.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . f f f f f f f f . . . . . . 
        . f 7 7 7 7 7 7 7 7 f 4 . . . . 
        . f 7 7 1 f 1 7 7 7 f 4 . . . . 
        . f 7 7 1 f 1 7 7 7 f f . . . . 
        . f 7 7 1 1 1 7 7 7 f 4 . . . . 
        . f 7 7 7 7 7 f 7 7 f 4 4 . . . 
        . . f f f f f f 7 7 7 f f . . . 
        . . . . f 7 7 7 7 7 7 f 4 . . . 
        . . . . f 7 7 7 7 7 7 f 4 4 . . 
        . . . . f 7 7 7 7 7 7 7 f f . . 
        . . . f f 7 d d d 7 7 7 f 4 4 . 
        . . . f 7 7 d d 7 7 7 7 7 f f 4 
        . . . f 7 7 d d 7 7 7 7 7 7 7 f 
        . . . f f f f f f 7 7 f f f f f 
        . . . . . . . . . f f f . . . . 
        `)
    anim_walk_left.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . f f f f f f f f . . . . . . 
        . f 7 7 7 7 7 7 7 7 f 4 . . . . 
        . f 7 7 1 f 1 7 7 7 f 4 . . . . 
        . f 7 7 1 f 1 7 7 7 f f . . . . 
        . f 7 7 1 1 1 7 7 7 f 4 . . . . 
        . f 7 7 7 7 7 f 7 7 f 4 4 . . . 
        . . f f f f f f 7 7 7 f f . . . 
        . . . . f 7 7 7 7 7 7 f 4 . . . 
        . . f 7 7 7 7 7 7 f 7 f 4 4 . . 
        . . f 7 7 7 7 7 7 f 7 7 f f . . 
        . . . . f 7 d d 7 7 7 7 f 4 4 . 
        . . . . f 7 d d d 7 7 7 7 f f 4 
        . . . . f 7 d d d 7 7 7 7 7 7 f 
        . . . . f 7 d f f 7 7 f f f f f 
        . . . . f f f . . f f f . . . . 
        `)
    animation.attachAnimation(dino, anim_walk_left)
    anim_walk_right = animation.createAnimation(ActionKind.action_walking_right, 100)
    anim_walk_right.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f f f f . . 
        . . . . 4 f 7 7 7 7 7 7 7 7 f . 
        . . . . 4 f 7 7 7 1 f 1 7 7 f . 
        . . . . f f 7 7 7 1 f 1 7 7 f . 
        . . . . 4 f 7 7 7 1 1 1 7 7 f . 
        . . . 4 4 f 7 7 f 7 7 7 7 7 f . 
        . . . f f 7 7 7 f f f f f f . . 
        . . . 4 f 7 7 7 7 7 7 f . . . . 
        . . 4 4 f 7 7 7 7 7 7 f . . . . 
        . . f f 7 7 7 7 7 7 7 f . . . . 
        . 4 4 f 7 7 7 f d d 7 f . . . . 
        4 f f 7 7 7 7 7 f d 7 f . . . . 
        f 7 7 7 7 f 7 7 7 f 7 f . . . . 
        f f f f f f f 7 7 f f f . . . . 
        . . . . . . f f f f . . . . . . 
        `)
    anim_walk_right.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f f f f . . 
        . . . . 4 f 7 7 7 7 7 7 7 7 f . 
        . . . . 4 f 7 7 7 1 f 1 7 7 f . 
        . . . . f f 7 7 7 1 f 1 7 7 f . 
        . . . . 4 f 7 7 7 1 1 1 7 7 f . 
        . . . 4 4 f 7 7 f 7 7 7 7 7 f . 
        . . . f f 7 7 7 f f f f f f . . 
        . . . 4 f 7 7 7 7 7 7 f . . . . 
        . . 4 4 f 7 7 7 7 7 7 f . . . . 
        . . f f 7 7 7 7 7 7 7 f . . . . 
        . 4 4 f 7 7 7 7 f 7 7 f . . . . 
        4 f f 7 7 7 7 7 f 7 7 f . . . . 
        f 7 7 7 7 7 7 f d 7 7 f . . . . 
        f f f f f 7 7 f d 7 7 f . . . . 
        . . . . f f f . . f f f . . . . 
        `)
    anim_walk_right.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f f f f . . 
        . . . . 4 f 7 7 7 7 7 7 7 7 f . 
        . . . . 4 f 7 7 7 1 f 1 7 7 f . 
        . . . . f f 7 7 7 1 f 1 7 7 f . 
        . . . . 4 f 7 7 7 1 1 1 7 7 f . 
        . . . 4 4 f 7 7 f 7 7 7 7 7 f . 
        . . . f f 7 7 7 f f f f f f . . 
        . . . 4 f 7 7 7 7 7 7 f . . . . 
        . . 4 4 f 7 7 7 7 7 7 f . . . . 
        . . f f 7 7 7 7 7 7 7 f . . . . 
        . 4 4 f 7 7 7 d d d 7 f f . . . 
        4 f f 7 7 7 7 7 d d 7 7 f . . . 
        f 7 7 7 7 7 7 7 d d 7 7 f . . . 
        f f f f f f 7 7 f f f f f . . . 
        . . . . . f f f . . . . . . . . 
        `)
    anim_walk_right.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f f f f . . 
        . . . . 4 f 7 7 7 7 7 7 7 7 f . 
        . . . . 4 f 7 7 7 1 f 1 7 7 f . 
        . . . . f f 7 7 7 1 f 1 7 7 f . 
        . . . . 4 f 7 7 7 1 1 1 7 7 f . 
        . . . 4 4 f 7 7 f 7 7 7 7 7 f . 
        . . . f f 7 7 7 f f f f f f . . 
        . . . 4 f 7 7 7 7 7 7 f . . . . 
        . . 4 4 f 7 f 7 7 7 7 7 7 f . . 
        . . f f 7 7 f 7 7 7 7 7 7 f . . 
        . 4 4 f 7 7 7 7 d d 7 f . . . . 
        4 f f 7 7 7 7 d d d 7 f . . . . 
        f 7 7 7 7 7 7 d d d 7 f . . . . 
        f f f f f 7 7 f f d 7 f . . . . 
        . . . . f f f . . f f f . . . . 
        `)
    animation.attachAnimation(dino, anim_walk_right)
    anim_idle_right = animation.createAnimation(ActionKind.action_idling_right, 200)
    anim_idle_right.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f f f f . . 
        . . . . 4 f 7 7 7 7 7 7 7 7 f . 
        . . . . 4 f 7 7 7 1 f 1 7 7 f . 
        . . . . f f 7 7 7 1 f 1 7 7 f . 
        . . . . 4 f 7 7 7 1 1 1 7 7 f . 
        . . . 4 4 f 7 7 f 7 7 7 7 7 f . 
        . . . f f 7 7 7 f f f f f f . . 
        . . . 4 f 7 7 7 7 7 7 f . . . . 
        . f 4 4 f 7 f 7 7 7 7 7 7 f . . 
        f 7 7 f 7 7 f 7 7 7 7 7 7 f . . 
        . f 7 7 7 7 7 7 d d 7 f . . . . 
        . . f 7 7 7 7 d d d 7 f . . . . 
        . . . f 7 7 7 d d d 7 f . . . . 
        . . . . f 7 7 f f d 7 f . . . . 
        . . . . f f f . . f f f . . . . 
        `)
    anim_idle_right.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f f f f . . 
        . . . . 4 f 7 7 7 7 7 7 7 7 f . 
        . . . . 4 f 7 7 7 1 f 1 7 7 f . 
        . . . . f f 7 7 7 1 f 1 7 7 f . 
        . . . . 4 f 7 7 7 1 1 1 7 7 f . 
        . . . 4 4 f 7 7 f 7 7 7 7 7 f . 
        . . . f f 7 7 7 f f f f f f . . 
        . . . 4 f 7 7 7 7 7 7 f . . . . 
        . . 4 4 f 7 f 7 7 7 7 7 7 f . . 
        . . f f 7 7 f 7 7 7 7 7 7 f . . 
        . 4 4 f 7 7 7 7 d d 7 f . . . . 
        4 f f 7 7 7 7 d d d 7 f . . . . 
        f 7 7 7 7 7 7 d d d 7 f . . . . 
        f f f f f 7 7 f f d 7 f . . . . 
        . . . . f f f . . f f f . . . . 
        `)
    animation.attachAnimation(dino, anim_idle_right)
    anim_idle_left = animation.createAnimation(ActionKind.action_idling_left, 200)
    anim_idle_left.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . f f f f f f f f . . . . . . 
        . f 7 7 7 7 7 7 7 7 f 4 . . . . 
        . f 7 7 1 f 1 7 7 7 f 4 . . . . 
        . f 7 7 1 f 1 7 7 7 f f . . . . 
        . f 7 7 1 1 1 7 7 7 f 4 . . . . 
        . f 7 7 7 7 7 f 7 7 f 4 4 . . . 
        . . f f f f f f 7 7 7 f f . . . 
        . . . . f 7 7 7 7 7 7 f 4 . . . 
        . . f 7 7 7 7 7 7 f 7 f 4 4 . . 
        . . f 7 7 7 7 7 7 f 7 7 f f . . 
        . . . . f 7 d d 7 7 7 7 f 4 4 . 
        . . . . f 7 d d d 7 7 7 7 f f 4 
        . . . . f 7 d d d 7 7 7 7 7 7 f 
        . . . . f 7 d f f 7 7 f f f f f 
        . . . . f f f . . f f f . . . . 
        `)
    anim_idle_left.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . f f f f f f f f . . . . . . 
        . f 7 7 7 7 7 7 7 7 f 4 . . . . 
        . f 7 7 1 f 1 7 7 7 f 4 . . . . 
        . f 7 7 1 f 1 7 7 7 f f . . . . 
        . f 7 7 1 1 1 7 7 7 f 4 . . . . 
        . f 7 7 7 7 7 f 7 7 f 4 4 . . . 
        . . f f f f f f 7 7 7 f f . . . 
        . . . . f 7 7 7 7 7 7 f 4 . . . 
        . . f 7 7 7 7 7 7 f 7 f 4 4 f . 
        . . f 7 7 7 7 7 7 f 7 7 7 7 7 f 
        . . . . f 7 d d 7 7 7 7 7 7 f . 
        . . . . f 7 d d d 7 7 7 7 f . . 
        . . . . f 7 d d d 7 7 7 f . . . 
        . . . . f 7 d f f 7 7 f . . . . 
        . . . . f f f . . f f f . . . . 
        `)
    animation.attachAnimation(dino, anim_idle_left)
    anim_die_right = animation.createAnimation(ActionKind.action_dying_right, 200)
    anim_die_right.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . b b b b b b b b . . 
        . . . . c b d d d d d d d d b . 
        . . . . c b d d d 1 1 1 d d b . 
        . . . . b b d d d 1 c 1 d d b . 
        . . . . c b d d d 1 1 1 d d b . 
        . c c c c b d d b d b d b d b . 
        c b b b b d d d d b d b . b . . 
        b d d d d d d d d d d b . . . . 
        . b d d d d d d d d d b . . . . 
        . . b d d d d d d d d b . . . . 
        . . . b d d b b b b b . . . . . 
        . . . b d b . . . . . . . . . . 
        . . . b b . . . . . . . . . . . 
        `)
    animation.attachAnimation(dino, anim_die_right)
    anim_die_left = animation.createAnimation(ActionKind.action_dying_left, 200)
    anim_die_left.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . b b b b b b b b . . . . . . 
        . b d d d d d d d d b c . . . . 
        . b d d 1 1 1 d d d b c . . . . 
        . b d d 1 c 1 d d d b b . . . . 
        . b d d 1 1 1 d d d b c . . . . 
        . b d b d b d b d d b c c c c . 
        . . b . b d b d d d d b b b b c 
        . . . . b d d d d d d d d d d b 
        . . . . b d d d d d d d d d b . 
        . . . . b d d d d d d d d b . . 
        . . . . . b b b b b d d b . . . 
        . . . . . . . . . . b d b . . . 
        . . . . . . . . . . . b b . . . 
        `)
    animation.attachAnimation(dino, anim_die_left)
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (dino.isHittingTile(CollisionDirection.Bottom)) {
        dino.vy = -135
    }
})
function create_dino () {
    dino = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f f f f . . 
        . . . . 4 f 7 7 7 7 7 7 7 7 f . 
        . . . . 4 f 7 7 7 1 f 1 7 7 f . 
        . . . . f f 7 7 7 1 f 1 7 7 f . 
        . . . . 4 f 7 7 7 1 1 1 7 7 f . 
        . . . 4 4 f 7 7 f 7 7 7 7 7 f . 
        . . . f f 7 7 7 f f f f f f . . 
        . . . 4 f 7 7 7 7 7 7 f . . . . 
        . . 4 4 f 7 f 7 7 7 7 7 7 f . . 
        . . f f 7 7 f 7 7 7 7 7 7 f . . 
        . 4 4 f 7 7 7 7 d d 7 f . . . . 
        4 f f 7 7 7 7 d d d 7 f . . . . 
        f 7 7 7 7 7 7 d d d 7 f . . . . 
        f f f f f 7 7 f f d 7 f . . . . 
        . . . . f f f . . f f f . . . . 
        `, SpriteKind.Player)
    dino.ay = 290
    dino.setFlag(SpriteFlag.StayInScreen, true)
    scene.cameraFollowSprite(dino)
    create_dino_animation()
    facing_right = 1
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (dino.isHittingTile(CollisionDirection.Bottom)) {
        dino.vy = -135
    }
})
function clear_level () {
    for (let value of sprites.allOfKind(SpriteKind.Food)) {
        value.destroy()
    }
    for (let value2 of sprites.allOfKind(SpriteKind.background)) {
        value2.destroy()
    }
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    facing_right = 0
})
scene.onHitTile(SpriteKind.Player, 10, function (sprite) {
    if (level < 3) {
        level += 1
        setup_level()
    } else {
        game.over(true)
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    facing_right = 1
})
function setup_level () {
    clear_level()
    game.splash("Level " + level)
    create_map()
    create_eggs()
    scene.placeOnRandomTile(dino, 9)
}
info.onLifeZero(function () {
    pause(500)
    game.over(false, effects.blizzard)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeScoreBy(1)
    if (otherSprite == egg_extra_life) {
        info.changeLifeBy(1)
    }
    music.jumpUp.play()
})
function create_eggs () {
    tile_list = scene.getTilesByType(5)
    for (let value3 of tile_list) {
        egg = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . f 5 5 f . . . . . . 
            . . . . . f 5 5 5 5 f . . . . . 
            . . . . . f 5 1 1 5 f . . . . . 
            . . . . f 5 5 5 1 5 5 f . . . . 
            . . . . f 5 5 5 5 5 5 f . . . . 
            . . . . f 5 5 5 5 5 5 f . . . . 
            . . . . . f 5 5 5 5 f . . . . . 
            . . . . . f 5 5 5 5 f . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Food)
        scene.place(value3, egg)
        animation.runMovementAnimation(
        egg,
        animation.animationPresets(animation.bobbing),
        randint(2000, 2500),
        true
        )
    }
    tile_list = scene.getTilesByType(3)
    for (let value32 of tile_list) {
        egg_extra_life = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . f 1 1 f . . . . . . 
            . . . . . f 3 3 3 3 f . . . . . 
            . . . . . f 1 1 1 1 f . . . . . 
            . . . . f 3 3 3 3 3 3 f . . . . 
            . . . . f 1 1 1 1 1 1 f . . . . 
            . . . . f 3 3 3 3 3 3 f . . . . 
            . . . . . f 1 1 1 1 f . . . . . 
            . . . . . f 3 3 3 3 f . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Food)
        scene.place(value32, egg_extra_life)
        animation.runMovementAnimation(
        egg_extra_life,
        animation.animationPresets(animation.bobbing),
        randint(2000, 2500),
        true
        )
    }
}
function create_map () {
    scene.setBackgroundColor(1)
    scene.setTile(7, img`
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        6 6 7 6 7 6 7 6 6 d 6 7 7 6 7 7 
        d d 6 7 7 6 7 d d d 7 6 d 6 7 6 
        d d d d d d 6 d d d d d d d 6 d 
        d d d d d d d d d d d d d d d d 
        d 1 1 d 1 d d d d d 1 d d d d d 
        d 1 1 d d d d d d d d d d d d d 
        d d d d d d d d d d d d d d d d 
        d d d d d d d d d d d d d d d d 
        d d d d d d b d d d d d d d 1 d 
        d d d d d d d d d d d d d d d d 
        d d b d d d d d d d d b b d d d 
        d d d d d d d d d d d b b d d d 
        d d d d d d d d d d d d d d d d 
        d d d d d d d 1 d d d d d d d d 
        d d d d d d d d d d d d d d 1 d 
        `, true)
    scene.setTile(14, img`
        d 1 d d d d d d d 1 d d d d d d 
        d 1 d d d d d d d 1 d d d d d d 
        d 1 d d d d d d d 1 d d d d d d 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        d d d d d 1 d d d d d d d 1 d d 
        d d d d d 1 d d d d d d d 1 d d 
        d d d d d 1 d d d d d d d 1 d d 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        d 1 d d d d d d d 1 d d d d d d 
        d 1 d d d d d d d 1 d d d d d d 
        d 1 d d d d d d d 1 d d d d d d 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        d d d d d 1 d d d d d d d 1 d d 
        d d d d d 1 d d d d d d d 1 d d 
        d d d d d 1 d d d d d d d 1 d d 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        `, true)
    scene.setTile(13, img`
        d 1 1 1 1 1 1 b d 1 1 1 1 1 1 b 
        1 d d d d d d b 1 d d d d d d b 
        1 d d d d d d b 1 d d d d d d b 
        1 d d d d d d b 1 d d d d d d b 
        1 d d d d d d b 1 d d d d d d b 
        1 d d d d d d b 1 d d d d d d b 
        1 d d d d d d d 1 d d d d d d d 
        b b b b b b d e b b b b b b d e 
        d 1 1 1 1 1 1 b d 1 1 1 1 1 1 b 
        1 d d d d d d b 1 d d d d d d b 
        1 d d d d d d b 1 d d d d d d b 
        1 d d d d d d b 1 d d d d d d b 
        1 d d d d d d b 1 d d d d d d b 
        1 d d d d d d b 1 d d d d d d b 
        1 d d d d d d d 1 d d d d d d d 
        b b b b b b d e d b b b b b b e 
        `, true)
    scene.setTile(2, img`
        c c c c c c c c c c c c c c c c 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 8 6 6 6 8 8 8 6 6 6 6 8 8 8 
        6 6 8 8 8 6 6 6 6 6 6 8 8 8 8 6 
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
        9 9 6 6 6 6 6 9 9 9 9 6 6 6 9 9 
        6 6 6 6 9 9 9 6 6 6 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        `, true)
    scene.setTile(9, img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, false)
    scene.setTile(10, img`
        . . . . . . . . . . . . . . . . 
        . . . . . c . . . . . . . . . . 
        . . . . . f 2 2 . . . . . . . . 
        . . . . . f 2 2 2 2 2 . . . . . 
        . . . . . f 2 2 2 2 2 2 2 2 . . 
        . . . . . f 2 2 2 2 2 2 2 . . . 
        . . . . . f 2 2 2 2 . . . . . . 
        . . . . . f 2 . . . . . . . . . 
        . . . . . f . . . . . . . . . . 
        . . . . . f . . . . . . . . . . 
        . . . . . f . . . . . . . . . . 
        . . . . . f . . . . . . . . . . 
        . . . . . f . . . . . . . . . . 
        . . . . f f f . . . . . . . . . 
        . . . f c c c f . . . . . . . . 
        . . f c c c c c f . . . . . . . 
        `, true)
    scene.setTile(5, img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, false)
    scene.setTile(3, img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, false)
    if (level == 1) {
        scene.setTileMap(img`
            9 9 9 . . . . . . . . . . . . . . . . . . . . . 5 . . . . . . . 
            . . . . . . . . . . . . 5 . 5 . . . . . . . 5 . . . . . . . . . 
            . . . . . . . . . . . 5 . 5 . . . . . 5 . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . . 7 7 . . . 5 . . . . . 
            . . . 5 . . . . . . d d d d d . . . . . 7 e e . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . 7 e e e . . 7 7 7 . . . a 
            7 7 7 7 7 . . 7 7 . . . . . . . 7 7 7 e e e e . . e e e . . 7 7 
            e e e e e 2 2 e e 2 2 2 2 2 2 2 e e e e e e e 2 2 e e e 2 2 e e 
            `, TileScale.Sixteen)
    } else if (level == 2) {
        scene.setTileMap(img`
            9 9 9 . . . . . . . . . . . . . . . . . . . . . 5 . . . . . 5 . 
            . . . . . . . . 5 . . . . . . 3 . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . d . . . . . . 5 . . . . . . . . . d d d 
            . . . . . . . . . . . . . . . . . . . . . . . . . . d . . . . . 
            . . . 5 . d d d . . d . . . . . . . d . . . . d . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . . . . . . . 5 . . . . a 
            7 7 7 7 . . . . . . . . . . . 7 7 7 7 . . 7 . . . 7 7 7 . . 7 7 
            e e e e 2 2 2 2 2 2 2 2 2 2 2 e e e e 2 2 e 2 2 2 e e e 2 2 e e 
            `, TileScale.Sixteen)
    } else {
        scene.setTileMap(img`
            9 9 9 . . . . . . 5 . . . 5 . . . 5 . . . . . 5 
            . . . . 5 . . . . . . . . . . . . . . . . . . . 
            e . . . . . . d d d . . . . d d . . . . . . d . 
            e e . . . . . . . . . d . . . . . . . . . . . 5 
            e e e . . e . 5 . e . . . . . . . . e . . e . . 
            e e e 2 2 e . . . e 2 2 2 2 2 2 2 2 e 2 2 e . e 
            e e e e e e e e e e e e e e e e e e e e e e . e 
            . . . . . . . . . . . . . . 5 . . . . . 3 . . . 
            . . . d d d d d . . . 5 . . . . . . . . . . . . 
            . 5 . . . . . . . . . . . . d d . . . . . . . . 
            . . . . . . . . . d . . . . . . . . d . . . . . 
            . . . e e . . . . . . . . . . . . . . . . . . . 
            e e . 5 e 2 2 2 2 2 e e e . . . . . . . e e e . 
            e e . . e e e e e e e e e 2 2 2 2 2 2 2 e e e 2 
            e 5 . e e . 5 . . . . . e e e e e e e e e e e e 
            e . . e e . . . . . 5 . e . . . 5 . . . . . . . 
            e e . e e . . . . . . . e . . . . . . . . . . a 
            e e . . . . . . . e e e e . . . . . . . . . d d 
            5 . . . . . . . . . . . . . e . . e . . . . . . 
            . . . . . d d . . . 5 . . . e 2 2 e . . d . 5 . 
            . . . . . . . . . . . . . e e e e e e . . . . . 
            . . d d . . . . d . . . . . . . . . . . . . . . 
            7 . . . . . . . . 7 7 7 7 . . . . . . d . 7 7 7 
            e 2 2 2 2 2 2 2 2 e e e e 2 2 2 2 2 2 2 2 e e e 
            `, TileScale.Sixteen)
    }
    cloud_list = [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . f f f . . . . . . . . 
        . . . . f . . . f . . . . . . . 
        . . f f 9 . . . . f f f . . . . 
        . f 9 . . 9 . . . . . 9 f . . . 
        . f 9 9 9 . 9 . . . . 9 f . . . 
        . . f 9 9 9 9 9 9 9 9 f . . . . 
        . . . f f f f f f f f . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . f f f . . . . . . . . . . 
        . . f . . . f f f . . . . . . . 
        . f . . . . . . 9 f f f f f . . 
        f . . . . . . 9 . . . . . . f . 
        f 9 . . . . 9 . . . . . . . 9 f 
        . f 9 9 9 9 9 . . . . . . 9 9 f 
        . . f f f 9 9 9 9 9 9 9 9 9 f . 
        . . . . . f f f f f f f f f . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f . . . f f f . . . 
        . . . f . . . f f . . . . f . . 
        . . f . . . . . f f . . . . f . 
        . f . . . . . . . . . . . . f . 
        f 9 . . . . . . . . 9 . . . 9 f 
        f 9 9 . . . . . . . . 9 . . 9 f 
        f 9 9 9 . . . . . . . 9 . 9 9 f 
        . f 9 9 . . . . . . 9 . 9 9 f . 
        . . f 9 9 9 9 9 . 9 . 9 9 9 f . 
        . . . f f f 9 9 9 9 9 9 9 f . . 
        . . . . . . f f f f f f f . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `]
}
scene.onHitTile(SpriteKind.Player, 2, function (sprite) {
    info.changeLifeBy(-1)
    pause(100)
    if (info.life() > 0) {
        music.powerDown.play()
        scene.placeOnRandomTile(dino, 9)
    } else {
        if (facing_right == 1) {
            animation.setAction(dino, ActionKind.action_dying_right)
        } else {
            animation.setAction(dino, ActionKind.action_dying_left)
        }
    }
})
let cloud: Sprite = null
let cloud_list: Image[] = []
let egg: Sprite = null
let tile_list: tiles.Tile[] = []
let egg_extra_life: Sprite = null
let facing_right = 0
let anim_die_left: animation.Animation = null
let anim_die_right: animation.Animation = null
let anim_idle_left: animation.Animation = null
let anim_idle_right: animation.Animation = null
let anim_walk_right: animation.Animation = null
let dino: Sprite = null
let anim_walk_left: animation.Animation = null
let level = 0
create_dino()
game.showLongText("Hi Dino!", DialogLayout.Bottom)
game.showLongText("Could you help to collect all the eggs from the arena?", DialogLayout.Bottom)
game.showLongText("Remember to look out for Easter egg. It gives you extra life!", DialogLayout.Bottom)
level = 1
setup_level()
info.setLife(3)
info.setScore(0)
game.onUpdate(function () {
    if (info.life() > 0) {
        dino.x += controller.dx(50)
        if (dino.vy != 0) {
            if (facing_right == 1) {
                dino.setImage(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . f f f f f f f f . . 
                    . . . . 4 f 7 7 7 7 7 7 7 7 f . 
                    . . . . 4 f 7 7 7 1 f 1 7 7 f . 
                    . . . . f f 7 7 7 1 f 1 7 7 f . 
                    . . . . 4 f 7 7 7 1 1 1 7 7 f . 
                    . 4 4 4 4 f 7 7 f 7 7 7 7 7 f . 
                    4 f f f f 7 7 7 f f f f f f . . 
                    f 7 7 7 7 7 7 7 7 7 7 f . . . . 
                    . f 7 7 7 7 7 7 d d 7 f . . . . 
                    . . f 7 7 7 7 d d d 7 f . . . . 
                    . . . f 7 7 f f f f f . . . . . 
                    . . . f 7 f . . . . . . . . . . 
                    . . . f f . . . . . . . . . . . 
                    `)
            } else {
                dino.setImage(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . f f f f f f f f . . . . . . 
                    . f 7 7 7 7 7 7 7 7 f 4 . . . . 
                    . f 7 7 1 f 1 7 7 7 f 4 . . . . 
                    . f 7 7 1 f 1 7 7 7 f f . . . . 
                    . f 7 7 1 1 1 7 7 7 f 4 . . . . 
                    . f 7 7 7 7 7 f 7 7 f 4 4 4 4 . 
                    . . f f f f f f 7 7 7 f f f f 4 
                    . . . . f 7 7 7 7 7 7 7 7 7 7 f 
                    . . . . f 7 d d 7 7 7 7 7 7 f . 
                    . . . . f 7 d d d 7 7 7 7 f . . 
                    . . . . . f f f f f 7 7 f . . . 
                    . . . . . . . . . . f 7 f . . . 
                    . . . . . . . . . . . f f . . . 
                    `)
            }
        } else if (controller.right.isPressed()) {
            animation.setAction(dino, ActionKind.action_walking_right)
        } else if (controller.left.isPressed()) {
            animation.setAction(dino, ActionKind.action_walking_left)
        } else if (facing_right == 1) {
            animation.setAction(dino, ActionKind.action_idling_right)
        } else {
            animation.setAction(dino, ActionKind.action_idling_left)
        }
    }
})
game.onUpdateInterval(randint(2000, 6000), function () {
    cloud = sprites.create(cloud_list[randint(0, cloud_list.length - 1)], SpriteKind.background)
    cloud.setFlag(SpriteFlag.Ghost, true)
    cloud.z = -50
    cloud.setPosition(scene.cameraLeft() + 160, randint(10, 80))
    cloud.vx = -10
})
