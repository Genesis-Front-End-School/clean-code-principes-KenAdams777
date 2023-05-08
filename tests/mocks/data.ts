import { CoursesPreview, Status, Tag } from "../../src/models/coursesPreviewModel";

export const reduxStoreInitialState = {
  courseDetails: {
    isLoading: false,
    courseDetails: null,
    error: null,
  },
  coursesPreview: {
    isLoading: false,
    courses: [],
    error: null,
  },
  videosProgress: {
    videosProgresStorage: null,
  },
};

export const mockedToken = {
  token:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIwMzk2YTNmZi0yMTYzLTRlOGItYmY4ZC1iMjc1NmMyZjhlOWIiLCJwbGF0Zm9ybSI6InN1YnNjcmlwdGlvbnMiLCJpYXQiOjE2ODMwMTg0NDAsImV4cCI6MTY4MzAxOTM0MH0.w36GeAy-f6OwwBXsx6cH6PxVDN-Nd3NWnbz_Vvg293Y",
};

export const mockedCourses: CoursesPreview = {
  courses: [
    {
      id: "352be3c6-848b-4c19-9e7d-54fe68fef183",
      title: "Lack of Motivation & How to Overcome It",
      tags: [Tag.Productivity],
      launchDate: "2023-03-06T16:50:06.000Z",
      status: Status.Launched,
      description: "Reignite your inner drive by managing factors that dampen your motivation.",
      duration: 1401,
      lessonsCount: 5,
      containsLockedLessons: false,
      previewImageLink:
        "https://wisey.app/assets/images/web/course-covers/lack-of-motivation-how-to-overcome-it",
      rating: 3.5,
      meta: {
        slug: "lack-of-motivation-how-to-overcome-it",
        skills: [
          "Aligning your goals with your motives",
          "Overcoming decision paralysis",
          "Reframing negative self-talk",
          "Gaining clarity",
          "Challenging yourself",
        ],
        courseVideoPreview: {
          link: "https://wisey.app/videos/lack-of-motivation-how-to-overcome-it/preview/AppleHLS1/preview.m3u8",
          duration: 27,
          previewImageLink:
            "https://wisey.app/assets/images/web/course-covers/lack-of-motivation-how-to-overcome-it/preview",
        },
      },
    },
    {
      id: "3b77ceb6-fb43-4cf5-a25b-8fe9222a0714",
      title: "The Power of Self-Discipline: How to Stay on Track",
      tags: [Tag.Productivity],
      launchDate: "2023-03-06T16:25:24.000Z",
      status: Status.Launched,
      description: "Find the inner strength to overcome procrastination and reach your goals.",
      duration: 1486,
      lessonsCount: 5,
      containsLockedLessons: false,
      previewImageLink:
        "https://wisey.app/assets/images/web/course-covers/the-power-of-self-discipline-how-to-stay-on-track",
      rating: 5,
      meta: {
        slug: "the-power-of-self-discipline-how-to-stay-on-track",
        skills: [
          "Increasing self-awareness",
          "Personal accountability",
          "Developing a routine",
          "Improving self-control",
          "Focusing on long-term goals",
        ],
        courseVideoPreview: {
          link: "https://wisey.app/videos/the-power-of-self-discipline-how-to-stay-on-track/preview/AppleHLS1/preview.m3u8",
          duration: 19,
          previewImageLink:
            "https://wisey.app/assets/images/web/course-covers/the-power-of-self-discipline-how-to-stay-on-track/preview",
        },
      },
    },
    {
      id: "f58ff842-2d2b-4f24-9a4b-c6f6e1fd866e",
      title: "Win Your Emotional Battle Against Procrastination",
      tags: [Tag.Productivity],
      launchDate: "2023-03-06T16:13:29.000Z",
      status: Status.Launched,
      description: "Learn to manage negative emotions that make you put things off.",
      duration: 1458,
      lessonsCount: 5,
      containsLockedLessons: false,
      previewImageLink:
        "https://wisey.app/assets/images/web/course-covers/Win-your-emotional-battle-against-procrastination",
      rating: 3.5,
      meta: {
        slug: "Win-your-emotional-battle-against-procrastination",
        skills: [
          "Eliminating boredom",
          "Overcoming the fear of failure",
          "Dealing with uncertainty",
          "Managing feelings of guilt",
          "Recognizing your emotions",
        ],
        courseVideoPreview: {
          link: "https://wisey.app/videos/Win-your-emotional-battle-against-procrastination/preview/AppleHLS1/preview.m3u8",
          duration: 17,
          previewImageLink:
            "https://wisey.app/assets/images/web/course-covers/Win-your-emotional-battle-against-procrastination/preview",
        },
      },
    },
    {
      id: "9c5d78a1-c393-4666-8de4-b9d10c424d30",
      title: "Goal-Setting 101: Become Productive, Not Busy",
      tags: [Tag.Productivity],
      launchDate: "2023-02-20T13:19:00.000Z",
      status: Status.Launched,
      description: "Achieve anything you want by defining goals that actually matter to you.",
      duration: 1420,
      lessonsCount: 5,
      containsLockedLessons: false,
      previewImageLink:
        "https://wisey.app/assets/images/web/course-covers/goal-setting-101-become-productive-not-busy",
      rating: 4.5,
      meta: {
        slug: "goal-setting-101-become-productive-not-busy",
        skills: ["Define goals that matter to you"],
        courseVideoPreview: {
          link: "https://wisey.app/videos/goal-setting-101-become-productive-not-busy/preview/AppleHLS1/preview.m3u8",
          duration: 17,
          previewImageLink:
            "https://wisey.app/assets/images/web/course-covers/goal-setting-101-become-productive-not-busy/preview",
        },
      },
    },
  ],
};
