import type { MutationData } from "./types";

/** Full extracted mutation coverage for the default Spiritual Platform graph. */
export const SAMPLE_MUTATION: MutationData = {
  "aggregate": {
    "killed": 420,
    "survived": 4,
    "total": 424,
    "score": 99.06
  },
  "services": {
    "connecting-circle": {
      "killed": 17,
      "survived": 0,
      "ignored": 10,
      "total": 17,
      "score": 100
    },
    "gamification": {
      "killed": 26,
      "survived": 0,
      "ignored": 22,
      "total": 26,
      "score": 100
    },
    "membership-miles": {
      "killed": 30,
      "survived": 0,
      "ignored": 25,
      "total": 30,
      "score": 100
    },
    "volunteering": {
      "killed": 29,
      "survived": 0,
      "ignored": 24,
      "total": 29,
      "score": 100
    },
    "identity-core": {
      "killed": 35,
      "survived": 1,
      "ignored": 30,
      "total": 36,
      "score": 97.22
    },
    "zoho-sync": {
      "killed": 31,
      "survived": 0,
      "ignored": 18,
      "total": 31,
      "score": 100
    },
    "ledger": {
      "killed": 13,
      "survived": 0,
      "ignored": 14,
      "total": 13,
      "score": 100
    },
    "quickbooks-adapter": {
      "killed": 14,
      "survived": 1,
      "ignored": 10,
      "total": 15,
      "score": 93.33
    },
    "tally-adapter": {
      "killed": 14,
      "survived": 1,
      "ignored": 10,
      "total": 15,
      "score": 93.33
    },
    "zoho-books-adapter": {
      "killed": 14,
      "survived": 1,
      "ignored": 10,
      "total": 15,
      "score": 93.33
    },
    "ai-gateway": {
      "killed": 16,
      "survived": 0,
      "ignored": 17,
      "total": 16,
      "score": 100
    },
    "communities": {
      "killed": 25,
      "survived": 0,
      "ignored": 17,
      "total": 25,
      "score": 100
    },
    "live-tv": {
      "killed": 20,
      "survived": 0,
      "ignored": 17,
      "total": 20,
      "score": 100
    },
    "lms": {
      "killed": 30,
      "survived": 0,
      "ignored": 29,
      "total": 30,
      "score": 100
    },
    "sales": {
      "killed": 27,
      "survived": 0,
      "ignored": 12,
      "total": 27,
      "score": 100
    },
    "affiliate": {
      "killed": 30,
      "survived": 0,
      "ignored": 27,
      "total": 30,
      "score": 100
    },
    "marketing": {
      "killed": 17,
      "survived": 0,
      "ignored": 14,
      "total": 17,
      "score": 100
    },
    "social-media": {
      "killed": 32,
      "survived": 0,
      "ignored": 20,
      "total": 32,
      "score": 100
    }
  },
  "endpoints": {
    "connecting-circle:findMatches": {
      "svc": "connecting-circle",
      "fnName": "findMatches",
      "killed": 8,
      "survived": 0,
      "ignored": 4,
      "total": 8,
      "score": 100,
      "survivors": []
    },
    "connecting-circle:respondToMatch": {
      "svc": "connecting-circle",
      "fnName": "respondToMatch",
      "killed": 8,
      "survived": 0,
      "ignored": 6,
      "total": 8,
      "score": 100,
      "survivors": []
    },
    "gamification:getProfile": {
      "svc": "gamification",
      "fnName": "getProfile",
      "killed": 3,
      "survived": 0,
      "ignored": 8,
      "total": 3,
      "score": 100,
      "survivors": []
    },
    "gamification:recordActivity": {
      "svc": "gamification",
      "fnName": "recordActivity",
      "killed": 6,
      "survived": 0,
      "ignored": 6,
      "total": 6,
      "score": 100,
      "survivors": []
    },
    "gamification:awardBadge": {
      "svc": "gamification",
      "fnName": "awardBadge",
      "killed": 12,
      "survived": 0,
      "ignored": 8,
      "total": 12,
      "score": 100,
      "survivors": []
    },
    "gamification:getLeaderboard": {
      "svc": "gamification",
      "fnName": "getLeaderboard",
      "killed": 2,
      "survived": 0,
      "ignored": 0,
      "total": 2,
      "score": 100,
      "survivors": []
    },
    "membership-miles:awardMiles": {
      "svc": "membership-miles",
      "fnName": "awardMiles",
      "killed": 7,
      "survived": 0,
      "ignored": 6,
      "total": 7,
      "score": 100,
      "survivors": []
    },
    "membership-miles:spendMiles": {
      "svc": "membership-miles",
      "fnName": "spendMiles",
      "killed": 20,
      "survived": 0,
      "ignored": 15,
      "total": 20,
      "score": 100,
      "survivors": []
    },
    "volunteering:getTasks": {
      "svc": "volunteering",
      "fnName": "getTasks",
      "killed": 5,
      "survived": 0,
      "ignored": 4,
      "total": 5,
      "score": 100,
      "survivors": []
    },
    "volunteering:logHours": {
      "svc": "volunteering",
      "fnName": "logHours",
      "killed": 10,
      "survived": 0,
      "ignored": 10,
      "total": 10,
      "score": 100,
      "survivors": []
    },
    "volunteering:approveLog": {
      "svc": "volunteering",
      "fnName": "approveLog",
      "killed": 11,
      "survived": 0,
      "ignored": 10,
      "total": 11,
      "score": 100,
      "survivors": []
    },
    "identity-core:getSeeker": {
      "svc": "identity-core",
      "fnName": "getSeeker",
      "killed": 1,
      "survived": 0,
      "ignored": 4,
      "total": 1,
      "score": 100,
      "survivors": []
    },
    "identity-core:getSeekerById": {
      "svc": "identity-core",
      "fnName": "getSeekerById",
      "killed": 1,
      "survived": 0,
      "ignored": 4,
      "total": 1,
      "score": 100,
      "survivors": []
    },
    "identity-core:upsertSeeker": {
      "svc": "identity-core",
      "fnName": "upsertSeeker",
      "killed": 12,
      "survived": 0,
      "ignored": 11,
      "total": 12,
      "score": 100,
      "survivors": []
    },
    "identity-core:updateConsent": {
      "svc": "identity-core",
      "fnName": "updateConsent",
      "killed": 13,
      "survived": 1,
      "ignored": 11,
      "total": 14,
      "score": 92.86,
      "survivors": [
        {
          "mutator": "ConditionalExpression",
          "line": 158,
          "replacement": "false"
        }
      ]
    },
    "zoho-sync:syncToZoho": {
      "svc": "zoho-sync",
      "fnName": "syncToZoho",
      "killed": 30,
      "survived": 0,
      "ignored": 13,
      "total": 30,
      "score": 100,
      "survivors": []
    },
    "zoho-sync:triggerSync": {
      "svc": "zoho-sync",
      "fnName": "triggerSync",
      "killed": 1,
      "survived": 0,
      "ignored": 5,
      "total": 1,
      "score": 100,
      "survivors": []
    },
    "ledger:recordTransaction": {
      "svc": "ledger",
      "fnName": "recordTransaction",
      "killed": 12,
      "survived": 0,
      "ignored": 14,
      "total": 12,
      "score": 100,
      "survivors": []
    },
    "ai-gateway:chat": {
      "svc": "ai-gateway",
      "fnName": "chat",
      "killed": 12,
      "survived": 0,
      "ignored": 13,
      "total": 12,
      "score": 100,
      "survivors": []
    },
    "ai-gateway:health": {
      "svc": "ai-gateway",
      "fnName": "health",
      "killed": 3,
      "survived": 0,
      "ignored": 4,
      "total": 3,
      "score": 100,
      "survivors": []
    },
    "communities:getRooms": {
      "svc": "communities",
      "fnName": "getRooms",
      "killed": 5,
      "survived": 0,
      "ignored": 4,
      "total": 5,
      "score": 100,
      "survivors": []
    },
    "communities:joinRoom": {
      "svc": "communities",
      "fnName": "joinRoom",
      "killed": 13,
      "survived": 0,
      "ignored": 9,
      "total": 13,
      "score": 100,
      "survivors": []
    },
    "communities:getMyCommunities": {
      "svc": "communities",
      "fnName": "getMyCommunities",
      "killed": 5,
      "survived": 0,
      "ignored": 4,
      "total": 5,
      "score": 100,
      "survivors": []
    },
    "live-tv:getSchedule": {
      "svc": "live-tv",
      "fnName": "getSchedule",
      "killed": 5,
      "survived": 0,
      "ignored": 4,
      "total": 5,
      "score": 100,
      "survivors": []
    },
    "live-tv:joinLive": {
      "svc": "live-tv",
      "fnName": "joinLive",
      "killed": 12,
      "survived": 0,
      "ignored": 6,
      "total": 12,
      "score": 100,
      "survivors": []
    },
    "live-tv:getLiveViewers": {
      "svc": "live-tv",
      "fnName": "getLiveViewers",
      "killed": 2,
      "survived": 0,
      "ignored": 7,
      "total": 2,
      "score": 100,
      "survivors": []
    },
    "lms:enroll": {
      "svc": "lms",
      "fnName": "enroll",
      "killed": 2,
      "survived": 0,
      "ignored": 6,
      "total": 2,
      "score": 100,
      "survivors": []
    },
    "lms:updateProgress": {
      "svc": "lms",
      "fnName": "updateProgress",
      "killed": 22,
      "survived": 0,
      "ignored": 19,
      "total": 22,
      "score": 100,
      "survivors": []
    },
    "lms:getEnrollments": {
      "svc": "lms",
      "fnName": "getEnrollments",
      "killed": 5,
      "survived": 0,
      "ignored": 4,
      "total": 5,
      "score": 100,
      "survivors": []
    },
    "sales:calculatePrice": {
      "svc": "sales",
      "fnName": "calculatePrice",
      "killed": 21,
      "survived": 0,
      "ignored": 8,
      "total": 21,
      "score": 100,
      "survivors": []
    },
    "sales:getOffers": {
      "svc": "sales",
      "fnName": "getOffers",
      "killed": 5,
      "survived": 0,
      "ignored": 4,
      "total": 5,
      "score": 100,
      "survivors": []
    },
    "affiliate:getOrCreateAffiliate": {
      "svc": "affiliate",
      "fnName": "getOrCreateAffiliate",
      "killed": 2,
      "survived": 0,
      "ignored": 8,
      "total": 2,
      "score": 100,
      "survivors": []
    },
    "affiliate:recordCommission": {
      "svc": "affiliate",
      "fnName": "recordCommission",
      "killed": 11,
      "survived": 0,
      "ignored": 9,
      "total": 11,
      "score": 100,
      "survivors": []
    },
    "affiliate:requestPayout": {
      "svc": "affiliate",
      "fnName": "requestPayout",
      "killed": 14,
      "survived": 0,
      "ignored": 10,
      "total": 14,
      "score": 100,
      "survivors": []
    },
    "marketing:getJourneys": {
      "svc": "marketing",
      "fnName": "getJourneys",
      "killed": 5,
      "survived": 0,
      "ignored": 4,
      "total": 5,
      "score": 100,
      "survivors": []
    },
    "marketing:sendJourney": {
      "svc": "marketing",
      "fnName": "sendJourney",
      "killed": 9,
      "survived": 0,
      "ignored": 6,
      "total": 9,
      "score": 100,
      "survivors": []
    },
    "marketing:getStats": {
      "svc": "marketing",
      "fnName": "getStats",
      "killed": 2,
      "survived": 0,
      "ignored": 4,
      "total": 2,
      "score": 100,
      "survivors": []
    },
    "social-media:createPost": {
      "svc": "social-media",
      "fnName": "createPost",
      "killed": 20,
      "survived": 0,
      "ignored": 10,
      "total": 20,
      "score": 100,
      "survivors": []
    },
    "social-media:approvePost": {
      "svc": "social-media",
      "fnName": "approvePost",
      "killed": 6,
      "survived": 0,
      "ignored": 6,
      "total": 6,
      "score": 100,
      "survivors": []
    },
    "social-media:getPendingPosts": {
      "svc": "social-media",
      "fnName": "getPendingPosts",
      "killed": 5,
      "survived": 0,
      "ignored": 4,
      "total": 5,
      "score": 100,
      "survivors": []
    }
  }
};

export let MUTATION: MutationData = SAMPLE_MUTATION;

export function setGalaxyGraphMutation(next: MutationData): void {
  MUTATION = next;
}
