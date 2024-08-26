import {Octokit, App} from 'octokit';
// Octokit.js
// https://github.com/octokit/core.js#readme
const octokit = new Octokit({
    auth: process.env.GH_TOKEN
  })
  
  await octokit.request('POST /repos/{owner}/{repo}/git/refs', {
    owner: 'elG2024',
    repo: 'github-examples',
    ref: 'refs/heads/sdksjs',
    sha: 'aa2106423c7ffaf22fc0f55d52705b69e06a8b730da88f56b14c9653891f9e74264a383fa43fefbd',
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }
  })