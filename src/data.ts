// Full extracted Spiritual Platform / Verse Network graph catalog.
// Sourced from the platform mutation/coverage extract (services, endpoints,
// tests, contracts, topics). Default dataset for this public demo.
import type { ContractDef, EndpointDef, ServiceDef, ServiceKey, TestDef, TopicDef } from "./types";

export interface GalaxyGraphCatalog {
  services: ServiceDef[];
  endpoints: EndpointDef[];
  tests: TestDef[];
  contracts: ContractDef[];
  topics: TopicDef[];
  colors?: Record<ServiceKey, string>;
}

const FULL_SERVICES: ServiceDef[] = [
  {
    "id": "svc:connecting-circle",
    "svc": "connecting-circle",
    "file": "systems/deepen/connecting-circle/connecting-circle.ts"
  },
  {
    "id": "svc:gamification",
    "svc": "gamification",
    "file": "systems/deepen/gamification/gamification.ts"
  },
  {
    "id": "svc:membership-miles",
    "svc": "membership-miles",
    "file": "systems/deepen/membership-miles/membership-miles.ts"
  },
  {
    "id": "svc:volunteering",
    "svc": "volunteering",
    "file": "systems/deepen/volunteering/volunteering.ts"
  },
  {
    "id": "svc:identity-core",
    "svc": "identity-core",
    "file": "systems/identity/core/identity-core.ts"
  },
  {
    "id": "svc:zoho-sync",
    "svc": "zoho-sync",
    "file": "systems/identity/zoho-sync/zoho-sync.ts"
  },
  {
    "id": "svc:ledger",
    "svc": "ledger",
    "file": "systems/operate/ledger/ledger.ts"
  },
  {
    "id": "svc:quickbooks-adapter",
    "svc": "quickbooks-adapter",
    "file": "systems/operate/quickbooks-adapter/subscriptions.ts"
  },
  {
    "id": "svc:tally-adapter",
    "svc": "tally-adapter",
    "file": "systems/operate/tally-adapter/subscriptions.ts"
  },
  {
    "id": "svc:zoho-books-adapter",
    "svc": "zoho-books-adapter",
    "file": "systems/operate/zoho-books-adapter/subscriptions.ts"
  },
  {
    "id": "svc:ai-gateway",
    "svc": "ai-gateway",
    "file": "systems/platform/ai-gateway/ai-gateway.ts"
  },
  {
    "id": "svc:communities",
    "svc": "communities",
    "file": "systems/programme/communities/communities.ts"
  },
  {
    "id": "svc:live-tv",
    "svc": "live-tv",
    "file": "systems/programme/live-tv/live-tv.ts"
  },
  {
    "id": "svc:lms",
    "svc": "lms",
    "file": "systems/programme/lms/lms.ts"
  },
  {
    "id": "svc:sales",
    "svc": "sales",
    "file": "systems/programme/sales/sales.ts"
  },
  {
    "id": "svc:affiliate",
    "svc": "affiliate",
    "file": "systems/reach/affiliate/affiliate.ts"
  },
  {
    "id": "svc:marketing",
    "svc": "marketing",
    "file": "systems/reach/marketing/marketing.ts"
  },
  {
    "id": "svc:social-media",
    "svc": "social-media",
    "file": "systems/reach/social-media/social-media.ts"
  }
];

const FULL_ENDPOINTS: EndpointDef[] = [
  {
    "id": "ep:connecting-circle:findMatches",
    "fnName": "findMatches",
    "noun": "Find Matches",
    "svc": "connecting-circle",
    "method": "POST",
    "path": "/connecting/matches"
  },
  {
    "id": "ep:connecting-circle:respondToMatch",
    "fnName": "respondToMatch",
    "noun": "Respond To Match",
    "svc": "connecting-circle",
    "method": "POST",
    "path": "/connecting/respond"
  },
  {
    "id": "ep:gamification:getProfile",
    "fnName": "getProfile",
    "noun": "Get Profile",
    "svc": "gamification",
    "method": "GET",
    "path": "/gamification/profile"
  },
  {
    "id": "ep:gamification:recordActivity",
    "fnName": "recordActivity",
    "noun": "Record Activity",
    "svc": "gamification",
    "method": "POST",
    "path": "/gamification/activity"
  },
  {
    "id": "ep:gamification:awardBadge",
    "fnName": "awardBadge",
    "noun": "Award Badge",
    "svc": "gamification",
    "method": "POST",
    "path": "/gamification/badge"
  },
  {
    "id": "ep:gamification:getLeaderboard",
    "fnName": "getLeaderboard",
    "noun": "Get Leaderboard",
    "svc": "gamification",
    "method": "GET",
    "path": "/gamification/leaderboard"
  },
  {
    "id": "ep:membership-miles:awardMiles",
    "fnName": "awardMiles",
    "noun": "Award Miles",
    "svc": "membership-miles",
    "method": "POST",
    "path": "/miles/award"
  },
  {
    "id": "ep:membership-miles:spendMiles",
    "fnName": "spendMiles",
    "noun": "Spend Miles",
    "svc": "membership-miles",
    "method": "POST",
    "path": "/miles/spend"
  },
  {
    "id": "ep:membership-miles:getBalances",
    "fnName": "getBalances",
    "noun": "Get Balances",
    "svc": "membership-miles",
    "method": "GET",
    "path": "/miles/balance"
  },
  {
    "id": "ep:volunteering:getTasks",
    "fnName": "getTasks",
    "noun": "Get Tasks",
    "svc": "volunteering",
    "method": "GET",
    "path": "/volunteering/tasks"
  },
  {
    "id": "ep:volunteering:logHours",
    "fnName": "logHours",
    "noun": "Log Hours",
    "svc": "volunteering",
    "method": "POST",
    "path": "/volunteering/log"
  },
  {
    "id": "ep:volunteering:approveLog",
    "fnName": "approveLog",
    "noun": "Approve Log",
    "svc": "volunteering",
    "method": "POST",
    "path": "/volunteering/approve"
  },
  {
    "id": "ep:volunteering:getMyLogs",
    "fnName": "getMyLogs",
    "noun": "Get My Logs",
    "svc": "volunteering",
    "method": "GET",
    "path": "/volunteering/my-logs"
  },
  {
    "id": "ep:identity-core:getSeeker",
    "fnName": "getSeeker",
    "noun": "Get Seeker",
    "svc": "identity-core",
    "method": "GET",
    "path": "/identity/seeker"
  },
  {
    "id": "ep:identity-core:getSeekerById",
    "fnName": "getSeekerById",
    "noun": "Get Seeker By Id",
    "svc": "identity-core",
    "method": "GET",
    "path": "/identity/seekers/:userId",
    "internal": true
  },
  {
    "id": "ep:identity-core:upsertSeeker",
    "fnName": "upsertSeeker",
    "noun": "Upsert Seeker",
    "svc": "identity-core",
    "method": "PATCH",
    "path": "/identity/seeker"
  },
  {
    "id": "ep:identity-core:updateConsent",
    "fnName": "updateConsent",
    "noun": "Update Consent",
    "svc": "identity-core",
    "method": "PATCH",
    "path": "/identity/seeker/consent"
  },
  {
    "id": "ep:zoho-sync:syncToZoho",
    "fnName": "syncToZoho",
    "noun": "Sync To Zoho",
    "svc": "zoho-sync",
    "method": "POST",
    "path": "/zoho/sync",
    "internal": true
  },
  {
    "id": "ep:zoho-sync:triggerSync",
    "fnName": "triggerSync",
    "noun": "Trigger Sync",
    "svc": "zoho-sync",
    "method": "POST",
    "path": "/zoho/trigger",
    "internal": true
  },
  {
    "id": "ep:ledger:recordTransaction",
    "fnName": "recordTransaction",
    "noun": "Record Transaction",
    "svc": "ledger",
    "method": "POST",
    "path": "/ledger/transaction"
  },
  {
    "id": "ep:ledger:getHistory",
    "fnName": "getHistory",
    "noun": "Get History",
    "svc": "ledger",
    "method": "GET",
    "path": "/ledger/history"
  },
  {
    "id": "ep:ai-gateway:chat",
    "fnName": "chat",
    "noun": "Chat",
    "svc": "ai-gateway",
    "method": "POST",
    "path": "/ai/chat"
  },
  {
    "id": "ep:ai-gateway:health",
    "fnName": "health",
    "noun": "Health",
    "svc": "ai-gateway",
    "method": "GET",
    "path": "/ai/health"
  },
  {
    "id": "ep:communities:getRooms",
    "fnName": "getRooms",
    "noun": "Get Rooms",
    "svc": "communities",
    "method": "GET",
    "path": "/communities/rooms"
  },
  {
    "id": "ep:communities:joinRoom",
    "fnName": "joinRoom",
    "noun": "Join Room",
    "svc": "communities",
    "method": "POST",
    "path": "/communities/join"
  },
  {
    "id": "ep:communities:getMyCommunities",
    "fnName": "getMyCommunities",
    "noun": "Get My Communities",
    "svc": "communities",
    "method": "GET",
    "path": "/communities/me"
  },
  {
    "id": "ep:live-tv:getSchedule",
    "fnName": "getSchedule",
    "noun": "Get Schedule",
    "svc": "live-tv",
    "method": "GET",
    "path": "/live/schedule"
  },
  {
    "id": "ep:live-tv:joinLive",
    "fnName": "joinLive",
    "noun": "Join Live",
    "svc": "live-tv",
    "method": "POST",
    "path": "/live/join"
  },
  {
    "id": "ep:live-tv:getLiveViewers",
    "fnName": "getLiveViewers",
    "noun": "Get Live Viewers",
    "svc": "live-tv",
    "method": "GET",
    "path": "/live/viewers/:eventId"
  },
  {
    "id": "ep:lms:enroll",
    "fnName": "enroll",
    "noun": "Enroll",
    "svc": "lms",
    "method": "POST",
    "path": "/lms/enroll"
  },
  {
    "id": "ep:lms:updateProgress",
    "fnName": "updateProgress",
    "noun": "Update Progress",
    "svc": "lms",
    "method": "PATCH",
    "path": "/lms/progress"
  },
  {
    "id": "ep:lms:getEnrollments",
    "fnName": "getEnrollments",
    "noun": "Get Enrollments",
    "svc": "lms",
    "method": "GET",
    "path": "/lms/enrollments"
  },
  {
    "id": "ep:sales:calculatePrice",
    "fnName": "calculatePrice",
    "noun": "Calculate Price",
    "svc": "sales",
    "method": "POST",
    "path": "/sales/price"
  },
  {
    "id": "ep:sales:getOffers",
    "fnName": "getOffers",
    "noun": "Get Offers",
    "svc": "sales",
    "method": "GET",
    "path": "/sales/offers"
  },
  {
    "id": "ep:affiliate:getOrCreateAffiliate",
    "fnName": "getOrCreateAffiliate",
    "noun": "Get Or Create Affiliate",
    "svc": "affiliate",
    "method": "POST",
    "path": "/affiliate/me"
  },
  {
    "id": "ep:affiliate:recordCommission",
    "fnName": "recordCommission",
    "noun": "Record Commission",
    "svc": "affiliate",
    "method": "POST",
    "path": "/affiliate/commission",
    "internal": true
  },
  {
    "id": "ep:affiliate:requestPayout",
    "fnName": "requestPayout",
    "noun": "Request Payout",
    "svc": "affiliate",
    "method": "POST",
    "path": "/affiliate/payout"
  },
  {
    "id": "ep:marketing:getJourneys",
    "fnName": "getJourneys",
    "noun": "Get Journeys",
    "svc": "marketing",
    "method": "GET",
    "path": "/marketing/journeys"
  },
  {
    "id": "ep:marketing:sendJourney",
    "fnName": "sendJourney",
    "noun": "Send Journey",
    "svc": "marketing",
    "method": "POST",
    "path": "/marketing/send"
  },
  {
    "id": "ep:marketing:getStats",
    "fnName": "getStats",
    "noun": "Get Stats",
    "svc": "marketing",
    "method": "GET",
    "path": "/marketing/stats/:journeyId"
  },
  {
    "id": "ep:social-media:createPost",
    "fnName": "createPost",
    "noun": "Create Post",
    "svc": "social-media",
    "method": "POST",
    "path": "/social/posts"
  },
  {
    "id": "ep:social-media:approvePost",
    "fnName": "approvePost",
    "noun": "Approve Post",
    "svc": "social-media",
    "method": "POST",
    "path": "/social/approve"
  },
  {
    "id": "ep:social-media:getPendingPosts",
    "fnName": "getPendingPosts",
    "noun": "Get Pending Posts",
    "svc": "social-media",
    "method": "GET",
    "path": "/social/pending"
  }
];

const FULL_TESTS: TestDef[] = [
  {
    "id": "t:connecting-circle-1",
    "svc": "connecting-circle",
    "name": "returns only PENDING matches for the current user, ordered by score desc",
    "endpoints": [
      "connecting-circle:findMatches"
    ]
  },
  {
    "id": "t:connecting-circle-2",
    "svc": "connecting-circle",
    "name": "respects minScore filter",
    "endpoints": [
      "connecting-circle:findMatches"
    ]
  },
  {
    "id": "t:connecting-circle-3",
    "svc": "connecting-circle",
    "name": "respects limit and caps at MAX_LIMIT",
    "endpoints": [
      "connecting-circle:findMatches"
    ]
  },
  {
    "id": "t:connecting-circle-4",
    "svc": "connecting-circle",
    "name": "returns empty array when no matches",
    "endpoints": [
      "connecting-circle:findMatches"
    ]
  },
  {
    "id": "t:connecting-circle-5",
    "svc": "connecting-circle",
    "name": "accepts a match — only the matched user can flip status",
    "endpoints": [
      "connecting-circle:respondToMatch"
    ]
  },
  {
    "id": "t:connecting-circle-6",
    "svc": "connecting-circle",
    "name": "declines a match",
    "endpoints": [
      "connecting-circle:respondToMatch"
    ]
  },
  {
    "id": "t:connecting-circle-7",
    "svc": "connecting-circle",
    "name": "rejects responding to a match where current user is not the responder",
    "endpoints": [
      "connecting-circle:respondToMatch"
    ]
  },
  {
    "id": "t:connecting-circle-8",
    "svc": "connecting-circle",
    "name": "rejects responding to a non-existent match",
    "endpoints": [
      "connecting-circle:respondToMatch"
    ]
  },
  {
    "id": "t:connecting-circle-9",
    "svc": "connecting-circle",
    "name": "POST /connecting/matches requires valid JWT",
    "http": true,
    "endpoints": []
  },
  {
    "id": "t:connecting-circle-10",
    "svc": "connecting-circle",
    "name": "POST /connecting/respond succeeds with valid JWT",
    "http": true,
    "endpoints": []
  },
  {
    "id": "t:gamification-11",
    "svc": "gamification",
    "name": "creates profile with default values on first access",
    "endpoints": [
      "gamification:getProfile"
    ]
  },
  {
    "id": "t:gamification-12",
    "svc": "gamification",
    "name": "propagates identity errors instead of creating an orphan profile",
    "endpoints": [
      "gamification:getProfile"
    ]
  },
  {
    "id": "t:gamification-13",
    "svc": "gamification",
    "name": "increases streak, peace index, and points",
    "endpoints": [
      "gamification:getProfile",
      "gamification:recordActivity"
    ]
  },
  {
    "id": "t:gamification-14",
    "svc": "gamification",
    "name": "caps peace index at 100",
    "endpoints": [
      "gamification:recordActivity"
    ]
  },
  {
    "id": "t:gamification-15",
    "svc": "gamification",
    "name": "throws notFound when no profile exists for the caller",
    "endpoints": [
      "gamification:recordActivity"
    ]
  },
  {
    "id": "t:gamification-16",
    "svc": "gamification",
    "name": "awards a badge and prevents duplicates",
    "endpoints": [
      "gamification:awardBadge"
    ]
  },
  {
    "id": "t:gamification-17",
    "svc": "gamification",
    "name": "writes an audit row on first award and not on duplicate",
    "endpoints": [
      "gamification:awardBadge"
    ]
  },
  {
    "id": "t:gamification-18",
    "svc": "gamification",
    "name": "returns top users by peace index",
    "endpoints": [
      "gamification:getLeaderboard"
    ]
  },
  {
    "id": "t:gamification-19",
    "svc": "gamification",
    "name": "GET /gamification/profile requires valid JWT",
    "http": true,
    "endpoints": []
  },
  {
    "id": "t:gamification-20",
    "svc": "gamification",
    "name": "POST /gamification/activity succeeds with valid JWT",
    "http": true,
    "endpoints": []
  },
  {
    "id": "t:membership-miles-21",
    "svc": "membership-miles",
    "name": "awards miles and correctly updates lifetime + spendable balance",
    "endpoints": [
      "membership-miles:awardMiles"
    ]
  },
  {
    "id": "t:membership-miles-22",
    "svc": "membership-miles",
    "name": "rejects negative or zero amount",
    "endpoints": [
      "membership-miles:awardMiles"
    ]
  },
  {
    "id": "t:membership-miles-23",
    "svc": "membership-miles",
    "name": "successfully spends miles with atomic transaction and row locking",
    "endpoints": [
      "membership-miles:awardMiles",
      "membership-miles:spendMiles"
    ]
  },
  {
    "id": "t:membership-miles-24",
    "svc": "membership-miles",
    "name": "rejects zero or negative amount",
    "endpoints": [
      "membership-miles:awardMiles",
      "membership-miles:spendMiles"
    ]
  },
  {
    "id": "t:membership-miles-25",
    "svc": "membership-miles",
    "name": "allows spending the entire balance (boundary: spendable == amount)",
    "endpoints": [
      "membership-miles:awardMiles",
      "membership-miles:spendMiles"
    ]
  },
  {
    "id": "t:membership-miles-26",
    "svc": "membership-miles",
    "name": "fails with insufficient balance and does NOT deduct anything",
    "endpoints": [
      "membership-miles:awardMiles",
      "membership-miles:spendMiles",
      "membership-miles:getBalances"
    ]
  },
  {
    "id": "t:membership-miles-27",
    "svc": "membership-miles",
    "name": "writes a miles.spent row to audit with before/after balances",
    "endpoints": [
      "membership-miles:awardMiles",
      "membership-miles:spendMiles"
    ]
  },
  {
    "id": "t:membership-miles-28",
    "svc": "membership-miles",
    "name": "does not write an audit row when spend rejects on insufficient balance",
    "endpoints": [
      "membership-miles:awardMiles",
      "membership-miles:spendMiles"
    ]
  },
  {
    "id": "t:membership-miles-29",
    "svc": "membership-miles",
    "name": "prevents race conditions via FOR UPDATE lock",
    "endpoints": [
      "membership-miles:awardMiles",
      "membership-miles:spendMiles",
      "membership-miles:getBalances"
    ]
  },
  {
    "id": "t:membership-miles-30",
    "svc": "membership-miles",
    "name": "returns correct balances for new user (zero)",
    "endpoints": [
      "membership-miles:getBalances"
    ]
  },
  {
    "id": "t:membership-miles-31",
    "svc": "membership-miles",
    "name": "returns correct balances after multiple awards and spends",
    "endpoints": [
      "membership-miles:awardMiles",
      "membership-miles:spendMiles",
      "membership-miles:getBalances"
    ]
  },
  {
    "id": "t:membership-miles-32",
    "svc": "membership-miles",
    "name": "GET /miles/balance requires valid JWT",
    "http": true,
    "endpoints": []
  },
  {
    "id": "t:membership-miles-33",
    "svc": "membership-miles",
    "name": "POST /miles/award succeeds with valid JWT",
    "http": true,
    "endpoints": []
  },
  {
    "id": "t:membership-miles-34",
    "svc": "membership-miles",
    "name": "POST /miles/spend succeeds with valid JWT",
    "http": true,
    "endpoints": []
  },
  {
    "id": "t:volunteering-35",
    "svc": "volunteering",
    "name": "returns only active tasks",
    "endpoints": [
      "volunteering:getTasks"
    ]
  },
  {
    "id": "t:volunteering-36",
    "svc": "volunteering",
    "name": "logs hours for a task",
    "endpoints": [
      "volunteering:logHours"
    ]
  },
  {
    "id": "t:volunteering-37",
    "svc": "volunteering",
    "name": "persists null notes when caller omits them",
    "endpoints": [
      "volunteering:logHours"
    ]
  },
  {
    "id": "t:volunteering-38",
    "svc": "volunteering",
    "name": "propagates identity errors instead of writing an orphan log",
    "endpoints": [
      "volunteering:logHours"
    ]
  },
  {
    "id": "t:volunteering-39",
    "svc": "volunteering",
    "name": "rejects zero or negative hours",
    "endpoints": [
      "volunteering:logHours"
    ]
  },
  {
    "id": "t:volunteering-40",
    "svc": "volunteering",
    "name": "returns empty list for user with no logs",
    "endpoints": [
      "volunteering:getMyLogs"
    ]
  },
  {
    "id": "t:volunteering-41",
    "svc": "volunteering",
    "name": "returns user's volunteering history newest first",
    "endpoints": [
      "volunteering:logHours",
      "volunteering:getMyLogs"
    ]
  },
  {
    "id": "t:volunteering-42",
    "svc": "volunteering",
    "name": "flips approved=true, stamps approvedBy, returns the row",
    "endpoints": [
      "volunteering:logHours",
      "volunteering:approveLog"
    ]
  },
  {
    "id": "t:volunteering-43",
    "svc": "volunteering",
    "name": "publishes seva-approved exactly once with the expected payload",
    "endpoints": [
      "volunteering:logHours",
      "volunteering:approveLog"
    ]
  },
  {
    "id": "t:volunteering-44",
    "svc": "volunteering",
    "name": "each approval gets a unique eventId",
    "endpoints": [
      "volunteering:logHours",
      "volunteering:approveLog"
    ]
  },
  {
    "id": "t:volunteering-45",
    "svc": "volunteering",
    "name": "rejects already-approved logs and does not re-publish",
    "endpoints": [
      "volunteering:logHours",
      "volunteering:approveLog"
    ]
  },
  {
    "id": "t:volunteering-46",
    "svc": "volunteering",
    "name": "rejects unknown logIds and does not publish",
    "endpoints": [
      "volunteering:approveLog"
    ]
  },
  {
    "id": "t:volunteering-47",
    "svc": "volunteering",
    "name": "writes a volunteering.log.approved row to audit with before/after",
    "endpoints": [
      "volunteering:logHours",
      "volunteering:approveLog"
    ]
  },
  {
    "id": "t:volunteering-48",
    "svc": "volunteering",
    "name": "does not write an audit row when approval fails",
    "endpoints": [
      "volunteering:approveLog"
    ]
  },
  {
    "id": "t:volunteering-49",
    "svc": "volunteering",
    "name": "GET /volunteering/tasks requires valid JWT",
    "http": true,
    "endpoints": []
  },
  {
    "id": "t:volunteering-50",
    "svc": "volunteering",
    "name": "POST /volunteering/log succeeds with valid JWT",
    "http": true,
    "endpoints": []
  },
  {
    "id": "t:identity-core-51",
    "svc": "identity-core",
    "name": "creates new seeker on first call using auth context",
    "endpoints": [
      "identity-core:upsertSeeker"
    ]
  },
  {
    "id": "t:identity-core-52",
    "svc": "identity-core",
    "name": "stores empty string when auth.email is missing on insert",
    "endpoints": [
      "identity-core:upsertSeeker"
    ]
  },
  {
    "id": "t:identity-core-53",
    "svc": "identity-core",
    "name": "stores 'New Seeker' default when auth.name is missing on insert",
    "endpoints": [
      "identity-core:upsertSeeker"
    ]
  },
  {
    "id": "t:identity-core-54",
    "svc": "identity-core",
    "name": "updates last_active_at on subsequent calls",
    "endpoints": [
      "identity-core:upsertSeeker"
    ]
  },
  {
    "id": "t:identity-core-55",
    "svc": "identity-core",
    "name": "updates provided fields and leaves others unchanged",
    "endpoints": [
      "identity-core:upsertSeeker"
    ]
  },
  {
    "id": "t:identity-core-56",
    "svc": "identity-core",
    "name": "persists preferredCommunication",
    "endpoints": [
      "identity-core:upsertSeeker"
    ]
  },
  {
    "id": "t:identity-core-57",
    "svc": "identity-core",
    "name": "partial update only changes supplied fields",
    "endpoints": [
      "identity-core:upsertSeeker"
    ]
  },
  {
    "id": "t:identity-core-58",
    "svc": "identity-core",
    "name": "does not touch consent fields or consent_updated_at",
    "endpoints": [
      "identity-core:upsertSeeker"
    ]
  },
  {
    "id": "t:identity-core-59",
    "svc": "identity-core",
    "name": "returns full seeker for existing user",
    "endpoints": [
      "identity-core:getSeeker",
      "identity-core:upsertSeeker"
    ]
  },
  {
    "id": "t:identity-core-60",
    "svc": "identity-core",
    "name": "throws not found when seeker does not exist",
    "endpoints": [
      "identity-core:getSeeker"
    ]
  },
  {
    "id": "t:identity-core-61",
    "svc": "identity-core",
    "name": "returns null mirror fields and isZohoSynced=false when no mirror row",
    "endpoints": [
      "identity-core:getSeeker",
      "identity-core:upsertSeeker"
    ]
  },
  {
    "id": "t:identity-core-62",
    "svc": "identity-core",
    "name": "returns mirror fields and isZohoSynced=true when last_zoho_sync_at is set",
    "endpoints": [
      "identity-core:getSeeker",
      "identity-core:upsertSeeker"
    ]
  },
  {
    "id": "t:identity-core-63",
    "svc": "identity-core",
    "name": "returns isZohoSynced=false when mirror row exists but last_zoho_sync_at is NULL",
    "endpoints": [
      "identity-core:getSeeker",
      "identity-core:upsertSeeker"
    ]
  },
  {
    "id": "t:identity-core-64",
    "svc": "identity-core",
    "name": "updates consent_marketing and stamps consent_updated_at",
    "endpoints": [
      "identity-core:upsertSeeker",
      "identity-core:updateConsent"
    ]
  },
  {
    "id": "t:identity-core-65",
    "svc": "identity-core",
    "name": "writes a consent.updated row to audit.events with before/after snapshots",
    "endpoints": [
      "identity-core:upsertSeeker",
      "identity-core:updateConsent"
    ]
  },
  {
    "id": "t:identity-core-66",
    "svc": "identity-core",
    "name": "audit row captures the before-state, not the after-state, on the 'before' field",
    "endpoints": [
      "identity-core:upsertSeeker",
      "identity-core:updateConsent"
    ]
  },
  {
    "id": "t:identity-core-67",
    "svc": "identity-core",
    "name": "updates consent_dpdp and stamps consent_updated_at",
    "endpoints": [
      "identity-core:upsertSeeker",
      "identity-core:updateConsent"
    ]
  },
  {
    "id": "t:identity-core-68",
    "svc": "identity-core",
    "name": "partial update leaves other consent flags unchanged",
    "endpoints": [
      "identity-core:upsertSeeker",
      "identity-core:updateConsent"
    ]
  },
  {
    "id": "t:identity-core-69",
    "svc": "identity-core",
    "name": "throws not found when seeker does not exist",
    "endpoints": [
      "identity-core:updateConsent"
    ]
  },
  {
    "id": "t:identity-core-70",
    "svc": "identity-core",
    "name": "returns full SeekerView including mirror fields",
    "endpoints": [
      "identity-core:upsertSeeker",
      "identity-core:updateConsent"
    ]
  },
  {
    "id": "t:identity-core-71",
    "svc": "identity-core",
    "name": "all public APIs are correctly exposed",
    "endpoints": []
  },
  {
    "id": "t:identity-core-72",
    "svc": "identity-core",
    "name": "GET /identity/seeker requires valid JWT",
    "http": true,
    "endpoints": []
  },
  {
    "id": "t:identity-core-73",
    "svc": "identity-core",
    "name": "GET /identity/seeker succeeds with valid JWT",
    "http": true,
    "endpoints": [
      "identity-core:upsertSeeker"
    ]
  },
  {
    "id": "t:identity-core-74",
    "svc": "identity-core",
    "name": "PATCH /identity/seeker updates seeker with valid JWT",
    "http": true,
    "endpoints": [
      "identity-core:upsertSeeker"
    ]
  },
  {
    "id": "t:zoho-sync-75",
    "svc": "zoho-sync",
    "name": "pushes seeker payload through the port and records SUCCESS",
    "endpoints": [
      "zoho-sync:syncToZoho"
    ]
  },
  {
    "id": "t:zoho-sync-76",
    "svc": "zoho-sync",
    "name": "leaves outbox row PENDING when port throws NotIntegratedError",
    "endpoints": [
      "zoho-sync:syncToZoho"
    ]
  },
  {
    "id": "t:zoho-sync-77",
    "svc": "zoho-sync",
    "name": "marks outbox row FAILED when port throws a generic error",
    "endpoints": [
      "zoho-sync:syncToZoho"
    ]
  },
  {
    "id": "t:zoho-sync-78",
    "svc": "zoho-sync",
    "name": "returns FAILED with 'seeker not found' when no seeker row exists",
    "endpoints": [
      "zoho-sync:syncToZoho"
    ]
  },
  {
    "id": "t:zoho-sync-79",
    "svc": "zoho-sync",
    "name": "substitutes empty string when seeker.name is null",
    "endpoints": [
      "zoho-sync:syncToZoho"
    ]
  },
  {
    "id": "t:zoho-sync-80",
    "svc": "zoho-sync",
    "name": "forwards the event to syncToZoho and writes the audit row",
    "endpoints": [
      "zoho-sync:triggerSync"
    ]
  },
  {
    "id": "t:zoho-sync-81",
    "svc": "zoho-sync",
    "name": "POST /zoho/trigger requires valid JWT",
    "http": true,
    "endpoints": []
  },
  {
    "id": "t:zoho-sync-82",
    "svc": "zoho-sync",
    "name": "POST /zoho/trigger succeeds with valid JWT",
    "http": true,
    "endpoints": []
  },
  {
    "id": "t:ledger-83",
    "svc": "ledger",
    "name": "records a transaction and returns the entry",
    "endpoints": [
      "ledger:recordTransaction"
    ]
  },
  {
    "id": "t:ledger-84",
    "svc": "ledger",
    "name": "rejects zero amount",
    "endpoints": [
      "ledger:recordTransaction"
    ]
  },
  {
    "id": "t:ledger-85",
    "svc": "ledger",
    "name": "publishes transaction-recorded once with the row's data",
    "endpoints": [
      "ledger:recordTransaction"
    ]
  },
  {
    "id": "t:ledger-86",
    "svc": "ledger",
    "name": "rejected transactions do not publish an event",
    "endpoints": [
      "ledger:recordTransaction"
    ]
  },
  {
    "id": "t:ledger-87",
    "svc": "ledger",
    "name": "writes a ledger.transaction.recorded row to audit",
    "endpoints": [
      "ledger:recordTransaction"
    ]
  },
  {
    "id": "t:ledger-88",
    "svc": "ledger",
    "name": "rejected transactions do not write an audit row",
    "endpoints": [
      "ledger:recordTransaction"
    ]
  },
  {
    "id": "t:ledger-89",
    "svc": "ledger",
    "name": "returns empty history for new user",
    "endpoints": [
      "ledger:getHistory"
    ]
  },
  {
    "id": "t:ledger-90",
    "svc": "ledger",
    "name": "returns transactions in descending order by created_at",
    "endpoints": [
      "ledger:recordTransaction",
      "ledger:getHistory"
    ]
  },
  {
    "id": "t:ledger-91",
    "svc": "ledger",
    "name": "POST /ledger/transaction requires valid JWT",
    "http": true,
    "endpoints": []
  },
  {
    "id": "t:ledger-92",
    "svc": "ledger",
    "name": "POST /ledger/transaction succeeds with valid JWT",
    "http": true,
    "endpoints": []
  },
  {
    "id": "t:ledger-93",
    "svc": "ledger",
    "name": "GET /ledger/history succeeds with valid JWT",
    "http": true,
    "endpoints": []
  },
  {
    "id": "t:quickbooks-adapter-94",
    "svc": "quickbooks-adapter",
    "name": "happy path: posting succeeds, row marked SUCCESS with external id",
    "endpoints": []
  },
  {
    "id": "t:quickbooks-adapter-95",
    "svc": "quickbooks-adapter",
    "name": "stub default leaves the row PENDING",
    "endpoints": []
  },
  {
    "id": "t:quickbooks-adapter-96",
    "svc": "quickbooks-adapter",
    "name": "real failure marks the row FAILED with the message",
    "endpoints": []
  },
  {
    "id": "t:quickbooks-adapter-97",
    "svc": "quickbooks-adapter",
    "name": "dedupes on ledgerRowId — bus retry doesn't double-post",
    "endpoints": []
  },
  {
    "id": "t:tally-adapter-98",
    "svc": "tally-adapter",
    "name": "happy path: posting succeeds, row marked SUCCESS with external id",
    "endpoints": []
  },
  {
    "id": "t:tally-adapter-99",
    "svc": "tally-adapter",
    "name": "stub default leaves the row PENDING (NotIntegratedError swallowed)",
    "endpoints": []
  },
  {
    "id": "t:tally-adapter-100",
    "svc": "tally-adapter",
    "name": "real failure (non-NotIntegratedError) marks the row FAILED with the message",
    "endpoints": []
  },
  {
    "id": "t:tally-adapter-101",
    "svc": "tally-adapter",
    "name": "dedupes on ledgerRowId — bus retry doesn't double-post",
    "endpoints": []
  },
  {
    "id": "t:tally-adapter-102",
    "svc": "tally-adapter",
    "name": "PENDING rows aren't re-tried on the bus path — drain is reconciliation-owned",
    "endpoints": []
  },
  {
    "id": "t:zoho-books-adapter-103",
    "svc": "zoho-books-adapter",
    "name": "happy path: posting succeeds, row marked SUCCESS with external id",
    "endpoints": []
  },
  {
    "id": "t:zoho-books-adapter-104",
    "svc": "zoho-books-adapter",
    "name": "stub default leaves the row PENDING",
    "endpoints": []
  },
  {
    "id": "t:zoho-books-adapter-105",
    "svc": "zoho-books-adapter",
    "name": "real failure marks the row FAILED with the message",
    "endpoints": []
  },
  {
    "id": "t:zoho-books-adapter-106",
    "svc": "zoho-books-adapter",
    "name": "dedupes on ledgerRowId — bus retry doesn't double-post",
    "endpoints": []
  },
  {
    "id": "t:ai-gateway-107",
    "svc": "ai-gateway",
    "name": "returns a grounded reply and persists the interaction",
    "endpoints": [
      "ai-gateway:chat"
    ]
  },
  {
    "id": "t:ai-gateway-108",
    "svc": "ai-gateway",
    "name": "rejects empty messages",
    "endpoints": [
      "ai-gateway:chat"
    ]
  },
  {
    "id": "t:ai-gateway-109",
    "svc": "ai-gateway",
    "name": "rejects undefined messages (kills LogicalOperator || → &&)",
    "endpoints": [
      "ai-gateway:chat"
    ]
  },
  {
    "id": "t:ai-gateway-110",
    "svc": "ai-gateway",
    "name": "rejects messages over the length cap",
    "endpoints": [
      "ai-gateway:chat"
    ]
  },
  {
    "id": "t:ai-gateway-111",
    "svc": "ai-gateway",
    "name": "accepts a message of exactly the maximum allowed length (boundary)",
    "endpoints": [
      "ai-gateway:chat"
    ]
  },
  {
    "id": "t:ai-gateway-112",
    "svc": "ai-gateway",
    "name": "returns healthy status",
    "endpoints": [
      "ai-gateway:health"
    ]
  },
  {
    "id": "t:ai-gateway-113",
    "svc": "ai-gateway",
    "name": "POST /ai/chat requires valid JWT",
    "http": true,
    "endpoints": []
  },
  {
    "id": "t:ai-gateway-114",
    "svc": "ai-gateway",
    "name": "POST /ai/chat succeeds with valid JWT",
    "http": true,
    "endpoints": []
  },
  {
    "id": "t:communities-115",
    "svc": "communities",
    "name": "returns only public rooms ordered by member_count desc",
    "endpoints": [
      "communities:getRooms"
    ]
  },
  {
    "id": "t:communities-116",
    "svc": "communities",
    "name": "aliases columns to camelCase",
    "endpoints": [
      "communities:getRooms"
    ]
  },
  {
    "id": "t:communities-117",
    "svc": "communities",
    "name": "creates membership and returns Circle.so SSO URL",
    "endpoints": [
      "communities:joinRoom"
    ]
  },
  {
    "id": "t:communities-118",
    "svc": "communities",
    "name": "is idempotent — second join does not create duplicate membership",
    "endpoints": [
      "communities:joinRoom"
    ]
  },
  {
    "id": "t:communities-119",
    "svc": "communities",
    "name": "rejects unknown room",
    "endpoints": [
      "communities:joinRoom"
    ]
  },
  {
    "id": "t:communities-120",
    "svc": "communities",
    "name": "publishes community-joined exactly once on first join with the expected payload",
    "endpoints": [
      "communities:joinRoom"
    ]
  },
  {
    "id": "t:communities-121",
    "svc": "communities",
    "name": "re-joining the same room does NOT re-publish (transition gate)",
    "endpoints": [
      "communities:joinRoom"
    ]
  },
  {
    "id": "t:communities-122",
    "svc": "communities",
    "name": "each distinct (user, room) join gets a unique eventId and membershipId",
    "endpoints": [
      "communities:joinRoom"
    ]
  },
  {
    "id": "t:communities-123",
    "svc": "communities",
    "name": "rejecting an unknown room does not publish",
    "endpoints": [
      "communities:joinRoom"
    ]
  },
  {
    "id": "t:communities-124",
    "svc": "communities",
    "name": "returns only the caller's memberships",
    "endpoints": [
      "communities:joinRoom",
      "communities:getMyCommunities"
    ]
  },
  {
    "id": "t:communities-125",
    "svc": "communities",
    "name": "returns empty list when user has no memberships",
    "endpoints": [
      "communities:getMyCommunities"
    ]
  },
  {
    "id": "t:communities-126",
    "svc": "communities",
    "name": "GET /communities/rooms requires valid JWT",
    "http": true,
    "endpoints": []
  },
  {
    "id": "t:communities-127",
    "svc": "communities",
    "name": "GET /communities/rooms succeeds with valid JWT",
    "http": true,
    "endpoints": []
  },
  {
    "id": "t:live-tv-128",
    "svc": "live-tv",
    "name": "returns upcoming and currently live events",
    "endpoints": [
      "live-tv:getSchedule"
    ]
  },
  {
    "id": "t:live-tv-129",
    "svc": "live-tv",
    "name": "returns an empty array when no events match the window",
    "endpoints": [
      "live-tv:getSchedule"
    ]
  },
  {
    "id": "t:live-tv-130",
    "svc": "live-tv",
    "name": "returns Mux URL and LiveKit token for valid event",
    "endpoints": [
      "live-tv:joinLive"
    ]
  },
  {
    "id": "t:live-tv-131",
    "svc": "live-tv",
    "name": "throws not found for non-existent event",
    "endpoints": [
      "live-tv:joinLive"
    ]
  },
  {
    "id": "t:live-tv-132",
    "svc": "live-tv",
    "name": "returns empty muxPlaybackUrl when event has no muxStreamId",
    "endpoints": [
      "live-tv:joinLive"
    ]
  },
  {
    "id": "t:live-tv-133",
    "svc": "live-tv",
    "name": "returns current viewer count",
    "endpoints": [
      "live-tv:getLiveViewers"
    ]
  },
  {
    "id": "t:live-tv-134",
    "svc": "live-tv",
    "name": "GET /live/schedule requires valid JWT",
    "http": true,
    "endpoints": []
  },
  {
    "id": "t:live-tv-135",
    "svc": "live-tv",
    "name": "POST /live/join succeeds with valid JWT",
    "http": true,
    "endpoints": []
  },
  {
    "id": "t:lms-136",
    "svc": "lms",
    "name": "creates a new enrollment with progress 0",
    "endpoints": [
      "lms:enroll"
    ]
  },
  {
    "id": "t:lms-137",
    "svc": "lms",
    "name": "updates progress without completing",
    "endpoints": [
      "lms:enroll",
      "lms:updateProgress"
    ]
  },
  {
    "id": "t:lms-138",
    "svc": "lms",
    "name": "marks completed and issues certificate when reaching 100",
    "endpoints": [
      "lms:enroll",
      "lms:updateProgress"
    ]
  },
  {
    "id": "t:lms-139",
    "svc": "lms",
    "name": "preserves completedAt timestamp on subsequent 100 updates",
    "endpoints": [
      "lms:enroll",
      "lms:updateProgress"
    ]
  },
  {
    "id": "t:lms-140",
    "svc": "lms",
    "name": "rejects out-of-range progress",
    "endpoints": [
      "lms:enroll",
      "lms:updateProgress"
    ]
  },
  {
    "id": "t:lms-141",
    "svc": "lms",
    "name": "accepts progressPercent === 0 (boundary kills < → <=)",
    "endpoints": [
      "lms:enroll",
      "lms:updateProgress"
    ]
  },
  {
    "id": "t:lms-142",
    "svc": "lms",
    "name": "throws not found when no enrollment exists",
    "endpoints": [
      "lms:updateProgress"
    ]
  },
  {
    "id": "t:lms-143",
    "svc": "lms",
    "name": "returns empty list for new user",
    "endpoints": [
      "lms:getEnrollments"
    ]
  },
  {
    "id": "t:lms-144",
    "svc": "lms",
    "name": "returns enrollments in descending order by enrolled_at",
    "endpoints": [
      "lms:enroll",
      "lms:getEnrollments"
    ]
  },
  {
    "id": "t:lms-145",
    "svc": "lms",
    "name": "POST /lms/enroll requires valid JWT",
    "http": true,
    "endpoints": []
  },
  {
    "id": "t:lms-146",
    "svc": "lms",
    "name": "POST /lms/enroll succeeds with valid JWT",
    "http": true,
    "endpoints": []
  },
  {
    "id": "t:lms-147",
    "svc": "lms",
    "name": "GET /lms/enrollments succeeds with valid JWT",
    "http": true,
    "endpoints": []
  },
  {
    "id": "t:sales-148",
    "svc": "sales",
    "name": "returns base price when no coupon supplied",
    "endpoints": [
      "sales:calculatePrice"
    ]
  },
  {
    "id": "t:sales-149",
    "svc": "sales",
    "name": "applies percent coupon",
    "endpoints": [
      "sales:calculatePrice"
    ]
  },
  {
    "id": "t:sales-150",
    "svc": "sales",
    "name": "applies flat-amount coupon",
    "endpoints": [
      "sales:calculatePrice"
    ]
  },
  {
    "id": "t:sales-151",
    "svc": "sales",
    "name": "clamps final price to zero when discount exceeds base",
    "endpoints": [
      "sales:calculatePrice"
    ]
  },
  {
    "id": "t:sales-152",
    "svc": "sales",
    "name": "ignores expired coupon",
    "endpoints": [
      "sales:calculatePrice"
    ]
  },
  {
    "id": "t:sales-153",
    "svc": "sales",
    "name": "ignores fully-used coupon",
    "endpoints": [
      "sales:calculatePrice"
    ]
  },
  {
    "id": "t:sales-154",
    "svc": "sales",
    "name": "throws not found when no matching offer",
    "endpoints": [
      "sales:calculatePrice"
    ]
  },
  {
    "id": "t:sales-155",
    "svc": "sales",
    "name": "prices a bundle by bundleId (kills LogicalOperator on bundleId ?? null)",
    "endpoints": [
      "sales:calculatePrice"
    ]
  },
  {
    "id": "t:sales-156",
    "svc": "sales",
    "name": "respects region — same course, different price by region",
    "endpoints": [
      "sales:calculatePrice"
    ]
  },
  {
    "id": "t:sales-157",
    "svc": "sales",
    "name": "returns active offers ordered by base price",
    "endpoints": [
      "sales:getOffers"
    ]
  },
  {
    "id": "t:sales-158",
    "svc": "sales",
    "name": "excludes inactive offers",
    "endpoints": [
      "sales:getOffers"
    ]
  },
  {
    "id": "t:sales-159",
    "svc": "sales",
    "name": "POST /sales/price requires valid JWT",
    "http": true,
    "endpoints": []
  },
  {
    "id": "t:sales-160",
    "svc": "sales",
    "name": "GET /sales/offers succeeds with valid JWT",
    "http": true,
    "endpoints": []
  },
  {
    "id": "t:affiliate-161",
    "svc": "affiliate",
    "name": "creates new affiliate profile with default values",
    "endpoints": [
      "affiliate:getOrCreateAffiliate"
    ]
  },
  {
    "id": "t:affiliate-162",
    "svc": "affiliate",
    "name": "returns existing affiliate on subsequent calls",
    "endpoints": [
      "affiliate:getOrCreateAffiliate"
    ]
  },
  {
    "id": "t:affiliate-163",
    "svc": "affiliate",
    "name": "records commission for valid referral code",
    "endpoints": [
      "affiliate:getOrCreateAffiliate",
      "affiliate:recordCommission"
    ]
  },
  {
    "id": "t:affiliate-164",
    "svc": "affiliate",
    "name": "skips commission for unknown referral code",
    "endpoints": [
      "affiliate:recordCommission"
    ]
  },
  {
    "id": "t:affiliate-165",
    "svc": "affiliate",
    "name": "updates total_earned and pending_payout on the profile",
    "endpoints": [
      "affiliate:getOrCreateAffiliate",
      "affiliate:recordCommission"
    ]
  },
  {
    "id": "t:affiliate-166",
    "svc": "affiliate",
    "name": "creates pending payout request",
    "endpoints": [
      "affiliate:getOrCreateAffiliate",
      "affiliate:requestPayout"
    ]
  },
  {
    "id": "t:affiliate-167",
    "svc": "affiliate",
    "name": "rejects non-positive amount with the exact validation message",
    "endpoints": [
      "affiliate:getOrCreateAffiliate",
      "affiliate:requestPayout"
    ]
  },
  {
    "id": "t:affiliate-168",
    "svc": "affiliate",
    "name": "rejects payout when affiliate not registered",
    "endpoints": [
      "affiliate:requestPayout"
    ]
  },
  {
    "id": "t:affiliate-169",
    "svc": "affiliate",
    "name": "POST /affiliate/me requires valid JWT",
    "http": true,
    "endpoints": []
  },
  {
    "id": "t:affiliate-170",
    "svc": "affiliate",
    "name": "POST /affiliate/me succeeds with valid JWT",
    "http": true,
    "endpoints": []
  },
  {
    "id": "t:marketing-171",
    "svc": "marketing",
    "name": "returns only active journeys, ordered by name",
    "endpoints": [
      "marketing:getJourneys"
    ]
  },
  {
    "id": "t:marketing-172",
    "svc": "marketing",
    "name": "returns success and a journeyRunId for an active journey",
    "endpoints": [
      "marketing:sendJourney"
    ]
  },
  {
    "id": "t:marketing-173",
    "svc": "marketing",
    "name": "throws not found for an inactive journey",
    "endpoints": [
      "marketing:sendJourney"
    ]
  },
  {
    "id": "t:marketing-174",
    "svc": "marketing",
    "name": "throws not found for an unknown journey",
    "endpoints": [
      "marketing:sendJourney"
    ]
  },
  {
    "id": "t:marketing-175",
    "svc": "marketing",
    "name": "returns campaign stats for the requested journey id",
    "endpoints": [
      "marketing:getStats"
    ]
  },
  {
    "id": "t:marketing-176",
    "svc": "marketing",
    "name": "GET /marketing/journeys requires valid JWT",
    "http": true,
    "endpoints": []
  },
  {
    "id": "t:marketing-177",
    "svc": "marketing",
    "name": "POST /marketing/send succeeds with valid JWT",
    "http": true,
    "endpoints": []
  },
  {
    "id": "t:social-media-178",
    "svc": "social-media",
    "name": "creates a post in PENDING_APPROVAL state",
    "endpoints": [
      "social-media:createPost"
    ]
  },
  {
    "id": "t:social-media-179",
    "svc": "social-media",
    "name": "rejects content shorter than 5 chars",
    "endpoints": [
      "social-media:createPost"
    ]
  },
  {
    "id": "t:social-media-180",
    "svc": "social-media",
    "name": "accepts content of exactly MIN_CONTENT_LENGTH (boundary kills < → <=)",
    "endpoints": [
      "social-media:createPost"
    ]
  },
  {
    "id": "t:social-media-181",
    "svc": "social-media",
    "name": "persists supplied scheduledAt (kills LogicalOperator on ?? null)",
    "endpoints": [
      "social-media:createPost"
    ]
  },
  {
    "id": "t:social-media-182",
    "svc": "social-media",
    "name": "rejects empty platforms array",
    "endpoints": [
      "social-media:createPost"
    ]
  },
  {
    "id": "t:social-media-183",
    "svc": "social-media",
    "name": "flips status to APPROVED and records the approver",
    "endpoints": [
      "social-media:createPost",
      "social-media:approvePost"
    ]
  },
  {
    "id": "t:social-media-184",
    "svc": "social-media",
    "name": "throws not found for an unknown post",
    "endpoints": [
      "social-media:approvePost"
    ]
  },
  {
    "id": "t:social-media-185",
    "svc": "social-media",
    "name": "returns only PENDING_APPROVAL posts, newest first",
    "endpoints": [
      "social-media:createPost",
      "social-media:approvePost",
      "social-media:getPendingPosts"
    ]
  },
  {
    "id": "t:social-media-186",
    "svc": "social-media",
    "name": "POST /social/posts requires valid JWT",
    "http": true,
    "endpoints": []
  },
  {
    "id": "t:social-media-187",
    "svc": "social-media",
    "name": "GET /social/pending succeeds with valid JWT",
    "http": true,
    "endpoints": []
  }
];

const FULL_COLORS: Record<ServiceKey, string> = {
  "connecting-circle": "#ef476f",
  "gamification": "#118ab2",
  "membership-miles": "#54c1ff",
  "volunteering": "#ff7b54",
  "identity-core": "#ffd166",
  "zoho-sync": "#06d6a0",
  "ledger": "#8338ec",
  "quickbooks-adapter": "#e63946",
  "tally-adapter": "#ef476f",
  "zoho-books-adapter": "#ff7b54",
  "ai-gateway": "#ffd166",
  "communities": "#ff7043",
  "live-tv": "#3a86ff",
  "lms": "#9b6bff",
  "sales": "#ef476f",
  "affiliate": "#54c1ff",
  "marketing": "#9b6bff",
  "social-media": "#e63946"
};

const FULL_CONTRACTS: ContractDef[] = [
  {
    "id": "ct:course-completed",
    "file": "backend/systems/_contracts/course-completed.contract.test.ts",
    "describe": "Contract: lms.updateProgress → course-completed → membership-miles",
    "producer": "lms",
    "consumer": "membership-miles",
    "mode": "event-bus",
    "topic": "lms.course-completed",
    "narrative": {
      "description": "Awards membership miles when a course is completed.",
      "summary": "Finishing a course (`progressPercent` crossing 0→100) publishes\n`lms.course-completed`. Membership Miles subscribes and credits the\nseeker 100 miles per completion.",
      "why": "LMS owns enrolment state, but it has no business knowing the miles\nexchange rate or holding miles balances. Lifting completion onto the\nbus lets Miles, Gamification, and any future incentive system react\nto the same moment without LMS coupling itself to any of them — and\nthe producer transition gate (only the first crossing publishes)\nkeeps replays of `updateProgress(100)` from minting duplicate miles.",
      "flow": "1. Seeker calls `updateProgress`; LMS persists the new percentage.\n2. Only the FIRST 0→100 transition publishes `lms.course-completed`.\n3. Membership Miles' subscriber awards 100 miles, keyed by\n   `lms-enrollment-<id>` so bus replays are absorbed.",
      "since": "2026-03-15"
    },
    "producerFns": [
      "enroll",
      "updateProgress",
      "db"
    ],
    "consumerFns": [
      "handleCourseCompleted",
      "db"
    ],
    "tests": [
      {
        "name": "only the 0→100 transition publishes; the consumer awards 100 miles",
        "category": "behaviour",
        "story": "A seeker hits 100% on Inner Engineering for the first time —\nLMS marks the certificate issued and the bus carries the moment to\nMiles, which credits the 100-mile reward."
      },
      {
        "name": "a second updateProgress(100) does not re-publish (producer transition gate)",
        "category": "edge-case",
        "story": "If a seeker re-saves at 100% (idle update, network retry,\ndouble-click), LMS must NOT mint a second event. Only the first\ncrossing is the recognition moment."
      },
      {
        "name": "re-delivery of the same event by the bus is absorbed by consumer idempotency",
        "category": "resilience",
        "story": "Pub/Sub guarantees at-least-once. Two replays plus a fresh\neventId mint must still leave Miles with exactly one credit row\nkeyed by enrolment id."
      }
    ],
    "signals": {
      "idempotent": true,
      "auditLogged": true
    }
  },
  {
    "id": "ct:gamification-community-joined",
    "file": "backend/systems/_contracts/gamification-community-joined.contract.test.ts",
    "describe": "Contract: communities.joinRoom → community-joined → gamification",
    "producer": "communities",
    "consumer": "gamification",
    "mode": "event-bus",
    "topic": "communities.community-joined",
    "narrative": {
      "description": "Rewards joining a community with XP and a one-time badge.",
      "summary": "Joining a Circle.so room (via `joinRoom`) publishes\n`communities.community-joined`. Gamification subscribes, awards 20 XP\nfor the membership, and grants the COMMUNITY_JOINED badge the very\nfirst time a seeker joins anywhere on the platform.",
      "why": "Community membership is a recognition moment, but Communities can't\nown that recognition logic without dragging in profile state, badge\nrules, and XP economics. The bus keeps Communities focused on room\nmembership while Gamification owns the reward shape — and lets\nMembership Miles subscribe to the same event for a parallel miles\naward, with neither reward system aware of the other.",
      "flow": "1. Seeker calls `joinRoom`; the membership row is upserted.\n2. Only the FIRST insert publishes `communities.community-joined` —\n   re-joining the same room is a no-op so the bus stays idle.\n3. Gamification's subscriber awards 20 XP and grants COMMUNITY_JOINED\n   on the seeker's first community. An idempotency key on the\n   membership id absorbs bus replays.",
      "since": "2026-03-15"
    },
    "producerFns": [
      "joinRoom",
      "db"
    ],
    "consumerFns": [
      "handleCommunityJoined",
      "db"
    ],
    "tests": [
      {
        "name": "first join emits an event the gamification consumer awards XP and a COMMUNITY_JOINED badge for",
        "category": "behaviour",
        "story": "A seeker joins their first Circle.so room and gets 20 XP plus the\nCOMMUNITY_JOINED badge — recognition for crossing the threshold from\nsolo learner to community member."
      },
      {
        "name": "re-joining the same room does NOT re-publish (producer transition gate)",
        "category": "edge-case",
        "story": "Communities is the producer transition gate — only the very first\ninsert publishes. A seeker bouncing in and out of the same room must\nnot flood the bus or earn the badge twice."
      },
      {
        "name": "re-delivery of the same event by the bus is absorbed by gamification idempotency",
        "category": "resilience",
        "story": "At-least-once delivery is a fact of bus life. Even if Pub/Sub\nreplays the same event — or a fresh event id arrives for the same\nmembership — gamification must award XP and the badge exactly once."
      }
    ],
    "signals": {
      "idempotent": true,
      "auditLogged": true
    }
  },
  {
    "id": "ct:gamification-course-completed",
    "file": "backend/systems/_contracts/gamification-course-completed.contract.test.ts",
    "describe": "Contract: lms.updateProgress → course-completed → gamification",
    "producer": "lms",
    "consumer": "gamification",
    "mode": "event-bus",
    "topic": "lms.course-completed",
    "narrative": {
      "description": "Rewards finishing a course with XP and a one-time badge.",
      "summary": "The same `lms.course-completed` event Miles listens to also drives\nGamification: 50 XP credited and a `COURSE_COMPLETED` badge granted\non the first completion.",
      "why": "Two reward systems want to react to the same moment, but neither\nshould know the other exists. Multi-subscriber on `lms.course-completed`\nis exactly the pattern: LMS publishes once, Miles and Gamification\neach consume independently. New incentive systems can subscribe\nlater without touching LMS or each other.",
      "flow": "1. Seeker completes a course; LMS publishes `lms.course-completed`.\n2. Gamification's subscriber awards 50 XP, keyed by\n   `lms-enrollment-<id>` for replay safety.\n3. On the seeker's first completion, the `COURSE_COMPLETED` badge is\n   granted; subsequent completions add XP but no second badge.",
      "since": "2026-03-15"
    },
    "producerFns": [
      "enroll",
      "updateProgress",
      "db"
    ],
    "consumerFns": [
      "handleCourseCompleted",
      "db"
    ],
    "tests": [
      {
        "name": "only the 0→100 transition publishes; gamification awards 50 XP and a COURSE_COMPLETED badge",
        "category": "behaviour",
        "story": "Finishing a course is two recognition moments — Miles credits\nthe membership balance, Gamification credits XP and the badge for\nthe seeker's profile screen."
      },
      {
        "name": "a second updateProgress(100) does not re-publish (producer transition gate)",
        "category": "edge-case",
        "story": "LMS is the producer transition gate for both consumers — a\ndouble-completion can never grant the COURSE_COMPLETED badge twice\nbecause the second `updateProgress(100)` is silent on the bus."
      },
      {
        "name": "re-delivery of the same event by the bus is absorbed by gamification idempotency",
        "category": "resilience",
        "story": "Bus replay must leave the seeker with one activity row, one\nXP credit, and one badge — even when a fresh `eventId` is minted\non retry."
      }
    ],
    "signals": {
      "idempotent": true,
      "auditLogged": true
    }
  },
  {
    "id": "ct:gamification-identity",
    "file": "backend/systems/_contracts/gamification-identity.contract.test.ts",
    "describe": "Contract: gamification.getProfile → identity.getSeekerById",
    "producer": "gamification",
    "consumer": "identity-core",
    "mode": "direct-call",
    "narrative": {
      "description": "Refuses to create a gamification profile for a seeker who doesn't exist.",
      "summary": "`gamification.getProfile` calls into `identity-core.getSeekerById`\nbefore lazy-creating its profile row. No seeker, no profile.",
      "why": "Gamification's profile is downstream of identity — its `user_id`\ncolumn is meaningless if no matching seeker exists. Crossing the\nservice boundary on every read keeps identity the single source of\ntruth and prevents orphan profile rows that would later need a\nreconciliation job to clean up.",
      "flow": "1. `getProfile` resolves the caller's uid from auth.\n2. Calls `identity-core.getSeekerById` via `~encore/clients`.\n3. On hit, lazy-inserts a profile row with the default peace index.\n   On 404, propagates the error and writes nothing.",
      "since": "2026-03-15"
    },
    "producerFns": [
      "getProfile",
      "db"
    ],
    "consumerFns": [
      "upsertSeeker",
      "db"
    ],
    "tests": [
      {
        "name": "creates a gamification profile when the seeker exists in identity-core",
        "category": "behaviour",
        "story": "A real seeker opens their dashboard for the first time —\nidentity confirms they exist, gamification mints a fresh profile\nwith the default peace index of 50."
      },
      {
        "name": "refuses to create an orphan profile when no seeker row exists",
        "category": "edge-case",
        "story": "An attacker (or a stale token) calls getProfile without a\nmatching seeker row. Gamification must propagate identity's 404\ninstead of silently materialising an orphan profile."
      }
    ],
    "signals": {
      "idempotent": true,
      "auditLogged": true
    }
  },
  {
    "id": "ct:gamification-seva-approved",
    "file": "backend/systems/_contracts/gamification-seva-approved.contract.test.ts",
    "describe": "Contract: volunteering.approveLog → seva-approved → gamification",
    "producer": "volunteering",
    "consumer": "gamification",
    "mode": "event-bus",
    "topic": "volunteering.seva-approved",
    "narrative": {
      "description": "Rewards volunteers with XP and badges when their seva is approved.",
      "summary": "Approved seva hours become experience points (5 XP per hour), plus a\none-time FIRST_SEVA badge the very first time a volunteer is approved.\nThe two services never call each other directly — Volunteering publishes\na `volunteering.seva-approved` event and Gamification subscribes.",
      "why": "Rewards must not block the seva flow. If Gamification is slow, broken, or\nbeing redeployed, an approval still lands and the volunteer's record is\ncorrect. The bus also lets future systems (notifications, analytics,\nleaderboards) hang off the same event without Volunteering knowing they\nexist.",
      "flow": "1. Volunteer calls `logHours` to record a seva log.\n2. An admin calls `approveLog`, which atomically transitions the log to\n   approved and publishes `volunteering.seva-approved` exactly once.\n3. Gamification's subscriber `handleSevaApproved` receives the event,\n   awards XP (5 XP per hour), and grants FIRST_SEVA on the user's first\n   approval. Re-delivery of the same event is absorbed by an idempotency\n   key so totals never double-count."
    },
    "producerFns": [
      "logHours",
      "approveLog",
      "db"
    ],
    "consumerFns": [
      "handleSevaApproved",
      "db"
    ],
    "tests": [
      {
        "name": "logging then approving emits an event the gamification consumer awards XP and a FIRST_SEVA badge for",
        "category": "behaviour",
        "story": "The happy path. A volunteer logs 3 hours of temple cleaning; an admin\napproves it. Gamification picks up the event, awards 15 XP (3 hrs ×\n5 XP/hr), and — because this is the user's first approval — grants the\nFIRST_SEVA badge."
      },
      {
        "name": "approving the same log twice fires the event at most once (producer transition gate)",
        "category": "edge-case",
        "story": "Producer-side guarantee: an admin can't approve the same log twice. The\nsecond approval is rejected at the volunteering layer, so the bus only\nsees a single event — Gamification can't accidentally pay twice for one\npiece of work."
      },
      {
        "name": "re-delivery of the same event by the bus is absorbed by gamification idempotency",
        "category": "resilience",
        "story": "Consumer-side guarantee: event buses retry. If the same event is\ndelivered to Gamification two, three, ten times, it must only count\nonce. XP totals and badge counts hold steady at the first-delivery\nvalue regardless of how many duplicates the bus hands over."
      }
    ],
    "signals": {
      "idempotent": true,
      "auditLogged": true
    }
  },
  {
    "id": "ct:ledger-audit",
    "file": "backend/systems/_contracts/ledger-audit.contract.test.ts",
    "describe": "Contract: ledger.recordTransaction → audit.recordEvent",
    "producer": "ledger",
    "consumer": "audit",
    "mode": "event-bus",
    "topic": "ledger.transaction-recorded",
    "producerFns": [
      "recordTransaction",
      "db"
    ],
    "consumerFns": [
      "listEventsForActor",
      "db"
    ],
    "tests": [
      {
        "name": "a recorded transaction is retrievable as a ledger.transaction.recorded audit row"
      },
      {
        "name": "two transactions yield two audit rows, newest first"
      }
    ],
    "signals": {
      "auditLogged": true
    }
  },
  {
    "id": "ct:miles-community-joined",
    "file": "backend/systems/_contracts/miles-community-joined.contract.test.ts",
    "describe": "Contract: communities.joinRoom → community-joined → membership-miles",
    "producer": "communities",
    "consumer": "membership-miles",
    "mode": "event-bus",
    "topic": "communities.community-joined",
    "narrative": {
      "description": "Awards membership miles when a seeker joins a community.",
      "summary": "The same `communities.community-joined` event Gamification listens\nto also drives Membership Miles: 40 miles credited per first-time\njoin, keyed by membership id for replay safety.",
      "why": "Miles and Gamification are parallel reward systems with different\neconomics. Communities owns the membership decision; the bus lets\nboth reward systems react without Communities (or either reward\nsystem) coupling itself to the others. Miles + Gamification on the\nsame topic is the canonical multi-subscriber pattern.",
      "flow": "1. Seeker calls `joinRoom`; Communities upserts the membership row.\n2. Only the FIRST insert publishes `communities.community-joined`.\n3. Miles' subscriber credits 40 miles, keyed by\n   `community-membership-<id>` so bus replays are absorbed.",
      "since": "2026-03-15"
    },
    "producerFns": [
      "joinRoom",
      "db"
    ],
    "consumerFns": [
      "handleCommunityJoined",
      "db"
    ],
    "tests": [
      {
        "name": "first join emits an event the miles consumer awards 40 miles for",
        "category": "behaviour",
        "story": "A seeker joins their first community room; Miles credits 40\nmiles toward the next reward redemption — a tangible thank-you\nthat pairs with Gamification's badge for the same moment."
      },
      {
        "name": "re-delivery of the same event by the bus is absorbed by miles idempotency",
        "category": "resilience",
        "story": "Bus replays — same payload twice, then a fresh `eventId` —\nmust leave Miles with exactly one credit row keyed by membership id."
      }
    ],
    "signals": {
      "idempotent": true,
      "auditLogged": true
    }
  },
  {
    "id": "ct:miles-ledger",
    "file": "backend/systems/_contracts/miles-ledger.contract.test.ts",
    "describe": "Contract: membership-miles spend → ledger",
    "producer": "membership-miles",
    "consumer": "ledger",
    "mode": "event-bus",
    "topic": "ledger.transaction-recorded",
    "narrative": {
      "description": "Records a ledger entry for every miles redemption.",
      "summary": "Spending miles against a reward (`spendMiles`) shapes a\n`MILES_REDEMPTION` debit that the ledger persists at the published\n1 mile = ₹1 cash-equivalent rate.",
      "why": "Miles are a real liability on the books — every redemption needs a\nmatching debit so finance can reconcile the float. Membership Miles\nholds the balance state; the ledger holds the canonical money trail.\nPinning the request shape here means a refactor on either side that\nsilently breaks the hand-off (currency mix-up, sign flip, missing\nreferenceId) fails this test before it can corrupt accounts.",
      "flow": "1. Caller awards then spends miles via Membership Miles.\n2. Spend yields a reward id + amount; the contract converts that to\n   a `RecordTransactionRequest` of type `MILES_REDEMPTION` with a\n   negative amount.\n3. `ledger.recordTransaction` persists the row and returns it.",
      "since": "2026-03-15"
    },
    "producerFns": [
      "awardMiles",
      "spendMiles",
      "db",
      "MilesBalance"
    ],
    "consumerFns": [
      "recordTransaction",
      "getHistory",
      "db",
      "RecordTransactionRequest"
    ],
    "tests": [
      {
        "name": "a successful spendMiles produces a valid MILES_REDEMPTION ledger entry",
        "category": "behaviour",
        "story": "A seeker redeems 300 miles for a t-shirt; balance drops to\n700, the ledger records a -300 INR `MILES_REDEMPTION` against\nthe reward id."
      },
      {
        "name": "ledger history contains the redemption after the spend completes",
        "category": "behaviour",
        "story": "Once a redemption is posted, it must be discoverable through\nthe ledger's history endpoint — the same view finance uses to\nreconcile the miles float."
      }
    ],
    "signals": {
      "idempotent": true,
      "auditLogged": true
    }
  },
  {
    "id": "ct:sales-affiliate",
    "file": "backend/systems/_contracts/sales-affiliate.contract.test.ts",
    "describe": "Contract: sales → affiliate",
    "producer": "sales",
    "consumer": "affiliate",
    "mode": "direct-call",
    "narrative": {
      "description": "Pays affiliates a commission on referred sales.",
      "summary": "A successful sale carrying a referral code converts to a\n`RecordCommissionRequest` the Affiliate service can post against —\n20% of the final price by default.",
      "why": "Sales owns pricing. Affiliate owns referral codes, payout schedules,\nand the commission ledger. Crossing the boundary at the moment of\nsale (rather than scraping the orders table later) means commission\naccrues atomically with the order, and a bogus referral code fails\nloudly instead of silently inflating an affiliate's balance.",
      "flow": "1. Caller resolves pricing via `sales.calculatePrice`.\n2. The contract maps `PricingResult` + referralCode + orderId to\n   `RecordCommissionRequest` (sale amount, currency, reference id).\n3. `affiliate.recordCommission` validates the code and either\n   accrues 20% commission or returns `recorded: false`.",
      "since": "2026-03-15"
    },
    "producerFns": [
      "calculatePrice",
      "db",
      "PricingResult"
    ],
    "consumerFns": [
      "getOrCreateAffiliate",
      "recordCommission",
      "db",
      "RecordCommissionRequest"
    ],
    "tests": [
      {
        "name": "a sale with referralCode produces a commission shape accepted by affiliate.recordCommission",
        "category": "behaviour",
        "story": "A seeker buys a course via an affiliate's referral link; the\naffiliate accrues 20% (₹1000 on a ₹5000 sale) toward their next\npayout."
      },
      {
        "name": "commission rejects gracefully when referral code is unknown",
        "category": "edge-case",
        "story": "A typo'd or expired referral code must NOT throw — Sales\nshould still complete the order. Affiliate returns\n`recorded: false` so the caller can log a warning and move on."
      }
    ],
    "signals": {
      "idempotent": true
    }
  },
  {
    "id": "ct:sales-ledger",
    "file": "backend/systems/_contracts/sales-ledger.contract.test.ts",
    "describe": "Contract: sales → ledger",
    "producer": "sales",
    "consumer": "ledger",
    "mode": "event-bus",
    "topic": "ledger.transaction-recorded",
    "narrative": {
      "description": "Records a ledger entry for every product sale.",
      "summary": "A successful `PricingResult` from Sales becomes a `PRODUCT_SALE`\nledger entry — coupon-discounted final price, currency, and order\nid all carried verbatim across the boundary.",
      "why": "Sales decides what the seeker pays (base price, coupons, regional\npricing). The ledger is the canonical record of money received.\nPinning the request shape here catches regressions where a refactor\non either side breaks the hand-off — a coupon path silently posting\nthe undiscounted price would be a bookkeeping nightmare to unwind.",
      "flow": "1. `sales.calculatePrice` resolves the final price for the offer.\n2. The contract maps `PricingResult` + orderId to a\n   `RecordTransactionRequest` of type `PRODUCT_SALE`.\n3. `ledger.recordTransaction` persists the row; zero-amount orders\n   are rejected, forcing Sales to clamp before posting.",
      "since": "2026-03-15"
    },
    "producerFns": [
      "calculatePrice",
      "db",
      "PricingResult"
    ],
    "consumerFns": [
      "recordTransaction",
      "getHistory",
      "db",
      "RecordTransactionRequest"
    ],
    "tests": [
      {
        "name": "a successful PricingResult records a PRODUCT_SALE ledger transaction",
        "category": "behaviour",
        "story": "Standard purchase path: ₹9999 Inner Engineering course, no\ncoupon. The ledger records exactly that amount against the order id."
      },
      {
        "name": "a coupon-discounted PricingResult posts the discounted final price",
        "category": "behaviour",
        "story": "A 25%-off coupon discounts the order; the ledger must record\nthe discounted final price (not the base price), and history must\nsurface the order under its referenceId."
      },
      {
        "name": "ledger rejects a zero-priced sale — sales must clamp before posting",
        "category": "edge-case",
        "story": "A 100%-off coupon yields a free order. The ledger refuses\nto post a zero-amount row — Sales is responsible for short-\ncircuiting such orders before they reach the books."
      }
    ],
    "signals": {
      "auditLogged": true
    }
  },
  {
    "id": "ct:seva-approved",
    "file": "backend/systems/_contracts/seva-approved.contract.test.ts",
    "describe": "Contract: volunteering.approveLog → seva-approved → membership-miles",
    "producer": "volunteering",
    "consumer": "membership-miles",
    "mode": "event-bus",
    "topic": "volunteering.seva-approved",
    "narrative": {
      "description": "Awards membership miles when a volunteer's seva is approved.",
      "summary": "`volunteering.approveLog` flips a logged seva from pending to\napproved and publishes `volunteering.seva-approved`. Membership\nMiles subscribes and credits 10 miles per logged hour.",
      "why": "Volunteering owns approval workflow; Miles owns the reward economy.\nThe bus keeps Volunteering free of miles math while letting any\nfuture incentive (badges, leaderboards, certificates) subscribe to\nthe same approval moment without coupling. The producer transition\ngate (`Log not found or already approved`) means a double-click on\nthe approval button can't double-credit miles.",
      "flow": "1. Volunteer logs hours via `logHours`; row sits as pending.\n2. Coordinator calls `approveLog`; only the FIRST approval flips\n   the row and publishes `volunteering.seva-approved`.\n3. Miles' subscriber credits hours×10 miles, keyed by\n   `seva-log-<id>` so bus replays are absorbed.",
      "since": "2026-03-15"
    },
    "producerFns": [
      "logHours",
      "approveLog",
      "db"
    ],
    "consumerFns": [
      "handleSevaApproved",
      "db"
    ],
    "tests": [
      {
        "name": "logging then approving emits a SevaApprovedEvent the consumer can act on",
        "category": "behaviour",
        "story": "A volunteer arranges flowers for 3 hours; a coordinator\napproves the log; Miles credits 30 miles, keyed by the seva log\nid for replay safety."
      },
      {
        "name": "approving the same log twice fires the event at most once (producer transition gate)",
        "category": "edge-case",
        "story": "A coordinator clicks \"approve\" twice; Volunteering must\nthrow on the second call AND keep the bus quiet, otherwise Miles\nwould credit the same seva twice."
      },
      {
        "name": "re-delivery of the same event by the bus is absorbed by consumer idempotency",
        "category": "resilience",
        "story": "Pub/Sub at-least-once means the same approval can land at\nMiles two or three times. The reference id `seva-log-<id>` makes\nre-delivery a no-op."
      }
    ],
    "signals": {
      "idempotent": true,
      "auditLogged": true
    }
  },
  {
    "id": "ct:transaction-recorded",
    "file": "backend/systems/_contracts/transaction-recorded.contract.test.ts",
    "describe": "Contract: ledger.recordTransaction → transaction-recorded → accounting-book adapters",
    "producer": "ledger",
    "consumer": "tally-adapter",
    "mode": "event-bus",
    "topic": "ledger.transaction-recorded",
    "narrative": {
      "description": "Fans every ledger transaction out to external accounting books.",
      "summary": "`ledger.recordTransaction` publishes `ledger.transaction-recorded`\nafter each successful insert. Three adapters — Tally, QuickBooks,\nand Zoho Books — subscribe and post the entry to their respective\nexternal systems through their own ports.",
      "why": "Encore's microservice rules forbid one service from importing\nanother's database. The ledger needs every row to land in three\ndifferent external accounting systems, but it can't (and shouldn't)\nknow about Tally, QuickBooks, or Zoho's HTTP shapes. Bus fan-out\nkeeps the ledger pure and lets each adapter own its own posting\nrow, dedupe key, and outbound port — a Tally outage doesn't stop\nQuickBooks from posting, and a fourth book can subscribe later\nwithout touching anything that already works.",
      "flow": "1. Caller invokes `ledger.recordTransaction`; row persists.\n2. Producer transition gate: exactly one event per successful insert.\n3. Each adapter consumes the same payload, writes its own posting\n   row keyed by `ledger_row_id`, and calls its outbound port.\n   Re-delivery is a no-op thanks to that key.",
      "since": "2026-03-15"
    },
    "producerFns": [
      "recordTransaction",
      "db"
    ],
    "consumerFns": [
      "handleTransactionRecorded",
      "db",
      "resetTallyPort",
      "setTallyPort"
    ],
    "tests": [
      {
        "name": "recording a transaction emits an event each adapter can post against",
        "category": "behaviour",
        "story": "A ₹2,500 donation lands in the ledger and fans out to all\nthree external books — Tally voucher, QuickBooks bill, Zoho\nBooks invoice — each with its own posting row and external id."
      },
      {
        "name": "bus re-delivery is absorbed by each adapter's ledger_row_id dedupe",
        "category": "resilience",
        "story": "An accounting book getting double-posted means a finance\nreconciliation nightmare. Each adapter's `ledger_row_id` dedupe\nkey absorbs bus replays — same row, varying eventIds — into a\nsingle external posting."
      }
    ],
    "signals": {
      "idempotent": true,
      "auditLogged": true
    }
  },
  {
    "id": "ct:volunteering-identity",
    "file": "backend/systems/_contracts/volunteering-identity.contract.test.ts",
    "describe": "Contract: volunteering.logHours → identity.getSeekerById",
    "producer": "volunteering",
    "consumer": "identity-core",
    "mode": "event-bus",
    "topic": "volunteering.seva-approved",
    "narrative": {
      "description": "Refuses to log volunteer hours for a caller who isn't a real seeker.",
      "summary": "`volunteering.logHours` calls into `identity-core.getSeekerById`\nbefore inserting a row. No seeker, no log — and Miles never sees an\napproval event for a phantom volunteer.",
      "why": "Volunteering's `user_id` column is a foreign reference to identity.\nIf we trusted the auth uid alone, a stale token (or a seeker who's\nbeen deleted) could mint orphan log rows that cascade into orphan\nmiles credits and broken reports. Crossing the service boundary on\nevery write keeps identity authoritative and stops bad data at the\ndoor.",
      "flow": "1. `logHours` resolves the caller's uid from auth.\n2. Calls `identity-core.getSeekerById` via `~encore/clients`.\n3. On hit, inserts the volunteering log row.\n   On 404, throws `Seeker not found` and writes nothing.",
      "since": "2026-03-15"
    },
    "producerFns": [
      "logHours",
      "db"
    ],
    "consumerFns": [
      "upsertSeeker",
      "db"
    ],
    "tests": [
      {
        "name": "logs hours when the seeker exists in identity-core",
        "category": "behaviour",
        "story": "A real seeker logs 3 hours of temple cleaning; identity\nconfirms the row and Volunteering writes the log."
      },
      {
        "name": "refuses to write a log when no seeker row exists",
        "category": "edge-case",
        "story": "A stale token or deleted seeker tries to log hours;\nidentity returns 404, Volunteering propagates the error and\nleaves the logs table untouched."
      }
    ],
    "signals": {
      "auditLogged": true
    }
  },
  {
    "id": "ct:volunteering-miles",
    "file": "backend/systems/_contracts/volunteering-miles.contract.test.ts",
    "describe": "Contract: volunteering → membership-miles",
    "producer": "volunteering",
    "consumer": "membership-miles",
    "mode": "direct-call",
    "narrative": {
      "description": "Turns approved volunteering efforts into membership miles.",
      "summary": "Every approved hour of seva (service) a volunteer logs becomes membership\nmiles on their account at a fixed rate (50 miles per hour). Miles are the\nplatform's spendable recognition currency — used for perks, retreats, and\nlifetime status.",
      "why": "Volunteering and Membership Miles are deliberately kept apart: one tracks\nthe *act* of service, the other tracks *recognition*. This contract is the\nsingle, audited handoff between them, so the rules for \"what counts\" and\n\"how much it's worth\" live in one place. If miles policy changes (rate,\neligible categories, caps) the change happens here without leaking into\neither service's domain logic.",
      "flow": "1. Volunteer calls `logHours` — the log starts unapproved.\n2. An approver moderates inside Volunteering and flips `approved = true`.\n3. The approved log is converted to an `AwardMilesRequest` (hours × rate)\n   and `awardMiles` credits the volunteer's account.\n4. The volunteer's lifetime + spendable balances reflect every approved\n   log they've ever had — nothing more, nothing less.",
      "since": "2026-03-04"
    },
    "producerFns": [
      "logHours",
      "db",
      "VolunteerLog"
    ],
    "consumerFns": [
      "awardMiles",
      "getBalances",
      "db",
      "AwardMilesRequest"
    ],
    "tests": [
      {
        "name": "an approved VolunteerLog produces an AwardMilesRequest accepted by membership-miles",
        "category": "behaviour",
        "story": "The happy path. A volunteer logs 3 hours of temple cleaning, an approver\nmarks it approved, and Membership Miles credits 150 miles (3 × 50).\nLifetime and spendable balances both move by the same amount."
      },
      {
        "name": "zero-hour logs would be rejected by membership-miles before the DB rejects them",
        "category": "edge-case",
        "story": "A zero-hour award is a contradiction — recognition for nothing. Even if a\nfuture code path managed to slip a zero-hour log past Volunteering,\nMembership Miles must still refuse it. Defence-in-depth: the boundary\ndoesn't trust its caller."
      },
      {
        "name": "balance reflects exactly the hours awarded across multiple approved logs",
        "category": "behaviour",
        "story": "Many small acts of seva add up. A volunteer with two approved logs\n(2 hrs and 5 hrs) ends up with miles for the full 7 hours — the\nrelationship is purely additive, with no double-counting and no\nsilent loss."
      }
    ],
    "signals": {
      "idempotent": true,
      "auditLogged": true
    }
  }
];

const FULL_TOPICS: TopicDef[] = [
  {
    "topic": "lms.course-completed",
    "file": "backend/events/course-completed.ts"
  },
  {
    "topic": "communities.community-joined",
    "file": "backend/events/community-joined.ts"
  },
  {
    "topic": "volunteering.seva-approved",
    "file": "backend/events/seva-approved.ts"
  },
  {
    "topic": "ledger.transaction-recorded",
    "file": "backend/events/transaction-recorded.ts"
  }
];

/** Default / example dataset: full extracted Spiritual Platform graph. */
export const SAMPLE_CATALOG: GalaxyGraphCatalog = {
  services: FULL_SERVICES,
  endpoints: FULL_ENDPOINTS,
  tests: FULL_TESTS,
  contracts: FULL_CONTRACTS,
  topics: FULL_TOPICS,
  colors: FULL_COLORS,
};

let catalog: GalaxyGraphCatalog = SAMPLE_CATALOG;
export let SERVICES = catalog.services;
export let ENDPOINTS = catalog.endpoints;
export let TESTS = catalog.tests;
export let CONTRACTS = catalog.contracts;
export let TOPICS = catalog.topics;
export let SERVICE_COLORS = catalog.colors ?? {};

export function setGalaxyGraphCatalog(next: GalaxyGraphCatalog): void {
  catalog = next;
  SERVICES = next.services;
  ENDPOINTS = next.endpoints;
  TESTS = next.tests;
  CONTRACTS = next.contracts;
  TOPICS = next.topics;
  SERVICE_COLORS = next.colors ?? {};
}

export function getGalaxyGraphCatalog(): GalaxyGraphCatalog {
  return catalog;
}
