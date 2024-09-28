// first step

var n = 1
var s = "hola mundo"
b = true
o = []

o[0] = 100
o[1] = 200
o[2] = 300
o[3] = 400
o[10] = 1100
o.name = "Oswald"
o.surname = "Perez"
o.lenght = 11

for (var i = 0; i < o.length; i = i + 1) {
    var element = o[i]
    console.log(element)

}

// second step

debugger

var hello = function (name) { return "hello " + name + "!" }

hello("Mario")


debugger

// third step

// TODO antes de crear una rama nueva, subir todos los cambios en la rama feature / prework, luego cambiar a rama develop
```sh
🐖 pwd 
/Users/manuelbarzi/workspace/eurofirms-bootcamp-202409
🐖 git branch
  develop
  feature/playground
* feature/prework
  main
🐖 git switch develop
Switched to branch 'develop'
Your branch is up to date with 'origin/develop'.
🐖 git branch
* develop
  feature/prework
  main
```

    // TODO luego, estando en develop, crear la nueva rama feature / playground, y cambiar a ella

    ```sh
🐖 git branch feature/playground
🐖 git branch
* develop
  feature/playground
  feature/prework
  main
🐖 git switch feature/playground
Switched to branch 'feature/playground'
🐖 mkdir staff/manuel-barzi/playground
🐖 touch staff/manuel-barzi/playground/.gitkeep
🐖 git branch
  develop
* feature/playground
  feature/prework
  main
🐖 git add staff/manuel-barzi/playground 
🐖 git status
On branch feature/playground
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        new file:   staff/manuel-barzi/playground/.gitkeep

🐖 git commit -m 'add playground folder #49'
[feature/playground d0f5051] add playground folder #49
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 staff/manuel-barzi/playground/.gitkeep
🐖 git push
fatal: The current branch feature/playground has no upstream branch.
To push the current branch and set the remote as upstream, use

    git push --set-upstream origin feature/playground

To have this happen automatically for branches without a tracking
upstream, see 'push.autoSetupRemote' in 'git help config'.

🐖 git push -u origin feature/playground
Enumerating objects: 7, done.
Counting objects: 100% (7/7), done.
Delta compression using up to 8 threads
Compressing objects: 100% (3/3), done.
Writing objects: 100% (4/4), 387 bytes | 387.00 KiB/s, done.
Total 4 (delta 1), reused 0 (delta 0), pack-reused 0 (from 0)
remote: Resolving deltas: 100% (1/1), completed with 1 local object.
remote: 
remote: Create a pull request for 'feature/playground' on GitHub by visiting:
remote:      https://github.com/manuelbarzi/eurofirms-bootcamp-202409/pull/new/feature/playground
remote: 
To https://github.com/manuelbarzi/eurofirms-bootcamp-202409
 * [new branch]      feature/playground -> feature/playground
branch 'feature/playground' set up to track 'origin/feature/playground'.
🐖 
```

    // TODO despues de implementar el push en array y arroz

    ```sh
🐖 git status
On branch feature/playground
Your branch is up to date with 'origin/feature/playground'.

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        staff/manuel-barzi/playground/array/
        staff/manuel-barzi/playground/arroz/

nothing added to commit but untracked files present (use "git add" to track)
🐖 git add staff/manuel-barzi/playground 
🐖 git status
On branch feature/playground
Your branch is up to date with 'origin/feature/playground'.

Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        new file:   staff/manuel-barzi/playground/array/Array.prototype.push.js
        new file:   staff/manuel-barzi/playground/arroz/Arroz.prototype.push.js

🐖 git commit -m 'add array and arroz push #49'
[feature/playground 3f77277] add array and arroz push #49
 2 files changed, 58 insertions(+)
 create mode 100644 staff/manuel-barzi/playground/array/Array.prototype.push.js
 create mode 100644 staff/manuel-barzi/playground/arroz/Arroz.prototype.push.js
🐖 git push
Enumerating objects: 13, done.
Counting objects: 100% (13/13), done.
Delta compression using up to 8 threads
Compressing objects: 100% (8/8), done.
Writing objects: 100% (9/9), 1.02 KiB | 1.02 MiB/s, done.
Total 9 (delta 2), reused 0 (delta 0), pack-reused 0 (from 0)
remote: Resolving deltas: 100% (2/2), completed with 1 local object.
To https://github.com/manuelbarzi/eurofirms-bootcamp-202409
   d0f5051..3f77277  feature/playground -> feature/playground
```