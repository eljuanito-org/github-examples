import {Octokit, App} from "octokit";
// Octokit.js
// https://github.com/octokit/core.js#readme
const octokit = new Octokit({
    auth: process.env.GH_TOKEN
  })
  
octokit.request('POST /repos/{owner}/{repo}/git/refs', {
    owner: 'elG2024',
    repo: 'github-examples',
    ref: 'refs/heads/sdksjs',
    sha: '947e5ff26382eb30c072deeae468e06c0677977e',
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }
  })