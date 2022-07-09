<template>
  <main class="cv">
    <div class="cv-content">
      <h1>Nicholas Benson</h1>
      <h2>CAREER PROFILE</h2>
      <p>
        Digital Marketing Manager, focus on driving results through programmatic
        advertising within SEM and Social Ad channels. I strive to create Persona based
        and experience managing international campaigns, looking to continue my career
        growth within a company that can facilitate further growth
      </p>
      <p>
        Previous experience within Digital Marketing and creative roles, managing SEO, SEM
        (Google and Bing search advertising), Social and offline campaigns. In my current
        role I have discovered my passion for data-driven customer journey mapping to
        create in-depth UX/UI designs alongside research-based copywriting to create and
        report on iterative design changes.
      </p>
      <p>
        Demonstrated a high level of critical and creative thinking, being able to adapt
        to customer briefs to the changing needs of marketing strategies and content. I
        thrive working in a team environment and love problem-solving and challenging
        myself.
      </p>
      <h2>RELEVANT EXPERIENCE</h2>
      <Experience
        v-for="x in experiences"
        :key="x.id"
        :cv-job-title="x.jobTitle"
        :cv-company="x.company"
        :cv-job-description="x.description"
      />

      <h2>RELEVANT PROFESSIONAL DEVELOPMENT</h2>
      <h3>2022 Hubspot Marketing Software Certification</h3>
      <ul>
        <li>2022-2023 Certification Refresh</li>
        <li>2020-2021 Certification</li>
      </ul>
    </div>
  </main>
</template>
<script>
import Experience from "@/components/add-ins/cv/Experience.vue";
export default {
  components: {
    Experience,
  },
  data() {
    return {
      experiences: [
        {
          id: 0,
          jobTitle: "Digital Marketing Manager",
          company: "E2, Melbourne",
          timeFrame: "",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur qui modi perspiciatis praesentium eos velit voluptatum!",
          highlights: ["One", "Two", "Three"],
        },
        {
          id: 1,
          jobTitle: "Digital Marketing Specialist",
          company: "The Develop Studio, TDS Group, Melbourne",
          timeFrame: "",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur qui modi perspiciatis praesentium eos velit voluptatum!",
          highlights: ["One", "Two", "Three"],
        },
        {
          id: 2,
          jobTitle: "Digital Marketing Specialist",
          company: "Image Group International, Melbourne",
          timeFrame: "",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur qui modi perspiciatis praesentium eos velit voluptatum!",
          highlights: ["One", "Two", "Three"],
        },
                {
          id: 2,
          jobTitle: "Digital Marketing Specialist",
          company: "GJ Gardner Homes, Bundoora (NBWeb)",
          timeFrame: "",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur qui modi perspiciatis praesentium eos velit voluptatum!",
          highlights: ["One", "Two", "Three"],
        },
      ],
    };
  },
};
</script>
<style>
.cv {
  /* background-color: lightgreen; */
  display: flex;
  justify-content: center;
}
.cv-content {
  /* background: yellow; */
  max-width: 42rem;
  padding-top: 6rem;
}
</style>
