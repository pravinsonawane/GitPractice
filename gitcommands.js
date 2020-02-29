// Git Commands
"git add .",
  "git commit -m",
  "git push origin branch_name",
  "git pull",
  "git clone repo_url",
  "git remote add origin git_url";
("git remote remove origin");
("git checkout -b new_branch_name"); // To create branch

// Information commnds
("git branch");
("git status");
("git log");
("git log --decorate --oneline --graph");
("git log --decorate --oneline --graph --all");
("git shortlog"); // List all contributions grouped by author name
("git shortlog -s"); // Simply see the number of commits
("git shortlog -s -n"); // Simply see the number of commits with asending with number of commits
("git log -L 5,20:index.js"); // commits for line range for the index.js file
('git log --after "3 days log"'); // can use before, date too
("git log --author=Pravin");
("git log -p"); // OR --patch for log with changes inline
("git show 345489569"); // show content of the single commit
("git log master..test"); // logs between 2 branches

// Configuration commands
('git config --global user.name "pravin"');
('git config --global user.email "pravin@gmail.com"');
("git config --global --remove-section user.name");
("git config --global --remove-section user.email");
("git config --global user.useConfigOnly true"); // Force to use repo config instead of global
("");
// For remote branches
("git push remote_name --delete branch_name"); // Delete remote branch
("git fetch remote_name --prune "); // delete local branches of deleted remote branches
// Updating from Upstream Repo
("git fetch remote_name");
("git merge remote_name/branch_name");
("git pull"); // Uses above 2 commands fetch and merge
("git pull --rebase remote_name branch_name"); //
