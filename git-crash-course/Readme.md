## Git hidden folder
There's a hidden folder called `.git` which tells you that our project is a git repo.

If we wanted to create a git repo in a new project, we create the folder and then initialize the repo by using `git init`.

```
mkdir /workspaces/tmp/new-project
cd /workspaces/tmp/new-project
git init
touch Readme.md
code Readme.md
git status
# makes changes to Readme.md
git add .
git commit -m "add readme file"
```

## Cloning
We have 3 ways to clone: HTTPS, SSH, Github CLI

Since we're using GitHub codespaces, we'll create a temporary directory in our workspace.
```sh
mkdir /wrokspaces/tmp
cd /workspaces/tmp
```

### HTTPS

```sh
git clone https://github.com/eljuanito-org/github-examples.git
cd github-examples
```

>You'll need to generate a Personal Acces Token (PAT)
https://github.com/settings/token

You'll use the PAT as your password when you login
- Give it acces to Contents for Commits

### SSH
To clone you need to create private and public keys, in order to use SSH method. You need to run the next command on your PC (linux in my case):

```sh
ssh-keygen -t ed25519 -C "your_email@example.com"
```

Just remove `"your_email@example.com"`, including quotation marks, and put ther the email you used to create your github account.

Then just press enter for every question it makes to you.

Now start the SSH agent with the following command:
```
eval "$(ssh-agent -s)"
```
Now add the key to your SSH agent:
```ssh
ssh-add ~/.ssh/id_ed25519
```

Then you need to look for the .pub file showed in terminal and open it, copy that key that's inside the file, go to your GitHub account, click on your avatar, go to Settings, then to the SSH and GPG section, click on "add a new SSH key" and paste there the public key.

Now you can clone the repo with the following command:

```ssh
git clone git@github.com:elG2024/github-examples.git
cd GitHub-Examples
```
### GitHub CLI
Install the CLI

eg. Ubuntu

```sh
sudo apt update
sudo apt install gh
```
Then you need to run the next commands. With `auth login` select github.com on server options, then select SSH, it will ask for a title for your key, just write a descriptive name. It'll ask to open a browser, on that page paste the code that was prompted in the terminal. Follow instructions and you'll get in.
```
gh auth login
gh repo clone elG2024/github-examples
```

## Commits
When we want to commit code we can write `git commit`, which  will open the commit edit message in the editor of choice.
```sh
git commit
```
Set the global editor
```
git config --global core.editor emacs
```

Make a commit and add a commit message without opening an editor.

```sh
git commit -m "add another exclamation mark"
```
## Branching
List of branches
```
git branch
```
Create a new branch, named 'dev'
```
git branch dev
```
Checkout the branch (work on that branch)
```
git checkout dev
```
## Remotes
We can add remote but often you will just add remote via upstream when adding a branch.

```
git remote add ...
git branch -u origin new-feature
```

## Stashing
```
git stash list
git stash
git stash save my-name
git stash apply
git stash pop
```
## Merging
```
git checkout dev
git merge main
```
## Add
```
git add Readme.md
git add .
```
## Reset
Reset allows you to move Staged changes to be unstaged. This is useful when you have to revert a commit and prevent a file to be part of that commit.

```
git add .
git reset
```

> git reset will revert a git add .

## Status
 Git status shows you what files will or will not be commited.

 ```
 git status
 ```

 ## Gitconfig file
 The Gitconfig file is what stores your global configuration for git such as email, name, editor and more.

Showing the contents of our .gitconfig file 
 ```
 git config --list
 ```

 When you first install Git on a machine you are suposed to set your name and email

 ```sh
$ git config --global user.name "John Doe"
$ git config --global user.email johndoe@example.com
 ```

 ## Log
 `git log` will show recent git commits to the git tree.

 ## Push
 When we want to push a repo to our remote origin.

 ```
 git push
 ```