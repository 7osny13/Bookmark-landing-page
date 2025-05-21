function showCard(tab) {
      // List of all card and tab IDs
      const cards = ['card-bookmarking', 'card-searching', 'card-sharing'];
      const tabs = ['tab-bookmarking', 'tab-searching', 'tab-sharing'];

      // Hide all cards and remove active class from all tabs
      cards.forEach(card => {
        document.getElementById(card).classList.add('d-none');
      });
      tabs.forEach(tab => {
        document.getElementById(tab).classList.remove('active');
      });

      // Show the selected card and activate the selected tab
      document.getElementById(`card-${tab}`).classList.remove('d-none');
      document.getElementById(`tab-${tab}`).classList.add('active');
    }
