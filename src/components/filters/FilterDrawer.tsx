import { SkillButton } from "./SkillButton.tsx";
import AllSkillsDrawer from "./AllSkillsDrawer.astro";
import CloseButton from "../../assets/images/logo/CloseButton.svg";
import SkillsLogo from "../../assets/images/logo/Skills.svg";

---

<!-- Drawer init and show -->
<div class="text-2xl text-white mb-5 sm:mb-0 px-4 py-2 sm:py-4">
  <div
    class="flex flex-row justify-center items-center gap-2 sm:gap-8 lg:gap-4 xl:gap-8"
  >
    <button
      type="button"
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded duration-200 sm:py-2 sm:px-6 sm:text-lg"
      data-drawer-target="filterDrawer"
      data-drawer-show="filterDrawer"
      aria-controls="filterDrawer">Filters</button
    >
  </div>
</div>

<!-- Backdrop -->
<div
  id="backdrop"
  class="fixed inset-0 bg-gray-800 opacity-75 transition-opacity"
  aria-hidden="true"
  style="display: none;"
>
</div>

<!-- Drawer component -->
<div
  id="filterDrawer"
  class="fixed top-0 bottom-0 left-0 z-40 w-[380px] rounded-r-3xl mx-auto py-8 border-t-[3px] border-r-[3px] border-b-[3px] border-highlight-blue transition-transform -translate-x-full"
  tabindex="-1"
  aria-labelledby="filterDrawer-label"
  style="display: none; background-color: rgb(0 16 27)"
>
  <h5
    id="filterDrawer-label"
    class="text-base font-semibold uppercase text-gray-400 ml-5"
  >
    All Filters
  </h5>

  <button
    type="button"
    data-drawer-hide="filterDrawer"
    aria-controls="filterDrawer"
    class="text-white rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center hover:bg-white bg-gray-400"
  >
    <Image src={CloseButton} alt="Icon to close the current menu" />
    <span class="sr-only">Close Menu</span>
  </button>

  <hr class="my-6 sm:mx-auto border-highlight-blue lg:my-1" />

  <div class="py-4 overflow-y-auto">
    <ul class="space-y-2 font-medium ml-5">
      <a
        href="#"
        class="flex items-center p-2 rounded-lg text-white hover:bg-gray-700 group"
      >
        <Image src={SkillsLogo} alt="Icon to show skills" />
        <span class="flex-1 whitespace-nowrap ml-5">Skills</span>
        <span
          class="inline-flex items-center justify-center px-2 ml-3 text-sm font-medium rounded-full bg-gray-700 text-white"
        >
          {allSkills.length}
        </span>
      </a>

      <div class="mr-5">
        <ul
          class="w-full text-sm border border-gray-600 font-medium rounded-lg bg-gray-700 text-white"
        >
          <div>
            <!-- Show all the skills here that have been selected -->
          </div>

          {
            allSkills
              .slice(0, 5)
              .map((skill: Skill) => <SkillButton {...skill} />)
          }
          <li>
            <AllSkillsDrawer />
          </li>
        </ul>
      </div>
    </ul>
  </div>
  <hr class="my-6 sm:mx-auto border-gray-700 lg:my-1" />
</div>

<style>
  .open {
    transform: translateX(0);
  }

  #filterDrawer {
    position: fixed;
    z-index: 100;
  }
</style>

<script>
  document.addEventListener("DOMContentLoaded", function () {
    const showNavigationButton = document.querySelector(
      '[data-drawer-show="filterDrawer"]',
    );
    const hideNavigationButton = document.querySelector(
      '[data-drawer-hide="filterDrawer"]',
    );
    const navigationDrawer = document.getElementById("filterDrawer");
    const backdrop = document.getElementById("backdrop");

    if (
      showNavigationButton &&
      hideNavigationButton &&
      navigationDrawer &&
      backdrop
    ) {
      showNavigationButton.addEventListener("click", () => {
        // Show the backdrop and drawer
        backdrop.style.display = "block";
        navigationDrawer.style.display = "block";
        // Toggle the visibility of the drawer by adding/removing the "open" class
        navigationDrawer.classList.add("open");
      });

      hideNavigationButton.addEventListener("click", () => {
        // Hide the backdrop and drawer
        backdrop.style.display = "none";
        // Toggle the visibility of the drawer by adding/removing the "open" class
        navigationDrawer.classList.toggle("open");
      });

      // Close the sidebar by clicking outside
      backdrop.addEventListener("click", (event) => {
        if (event.target === backdrop) {
          backdrop.style.display = "none";
          navigationDrawer.classList.remove("open");
        }
      });
    }
  });
</script>
