/**
 * KCCF Impact Statistics
 * Centralized source for all impact numbers displayed across the website
 * Update these values as the foundation's impact grows
 */

export interface ImpactStat {
  value: string;
  label: string;
  color: {
    light: string;
    dark: string;
  };
}

// Centralized impact statistics for all pages
export const IMPACT_STATS = {
  // Home page impact statistics
  HOME: [
    {
      value: "3,700+",
      label: "Families Supported Financially",
      color: {
        light: "text-violet-600",
        dark: "dark:text-saffron-400"
      }
    },
    {
      value: "2,700+",
      label: "Hospital visits / celebrations",
      color: {
        light: "text-violet-600",
        dark: "dark:text-saffron-400"
      }
    },
    {
      value: "85,000+",
      label: "Care Packages",
      color: {
        light: "text-violet-600",
        dark: "dark:text-saffron-400"
      }
    },
    {
      value: "80+",
      label: "Summer Camp Children",
      color: {
        light: "text-violet-600",
        dark: "dark:text-saffron-400"
      }
    }
  ] as ImpactStat[],

  // Crazy Socks page impact statistics
  CRAZY_SOCKS: [
    {
      value: "85,000+",
      label: "Gift Bags Delivered",
      color: {
        light: "text-[#732154]",
        dark: "dark:text-saffron-400"
      }
    },
    {
      value: "200,000+",
      label: "Items Distributed",
      color: {
        light: "text-[#732154]",
        dark: "dark:text-saffron-400"
      }
    },
    {
      value: "Worldwide",
      label: "Global Reach",
      color: {
        light: "text-[#732154]",
        dark: "dark:text-saffron-400"
      }
    }
  ] as ImpactStat[],

  // Other statistics used across the site
  GENERAL: {
    CHILDREN_DIAGNOSED_DAILY: "275",
    AVERAGE_AGE_AT_DIAGNOSIS: "6",
    HOLIDAY_CARE_PACKAGES: "500+",
    SCHOOL_BUSES_EQUIVALENT: "7"
  } as const
} as const;
