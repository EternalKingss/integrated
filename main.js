// Basic interactivity for JARVIS landing page

document.addEventListener('DOMContentLoaded', () => {
  // Tab switching for use cases
  const tabs = document.querySelectorAll('.use-cases .tab');
  const panels = document.querySelectorAll('.tab-panel');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.target;
      tabs.forEach(t => t.classList.remove('active'));
      panels.forEach(p => p.classList.remove('active'));
      tab.classList.add('active');
      const activePanel = document.getElementById(target);
      if (activePanel) {
        activePanel.classList.add('active');
      }
    });
  });
});
