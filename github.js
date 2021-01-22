class Github {
  constructor() {
    this.client_id = 'dcafe8387d5ec50ffe9b';
    this.client_secret = 'e44ff4cf90671969390103f1aa4d33c9858a62e5';
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();

    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const repos = await repoResponse.json();


    return {
      profile,
      repos
    }
  }
}