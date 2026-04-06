;
! function() {
    try {
        var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && ((e._debugIds || (e._debugIds = {}))[n] = "0f40d74a-2637-615b-8349-f19afdd2e2ad")
    } catch (e) {}
}();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 448583, e => {
    e.v({
        menu: {
            greeting: "Hello,",
            account: "Account",
            dashboard: {
                title: "Dashboard",
                desc: "Personal information"
            },
            billExport: {
                title: "Export Invoice",
                desc: "Request invoice export"
            },
            changePassword: {
                title: "Change Password",
                desc: "Change your password"
            },
            admin: {
                title: "Admin Dashboard",
                desc: "System administration",
                badge: "Admin"
            },
            agent: {
                title: "Agent",
                titleRegister: "Register as Agent",
                desc: "Agent management",
                descRegister: "Register as an agent",
                badge: "Agent"
            },
            supportRequest: {
                title: "Support Request",
                desc: "View list of design support requests"
            },
            logout: "Logout",
            logoutSuccess: "Logged out successfully",
            logoutError: "Logout failed",
            logoutErrorDesc: "An error occurred while logging out. Please try again later.",
            featureNotImplemented: "This feature has not been implemented yet"
        },
        buttons: {
            create: "Create",
            createInvitation: "Create Invitation",
            login: "Login"
        },
        changePassword: {
            title: "Change Password",
            oldPassword: "Current Password",
            oldPasswordPlaceholder: "Enter your current password",
            newPassword: "New Password",
            newPasswordPlaceholder: "Enter new password (at least 6 characters)",
            confirmPassword: "Confirm New Password",
            confirmPasswordPlaceholder: "Re-enter new password",
            submit: "Change Password",
            cancel: "Cancel",
            success: "Password changed successfully",
            successDesc: "Your password has been changed",
            error: "Failed to change password",
            errorDesc: "An error occurred while changing password. Please try again.",
            errors: {
                oldPasswordRequired: "Please enter your current password",
                newPasswordRequired: "Please enter a new password",
                newPasswordMinLength: "New password must be at least 6 characters",
                confirmPasswordRequired: "Please confirm your new password",
                passwordsNotMatch: "Passwords do not match"
            }
        },
        billExportRequest: {
            modalTitle: "Invoice Export Request",
            yourRequests: "Your requests",
            createNew: "Create a new request",
            formDescription: "Provide billing details so we can process your request quickly and accurately.",
            requiredLegend: "Fields marked with * are required.",
            noteOptional: "Note (optional)",
            placeholders: {
                taxCode: "Example: 0312345678",
                companyName: "Example: ABC Co., Ltd",
                companyAddress: "Example: 123 Nguyen Hue, District 1, Ho Chi Minh City",
                email: "invoice@abc.vn",
                buyerName: "Example: Nguyen Van A",
                phoneNumber: "Example: 0912345678",
                citizenIdNumber: "Example: 012345678901",
                note: "Example: Please issue invoice within this month"
            },
            fields: {
                taxCode: "Tax code",
                companyName: "Company name",
                companyAddress: "Company address",
                email: "Invoice email",
                buyerName: "Buyer name",
                phoneNumber: "Phone number",
                citizenIdNumber: "Citizen ID number",
                note: "Note"
            },
            requiredField: "{{field}} is required.",
            invalidEmail: "Invalid email format.",
            validationError: "Please check required fields and try again.",
            charCount: "{{count}}/500 characters",
            cancel: "Cancel",
            submit: "Submit request",
            pendingMessage: "You already have a pending request",
            pendingDesc: "You can only have one pending request at a time. Please wait until it is processed or cancel it before creating a new one.",
            noteInfo: "Note: Invoice export requests are processed by administrators. Processing time may take 1-3 business days. You will be notified once completed.",
            status: {
                pending: "Pending",
                processing: "Processing",
                completed: "Completed",
                failed: "Failed",
                cancelled: "Cancelled"
            },
            createdAt: "Created at: {{date}}",
            adminNote: "Admin note: {{note}}",
            error: "Error: {{error}}",
            download: "Download",
            successTitle: "Invoice export request submitted",
            successDesc: "We will process your request as soon as possible.",
            errorTitle: "Failed to submit request",
            defaultError: "Something went wrong. Please try again later."
        }
    })
}, 446983, e => {
    e.v(JSON.parse('{"header":{"agentLevel":"Agent Level","loading":"Loading..."},"menu":{"dashboard":"Dashboard","pages":"Page Management","catalog":"Page Catalog","pricing":"Pricing Page","designRequests":"Design Requests","settings":"Settings","branding":"Branding"},"pages":{"title":"Page Management","subtitle":"Create and manage wedding pages for your clients.","description":"Track ownership, status, and handover of each client site.","createTemplate":"Create Template","createPage":"Create Page","tabAll":"All ({{count}})","tabTemplates":"Templates","searchPlaceholder":"Search by page title or domain...","searchPlaceholderMobile":"Search pages...","listTitle":"Pages ({{count}})","listSubtitle":"These are all the client sites you currently manage.","columnPageInfo":"Page Info","columnTemplate":"Template","columnStatus":"Status / Ownership","columnCreated":"Created","columnActions":"Actions","tierFree":"Free","tierPro":"Pro","tierVip":"VIP","badgePublic":"Public","badgePrivate":"Private","badgeTemplate":"TEMPLATE","badgeImported":"Imported","badgeFreeTier":"✨ FREE","statusDraft":"Draft","statusTransferred":"Transferred","statusPublished":"Published","transferredTo":"Transferred to: {{email}}","siteOwner":"Site owner: {{name}}","siteId":"Site ID: {{id}}","transferredDate":"Transferred {{date}}","createdDate":"Created {{date}}","noDomain":"No domain yet","templateId":"ID: {{id}}","free":"Free","actionTransfer":"Transfer","actionEdit":"Edit","actionClone":"Clone","actionCloneReal":"Real","actionDelete":"Delete","actionViewDetail":"View Details","templateNoHandoff":"⚠️ Template (cannot transfer)","emptyTitle":"No pages yet","emptyDescription":"Create your first page to start your business.","paginationShowing":"Showing {{count}} of {{total}} pages","paginationSearch":"Found {{total}} results • Showing {{count}} pages","paginationPrev":"Previous","paginationNext":"Next","paginationPage":"Page {{current}} / {{total}}","handoffStatusDraft":"Draft","handoffStatusReady":"Ready","handoffStatusHanded":"Handed Off","priceDisplay":"{{price}}k VND","priceFree":"Free","domainAvailable":"Domain \\"{{domain}}\\" is available","domainNotAvailable":"Domain \\"{{domain}}\\" is already taken","domainCheckError":"Domain check error","pageNumber":"Page #{{id}}","copyPrefix":"Copy - {{title}}","copyPrefixPage":"Copy - Page #{{id}}","detailModal":{"modalTitle":"Page Details #{{id}}","dealerInfo":"Agent Information","dealerId":"Agent ID:","tier":"Tier:","fee":"Fee:","status":"Status:","createdAt":"Created:","recipient":"Recipient:","recipientUserId":"👤 User ID: {{id}}","handoffDate":"Handoff Date:","pageInfo":"Page Information","pageId":"Page ID:","pageTitle":"Title:","noTitle":"No title","domain":"Domain:","template":"Template:","pageStatus":"Status:","visibility":"Mode:","visibilityPublic":"Public","visibilityPrivate":"Private","statusDraft":"Draft","statusActive":"Active","pageCreated":"Created:","lastUpdated":"Last Updated:","noDomain":"N/A","revoking":"Revoking...","actionRevoke":"Revoke","actionRevoking":"Revoking...","actionEdit":"Edit","actionChangeDomain":"Change Domain","actionBuyFeature":"Buy Feature","actionClose":"Close","revokeSuccess":"Page revoked successfully!","revokeSuccessDesc":"Page has been returned to edit state.","revokeError":"Error","revokeErrorDesc":"Unable to revoke page. Please try again.","revokeConfirmTitle":"Confirm Revoke Handover","revokeConfirmMessage":"Are you sure you want to revoke this page? The page will return to edit state.","revokeConfirmButton":"Revoke","revokeConfirmCancel":"Cancel","actionUpgradeTier":"Upgrade Tier","actionBuySlot":"Buy Slots"},"editTitle":{"title":"Edit Page Title","label":"New Title","placeholder":"Enter new title for page","error":"Error","errorEmpty":"Title cannot be empty","errorUpdate":"Unable to update title. Please try again.","success":"Title updated successfully"}},"dashboard":{"title":"Agent Dashboard","subtitle":"Manage your agent account, credit balance, and client websites.","description":"Create new pages for clients, track your available credit, and view recent activity.","accountSummary":{"title":"Account Summary","status":"Account Status","statusActive":"Active","statusInactive":"Inactive","tier":"Agent Tier","tierUnlimited":"All features included","tierStandard":"Standard features","freeQuota":"Free Page Quota","freeQuotaUsed":"{{remaining}} / {{total}} used","freeQuotaDescription":"Free sites you can create","balance":"Balance","balanceTopUp":"Top Up","joined":"Joined"},"quickActions":{"title":"Quick Actions","createPage":"Create New Page","createPageDescription":"Create a new wedding site for a client","createPageButton":"Create","topUpBalance":"Top Up Balance","topUpBalanceDescription":"Add funds to your agent account","topUpBalanceButton":"Top Up","openCatalog":"Open Page Catalog","openCatalogDescription":"Browse templates and landing pages","openCatalogButton":"Browse"},"levelBenefits":{"title":"Agent Level Benefits","unlimitedAccess":"Unlimited Access"},"availablePlans":{"title":"Available Service Plans","grantPeriod":"Grant period: {{days}} days","grantTier":"Level: {{tier}}","active":"Active","inactive":"Inactive"},"recentTransactions":{"title":"Recent Transactions","filterAll":"All","filterAdminAdjust":"Admin Adjustment","filterPageCharge":"Page Creation Fee","filterRefund":"Refund","typeAdminAdjust":"Admin Adjustment","typePageCharge":"Page Creation Fee","typeRefund":"Refund","columnType":"Type","columnAmount":"Amount","columnBalanceAfter":"Balance After","columnNotes":"Notes","columnDate":"Date","noNotes":"-","balanceAfterLabel":"Balance After"},"errors":{"loadFailed":"Unable to load agent information","loadFailedDescription":"Please try again later or contact support."}},"catalog":{"title":"Page Catalog","subtitle":"Showcase template demo sites to your customers.","description":"Clients can browse these demo pages to choose their design style.","addButton":"Add Template to Catalog","needTemplateFirst":"Need to create a template first?","goToPageManagement":"Go to Page Management","pagesInCatalog":"{{count}} pages in catalog","allLoaded":"All pages loaded","searchPlaceholder":"Search catalog by page name...","searchPlaceholderMobile":"Search catalog...","badgeTemplate":"TEMPLATE","badgeFeatured":"Featured","pageInfo":"Page #{{id}} · {{views}} views","actionEdit":"Edit","actionToggleFeatured":"Toggle Featured","actionCopy":"Copy","actionDelete":"Delete","actionPreview":"Preview","actionFeature":"Feature","actionFeatured":"Featured","addNewCard":{"title":"Add New Template","description":"Showcase another demo page to help clients choose their style","button":"Add Template"},"addModal":{"title":"Add Template Page to Catalog","titleSelectPage":"Select Template Page","infoBox":"ℹ️ You can only add **Template (FREE)** pages to catalog. Template pages are for showcase and cannot be transferred to clients.","selectPageLabel":"Select Template Page *","selectPagePlaceholder":"-- Select template page --","searchPlaceholder":"Search template pages...","showingResults":"Showing {{count}} pages","noResults":"No pages found","noImage":"No image","allLoaded":"All pages loaded","noTemplatesAvailable":"No template pages available to add to catalog. Please create a free template page first.","thumbnailLabel":"Thumbnail","thumbnailButtonSelect":"Select Image","thumbnailButtonChange":"Change Image","thumbnailButtonRemove":"Remove","thumbnailHelp":"Display thumbnail in catalog (if not selected, will use page image)","categoryLabel":"Category","categoryPlaceholder":"E.g., Wedding, Birthday, Corporate","tagsLabel":"Tags (comma separated)","tagsPlaceholder":"E.g., elegant, luxury, modern","descriptionLabel":"Description","descriptionPlaceholder":"Short description of this page...","featuredCheckbox":"Mark as featured page","buttonCancel":"Cancel","buttonAdd":"Add to Catalog"},"editModal":{"title":"Edit Showcase","displayOrderLabel":"Display Order","displayOrderPlaceholder":"Higher numbers display first","featuredCheckbox":"Mark as featured","buttonCancel":"Cancel","buttonSave":"Save Changes"},"thumbnailModal":{"title":"Select Thumbnail"},"messages":{"errorSelectPage":"Please select a page","successAdd":"Page added to catalog","errorAdd":"Unable to add page to catalog","successUpdate":"Showcase information updated","errorUpdate":"Unable to update","confirmDelete":"Are you sure you want to remove this page from catalog?","successDelete":"Page removed from catalog","errorDelete":"Unable to delete","successToggleFeatured":"Featured status updated","successUnfeatured":"Removed from featured","errorToggleFeatured":"Unable to update"}},"designRequests":{"title":"Design Support Requests","subtitle":"Ask our design team to help customize your pages or create special assets.","description":"Submit a request for custom styling, content tweaks, or new invitation designs.","createButton":"Create Request","viewAllButton":"View All Requests","stats":{"total":{"label":"Total Requests","description":"All requests you\'ve submitted","descriptionMobile":"All requests submitted"},"waiting":{"label":"Waiting","description":"Submitted, waiting to be reviewed","descriptionMobile":"Waiting to be reviewed"},"inProgress":{"label":"In Progress","description":"Our design team is working on it","descriptionMobile":"Being worked on"},"completed":{"label":"Completed","description":"Delivered and closed","descriptionMobile":"Delivered & closed"}},"recentRequests":{"title":"Recent Requests","subtitle":"Your most recent tickets are shown here.","empty":{"title":"You don\'t have any design requests yet","titleMobile":"No design requests yet","description":"Create your first request so we can help you with dealer pages, templates, or any custom design work.","button":"Create Your First Request"},"adminNote":"Notes from Admin:","viewAll":"View all {{count}} requests"},"createModal":{"title":"Request Design Support for Dealer Page","dealerPage":"Dealer Page","dealerPagePlaceholder":"Search dealer page (name, domain, ID)...","loading":"Loading...","selected":"Selected: {{label}}","pricingTier":"Page Tier: {{tier}}","dealerLevel":"Agent Level: {{level}}","unlimitedNote":"(Free for all)","currentBalance":"Current Balance: {{balance}} VND","noPageFound":"No pages found","requestTitle":"Request Title","requestTitlePlaceholder":"Brief title for your design request","description":"Detailed Description","descriptionPlaceholder":"Describe your design request in detail, including style, colors, desired content...","priority":"Priority","priorityLow":"Low Priority (7-14 days)","priorityMedium":"Medium Priority (3-7 days)","priorityHigh":"High Priority (1-3 days)","priorityUrgent":"Urgent (24-48 hours)","referenceUrls":"Reference URLs","referenceUrlPlaceholder":"https://example.com","addButton":"Add","removeButton":"Remove","cancel":"Cancel","submit":"Submit Request","validationError":"Validation Error","validationErrorDesc":"Please fill in all required fields","free":"Free","notAvailable":"Not Available"},"listModal":{"title":"List of Design Support Requests","loading":"Loading...","error":"An error occurred while loading data","empty":"You don\'t have any design support requests yet","createdAt":"Created: {{date}}","completedAt":"Completed: {{date}}","assignedTo":"Assigned to: {{name}}","adminNote":"Notes from Admin:","previous":"Previous","next":"Next","pageInfo":"Page {{current}} / {{total}}"}},"brandingSettings":{"title":"Brand Settings","subtitle":"Customize your brand identity, public URL, and contact details shown to customers.","verified":"Verified","brandIdentity":{"title":"Brand Identity","brandName":{"label":"Brand Name","placeholder":"Wedding Studio Pro","helper":"Shown on public pages and invoices."},"logo":{"label":"Logo","buttonChange":"Change Logo","buttonRemove":"Remove","helper":"PNG, SVG, or JPG. At least 512×512 pixels. Maximum 2MB."},"description":{"label":"Short Description","placeholder":"Premium wedding planning and design services","helper":"One-line description used on public brand blocks."}},"websiteAddress":{"title":"Website Address","currentLink":{"label":"Current Public Link"},"defaultDomain":{"label":"Default Subdomain","placeholder":"weddingstudio","suffix":".mehappy.vn","helper":"3–63 characters; letters, numbers, and hyphens. Must begin and end with a letter or number."},"customDomain":{"toggleLabel":"Use a custom domain","toggleHelper":"Replace the default *.mehappy.vn link with your own domain.","label":"Custom Domain","placeholder":"events.weddingstudio.com","dnsTitle":"DNS Instructions","dnsSubtitle":"Add these records at your domain provider. Changes can take up to 24 hours.","dnsNote1":"• Root domain (apex) typically uses an A record.","dnsNote2":"• Use only one of A or ALIAS/ANAME if your provider supports it.","verifyButton":"Verify Domain","verifiedBadge":"Verified","lastChecked":"Last checked {{time}}"}},"contactInfo":{"title":"Contact Information","email":{"label":"Contact Email","placeholder":"hello@weddingstudio.com","helper":"Customers may reach you at this address; also used for notifications.","helperMobile":"Customers may reach you at this address."},"phone":{"label":"Phone Number","placeholder":"+1 (555) 123-4567","helper":"Displayed on invoices and the contact block.","helperMobile":"Displayed on invoices and contact block."},"zalo":{"label":"Zalo","placeholder":"Zalo phone number (e.g: 0901234567)","helper":"Zalo phone number for customer contact"},"facebook":{"label":"Facebook","placeholder":"facebook.com/username or your Facebook link","helper":"Facebook page or fanpage link"},"tiktok":{"label":"TikTok","placeholder":"@username or your TikTok link","helper":"Username or TikTok link"}},"favicon":{"title":"Favicon","preview":"Browser tab preview","buttonChange":"Change Favicon","buttonRemove":"Remove","helper1":"Square image, 32×32 pixels (or 48×48/64×64 for retina). PNG or ICO format. Maximum 256KB.","helper1Mobile":"Square image, 32×32 pixels. PNG or ICO format. Maximum 256KB.","helper2":"Shown on browser tabs and bookmarks."},"appearance":{"localization":{"title":"Default Language","subtitle":"Choose the default language when visitors open your agent website.","defaultLanguage":"Website Language","languages":{"vi":"Vietnamese","en":"English"}},"textOverrides":{"title":"Text Overrides","subtitle":"Quickly override key labels on your agent website. Leave blank to use system defaults.","language":{"title":"Editing Language","hint":"Each language has its own label set. Leave empty to fallback to legacy override or system defaults.","vi":"Vietnamese","en":"English"},"groups":{"nav":"Navigation","catalog":"Catalog","pricing":"Pricing","content":"Content","chat":"Chat Popup","footer":"Footer"},"fields":{"navShowcase":"Nav: Showcase","navPricing":"Nav: Pricing","navContact":"Nav: Contact","navStartNow":"Button: Start now","catalogSearchPlaceholder":"Catalog: Search placeholder","catalogAll":"Catalog: All label","catalogFeatured":"Catalog: Featured label","catalogAllTemplates":"Catalog: All templates label","catalogNoResults":"Catalog: No results text","pricingStartNow":"Pricing: Start button","pricingViewAllFeatures":"Pricing: View all features","pricingContactNow":"Pricing: Contact now","pricingEmptyTitle":"Pricing: Empty state title","pricingEmptySubtitle":"Pricing: Empty state subtitle","heroCustomTitle":"Hero: Custom title","heroCustomDescription":"Hero: Custom description","catalogCustomTitle":"Catalog: Custom title","catalogCustomSubtitle":"Catalog: Custom subtitle","chatPhone":"Chat popup: Phone label","chatZalo":"Chat popup: Zalo label","chatMessenger":"Chat popup: Messenger label","chatWhatsapp":"Chat popup: WhatsApp label","chatEmail":"Chat popup: Email label","footerContactTitle":"Footer: Contact title","footerServicesTitle":"Footer: Services title"}},"footerServiceLinks":{"title":"Footer Service Links","subtitle":"Set destination links for the 3 Service items in footer. Leave blank to keep default behavior.","helper":"Supported: https://..., /path, #anchor (example: #dealer-contact-id).","fields":{"showcase":"Showcase link","pricing":"Pricing link","contact":"Contact link"}},"chatWidget":{"title":"Floating Chat Channels","subtitle":"Enable/disable and reorder channels shown in the floating popup at the bottom-right.","whatsappValue":"WhatsApp (phone number or URL)","whatsappPlaceholder":"Example: +84901234567 or https://wa.me/84901234567","whatsappHelper":"If WhatsApp is enabled but value is invalid, it will not be shown.","position":"Position #{{position}}","channels":{"whatsapp":"WhatsApp","zalo":"Zalo","messenger":"Messenger","phone":"Phone","email":"Email"}},"preview":{"title":"Preview","openInNewTab":"Open in new tab","openHomepage":"Review homepage","openPricing":"Review pricing page","loading":"Loading preview..."}},"actions":{"cancel":"Cancel","save":"Save Changes","saving":"Saving..."},"messages":{"saveSuccess":"Success","saveSuccessDesc":"Brand information updated successfully","saveError":"Error","saveErrorDesc":"Unable to update information","loadError":"Unable to load information","loadErrorDesc":"Please try again later","domainCheckError":"Domain check error","copiedSuccess":"Copied!","copiedSuccessDesc":"Link copied to clipboard"},"modals":{"selectLogo":"Select Logo","selectFavicon":"Select Favicon"}},"pricingPage":{"title":"Custom Pricing Page","subtitle":"Create and publish a standalone pricing page with your own packages.","subtitleMobile":"Create and publish a standalone pricing page with your own packages.","note":"This page can be made public for clients to view.","loading":"Loading...","publicPageToggle":{"title":"Public Page","description":"Turn this on to make your pricing page publicly visible.","statusInvisible":"Your pricing page is not visible to clients."},"pageContent":{"title":"Page Content","pageTitle":{"label":"Page Title","placeholder":"Description of pricing page...","helper":"Shown as the main heading on the pricing page."},"subtitle":{"label":"Subtitle / Intro","placeholder":"Short subheading or intro line...","helper":"Short subheading or intro line under the main title."}},"packages":{"title":"Packages","description":"Add, edit, and reorder pricing packages. Each package will appear as a separate offer on your public pricing page.","descriptionMobile":"Add, edit, and reorder pricing packages.","addButton":"Add Package","packageLabel":"Package {{number}}","fields":{"name":{"label":"Package Name","placeholder":"New Package","helper":"This name will be shown to clients."},"price":{"label":"Price (VND)","placeholder":"0","helper":"Displayed on the pricing page.","currency":"₫"},"description":{"label":"Description / Details","placeholder":"Describe what\'s included in this package...","helper":"Describe what\'s included in this package."}}},"seo":{"title":"SEO Metadata","description":"Used for search engines and link previews.","fields":{"title":{"label":"SEO Page Title","placeholder":"Pricing – Wedding Studio","helper":"This may appear in browser tabs and search results."},"description":{"label":"Meta Description","placeholder":" View detailed pricing packages for wedding services...","helper":"Short summary for search results and previews."},"keywords":{"label":"Keywords","placeholder":"wedding invitations, wedding, pricing","helper":"Comma-separated keywords (e.g. wedding, pricing, packages)."}}},"actions":{"save":"Save Page","saving":"Saving...","deactivate":"Deactivate","deactivating":"Deactivating..."},"messages":{"saveSuccess":"Pricing page saved successfully","saveError":"Unable to save page","deactivateSuccess":"Pricing page deactivated successfully","deactivateError":"Unable to deactivate","deactivateConfirm":"Are you sure you want to deactivate the pricing page?","titleRequired":"Please enter page title","error":"Error","success":"Success"}},"changeDomain":{"title":"Change Domain","currentDomain":"Current domain:","newDomain":"New domain","customDomain":"Custom domain","systemDomain":"System domain","systemDomainDesc":"Use .mehappy.info domain","agentDomain":"Agent domain","agentDomainDesc":"Use agent\'s domain:","customDomainToggle":"Use custom domain","customDomainDesc":"Enable this option if you want to use your own domain instead of .mehappy.info","placeholder":{"subdomain":"john-mary-wedding","custom":"mydomain.com"},"helper":{"subdomain":"Website address must be between 3 and 63 characters (a-z 0-9), can use \\"-\\" character","custom":"Enter your full domain name (example: mydomain.com)","agentDomain":"Enter the subdomain part, suffix will be added automatically"},"suggestions":"Other domain suggestions:","actions":{"cancel":"Cancel","update":"Update Domain"},"errors":{"empty":"Please enter new domain","same":"New domain must be different from current domain","invalidFormat":"Domain can only use lowercase letters, numbers, hyphens and dots","invalidSubdomain":"Domain can only use lowercase letters, numbers and hyphens","tooShort":"Domain must be at least 3 characters","notAvailable":"Domain not available","checking":"Checking domain, please wait","updateFailed":"Unable to update domain. Please try again."},"success":{"title":"Success","description":"Domain updated to {{domain}}"}},"createPage":{"title":"Create New Page","fields":{"title":"Page Title","titleRequired":"Page Title *","tier":"Tier","tierRequired":"Tier *","eventDate":"Wedding Date","eventDateRequired":"Wedding Date *","template":"Template (optional)","domain":"Domain","domainRequired":"Domain *"},"placeholders":{"title":"Enter page title","eventDate":"Enter wedding date","subdomain":"john-mary-wedding","customDomain":"example.com"},"helper":{"subdomain":"Website address must be between 3 and 63 characters (a-z 0-9), can use \\"-\\" character.","customDomain":"Enter your full domain name (e.g: example.com)"},"templateId":"ID:","selectTemplate":"Choose template","currentLevel":"Current level:","notAvailable":"(Not available)","quotaRemaining":"{{count}} pages left","loadingProfile":"Loading agent information...","noFreeQuota":"No FREE quota remaining","insufficientBalance":"Insufficient account balance","actions":{"cancel":"Cancel","create":"Create Page"},"success":{"title":"Success","description":"Page created successfully!"},"errors":{"titleRequired":"Please enter page title","domainRequired":"Please enter domain","domainInvalid":"Domain can only use lowercase letters, numbers and hyphens","domainTooShort":"Domain must be at least 3 characters","domainNotAvailable":"Domain not available","domainChecking":"Checking domain, please wait","createFailed":"An error occurred while creating page"}},"createTemplatePage":{"title":"Create Template Page","description":"✨ Template pages are completely free! Use for showcase in catalog. Cannot be handed off to customers.","fields":{"title":"Page Title","titleRequired":"Page Title *","templateSource":"Source Template","domain":"Domain","domainRequired":"Domain *","eventDate":"Event Date (optional)"},"placeholders":{"title":"E.g: Elegant Wedding Design","template":"Choose template","templateSelected":"Selected: {{name}}","subdomain":"john-mary-wedding"},"helper":{"domain":"Website address must be between 3 and 63 characters (a-z 0-9), can use \\"-\\" character."},"actions":{"cancel":"Cancel","create":"Create Template"},"success":{"title":"Success","description":"Free template page created successfully! You can add to catalog later."},"errors":{"titleRequired":"Please enter page title","domainInvalid":"Domain can only use lowercase letters, numbers and hyphens","domainTooShort":"Domain must be at least 3 characters","domainNotAvailable":"Domain not available","domainChecking":"Checking domain, please wait","createFailed":"An error occurred while creating template page"}},"cloneTemplateToReal":{"title":"Clone Template → Real Page","description":"💰 Clone template page to real page for selling to customers. Charged based on tier you choose.","cloneFrom":"Clone from:","fields":{"title":"New Page Title","titleRequired":"New Page Title *","tier":"Tier","tierRequired":"Tier *","domain":"Domain (optional)","eventDate":"Event Date (optional)"},"placeholders":{"title":"E.g: Mr. Minh & Ms. Hoa Wedding","domain":"e.g: minh-hoa-wedding"},"actions":{"cancel":"Cancel","clone":"Clone to Real Page"},"success":{"title":"Success","description":"Cloned to real page ({{tier}}) successfully!"},"errors":{"titleRequired":"Please enter page title","domainInvalid":"Domain can only use lowercase letters, numbers and hyphens","domainTooShort":"Domain must be at least 3 characters","cloneFailed":"An error occurred while cloning page"}},"handoffModal":{"title":"Transfer Page to Customer","recipientType":"Recipient Type","typeExisting":"Existing user account","typeNew":"Create new account","fields":{"userId":"Recipient User ID","email":"Email","fullName":"Full Name","password":"Temporary Password"},"placeholders":{"userId":"Enter User ID (email)","email":"email@example.com","fullName":"John Doe","password":"Password for new account"},"actions":{"cancel":"Cancel","transfer":"Transfer"},"errors":{"cannotHandoffTemplate":"Cannot Transfer","cannotHandoffTemplateDesc":"Template pages cannot be transferred. Please clone to real page first.","userIdRequired":"Please enter user ID","allFieldsRequired":"Please fill in all recipient information","handoffFailed":"An error occurred while transferring page"},"success":{"title":"Success","description":"Page transferred successfully!"}},"cloneModal":{"title":"Clone Page","description":"Cloning a page will create a completely new copy with identical content to the original page.","fields":{"title":"New Page Title","titleRequired":"New Page Title *","domain":"Domain","domainRequired":"Domain *","eventDate":"Event Date (optional)"},"placeholders":{"title":"Enter title for new page","domain":"e.g: my-wedding"},"helper":{"domain":"Enter subdomain only. The system will append .mehappy.info automatically.","eventDate":"Leave empty to keep the original event date"},"actions":{"cancel":"Cancel","clone":"Clone"},"errors":{"titleRequired":"Please enter title for new page","domainRequired":"Please enter domain","domainInvalid":"Domain can only use lowercase letters, numbers and hyphens","domainTooShort":"Domain must be at least 3 characters","domainNotAvailable":"Domain not available","domainChecking":"Checking domain, please wait","cloneFailed":"An error occurred while cloning page"},"success":{"title":"Success","description":"Page cloned successfully!"}},"deleteModal":{"title":"Confirm Page Deletion","pageInfo":"Page Information:","status":"Status","warningTransferred":"⚠️ Warning: This page has been transferred","messageTransferred":"This page has been handed off. Deleting will only remove the page from your dealer page list. The page will still exist and belong to the recipient.","noteTransferred":"Note: Page still belongs to {{owner}}. You are only removing it from your management list.","warningDraft":"⚠️ Warning: Permanent Deletion","messageDraft":"This page has not been handed off. Deleting will completely remove the page from the system.","noteDraft":"This action cannot be undone. Page will be completely removed from the system.","actions":{"cancel":"Cancel","delete":"Delete"},"success":{"titleRemoved":"Success","descriptionRemoved":"Page removed from dealer page list","titleDeleted":"Success","descriptionDeleted":"Page completely deleted"},"errors":{"deleteFailed":"An error occurred while deleting page"}},"pricingManagement":{"title":"Dealer Pricing Management","subtitle":"Manage pricing matrix for dealer levels and tiers","createButton":"Create New Pricing","loading":"Loading...","error":"Error loading pricing matrix","errorDescription":"Please try again later.","table":{"title":"Pricing Matrix","entries":"{{count}} entries","columns":{"id":"ID","level":"Level","tier":"Tier","price":"Price","designRequestPrice":"Design Request Price","status":"Status","createdAt":"Created At","actions":"Actions"},"actions":{"edit":"Edit","delete":"Delete"},"status":{"active":"Active","inactive":"Inactive"}},"matrix":{"title":"Matrix Visualization","level":"Level"},"createModal":{"title":"Create New Pricing Entry","dealerLevel":"Dealer Level *","dealerTier":"Dealer Tier *","price":"Price (cents) *","pricePlaceholder":"Enter price (cents)","priceHelper":"Example: 80000 = 80,000 VND","designRequestPrice":"Design Request Price (cents) *","designRequestPricePlaceholder":"Enter design request price (cents)","designRequestPriceHelper":"Example: 50000 = 50,000 VND","currency":"Currency","currencyPlaceholder":"VND","isActive":"Active","cancel":"Cancel","create":"Create Pricing"},"editModal":{"title":"Update Pricing Entry","cancel":"Cancel","update":"Update"},"deleteModal":{"title":"Confirm Delete","message":"Are you sure you want to delete this pricing entry?","price":"Price: {{price}}","cancel":"Cancel","delete":"Delete"},"messages":{"createSuccess":"Pricing entry created successfully","createError":"An error occurred while creating pricing entry","updateSuccess":"Pricing entry updated successfully","updateError":"An error occurred while updating pricing entry","deleteSuccess":"Pricing entry deleted successfully","deleteError":"An error occurred while deleting pricing entry"}},"featurePurchase":{"title":"Purchase Features for Customer","customer":"Customer:","email":"Email:","currentBalance":"Current Balance:","noFeaturesAvailable":"No features available","tierBasic":"Basic","tierPro":"PRO","tierVip":"VIP","alreadyOwned":"Owned","expiresAt":"Expires:","lifetime":"Lifetime","selectedCount":"Selected features:","totalCost":"Total Cost:","insufficientBalance":"⚠️ Insufficient balance. Please top up.","cancel":"Cancel","confirm":"Confirm Purchase","processing":"Processing...","note":"💡 Note: The cost will be deducted directly from your balance. All features will be activated <strong>lifetime</strong> for the customer immediately.","errors":{"selectAtLeastOne":"Please select at least one feature","purchaseFailed":"Unable to purchase features. Please try again.","error":"Error"},"success":{"title":"Features purchased successfully!","description":"Purchased {{count}} features for user. Total cost: {{total}}"}},"tierUpgrade":{"title":"Upgrade Tier","customer":"Customer:","email":"Email:","currentTier":"Current Tier","selectNewTier":"Select New Tier","tierPro":"PRO","tierVip":"VIP","cost":"Cost","note":"Note (optional)","notePlaceholder":"Enter note...","currentBalance":"Current Balance","insufficientBalance":"Insufficient balance for upgrade","alreadyMaxTier":"User is already at highest tier (VIP)","free":"Free","cancel":"Cancel","confirm":"Confirm Upgrade","processing":"Processing...","success":{"title":"Upgrade Successful!","description":"Upgraded to {{tier}}"},"errors":{"selectTier":"Please select a tier to upgrade","upgradeFailed":"Unable to upgrade tier","error":"Error"}},"slotPurchase":{"title":"Buy Slots for Customer","customer":"Customer:","email":"Email:","currentBalance":"Current Balance","loading":"Loading packages...","selectPackage":"Select slot package","slots":"slots","noPackages":"No slot packages available","note":"Note (optional)","notePlaceholder":"Enter note...","cost":"Cost","insufficientBalance":"Insufficient balance to purchase slot package","free":"Free","cancel":"Cancel","confirm":"Confirm Purchase","processing":"Processing...","success":{"title":"Slots purchased successfully!","description":"Purchased {{count}} slots ({{package}}) for user"},"errors":{"selectPackage":"Please select a slot package","purchaseFailed":"Unable to purchase slots","error":"Error"}}}'))
}, 238914, e => {
    e.v({
        title: "Top Up Agent Account",
        selectAmount: "Select top-up amount",
        customAmountLabel: "Or enter custom amount",
        customAmountPlaceholder: "Enter amount (VND)",
        minimumAmount: "Minimum amount: {{amount}}",
        noteLabel: "Note (optional)",
        notePlaceholder: "Note for top-up transaction",
        amountSummary: "Top-up amount:",
        continuePayment: "Continue to payment",
        paymentNote: "After successful payment, the balance will be updated to your agent account.",
        orderNumber: "Order #{{orderId}}",
        scanQrTitle: "Scan QR code to pay",
        scanQrDescription: "Please scan the QR code below with your banking app to complete payment",
        qrCodeAlt: "Payment QR Code",
        manualTransferTitle: "Or transfer manually:",
        bankLabel: "Bank:",
        accountNumberLabel: "Account number:",
        amountLabel: "Amount:",
        transferDescriptionLabel: "Transfer description:",
        transferDescriptionWarning: "⚠️ Please enter the transfer description exactly",
        paymentSuccess: "✅ Payment successful!",
        waitingPayment: "Waiting for payment...",
        closeButton: "Close",
        errors: {
            minimumAmount: "Minimum top-up amount is {{amount}}",
            createOrderFailed: "An error occurred while creating top-up order",
            paymentFailed: "Payment failed",
            orderCanceled: "Order has been canceled"
        }
    })
}, 343202, e => {
    e.v({
        login: {
            title: "Login",
            subtitle: "Welcome back! Login to continue.",
            email: "Email",
            emailPlaceholder: "Enter your email",
            password: "Password",
            passwordPlaceholder: "Enter password",
            forgotPassword: "Forgot password?",
            loginButton: "Login",
            loggingIn: "Logging in...",
            processingLogin: "Processing login...",
            noAccount: "Don't have an account?",
            signUp: "Sign up now",
            backToHome: "Back to home",
            googleLogin: "Login with Google",
            orDivider: "Or",
            inAppBrowser: {
                banner: "In-app browsers do not support Google login. Please open this page in Safari/Chrome.",
                modalTitle: "Open in Safari/Chrome for Google login",
                modalDescription: "Please open this link in Safari/Chrome, then continue Google sign-in.",
                step1: "Tap the Copy link button below.",
                step2: "Open Safari or Chrome on your phone.",
                step3: "Paste the link and continue Google sign-in.",
                fallbackNote: "You can still log in right now with email and password on this screen.",
                copyLink: "Copy current link",
                closeButton: "Got it",
                copySuccessTitle: "Link copied",
                copySuccessDescription: "Please open Safari/Chrome and paste the link to log in.",
                copyErrorTitle: "Unable to copy link",
                copyErrorDescription: "Please try again when this tab is active."
            },
            errors: {
                emailRequired: "Email is required",
                emailInvalid: "Invalid email",
                passwordRequired: "Password is required",
                passwordMinLength: "Password must be at least 6 characters",
                loginFailed: "Login failed",
                invalidCredentials: "Invalid email or password",
                captchaRequired: "Please complete the captcha verification"
            },
            success: {
                title: "Login successful! 🎉",
                description: "Welcome back!"
            },
            info: {
                registrationComplete: "Registration successful!",
                pleaseLogin: "Please login with your newly created account"
            },
            emailVerification: {
                title: "Email Verification Required",
                message: "Please verify your email before logging in",
                description: "A verification email has been sent to:",
                checkSpam: "Please check your spam folder if you don't see the email",
                resendButton: "Resend Verification Email",
                resendCountdown: "Resend in {{seconds}}s",
                sending: "Sending...",
                closeButton: "Close"
            }
        },
        register: {
            title: "Register",
            subtitle: "Create a new account to get started",
            email: "Email",
            emailPlaceholder: "Enter your email",
            password: "Password",
            passwordPlaceholder: "Create password",
            confirmPassword: "Confirm Password",
            confirmPasswordPlaceholder: "Re-enter password",
            registerButton: "Register",
            registering: "Registering...",
            haveAccount: "Already have an account?",
            signIn: "Sign in now",
            backToHome: "Back to home",
            errors: {
                emailRequired: "Email is required",
                emailInvalid: "Invalid email",
                passwordRequired: "Password is required",
                passwordMinLength: "Password must be at least 6 characters",
                confirmPasswordRequired: "Confirm password is required",
                passwordMismatch: "Passwords do not match",
                registerFailed: "Registration failed",
                emailExists: "Email already exists",
                captchaRequired: "Please complete the captcha verification"
            },
            success: {
                title: "Registration successful! 🎉",
                description: "Your account has been created successfully!"
            }
        },
        forgotPassword: {
            title: "Forgot Password",
            subtitle: "Enter your email to receive a password reset link",
            email: "Email",
            emailPlaceholder: "Enter your email",
            sendButton: "Send Reset Link",
            sending: "Sending...",
            rememberPassword: "Remember password?",
            backToLogin: "Back to login",
            backToHome: "Back to home",
            errors: {
                emailRequired: "Email is required",
                emailInvalid: "Invalid email",
                failed: "Failed to send reset link",
                emailNotFound: "Email not found",
                captchaRequired: "Please complete the captcha verification"
            },
            success: {
                title: "Reset link sent! 📧",
                description: "Please check your email for the password reset link"
            }
        },
        resetPassword: {
            title: "Reset Password",
            subtitle: "Enter new password for your account",
            newPassword: "New Password",
            newPasswordPlaceholder: "Enter new password",
            confirmPassword: "Confirm Password",
            confirmPasswordPlaceholder: "Re-enter new password",
            resetButton: "Reset Password",
            resetting: "Resetting password",
            rememberPassword: "Remember password?",
            backToHome: "Back to home",
            errors: {
                invalidLinkTitle: "Invalid Link",
                invalidLinkDesc: "The password reset link is invalid or has expired",
                invalidToken: "Invalid password reset token",
                failedTitle: "Password Reset Failed",
                failedDesc: "An error occurred. Please try again later"
            },
            success: {
                title: "Password Reset Successful! 🎉",
                description: "Your password has been updated successfully",
                loginTitle: "Login with New Password",
                loginDesc: "You will be redirected to the login page"
            }
        },
        verifyEmail: {
            loading: {
                title: "Verifying email...",
                description: "Please wait a moment"
            },
            success: {
                title: "Email verified successfully!",
                description: "Your account has been activated successfully.",
                redirect: "You will be redirected to the home page shortly...",
                toastTitle: "Email verified successfully",
                toastDescription: "Your account has been activated. Welcome!"
            },
            error: {
                title: "Email verification failed",
                description: "The verification link is invalid or has expired.",
                resendButton: "Resend verification email",
                backToHome: "Back to home",
                toastTitle: "Email verification failed",
                toastDescription: "The verification link is invalid or has expired."
            },
            resend: {
                title: "Resend verification email",
                description: "Enter your email address to receive a new verification link",
                email: "Email address",
                emailPlaceholder: "Enter email address",
                sendButton: "Send verification email",
                sending: "Sending email",
                backToHome: "Back to home",
                errors: {
                    emailRequired: "Email is required",
                    emailInvalid: "Invalid email"
                },
                success: {
                    title: "Verification email sent",
                    description: "Please check your email to verify your account."
                },
                failed: {
                    title: "Failed to send email",
                    description: "Please check your email address and try again."
                }
            }
        }
    })
}, 13929, e => {
    e.v({
        pageTitle: {
            title: "Profile Settings",
            subtitle: "Update the details that will appear on your wedding invitation.",
            description: "This helps guests get to know you and send wishes or gifts."
        },
        tabs: {
            groom: "Groom",
            bride: "Bride",
            moreDetails: "More Details"
        },
        loading: "Loading Bride & Groom information...",
        photo: {
            addButton: "Add Photo",
            uploadHint: "Upload a photo for your profile"
        },
        fields: {
            fullName: {
                label: "Full Name",
                placeholder: "Enter full name",
                hint: "Used for contact and internal information."
            },
            displayName: {
                label: "Name as shown on invitation",
                placeholder: "Display name",
                hint: "This will appear publicly on your wedding page."
            },
            phone: {
                label: "Phone Number",
                placeholder: "Enter phone number",
                hint: "Guests can use this if they need to reach you."
            },
            birthday: {
                label: "Birthday",
                placeholder: "mm/dd/yyyy",
                hint: "Optional."
            },
            hometown: {
                label: "Hometown / Address",
                placeholder: "Enter hometown or address",
                hint: "Shown on your invitation if you enable it."
            },
            aboutGroom: {
                label: "About the Groom",
                placeholder: "Share a short message about yourself or your love story...",
                hint: "A short message about yourself or your love story."
            },
            aboutBride: {
                label: "About the Bride",
                placeholder: "Share a short message about yourself or your love story...",
                hint: "A short message about yourself or your love story."
            }
        },
        moreDetails: {
            groomTitle: "Additional Information - Groom",
            brideTitle: "Additional Information - Bride",
            socialLinks: {
                title: "Social Media",
                facebook: {
                    label: "Facebook",
                    placeholder: "https://facebook.com/username",
                    hint: "Facebook link"
                },
                zalo: {
                    label: "Zalo",
                    placeholder: "Link or Zalo number",
                    hint: "Zalo link"
                },
                instagram: {
                    label: "Instagram",
                    placeholder: "https://instagram.com/username",
                    hint: "Instagram link"
                },
                twitter: {
                    label: "Twitter",
                    placeholder: "https://twitter.com/username",
                    hint: "Twitter link"
                }
            },
            parents: {
                title: "Parents Information",
                description: "Leave blank if deceased or you don't want to display",
                father: {
                    label: "Father's Full Name",
                    placeholder: "Enter father's full name",
                    hint: "Father's full name"
                },
                mother: {
                    label: "Mother's Full Name",
                    placeholder: "Enter mother's full name",
                    hint: "Mother's full name"
                }
            },
            bankInfo: {
                title: "Bank Information",
                description: "Displayed on invitation to receive online gifts",
                bankName: {
                    label: "Bank Name",
                    placeholder: "e.g. Vietcombank, BIDV, Techcombank...",
                    hint: "Bank name"
                },
                accountHolder: {
                    label: "Account Holder Name",
                    placeholder: "Enter account holder name",
                    hint: "Name on bank card"
                },
                accountNumber: {
                    label: "Account Number",
                    placeholder: "Enter account number",
                    hint: "Bank account number"
                },
                qrCode: {
                    label: "Bank QR Code (Optional)",
                    noQr: "No QR code yet",
                    uploadButton: "Upload QR",
                    changeButton: "Change QR",
                    removeButton: "Remove QR",
                    hint: "Upload QR code for easy guest transfers"
                }
            }
        },
        validation: {
            fullNameRequired: "Full name is required",
            displayNameRequired: "Display name is required",
            phoneRequired: "Phone number is required",
            phoneInvalid: "Invalid phone number",
            hometownRequired: "Address is required"
        },
        actions: {
            save: "Save Information"
        },
        toast: {
            updateSuccess: "Bride & Groom information updated successfully",
            updateError: "Failed to update Bride & Groom information",
            updateErrorDescription: "Please check again."
        },
        fileModal: {
            title: "Select avatar image"
        },
        mapFeature: {
            featureName: "Basic Map"
        }
    })
}, 317852, e => {
    e.v({
        nav: {
            showcase: "Showcase",
            pricing: "Pricing",
            contact: "Contact",
            startNow: "Get Started"
        },
        banner: {
            title: "Beautiful and Professional Online Wedding Invitations",
            description: "Crafted with care and attention to detail, our wedding invitations make your special day truly memorable."
        },
        catalog: {
            title: "Wedding Invitations",
            subtitle: "Discover invitation templates designed by our team",
            searchPlaceholder: "Search invitations...",
            all: "All",
            featured: "Featured",
            allTemplates: "All templates",
            noResults: "No matching templates found",
            preview: "Preview",
            useTemplate: "Use this template",
            quickPreview: "Quick preview",
            by: "By"
        },
        footer: {
            contact: "Contact",
            services: "Services",
            showcase: "View showcase",
            pricing: "Pricing",
            defaultDescription: "We provide professional online wedding invitation services to help you create beautiful and memorable invitations.",
            contactUpdating: "Contact information is being updated",
            copyright: "All rights reserved.",
            poweredBy: "Powered by meHappy Platform"
        },
        pricing: {
            free: "Free",
            moreFeatures: "+ {{count}} more features",
            viewAllFeatures: "View all features",
            contactNow: "Contact now",
            emptyTitle: "Pricing information is not available yet",
            emptySubtitle: "Please contact us directly for consultation",
            allFeaturesTitle: "{{name}} - All features"
        }
    })
}, 765760, e => {
    e.v({
        verification: {
            title: "Domain Ownership Verification",
            description: "2-step verification: TXT record to prove ownership, then CNAME for traffic routing",
            required: "Domain verification required",
            success: "Domain verified successfully",
            successDescription: "Domain has been verified and SSL certificate will be issued automatically",
            failed: "Domain verification failed",
            pending: "Verification pending",
            inProgress: "Verifying domain...",
            step1: "Step 1: Verify Ownership (TXT Record)",
            step2: "Step 2: Configure Routing (CNAME Record)",
            verified: "Verified",
            configured: "Configured",
            partial: "Partial Verification",
            partialMessage: "TXT record verified but CNAME record not configured correctly",
            step1Description: "Add the TXT record on the dedicated verification host to prove domain ownership. This host is separate from the website hostname to avoid conflicts with the CNAME.",
            step2Description: "Add the CNAME for the exact hostname you use to access the website.",
            sameHostWarning: "Do not create TXT and CNAME records on the same hostname.",
            apexCnameWarning: "If your DNS provider does not support apex/root CNAME, use a subdomain such as www.",
            fullName: "Full name: {{name}}",
            waitingTXT: "TXT verification pending",
            txtVerifiedNeedCname: "TXT verified, CNAME still required"
        },
        status: {
            verified: "Verified",
            notVerified: "Not Verified",
            systemDomain: "System Domain",
            customDomain: "Custom Domain",
            verifiedAt: "Verified at {{time}}",
            awaitingTXT: "Awaiting TXT Record",
            needCNAME: "Need CNAME Setup",
            tokenExpired: "Token Expired"
        },
        customDomain: {
            toggle: "Use custom domain",
            description: "Enable this option if you want to use a custom domain"
        },
        cname: {
            guide: "DNS Configuration Guide",
            title: "CNAME Record Setup",
            description: "To use a custom domain, you need to create a CNAME record in your domain provider's DNS settings:",
            descriptionSubdomain: "Create a CNAME record to connect your subdomain to the service:",
            target: "cname.mehappy.info",
            type: "Type",
            host: "Host",
            value: "Value",
            ttl: "TTL",
            copied: "Copied!",
            copyValue: "Copy value",
            step1: "Log in to your domain management account",
            step2: "Find DNS settings or DNS Management section",
            step3: "Add a new CNAME record with the information above",
            step4: "Wait for DNS to propagate (5-10 minutes) and click Verify",
            hostNote: "Host is '{{host}}' (your subdomain part). Some providers like GoDaddy may auto-fill '.{{baseDomain}}'.",
            wildcardDefaultNote: "Use host `*` as the default CNAME. If your DNS provider does not support wildcards or requires an exact host, replace it with the specific subdomain.",
            wildcardTitle: "If your DNS provider uses wildcard `*`",
            wildcardDescription: "Some DNS providers let you create a wildcard CNAME using host `*` to cover multiple subdomains under `{{baseDomain}}`.",
            wildcardNote: "Note: `*` is a wildcard for undefined subdomains and does not fully replace `www` or the root domain when your provider expects separate records.",
            wildcardAdvancedTitle: "Advanced option: add wildcard `*`",
            wildcardAdvancedDescription: "If you also want to cover undefined subdomains, you can add a wildcard record like the one below. This is optional, not required.",
            wildcardAdvancedNote: "Wildcard `*` is an advanced option only. It applies only to subdomains without their own records; if a hostname already has TXT/A/AAAA/CNAME, the wildcard will not cover it."
        },
        txtRecord: {
            title: "TXT Record - Ownership Verification",
            description: "Add this TXT record to your DNS to prove domain ownership:",
            name: "TXT Record Name",
            value: "Token Value",
            copied: "Token copied!",
            expires: "Token expires in",
            expiresInDays: "{{days}} days left",
            expiresInHours: "{{hours}} hours left",
            expired: "Token expired",
            regenerate: "Generate new token",
            verifying: "Checking TXT record...",
            verified: "TXT record verified",
            subdomain: "Host is '{{host}}', which is the subdomain part before '{{baseDomain}}'."
        },
        rootDomainWarning: {
            title: "Warning: You're using a Root/Apex Domain",
            description: "Most DNS providers (like GoDaddy, Namecheap) do not allow CNAME records for root domains per DNS standards. Choose the method your provider supports:",
            option1Title: "Option 1 (Recommended): Use a Subdomain",
            option1Description: "The easiest and best way is to use a subdomain, for example {{subdomain}}. Please go back and enter {{subdomain}} instead of the root domain.",
            option2CnameTitle: "Option 2: Use a direct CNAME at the root domain",
            option2CnameDescription: "If your DNS provider explicitly allows a CNAME record on the root/apex domain, you can configure a direct CNAME for `@` as shown below.",
            option2CnameNote: "Only use this when your DNS UI actually allows a CNAME on host `@` or the root domain.",
            option2Title: "Option 3 (Advanced): Use ALIAS, ANAME, or CNAME Flattening",
            option2Description: "If your DNS provider supports this feature (commonly available on Cloudflare, Vercel, Netlify...), you can configure it as follows. If you can't find these record types, you must use Option 1.",
            cloudflareNote: "If using Cloudflare, you just need to create a CNAME record and Cloudflare will automatically 'Flatten' it for you.",
            option3Title: "Option 4 (Not Recommended): Use A Record",
            option3Description: "If no other option works, you can point an A record to our server IP. This is a last resort solution.",
            option3Warning: "Warning: If this IP changes in the future, your site will stop working until you update the IP.",
            cnameNotSupported: "For root domains, choose the option that matches your DNS provider's capabilities:",
            wwwAlsoSupportsRootTitle: "If your DNS provider supports host `@`",
            wwwAlsoSupportsRootDescription: "Some DNS providers let you use `@` for the root/apex domain. In that case, use the record below for `{{baseDomain}}`.",
            wwwAlsoSupportsRootNote: "Only use the `@` record when your DNS provider truly supports an apex/root CNAME. Otherwise, keep using `*` or switch to ALIAS/ANAME."
        },
        propagation: {
            title: "DNS Propagation",
            description: "DNS propagation can take 5-10 minutes. In some cases, it may take up to several hours depending on your DNS provider.",
            minTime: "Minimum: 5 minutes",
            avgTime: "Average: 10-30 minutes",
            maxTime: "Maximum: several hours",
            checkTool: "Check DNS propagation",
            retry: "Retry in {{seconds}} seconds",
            retrying: "Retrying... ({{current}}/{{max}})"
        },
        errors: {
            cnameNotFound: "CNAME record not configured",
            cnameNotFoundDesc: "Please create a CNAME record pointing to cname.mehappy.info and try again in a few minutes",
            txtNotFound: "TXT record not found",
            txtNotFoundDesc: "Please add the TXT record to your DNS and wait 5-10 minutes for DNS propagation",
            tokenExpired: "Verification token expired",
            tokenExpiredDesc: "Please generate a new token and update the TXT record",
            domainTaken: "Domain already in use",
            domainTakenDesc: "This domain has been verified by another user",
            tooManyAttempts: "Too many attempts",
            tooManyAttemptsDesc: "Please wait {{seconds}} seconds before trying again",
            alreadyVerified: "Domain already verified",
            noCustomDomain: "No custom domain configured",
            notFound: "Page/domain not found",
            domainNotFound: "Domain not found in system",
            dnsError: "Error checking DNS record",
            dnsErrorDesc: "Please try again later or contact support if the issue persists.",
            verificationFailed: "Verification failed",
            tryAgain: "Please try again",
            checkFailed: "Domain check failed"
        },
        actions: {
            verify: "Verify Domain",
            verifying: "Verifying...",
            generateGuide: "Generate verification guide",
            configured: "Configured",
            retry: "Retry",
            skipForNow: "Skip for now",
            checkDns: "Check DNS",
            viewGuide: "View guide",
            loginToVerify: "Login to verify",
            generateToken: "Generate verification token",
            verifyOwnership: "Verify ownership",
            checkStatus: "Check status",
            retryVerification: "Retry verification"
        },
        unverifiedPage: {
            title: "Domain Not Verified",
            description: "This domain has not been verified. The owner needs to verify the domain before it can be publicly accessed.",
            ownerAction: "If you are the owner, please log in to verify this domain."
        },
        systemDomain: {
            description: "System domains are automatically verified",
            autoVerified: "Auto-verified",
            noSetupRequired: "No DNS setup required"
        },
        providers: {
            cloudflare: "Cloudflare",
            cloudflareNote: "Set Proxy status to 'DNS only' (gray cloud icon)",
            godaddy: "GoDaddy",
            namecheap: "NameCheap",
            generic: "Other providers"
        }
    })
}, 969348, e => {
    e.v({
        header: {
            logo: "meHappy",
            nav: {
                templates: "Templates",
                features: "Features",
                featuresShort: "Platforms",
                pricing: "Pricing",
                about: "About",
                whyChoose: "Why Choose",
                faq: "FAQs"
            },
            navMobile: {
                home: "Home",
                features: "Features",
                whyChoose: "Why us",
                faq: "FAQs"
            },
            signIn: "Sign In",
            getStarted: "Get Started",
            dashboard: "Dashboard"
        },
        invitationType: {
            wedding: "Wedding Invitation",
            weddingDesc: "Traditional elegant wedding invitations",
            card: "Digital Card",
            cardDesc: "Birthday & event invitations"
        },
        dashboard: {
            wedding: "Manage Wedding Invitations",
            weddingDesc: "Wedding cards & invites",
            card: "Manage Digital Cards",
            cardDesc: "Birthday & event cards"
        },
        productSelection: {
            title: "Choose invitation type",
            wedding: {
                title: "Wedding Invitation",
                description: "Full-featured wedding website"
            },
            invite: {
                title: "Event Invitation",
                description: "Birthday, baby shower, conference..."
            }
        },
        banner: {
            tag: "Designed for modern weddings & events",
            title: "Your Dream Invitation.<br />Perfect on Every Device.",
            description: "Create stunning digital cards for weddings and events. Share via link, track RSVPs, and manage guests effortlessly.",
            buttons: {
                startDesigning: "Start Designing for Free",
                access: "Start",
                watchDemo: "Watch 2‑minute demo"
            },
            socialProof: "Loved by planners & couples in over 40+ cities"
        },
        feature: {
            title: "MEHAPPY PLATFORMS",
            description: "To accompany you through every important milestone, meHappy develops specialized platforms tailored to each need. From elegant wedding invitations to cheerful birthday cards and special events, each platform is designed to provide maximum convenience, modernity, and personalization.",
            invitationSystem: {
                name: "meHappy Invite",
                description1: "Platform to create",
                description2: "Digital wedding invitations, Online wedding invitations",
                free: "FREE",
                description3: "Make your wedding more unique and memorable"
            },
            meVideo: {
                name: "meVideo",
                description1: "Professional platform for designing",
                description2: "Videos, Memory videos, Event videos",
                description3: "",
                tagline: "Capture moments, keep love forever"
            },
            meWeddingPlanner: {
                name: "meWedding Planner",
                description1: "Platform for",
                description2: "Wedding planning",
                free: "FREE",
                tagline: "Easy wedding planning, worry-free"
            }
        },
        whyChoose: {
            title: "Why Choose MeHappy?",
            description: "A single, beautiful link that replaces paper cards, messy spreadsheets, and endless group chats—while still feeling personal and premium for every guest.",
            stats: {
                couplesSave: "Couples save on average",
                comparedToPrint: "Compared to print",
                percent: "40%",
                timeSaved: "Less time spent managing guest lists and RSVPs."
            },
            testimonial: {
                quote: "“Guests kept saying how easy it was.”",
                author: "Linh & Nam · Ho Chi Minh City"
            },
            features: {
                lifeJourney: {
                    title: "Complete Life Journey",
                    description: "From wedding invitations, birthdays to events, meHappy accompanies you at every important milestone."
                },
                convenient: {
                    title: "Convenient & Fast",
                    description: "Create, share and manage invitations in just minutes, anytime - anywhere."
                },
                easyConnect: {
                    title: "Easy Connection",
                    description: "Guests can confirm attendance, send wishes and save memories online."
                },
                modern: {
                    title: "Modern & Cost-effective",
                    description: "Replace traditional paper invitations, elegant and eco-friendly, and",
                    free: "FREE"
                },
                personalize: {
                    title: "Unique Personalization",
                    description: "Freely create, turning each invitation into your own unique mark, full of your personality."
                },
                support: {
                    title: "Dedicated Support Team",
                    description: "meHappy is not just a platform, but a friend who always supports you in every important event."
                }
            }
        },
        partner: {
            title: "Become a meWedding Partner or Designer",
            description: "Join our creative community and earn by sharing your beautiful designs or referring clients to our platform.",
            mobileTitle: "Join Our Community",
            mobileDescription: "Become a partner or designer and start earning",
            buttons: {
                agent: "Apply as Agent",
                creator: "Apply as Creator"
            }
        },
        faq: {
            title: "Frequently Asked Questions",
            description: "Answers to the most common questions about using MeHappy.",
            questions: {
                q1: {
                    question: "What is a digital wedding invitation website?",
                    answer: "A digital wedding invitation website is a dedicated web page for couples' weddings. It's a place to permanently store moments, memories, and wedding photos. It serves as a modern way to invite friends and family, replacing traditional paper invitations. This is a 5.0 wedding invitation with many useful features. It helps you invite guests stylishly, store and share your love story and wedding photo albums with everyone. It allows people to send wishes, send online wedding gifts, and confirm attendance...helping you manage your wedding plans easily. Your wedding will become more special to everyone."
                },
                q2: {
                    question: "What do I need to prepare to get started with a wedding invitation?",
                    answer: "You need to prepare a wedding photo album, videos if available, to share with everyone. A simple love story written by yourself. Information about the bride and groom, families, wedding date, and some necessary details. After that, just create your own beautiful and satisfying invitation!"
                },
                q3: {
                    question: "What is the significance of this wedding invitation website?",
                    answer: "A wedding invitation website or online wedding invitation is a modern 5.0 pink invitation that replaces traditional paper invitations. It provides complete wedding information to your guests, helping you easily share with everyone, whether near or far. Additionally, online wedding invitations make your wedding more lively before the wedding day with your shares such as: wedding photo albums, videos, wishes for you as a couple, your love story, or even a countdown to remind guests, Google Maps directions to the venue...Your wedding will be wonderful!!"
                },
                q4: {
                    question: "Can I change the design or invitation information after it's completed and delivered?",
                    answer: "Couples can completely make changes until satisfied, even after the invitation has been delivered to you. meWedding always wants you to have the most wonderful and perfect wedding, so don't hesitate to contact meWedding for support when needed. Our team will always be ready to support you 24/7, anytime, anywhere!"
                },
                q5: {
                    question: "Is it easy to design this invitation myself? I'm not tech-savvy",
                    answer: "It's completely easy to design. You just need to click to edit the information to match yours. Without knowing about design or web coding, you can easily complete this invitation with just a few editing operations. You can also do this on your phone very simply."
                },
                q6: {
                    question: "How many people can I send invitations to?",
                    answer: "Digital wedding invitations have no limit on the number of guests you want to invite. This also helps you save a lot of costs compared to printed paper invitations."
                }
            }
        },
        cta: {
            title: "Ready to create and save important moments and events in your journey?",
            button: "Get Started"
        },
        footer: {
            brand: {
                name: "meHappy",
                tagline: "Keep Happiness - Connect Love",
                companyName: "MEHAPPY LLC",
                taxCode: "Tax ID: 0111152872",
                address: "Address: Floor 3, No. 34, Alley 182 Phu Dien Street, Phu Dien Ward, Hanoi, Vietnam",
                email: "Email: mehappy.vnn@gmail.com"
            },
            services: {
                title: "| Services",
                meWedding: "meWedding",
                meBirthday: "meBirthday (Coming Soon)",
                meEvent: "meEvent (Coming Soon)",
                meWeddingInvite: "meWedding Invite",
                meInvite: "meInvite",
                meVideo: "meVideo",
                meWeddingPlanner: "meWedding Planner"
            },
            contact: {
                title: "| Contact",
                description: "If you need consultation, please contact us through the channels below"
            },
            links: {
                title: "| meHappy",
                home: "Home",
                terms: "Terms of Use",
                privacy: "Privacy Policy",
                support: "Customer Support",
                payment: "Payment"
            }
        }
    })
}, 800119, e => {
    e.v({
        page: {
            title: "Manage Invitations",
            titleCard: "Manage Save The Date Cards",
            description: "Manage your invitations. You can edit, create new and manage everything for your invitations here.",
            descriptionCard: "Manage your Save The Date cards. You can edit, create new and manage everything for your Save The Date cards here."
        },
        stats: {
            totalInvitations: "Total Invitations",
            publicInvitations: "Public Invitations",
            activeInvitations: "Active Invitations",
            totalViews: "Total Views",
            guests: "Guests",
            wishes: "Wishes",
            unlockAnalytics: "Unlock Analytics"
        },
        createNew: "Create New Invitation",
        planBanner: {
            title: "You are using {{tier}} invitation plan",
            descriptionFree: "Basic experience with some limitations",
            descriptionPro: "You have unlocked many advanced features",
            descriptionVip: "You are using all premium features",
            viewPlanDetails: "Your plan details",
            unlockFeatures: "Unlock more features",
            upgradeVip: "Upgrade to VIP"
        },
        card: {
            weddingDate: "Event Date:",
            created: "Created:",
            noDomain: "No domain set",
            active: "Active",
            inactive: "Inactive",
            public: "Public",
            private: "Private",
            views: "{{count}} views",
            guestsCount: "{{count}} guests",
            wishesCount: "{{count}} wishes",
            editInvitation: "Edit",
            preview: "Preview",
            guests: "Guests",
            publish: "Publish",
            unpublish: "Unpublish",
            countdown: {
                before: "Countdown to the big day",
                after: "Happily together for"
            },
            expiresAt: "Expires:",
            permanent: "Permanent",
            expired: "Expired",
            expiresIn: "{{date}} ({{days}} days left)",
            unpublished: "Unpublished",
            unlockCountup: "Unlock Count-up",
            unlockStats: "Unlock Stats"
        },
        menu: {
            wishes: "Manage Wishes",
            settings: "Settings",
            share: "Share",
            qrCode: "QR Code",
            socialShare: "Social Share",
            designRequest: "Design Request",
            changeTemplate: "Change Template",
            clone: "Clone",
            cloning: "Cloning...",
            resetToTemplate: "Reset to Template",
            statistics: "Statistics",
            delete: "Delete",
            expand: "Expand Menu",
            collapse: "Collapse Menu"
        },
        create: {
            title: "Create New Invitation",
            description: "Design a beautiful invitation for your special day",
            button: "Create Invitation"
        },
        loading: "Loading invitations...",
        error: "Cannot load invitations. Please try again.",
        empty: "You don't have any invitations yet. Create a new one!",
        pagination: {
            show: "Show",
            perPage: "/ page",
            previous: "‹ Previous",
            next: "Next ›",
            goto: "Go to",
            go: "Go",
            total: "Total: {{count}} invitations"
        },
        messages: {
            copySuccess: "Copied!",
            copyDescription: "Link has been copied to clipboard",
            copyError: "Error",
            copyErrorDescription: "Cannot copy link",
            publishSuccess: "Published invitation",
            publishSuccessDescription: "Your invitation has been published and can be accessed via link",
            unpublishSuccess: "Unpublished invitation",
            unpublishSuccessDescription: "Your invitation has been hidden from public",
            updateError: "Update error",
            updateErrorDescription: "Cannot update invitation status",
            cloneSuccess: "Cloned successfully",
            cloneSuccessDescription: "Invitation has been cloned successfully",
            cloneError: "Clone error",
            cloneErrorDescription: "Cannot clone invitation",
            deleteSuccess: "Deleted invitation",
            deleteSuccessDescription: "Invitation has been deleted successfully",
            deleteError: "Delete error",
            deleteErrorDescription: "Cannot delete invitation",
            templateChangeSuccess: 'Changed template to "{{name}}" for invitation "{{title}}"',
            templateChangeError: "An error occurred while changing template. Please try again.",
            resetSuccess: "Reset invitation to original template",
            resetError: "Reset error",
            resetErrorDescription: "Cannot reset invitation to original template",
            tierUpgradeRequired: "Upgrade Required",
            tierUpgradeDescription: "You need to upgrade to a higher tier or equal to this template to publish",
            copyLink: "Copy link",
            copyAndClearCache: "Copy + Refresh cache",
            clearCacheSuccess: "Cache refresh request sent",
            clearCacheError: "Cannot clear cache"
        },
        tierUpgradeFeatureName: "Upgrade to Publish",
        modals: {
            delete: {
                title: "Confirm Delete",
                message: "Are you sure you want to delete this invitation? This action cannot be undone.",
                confirm: "Delete",
                cancel: "Cancel"
            },
            templateChange: {
                title: "Template Change Warning",
                message: "Are you sure you want to change the template for invitation",
                toTemplate: "to template",
                warning: "⚠️ Note: When changing template, all current content and settings will be deleted and replaced with the new template.",
                note: "This action cannot be undone. Please consider carefully before continuing.",
                keepInfo: "Keep existing information",
                keepInfoHelper: "Turn on to keep current content. Turn off to re-initialize content from profile information.",
                confirm: "Continue",
                cancel: "Cancel"
            },
            reset: {
                title: "Confirm Reset Invitation",
                message: "Are you sure you want to reset invitation",
                warning: "⚠️ Note: All current content and settings will be deleted and replaced with the original template content. This action cannot be undone.",
                confirm: "Reset",
                cancel: "Cancel"
            }
        }
    })
}, 39779, e => {
    e.v({
        createPage: {
            title: "Create New Invitation",
            fields: {
                title: "Invitation Title",
                domain: "Website Address",
                eventDate: "Event Date",
                template: "Template"
            },
            placeholders: {
                title: "Enter title for invitation...",
                subdomain: "john-mary",
                custom: "example.com"
            },
            defaults: {
                title: "Wedding of Groom Name & Bride Name"
            },
            defaultDomain: "Default Domain",
            customDomainLabel: "Custom Domain",
            customDomain: {
                toggle: "Use custom domain",
                description: "Enable this option if you want to use your own domain instead of .mehappy.info"
            },
            helper: {
                subdomain: 'Website address must be between 3 and 63 characters (a-z 0-9), can use "-" character.',
                custom: "Enter your full domain name (e.g., mydomain.com)",
                customDomainHint: "You can configure a custom domain (e.g., yourname.com) after creating the page in Settings."
            },
            suggestion: {
                message: "Suggested from your input: {{domain}}",
                apply: "Use suggestion"
            },
            cnameGuide: {
                title: "Domain Usage Guide",
                description: "Domain must not include www. (Example: enter abc.com only, not www.abc.com). After setting up your custom domain in the system, go to your domain management system and configure 2 records as follows:"
            },
            template: {
                choose: "Choose template",
                id: "Template #{{id}}"
            },
            actions: {
                cancel: "Cancel",
                create: "Create Invitation",
                creating: "Creating..."
            },
            errors: {
                titleRequired: "Please enter invitation title",
                domainRequired: "Please enter domain",
                domainInvalid: "Domain can only use lowercase letters, numbers and hyphens",
                domainTooShort: "Domain must be at least 3 characters",
                domainNotAvailable: "Domain not available",
                domainChecking: "Checking domain, please wait",
                eventDateRequired: "Please select event date"
            },
            verification: {
                success: "Your page has been created successfully!",
                needsVerification: "However, the custom domain {{domain}} needs to be verified before it can be accessed publicly.",
                skipNote: "Note: You can skip this step and verify later in the management page. The page can still be edited but will not be publicly accessible until the domain is verified.",
                skipButton: "Skip, verify later",
                verifyButton: "Verify now"
            },
            tierWarning: {
                title: "Upgrade Required to Publish",
                description: "This template requires {{templateTier}} plan, but you are currently on {{userTier}} plan. You can create the page but will need to upgrade to publish it.",
                upgradeButton: "Upgrade Now"
            },
            seo: {
                sectionTitle: "SEO Settings",
                pageTitle: "Page Title (displayed on browser tab)",
                pageTitlePlaceholder: "E.g., Wedding of John & Mary",
                pageTitleHelper: "{{count}}/200 characters",
                pageDescription: "Page Description",
                pageDescriptionPlaceholder: "A brief description of your wedding invitation",
                pageDescriptionHelper: "{{count}}/160 characters. This description will appear when sharing the link.",
                socialImage: "Social Media Image",
                socialImagePlaceholder: "https://example.com/image.jpg",
                socialImageHelper: "Recommended: 1200x630px. Image displayed when sharing link.",
                favicon: "Page Icon (Favicon)",
                faviconPlaceholder: "https://example.com/favicon.ico",
                faviconHelper: "Recommended: 32x32 or 16x16px",
                password: "Page Password Protection",
                passwordPlaceholder: "Leave empty if not needed",
                passwordHelper: "Viewers will need to enter password to access the page.",
                premiumLabel: "Premium Feature"
            }
        }
    })
}, 61162, e => {
    e.v({
        permissions: {
            accessDenied: "You don't have permission to access this feature",
            insufficientPermission: "Insufficient permission",
            contactAdmin: "Please contact administrator for permission",
            roleRequired: "Role {{role}} is required to access"
        },
        roles: {
            admin: "Administrator",
            mod: "Moderator",
            super_admin: "Super Administrator",
            user: "User",
            agent: "Agent"
        }
    })
}, 490659, e => {
    e.v({
        title: "Photobook Manager",
        description: "Collect and share your favorite wedding photos in beautiful albums.",
        subtitle: "Create a photobook for each event or moment and link it to your wedding page.",
        descriptionMobile: "Collect and share your favorite wedding photos",
        subtitleMobile: "Create photobooks for each event or moment",
        newPhotobook: "New Photobook",
        addPhotobook: "Add Photobook",
        editPhotobook: "Edit Photobook",
        deleteConfirmTitle: "Confirm Delete",
        deleteConfirmMessage: "Are you sure you want to delete this photobooth?",
        deleteSuccess: "Photobook deleted",
        deleteError: "Error deleting photobooth",
        emptyState: "No photobooths found",
        loading: "Loading photobooths...",
        delete: "Delete",
        cancel: "Cancel",
        tableHeaders: {
            title: "Title",
            page: "Wedding Page",
            images: "Images",
            createdAt: "Created At",
            actions: "Actions"
        },
        filter: {
            searchPlaceholder: "Search photobooks...",
            allPages: "All Pages"
        },
        card: {
            linkedTo: "Linked to",
            created: "Created",
            photosTotal: "photos total",
            view: "View",
            edit: "Edit",
            delete: "Delete"
        },
        pagination: {
            previous: "Previous",
            next: "Next",
            pageInfo: "Page {{current}} / {{total}}"
        },
        form: {
            createTitle: "Create Photobook",
            editTitle: "Edit Photobook",
            titleLabel: "Title",
            titlePlaceholder: "Enter photobook title",
            pageLabel: "Wedding Page",
            pageSelectPlaceholder: "Select wedding page",
            imagesLabel: "Images",
            addImages: "Add Images",
            dragToReorder: "Drag to reorder images",
            noImages: "No images yet",
            imageDescription: "Image description",
            imageDescriptionPlaceholder: "Enter description for this image...",
            cancel: "Cancel",
            create: "Create",
            update: "Update",
            creating: "Creating...",
            updating: "Updating...",
            selectImagesTitle: "Select images for photobook",
            validation: {
                titleRequired: "Title is required",
                pageRequired: "Please select a wedding page",
                imagesRequired: "Please add at least one image"
            },
            success: {
                created: "Photobook created successfully",
                updated: "Photobook updated successfully"
            },
            error: {
                create: "Error creating photobook",
                update: "Error updating photobook"
            }
        }
    })
}, 573413, e => {
    e.v({
        banner: {
            title: "Choose Your Perfect Plan",
            subtitle: "From simple announcements to premium wedding experiences, we have the perfect plan for your special day"
        },
        plans: {
            basic: "BASIC",
            pro: "PRO",
            vip: "VIP"
        },
        currentPlan: "Current Plan",
        usingPlan: "Using Plan",
        save: "Save",
        upgradeNow: "Upgrade Now",
        selectPlan: "Select Plan",
        included: "Included",
        designRequestIncluded: "Design request is already included in your plan",
        addDesignRequest: "Add Design Request",
        upgradeDiscount: "Upgrade Discount",
        upgradeFrom: "Upgrade from {{plan}}",
        owned: "Owned",
        designFee: "design fee",
        cards: {
            basic: {
                name: "BASIC",
                subtitle: "For simple announcements",
                price: "Free",
                period: "/forever",
                button: "Get Started Free"
            },
            pro: {
                name: "PRO",
                subtitle: "For most couples",
                period: "/one-time",
                note: "Includes design & setup",
                badge: "Most Popular",
                button: "Choose PRO Plan"
            },
            vip: {
                name: "VIP",
                subtitle: "The complete premium experience",
                period: "/one-time",
                note: "Includes design & setup",
                button: "Choose VIP Plan",
                badge: "Best Value"
            }
        },
        features_list: {
            basic_designer: "Basic Card Designer",
            advanced_designer: "Advanced Card Designer",
            comprehensive_designer: "Comprehensive Card Designer",
            public_time_6m: "6 months public access",
            public_time_2y: "2 years public access",
            public_time_lifetime: "Lifetime public access",
            photos_basic: "Basic photo limit",
            photos_advanced: "Advanced photo limit",
            photos_max: "Max photo limit",
            features_basic: "Basic features",
            features_advanced: "Advanced features",
            features_unlock_all: "Unlock all features",
            unlimited_invites: "Unlimited invitations",
            use_pro: "Use PRO templates",
            use_vip: "Use VIP templates"
        },
        comparison: {
            title: "Complete Feature Comparison",
            subtitle: "See exactly what's included in each plan",
            viewAll: "Compare all features",
            categories: {
                core: "Core Features",
                guest: "Guest Management",
                customization: "Customization",
                support: "Support"
            },
            features: {
                publicTime: "Invitation Public Time",
                features: "Features",
                photos: "Number of Photos",
                templates: "Custom Templates",
                rsvp: "RSVP Tracking",
                guestList: "Guest List Management",
                reminders: "Automated Reminders",
                customDomain: "Custom Domain",
                musicVideos: "Music & Videos",
                animations: "Premium Animations",
                support: "Support Level",
                design: "Design Assistance"
            },
            values: {
                sixMonths: "6 months",
                twoYears: "2 years",
                lifetime: "Lifetime",
                basic: "Basic",
                advanced: "Advanced",
                premium: "Premium",
                selfService: "Self-service",
                azSetup: "A-Z Setup",
                priority247: "24/7 Priority",
                unlimited: "Unlimited"
            }
        },
        basicModal: {
            title: "Basic Plan - Buy additional features:",
            buyFeatures: "Buy Additional Features"
        },
        proModal: {
            title: "Pro Plan - Buy additional features:",
            buyFeatures: "Buy Additional Features"
        },
        vipModal: {
            currentPlan: "You are using the VIP plan - our most premium offering!",
            description: "Thank you for trusting our premium service."
        },
        contactSupport: "Contact support:",
        note: {
            title: "Note:",
            content: "We currently do not have a refund and cancellation policy for packages, but if you encounter any errors or confusion in payment, please contact us for support. Features in packages cannot be converted to money for deduction or exchanged for other features between packages. Thank you very much!"
        },
        purchaseModal: {
            title: "Order Payment",
            orderInfo: "Order Information",
            coupon: "Coupon Code",
            enterCoupon: "Enter coupon code",
            couponPlaceholder: "Enter coupon code...",
            checking: "Checking...",
            invalidCoupon: "Invalid coupon code",
            couponApplied: 'Coupon "{{code}}" applied',
            discount: "Discount {{amount}}",
            remove: "Remove",
            additionalOptions: "Additional Options",
            designRequest: "Design Request",
            designRequestDesc: "Includes custom design per your request",
            orderSummary: "Order Summary",
            originalPrice: "Original Price",
            total: "Total",
            confirmOrder: "Confirm Order",
            createOrder: "Create Order",
            creatingOrder: "Creating Order...",
            paymentSuccess: "Payment Successful!",
            paymentSuccessDesc: "Your plan has been activated",
            paymentFailed: "Payment Failed",
            paymentFailedDesc: "Please try again or contact support",
            scanQR: "Scan QR code to pay",
            generatingQR: "Generating QR code...",
            bankTransferInfo: "Bank Transfer Info",
            bank: "Bank",
            accountNumber: "Account Number",
            content: "Content",
            orderId: "Order",
            autoUpdate: "System will automatically update upon payment receipt",
            status: {
                paid: "Paid",
                requiresPayment: "Requires Payment",
                created: "Order Created",
                failed: "Payment Failed",
                canceled: "Canceled",
                label: "Order Status"
            }
        },
        featurePurchaseModal: {
            title: "Buy Individual Features",
            titleWithTier: "Buy {{tier}} Tier Features",
            loading: "Loading features...",
            availableFeatures: "Available Features",
            allOwned: "You already own all available features!",
            key: "Key",
            ownedFeatures: "Owned Features",
            owned: "Owned",
            total: "Total",
            selectedCount: "Selected {{count}} features",
            paymentInfo: "Payment Information",
            scanQR: "Scan QR code to pay:",
            bankTransfer: "Bank Transfer:",
            bank: "Bank",
            accountNumber: "Account Number",
            content: "Content",
            amount: "Amount",
            paymentPrompt: "Please pay to activate selected features.",
            cancel: "Cancel",
            buy: "Buy",
            processing: "Processing...",
            note: "Note",
            noteContent: "After successful payment, features will be activated immediately for your account.",
            paymentSuccess: "Payment Successful",
            paymentFailed: "Payment Failed",
            orderCanceled: "Order Canceled",
            createOrderError: "Could not create order. Please try again.",
            orderCreated: "Order Created"
        },
        planDetailsModal: {
            title: "{{plan}} Plan Details",
            close: "Close",
            feature: "Feature",
            included: "Included"
        },
        viewDetails: "View Details",
        buyFeatures: "Buy Features",
        customDesign: "Custom Design",
        endsIn: "Ends in",
        featureList: {
            designSupport: "Design & Setup Support A-Z",
            anytimeSupport: "Anytime Support",
            unlimitedEdits: "Unlimited Edits",
            basicFeatures: "Basic Features (Music, Effects, Wedding Info...)",
            publicTime: "Invitation Public Time",
            photoCount: "Number of Photos",
            brideGroomInfo: "Bride & Groom Info",
            parentsInfo: "Parents Info & Address",
            eventsInfo: "Wedding Events, Time, Location, Timeline",
            weddingBox: "Wedding Box (Bank Info, QR Code)",
            qrCode: "QR Code for Invitation",
            countdown: "Countdown Timer",
            googleMaps: "Google Maps Integration",
            removeAds: "Remove Ads",
            customColorsFonts: "Custom Colors & Fonts",
            customEffects: "Custom Effects (Hearts, Snow, Flowers...)",
            wishes: "Guest Wishes Management",
            uploadVideo: "Upload Video",
            customLayout: "Custom Layout & Design Arrangement",
            rsvp: "RSVP & Guest Management",
            vipInterface: "VIP Interface Access",
            removeBranding: "Remove meWedding Branding",
            customLogo: "Custom Logo with Names",
            logoOptions: "Logo Display Options",
            saveTheDate: "Save the Date + Guest Names",
            innerInvitation: "Inner Invitation with Guest Names",
            downloadData: "Download Wishes & Guest List",
            uploadFont: "Upload Custom Font",
            uploadMusic: "Upload Custom Music",
            uploadEffect: "Upload Custom Effect",
            customDomain: "Custom Domain",
            bonusVideo: "Free Chibi Video, Fun Animation for wedding events",
            custom_qrcode_style: "Custom QR Code Style",
            countup_timer: "Wedding Time Count-up (after wedding date)",
            analytics: "Invitation Analytics",
            custom_visual_effects: "Page Effects (falling flowers, hearts...)",
            custom_visual_effects_advance: "Upload Custom Effects",
            custom_colors_fonts: "Custom Editor Fonts",
            custom_colors_font_advance: "Upload Custom Fonts",
            layout_block_reorder: "Add/Unlock Elements, Reorder Layout",
            photobook: "Manage Photobook (Add/Edit/Delete)",
            wedding_reminders: "Add Events to Calendar",
            change_template: "Change Page Template (keep content)",
            wishes_management: "Wishes Management & Notification Settings",
            upload_wedding_video: "Upload Video (30Mb limit)",
            rsvp_guest_management: "RSVP & Guest Management",
            personalized_invites: "Personalized Invites (Auto-fill guest info)",
            personalized_invites_seo: "Personalized SEO (Guest info)",
            email_reminders: "Scheduled Email Reminders",
            remove_mewedding_logo: "Remove meWedding Branding",
            custom_domain: "Custom Domain",
            editor_event_action_limits: "Full Event Features (except form submission)",
            editor_event_action_limits_vip: "Full Event Features (including form submission)",
            seo_settings: "SEO Settings (Password Protection)",
            seo_settings_vip: "SEO Settings (Favicon, etc.)",
            file_manager_access: "File Manager (Video...)",
            file_manager_access_vip: "File Manager (Unlock All)",
            element_text_limits: "Text Settings (Unlock Fonts)",
            element_form_limits: "Form Settings (Create single form)",
            element_html_block_basic: "HTML Settings (Create single HTML)"
        },
        values: {
            "6months": "6 Months",
            "2years": "2 Years",
            lifetime: "Lifetime",
            "20photos": "20 photos",
            "50photos": "50 photos",
            unlimited: "Unlimited"
        },
        customDesignModal: {
            title: "Custom Design Invitation",
            description: "The invitation will be designed according to the Bride and Groom's specific requirements, changing layout, colors, ideas, etc. Exclusive for the couple. Creating unique colors and better experiences for the Bride and Groom. (Can cover from other invitation templates that the couple likes...)",
            price: "Design Price from: 450,000đ - 2,000,000đ",
            note1: "Depending on the complexity and requirements of the Bride and Groom.",
            note2: "Please message meWedding for detailed consultation support!!"
        },
        upsell: {
            currentPlanRibbon: "Current plan",
            specialUpgradeRibbon: "Special upgrade deal",
            promotionRibbon: "{{percent}}% OFF promotion",
            specialOfferTitle: "Special offer!",
            specialOfferDescription: "You are currently on {{fromPlan}}, add only {{amount}} to upgrade to {{toPlan}}.",
            specialOfferCountdown: "Offer ends in {{time}}",
            mobileQuickSwitch: "Tap a plan to preview details below.",
            mobileUpgradeTag: "Upgrade deal",
            miniCurrentTag: "Current",
            miniUpgradeTag: "Deal",
            showMoreFeatures: "View more features",
            showLessFeatures: "Collapse",
            priceDiscountInline: "Save {{percent}}%",
            vipUpgradeRemaining: "Only {{amount}} to upgrade to VIP"
        }
    })
}, 291117, e => {
    e.v({
        meta: {
            title: "Privacy Policy | meWedding",
            description: "meWedding's privacy policy - Committed to protecting your personal information"
        },
        title: "PRIVACY POLICY",
        effectiveDate: "Effective Date: November 1, 2025",
        intro: {
            paragraph1: 'We, MEHAPPY LIMITED LIABILITY COMPANY (hereinafter referred to as "We", "Website"), are committed to protecting the privacy of visitors and users (hereinafter referred to as "You"). This Privacy Policy explains how we collect, use, disclose, and protect your personal information when you access our website and use our online invitation design service.',
            paragraph2: "Please read this policy carefully. If you do not agree with the terms of this policy, please do not access or use our Service."
        },
        section1: {
            title: "1. INFORMATION WE COLLECT",
            intro: "We may collect information about you in various ways:",
            a: {
                title: "A. Personal information you provide:",
                item1: "Account information: Name, email address, password when you register an account.",
                item2: "Invitation information: Names (e.g., bride, groom, host), date, time, event location, and any text or images you upload to personalize the invitation.",
                item3: "Guest information: If you use the guest management feature, you may provide guest names, emails, or phone numbers. We only use this information to send invitations on your behalf.",
                item4: "Contact information: When you contact our support department."
            },
            b: {
                title: "B. Automatically collected information:",
                item1: "Log Data and Device: IP address, browser type, operating system, pages you visited, access time.",
                item2: "Cookies: We use cookies to help personalize and improve your experience."
            },
            c: {
                title: 'C. Information from Facebook (If you use "Login with Facebook"):',
                content: "If you choose to log in with Facebook, we will receive access to your basic profile information from Facebook, such as your name, email address, and profile picture, with your permission through Facebook."
            }
        },
        section2: {
            title: "2. HOW WE USE YOUR INFORMATION",
            intro: "We use the collected information for the following purposes:",
            item1: "Provide and operate the Service (create and manage your invitations).",
            item2: "Personalize user experience.",
            item3: "Send you administrative notices, service updates, and support information.",
            item4: "Manage your account.",
            item5: "Improve our website and services.",
            item6: "Comply with legal requirements."
        },
        section3: {
            title: "3. HOW WE SHARE YOUR INFORMATION",
            commitment: "We are committed to not selling, trading, or renting your personal identification information to third parties.",
            intro: "We may only share information in the following cases:",
            item1: "With third-party service providers: To help us operate the website (e.g., web hosting service, email service). These parties are obligated to keep your information confidential.",
            item2: "As required by law: When we believe disclosure is necessary to comply with the law, protect our rights or safety, or that of others."
        },
        section4: {
            title: "4. INFORMATION SECURITY",
            content: "We implement reasonable administrative, technical, and physical security measures to protect your personal information from unauthorized access, use, or disclosure. However, no method of transmission over the Internet or electronic storage is 100% secure."
        },
        section5: {
            title: "5. YOUR RIGHTS",
            content: "You have the right to access, update, or request deletion of your personal information. You can do this by logging into your account settings or contacting us directly."
        },
        section6: {
            title: "6. CHANGES TO THIS POLICY",
            content: 'We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Policy on this page and updating the "Effective Date" at the top.'
        },
        section7: {
            title: "7. CONTACT US",
            intro: "If you have any questions or concerns about this Privacy Policy, please contact us at:",
            email: "Email: mehappy.info1@gmail.com"
        }
    })
}, 881441, e => {
    e.v({
        header: {
            title: "Partner Products",
            description: "Discover trusted wedding services and curated offers from our partners.",
            disclaimer: "All listings are provided by partners. Prices and availability may vary."
        },
        search: {
            title: "Search & Filter",
            titleMobile: "Search & Filter",
            description: "Find a specific service — for example 'photographer', 'dress', or 'venue'.",
            descriptionMobile: "Find specific services",
            label: "Search",
            placeholder: "Search partner products…",
            refresh: "Refresh",
            categoryLabel: "Category",
            allCategories: "All categories"
        },
        products: {
            title: "Partner Products",
            loading: "Loading products...",
            noResults: "No products found",
            noResultsSearch: "Try searching with different keywords",
            noResultsEmpty: "No products have been posted yet",
            showing: "Showing {{count}} of {{total}} products",
            showingOf: "Showing {{current}} of {{total}} product",
            searchFor: 'for "{{term}}"',
            viewProduct: "View Product",
            startingAt: "Starting at",
            updated: "Updated",
            status: {
                active: "Active",
                inactive: "Inactive"
            },
            notAvailable: "Product is currently unavailable"
        },
        pagination: {
            previous: "Previous",
            next: "Next"
        },
        error: {
            title: "Error",
            retry: "Try Again"
        }
    })
}, 522108, e => {
    e.v({
        title: "Referral Program",
        subtitle: "Share meWedding with friends and earn commission when they start using it.",
        description: "Track your earnings, copy your referral link, and see who joined through you.",
        tabs: {
            dashboard: "Dashboard",
            bankInfo: "Bank Info",
            commissionHistory: "Commission History",
            referredUsers: "Referred Users",
            withdrawals: "Withdrawals"
        },
        balances: {
            available: "Available to Withdraw",
            availableDescription: "Money you can request now",
            pending: "Pending / On Hold",
            pendingDescription: "Funds waiting for approval",
            totalEarned: "Total Earned",
            totalEarnedDescription: "All commission you've generated",
            paidOut: "Total Paid Out",
            paidOutDescription: "Total we've already sent you"
        },
        links: {
            title: "Your Referral Link",
            description: "Share this link with friends. When they sign up and start using meWedding, you earn commission.",
            descriptionMobile: "Share this with friends to earn commission",
            linkLabel: "Referral Link",
            codeLabel: "Referral Code",
            copy: "Copy",
            tipTitle: "Tip:",
            tipDescription: " Send your link or share your code. When they upgrade, you earn."
        },
        withdrawal: {
            button: "Withdraw",
            title: "Request Withdrawal",
            availableBalance: "Available balance:",
            placeholder: "Enter amount to withdraw (VND)",
            cancel: "Cancel",
            submit: "Submit Request",
            processing: "Processing..."
        },
        errors: {
            title: "Error",
            balanceError: "Unable to get balance information",
            validationError: "Validation error"
        },
        success: {
            title: "Success",
            withdrawalSuccess: "Withdrawal request submitted successfully"
        },
        history: {
            withdrawals: {
                title: "Recent Withdrawals",
                subtitle: "Your latest payout requests",
                empty: "No withdrawals yet",
                emptyDescription: "When you request a payout, it will show up here."
            },
            referrals: {
                title: "People You Referred",
                subtitle: "See who signed up using your link",
                empty: "No referrals yet",
                emptyDescription: "When someone joins using your link, they'll appear here."
            },
            noResults: "No results found.",
            columns: {
                index: "#",
                time: "Time",
                amount: "Amount",
                status: "Status",
                approvedDate: "Approved Date",
                email: "Email",
                totalSpent: "Total Spent",
                commission: "Commission"
            }
        },
        bankAccount: {
            title: "Bank Account Management",
            subtitle: {
                hasAccount: "View and update your bank account information",
                hasAccountMobile: "View and update account info",
                noAccount: "Add a bank account to receive commission payments",
                noAccountMobile: "Add account to receive commissions"
            },
            addButton: "Add Account",
            updateButton: "Update Account",
            noAccount: "No bank account yet",
            noAccountDescription: "Add a bank account to be able to withdraw commission",
            default: "Default",
            fields: {
                bankCode: "Bank Code",
                bankName: "Bank Name",
                accountNumber: "Account Number",
                accountName: "Account Name",
                branch: "Branch (optional)"
            },
            placeholders: {
                bankCode: "E.g: VCB, TCB, ACB",
                bankName: "E.g: Vietcombank, Techcombank",
                accountNumber: "Enter account number",
                accountName: "Enter account name",
                branch: "Enter branch"
            },
            modalTitle: {
                add: "Add Bank Account",
                update: "Update Bank Account"
            },
            cancel: "Cancel",
            add: "Add",
            update: "Update",
            processing: "Processing..."
        },
        messages: {
            copySuccess: "Copied successfully",
            copyError: "Failed to copy link",
            withdrawalSuccess: "Withdrawal request submitted",
            bankAccountSuccess: "Bank account updated",
            balanceError: "Failed to get balance information",
            exportInfo: "Export data feature will be implemented soon"
        },
        commissionHistory: {
            stats: {
                totalCommissions: "Total Commissions",
                totalCommissionsDesc: "All commission events",
                totalEarned: "Total Amount Earned",
                totalEarnedDesc: "Gross commission value so far",
                paidOut: "Paid Out",
                paidOutDesc: "Commissions you've already received",
                pending: "Pending",
                pendingDesc: "Waiting for approval or payout"
            },
            filters: {
                title: "Filters & Search",
                subtitle: "Search by order ID, buyer, or status.",
                search: "Search",
                searchPlaceholder: "Search by order ID or buyer…",
                status: "Status",
                statusAll: "All",
                statusPending: "Pending",
                statusAvailable: "Available",
                statusLocked: "Locked",
                statusPaid: "Paid",
                statusCanceled: "Canceled",
                refresh: "Refresh",
                export: "Export Data"
            },
            table: {
                title: "Commission Records",
                subtitle: "Each record shows how a commission was earned, its amount, and whether it's been paid.",
                subtitleMobile: "Track all your commission earnings",
                empty: "No commission records yet",
                emptyMobile: "No commissions yet",
                emptyDescription: "When your referrals start generating payments, they'll appear here.",
                emptyDescriptionMobile: "Start referring users to earn commissions",
                columns: {
                    id: "ID",
                    amount: "Amount",
                    status: "Status",
                    orderId: "Order ID",
                    buyerId: "Buyer ID",
                    date: "Date"
                }
            },
            pagination: {
                previous: "Previous",
                next: "Next"
            }
        },
        referredUsers: {
            stats: {
                totalReferred: "Total Referred",
                totalReferredDesc: "People who joined with your link",
                activeUsers: "Active Users",
                activeUsersDesc: "Currently using meWedding",
                totalSpend: "Total Spend",
                totalSpendDesc: "How much your referrals have spent",
                totalCommission: "Total Commission",
                totalCommissionDesc: "Commission earned from referrals"
            },
            filters: {
                title: "Filters & Search",
                titleMobile: "Search & Filter",
                subtitle: "Search by email to quickly find someone you referred.",
                subtitleMobile: "Find referred users quickly",
                search: "Search",
                searchPlaceholder: "Search by email…",
                status: "Status",
                statusAll: "All",
                statusActive: "Active",
                statusInactive: "Inactive",
                refresh: "Refresh",
                export: "Export Data"
            },
            table: {
                title: "Referred Users",
                subtitle: "Each person below registered using your referral link or code.",
                subtitleMobile: "People who registered using your referral link",
                empty: "No referred users yet",
                emptySearch: "No users found matching your search.",
                emptyDescription: "When someone signs up using your link, they will appear here — and you'll start earning commission.",
                columns: {
                    index: "#",
                    user: "User",
                    registeredDate: "Registered Date",
                    firstCommissionDate: "First Commission Date",
                    totalSpent: "Total Spent",
                    commission: "Commission Earned",
                    status: "Status"
                },
                statusActive: "Active",
                statusInactive: "Inactive"
            }
        },
        withdrawalManagement: {
            info: {
                availableToWithdraw: "Available to Withdraw",
                minimumToRequest: "Minimum to request",
                requestButton: "Request Withdrawal",
                helperText: "You need at least 1,000 VND available before you can request a payout.",
                helperTextDesktop: "You can only request a payout when your available balance is at least this amount.",
                loading: "Loading..."
            },
            filters: {
                title: "Filters & Search",
                titleMobile: "Search & Filter",
                subtitle: "Search by email to quickly find someone you referred.",
                subtitleMobile: "Find referred users quickly",
                search: "Search",
                searchPlaceholder: "Search by email…",
                status: "Status",
                statusAll: "All",
                statusPending: "Pending",
                statusApproved: "Approved",
                statusPaid: "Paid",
                statusRejected: "Rejected",
                refresh: "Refresh",
                export: "Export Data"
            },
            table: {
                title: "Withdrawal Requests",
                subtitle: "See your payout requests and their status",
                empty: "No withdrawal requests yet",
                emptyDescription: "When you ask for a payout, it will appear here.",
                emptySearch: "No withdrawal requests found matching your search.",
                columns: {
                    id: "ID",
                    amount: "Amount",
                    status: "Status",
                    bankInfo: "Bank Info",
                    requestDate: "Request Date",
                    approvedDate: "Approved Date",
                    notes: "Notes"
                }
            },
            pagination: {
                previous: "Previous",
                next: "Next"
            }
        }
    })
}, 862968, e => {
    e.v({
        title: "Invitation Settings",
        description: "Choose your invitation, manage its cover image, visibility, public URL, and guest-facing content.",
        descriptionMobile: "Manage your invitation settings",
        tabs: {
            general: "General",
            guestView: "Guest View"
        },
        selectPage: {
            title: "Choose Invitation",
            label: "Invitation/Page",
            placeholder: "Select a page to configure",
            helper: "Select the invitation page to configure."
        },
        seoImage: {
            title: "Cover Image & Preview",
            changeImage: "Change Image",
            dragDrop: "Drag & drop your image here",
            uploadButton: "Upload Image",
            previewLaptop: "Desktop Preview",
            previewMobile: "Mobile Preview",
            note: "Recommended 1200×630px (JPG/PNG)"
        },
        publication: {
            title: "Visibility",
            publishTitle: "Public Invitation",
            publishDescription: "Anyone with the link can view your invitation",
            publicTitle: "Show on meWedding Marketplace",
            publicDescription: "Display your invitation in our public gallery"
        },
        domain: {
            title: "Website Address",
            currentUrl: "Current URL",
            live: "Live",
            currentDomain: "Current address:",
            currentlyUsing: "In use",
            defaultSubdomain: "Default Subdomain",
            defaultSubdomainHelper: "This will be your public wedding invitation URL",
            defaultDomain: "Default domain",
            defaultDomainRequired: "Please enter a default domain",
            defaultDomainPattern: "Only lowercase letters, numbers, and hyphens allowed",
            defaultDomainMinLength: "Domain must be at least 3 characters",
            inputGuide: {
                title: "Default subdomain rules",
                line1: "Use 3-63 characters with lowercase letters (a-z), numbers (0-9), and hyphen (-) only.",
                line2: "Do not use uppercase letters, spaces, accents, or special characters.",
                line3: "Valid example: xuan-tu-ngoc-anh"
            },
            validation: {
                required: "Please enter a default subdomain.",
                tooShort: "Domain must be at least 3 characters.",
                tooLong: "Domain must not exceed 63 characters.",
                containsSpace: "Domain must not contain spaces.",
                containsUnicode: "Domain must not contain accents or special characters.",
                containsUppercase: "Domain must use lowercase letters only (a-z).",
                startsWithHyphen: "Domain must not start with a hyphen (-).",
                endsWithHyphen: "Domain must not end with a hyphen (-).",
                invalidChars: "Domain can only use lowercase letters, numbers, and hyphens (-).",
                custom: {
                    required: "Please enter a custom domain.",
                    hasProtocol: "Do not include http:// or https://. Example: yourdomain.com",
                    containsSpace: "Custom domain must not contain spaces.",
                    containsUnicode: "Custom domain must not contain accents or special characters.",
                    startsWithWww: "Do not include the www. prefix (example: yourdomain.com).",
                    missingDot: "Custom domain must be a full domain name (e.g., yourdomain.com).",
                    tooLong: "Custom domain is too long. Maximum length is 253 characters.",
                    invalidFormat: "Invalid custom domain format. Valid example: yourdomain.com"
                }
            },
            checkResult: {
                available: 'Domain "{{domain}}" is available.',
                unavailable: 'Domain "{{domain}}" is already in use.',
                reserved: 'Domain "{{domain}}" is unavailable because it is reserved.',
                invalid: "Domain format is invalid. Please review and try again.",
                genericError: "Could not check domain right now. Please try again."
            },
            domainError: "Domain check error",
            domainNote: 'Website address must be between 3 and 63 characters (a-z 0-9), can use hyphen "-".',
            customDomainToggle: "Use a Custom Domain",
            customDomainDescription: "Connect your own domain name",
            customDomain: "Custom Domain",
            customDomainRequired: "Please enter a custom domain",
            customDomainPattern: "Invalid domain format. Only use letters, numbers, hyphens, and dots",
            customDomainNote: "Enter your full domain name (e.g., mydomain.com)",
            domainUnavailable: "Domain unavailable",
            stillChecking: "Checking domain availability",
            pleaseWait: "Please wait for domain check to complete",
            checkingAvailability: "Checking availability...",
            instructions: {
                title: "Domain Usage Guide",
                line1: "Do not include www. in the domain (Example: enter abc.com, not www.abc.com). After setting up your custom domain in the system, go to your domain management system and set up 2 records as follows:",
                line2: "Your current domain is",
                line3: "but you can add a custom domain to make your website more professional, leave a stronger impression, and stand out more to others."
            }
        },
        save: "SAVE INFORMATION",
        selectPageError: "Please select a page to update",
        updateSuccess: "Update successful",
        updateError: "Update error",
        publishSuccess: "Invitation published",
        publishSuccessDescription: "Your invitation has been published and can be accessed via link.",
        publishError: "Publish error",
        publishErrorDescription: "Unable to publish invitation.",
        unpublishSuccess: "Invitation hidden",
        unpublishSuccessDescription: "Your invitation has been hidden and cannot be accessed via link.",
        unpublishError: "Hide error",
        unpublishErrorDescription: "Unable to hide invitation.",
        tierUpgradeRequired: "Upgrade Required",
        tierUpgradeDescription: "You need to upgrade to a higher tier or equal to this template to publish",
        tierUpgradeFeatureName: "Upgrade to Publish",
        guestView: {
            modalTitle: "Guest SEO Settings",
            titleForGuest: "Title for Guest",
            titlePlaceholder: "e.g., Welcome, {guestName}!",
            titleHelper: "Shown in search and on share cards when guests use a private link.",
            descriptionForGuest: "Description for Guest",
            descriptionPlaceholder: "Dear {guestName}, we're honored to invite you to celebrate our special day...",
            descriptionHelper: "Appears under the title on share cards. Keep it concise.",
            availableVariables: "Available Variables",
            fullName: "Full name",
            email: "Email",
            phoneNumber: "Phone number",
            viewExamples: "View examples",
            infoNote: "If left empty, the page default title and description will be used.",
            beforeRawText: "Before (raw text)",
            title: "Title:",
            description: "Description:",
            renderedExample: "Rendered Example",
            useSampleData: "Use sample data",
            titleShown: "Title shown:",
            descriptionShown: "Description shown:",
            sharePreview: "Share Preview",
            sharePreviewDescription: "This is how your invitation looks when shared or when a guest opens the private link.",
            sharePreviewDescriptionMobile: "How your invitation looks when shared or opened via private link.",
            desktopShareCard: "Desktop Share Card",
            mobileShareCard: "Mobile Share Card",
            shareCardPreview: "Share Card Preview",
            shareInfoNote: "If the title/description are blank, default page values will be used.",
            saveButton: "Save Settings",
            saveSuccess: "Guest settings saved successfully!",
            saveError: "Error saving guest settings",
            selectPageError: "Please select a wedding invitation page",
            titleRequired: "Please enter a title for guest",
            descriptionRequired: "Please enter a description for guest",
            variables: {
                guestNameDesc: "Guest's full name",
                guestNameExample: "John Doe",
                guestEmailDesc: "Guest's email address",
                guestEmailExample: "johndoe@email.com",
                guestPhoneDesc: "Guest's phone number",
                guestPhoneExample: "0123456789"
            },
            modal: {
                title: "Personalization Variables Guide",
                howItWorks: "How it works",
                howItWorksDesc: "When a guest accesses the page via a private link (containing guestId), the system will automatically replace the variables with the guest's actual information.",
                availableVariablesTitle: "Available variables:",
                variable: "Variable",
                examplePrefix: "Example:",
                usageExample: "📝 Usage example:",
                exampleTitle: "Title:",
                exampleTitleValue: "Wedding invitation for {guestName}",
                exampleDescription: "Description:",
                exampleDescriptionValue: "Hello {guestName}! We are honored to invite you to our wedding. Please confirm your attendance via email {guestEmail}.",
                importantNote: "Important notes",
                note1: "• Variables only work when guests access via a link containing guestId",
                note2: "• If guest information is not available, variables will display default values",
                note3: "• Variables are case-sensitive"
            }
        }
    })
}, 864454, e => {
    e.v({
        tier: {
            vip: "VIP",
            pro: "PRO",
            free: "FREE"
        },
        preview: "Preview",
        viewCard: "View Card",
        use: "Use",
        chooseCard: "Choose Card",
        useTemplate: "Use template",
        quickPreview: "Quick Preview",
        viewVipBundles: "View VIP bundles",
        defaultDescription: "Traditional • Portrait",
        defaultDesigner: "Design by Nature Studio · Landscape · Photo + Music",
        tierComparison: {
            basic: "View Basic plan",
            pro: "View Pro plan",
            vip: "View VIP plan"
        },
        search: {
            modalTitle: "Select Template",
            placeholder: "Search templates...",
            filterAll: "All",
            filterFree: "Free",
            filterPro: "Pro",
            filterVip: "VIP",
            tierInfo: "Showing templates for your {{tier}} tier",
            loading: "Loading templates...",
            error: "Error loading templates",
            showingResults: "Showing {{count}} templates",
            withKeyword: ' with keyword "{{keyword}}"',
            noImage: "No image",
            noResults: "No templates found",
            empty: "No templates available",
            allLoaded: "All templates loaded",
            select: "Select this template"
        }
    })
}, 383971, e => {
    e.v({
        banner: {
            badge: "Wedding 5.0",
            title: "Wedding Invitation Template Library",
            description: "Choose the template that fits you best to make your wedding special and unforgettable.",
            titleMobile: "Wedding Invitation Templates",
            descriptionMobile: "Choose the perfect template for your special day"
        },
        search: {
            placeholder: "Search by style, color, name, code…",
            placeholderMobile: "Search templates..."
        },
        sort: {
            label: "Sort",
            newest: "Newest",
            oldest: "Oldest",
            name: "Name"
        },
        filter: {
            allTags: "All Tags",
            all: "All"
        },
        tabs: {
            all: "All",
            free: "Free",
            pro: "Pro",
            vip: "VIP"
        },
        results: {
            showing: "Showing",
            of: "of",
            templates: "templates",
            found: "templates found"
        },
        messages: {
            errorLoading: "Unable to load templates. Please try again later.",
            noTemplates: "No templates found"
        }
    })
}, 916235, e => {
    e.v({
        banner: {
            badge: "meInvite",
            title: "Invitation Template Library",
            description: "Choose the perfect template to create invitations for your events.",
            titleMobile: "Invitation Templates",
            descriptionMobile: "Choose the perfect template for your event"
        },
        search: {
            placeholder: "Search by style, color, name, code…",
            placeholderMobile: "Search templates..."
        },
        sort: {
            label: "Sort",
            newest: "Newest",
            oldest: "Oldest",
            name: "Name"
        },
        filter: {
            allTags: "All Tags",
            all: "All",
            allCategories: "All Categories"
        },
        tabs: {
            all: "All",
            free: "Free",
            pro: "Pro",
            vip: "VIP"
        },
        results: {
            showing: "Showing",
            of: "of",
            templates: "templates",
            found: "templates found"
        },
        messages: {
            errorLoading: "Unable to load templates. Please try again later.",
            noTemplates: "No templates found"
        }
    })
}, 497496, e => {
    e.v(JSON.parse('{"request":{"title":"Too busy? We\'ll design it for you ❤️","description":"If you\'re overwhelmed or short on time, our team can create and style your invitation for you.","button":"Request Design Help"},"guest":{"title":"Guest Management","description":"Keep track of who you\'re inviting, send email invitations, and control what guests see when they open their private link.","subtitle":"Stay organized, collect RSVPs and gifts, and make every guest feel special.","addGuest":"Add Guest","add":"Add","batchAddGuests":"Add Multiple Guests","unlockEmailReminders":"Unlock Email Reminders","vipOnlyFeatureTitle":"Notice","vipOnlyFeatureDesc":"The \\"Personalized Guest Names\\" feature is exclusive to VIP plans. With FREE/PRO plans, you can only add 3 guests to try it out. You can purchase this feature separately or upgrade your plan to access all features.","unlockFeature":"Unlock Feature","personalizedInvitesFeatureName":"Personalized Guest Names"},"guestCard":{"title":"Your Guests & RSVPs","description":"Track attendance, gifts, and invite status for every guest."},"guestStats":{"totalGuests":"Total Guests","totalGuestsDesc":"All guests in your list","invitesSent":"Invites Sent","invitesSentDesc":"Invitations delivered","willAttend":"Will Attend","willAttendDesc":"Confirmed attendance","totalAttendees":"Total Attendees","totalAttendeesDesc":"Total number of attendees","noResponse":"No Response","noResponseDesc":"Invited but not responded","notAttending":"Not Attending","notAttendingDesc":"Confirmed not attending","pending":"Not Invited","pendingDesc":"Not sent invitation yet","loading":"Loading statistics..."},"moneyStats":{"cashGifts":"Cash Gifts","cashGiftsDesc":"From {{count}} guest","cashGiftsDesc_other":"From {{count}} guests","goldGifts":"Gold Gifts","goldGiftsDesc":"{{count}} guest","goldGiftsDesc_other":"{{count}} guests","guestsWithGifts":"Guests with Gifts","guestsWithGiftsDesc":"Guests who sent a gift","guests":"guests"},"emailManagement":{"title":"Email Invitations","description1":"Schedule and send email invitations to your","description2":"guests, and track delivery.","tipsTitle":"Tips for email invites","tip1Line1":"• Send invites ~5 minutes before your","tip1Line2":"real event time","tip2Line1":"• Use your invitation link so guests","tip2Line2":"can RSVP","tip3Line1":"• Check email status in the schedule","tip3Line2":"list below","scheduleButton":"Schedule Email Send","scheduledTitle":"Scheduled Emails","noEmails":"No emails scheduled yet","noEmailsDesc":"You can create an email invite and we\'ll send it to all guests who have an email.","loading":"Loading scheduled emails...","listTitle":"📧 Scheduled Emails ({{count}})","refresh":"Refresh","details":"Details","cancel":"Cancel","delete":"Delete","sendTime":"Send Time:","type":"Type:","typeIndividual":"Specific Guests","typeAll":"All Guests","page":"Invitation Page:","pageId":"Page ID {{id}}","card":"(Card)","regular":"(Regular)","guestCount":"Guest Count:","guestsSelected":"{{count}} guests selected","sent":"Sent:","detailModalTitle":"Scheduled Email Details","createdAt":"Created At:","scheduledAt":"Scheduled At:","selectedGuests":"Selected Guests:","selectedGuestsCount":"{{count}} guests","sendProgress":"Send Progress:","failures":"Failures:","failureCount":"{{count}} emails failed","customMessage":"Custom Message:","error":"Error:","close":"Close","subject":"Subject:","status":"Status:","cancelConfirmTitle":"Confirm Cancel Email","cancelConfirmMessage":"Are you sure you want to cancel this email?","cancelConfirmButton":"Cancel Email","cancelWarning":"The email will not be sent and cannot be recovered after cancellation.","deleteConfirmTitle":"Confirm Delete Email","deleteConfirmMessage":"Are you sure you want to delete this email from history?","deleteConfirmButton":"Delete","deleteWarning":"This action cannot be undone.","previousPage":"Previous","nextPage":"Next"},"emailScheduling":{"modalTitle":"Schedule Email Invitation","defaultSubject":"Invitation - Hope to see you!","defaultMessage":"We are honored to invite you to our event. We hope to see you on our special day!","pageSelection":"Invitation *","selectPage":"Select invitation page...","regularPage":"Detailed invitation with full information, RSVP form","cardPage":"Simple invitation, Save the Date, basic information","noPages":"⚠️ You don\'t have any invitation pages yet. Please create an invitation page before sending emails.","recipientSelection":"Email Recipients","selectRecipients":"Select who will receive the email invitation:","allGuests":"All guests with email","byGroup":"Send by guest group","selectGroup":"Select guest group...","guestsCount":"{{count}} guests","specificGuests":"Selected guests (customize later)","selectedGuestsTitle":"Selected Guests","selectedGuestsCount":"Selected {{count}} guests to send email","scheduledTime":"Send Time *","scheduleHelper":"Choose when to send the email (minimum 5 minutes from now)","emailSubject":"Email Subject *","subjectPlaceholder":"Enter email subject...","templatesAvailable":"Available templates:","customMessage":"Custom Message","messagePlaceholder":"Enter custom message (optional)...","summaryTitle":"📋 Email Schedule Summary","summaryTime":"Time:","summarySubject":"Subject:","summaryPage":"Invitation Page:","summaryRecipients":"Recipients:","notSelected":"Not selected","notEntered":"Not entered","card":"(Card)","regular":"(Regular)","unknown":"Unknown","selectedGuests":"{{count}} selected guests","groupRecipients":"Group \\"{{name}}\\" ({{count}} guests)","allGuestsWithEmail":"All guests with email from selected page","autoSendNote":"💡 Email will be sent automatically at the scheduled time","cancel":"Cancel","schedule":"Schedule Send","confirmTitle":"Confirm Email Schedule","confirmLabel":"Confirm Schedule","confirmMessage":"Are you sure you want to schedule this email with the following information?","confirmSendTime":"Send Time:","confirmWarning":"⚠️ Email will be sent automatically to selected guests at the scheduled time.","errorSelectPage":"Please select an invitation page to send email","errorSelectTime":"Please select send time","errorFutureTime":"Send time must be in the future","errorEnterSubject":"Please enter email subject","errorScheduling":"An error occurred while scheduling email"},"guestSelector":{"title":"Select Specific Guests","noGuestSelected":"Click to select guests","guestsSelected":"{{count}} guests selected","hint":"Click to select specific guests who will receive the email","modalTitle":"Select Email Recipients","searchPlaceholder":"Search by name, email or group...","loading":"Loading...","guestsWithEmail":"{{count}} guests with email","selectAll":"Select All","deselectAll":"Deselect All","loadingGuests":"Loading guest list...","noGuestsWithEmail":"No guests have email addresses","noMatchingGuests":"No matching guests found","selectedCount":"{{count}} guests selected to receive email","confirm":"Confirm ({{count}})"},"guestList":{"addGuest":"Add Guest","add":"Add","searchPlaceholder":"Search guests...","itemsPerPage":"Show","itemsPerPageSuffix":"per page","allGroups":"All Groups","allSides":"All Sides","importFromFile":"Import from file","import":"Import","export":"Export","exportList":"Export list","selectMultiple":"Select multiple","select":"Select","cancel":"Cancel","createGroup":"Create group","guestSettings":"SEO Settings","settings":"Settings","noGroups":"No groups yet","editGroups":"Edit groups","deleteGroup":"Delete group","selectAll":"Select all ({{count}} guests)","selectedGuests":"Selected {{count}} guests","assignToGroup":"Assign to group...","removeFromGroup":"Remove from group","unassigned":"Not assigned to group","changeGroup":"Change group...","emptyState":"No guests found","guestInfo":"Guest Info","fullName":"Full Name","contact":"Contact","belongsTo":"Belongs To","group":"Group","event":"Event","numberOfPeople":"Number of People","gifts":"Gifts","extraInfo":"Extra Info","eventAndPeople":"Event & People","status":"Status","actions":"Actions","edit":"Edit","delete":"Delete","send":"Send Invitation","sendLink":"Send link","sendInvitation":"Send invitation","notSelected":"Not selected","invitedLabel":"Invited:","invited":"Invited","notInvited":"Not invited","attendingLabel":"Attending:","willAttend":"Will attend","notAttending":"Not attending","noResponseYet":"No response yet","respondedLabel":"Response:","respondedAt":"At: {{time}}","hasResponded":"Responded","notResponded":"No response","unlockGroupAssign":"Unlock","viewExtraInfo":"View extra information","editGuest":"Edit guest","deleteGuest":"Delete guest","expandDetails":"View details","collapseDetails":"Collapse","deleteSelected":"Delete selected","filters":{"all":"All","invitationFilter":"Invitation","allInvitation":"All","hasInvited":"Invited","notInvitedYet":"Not invited","attendanceFilter":"Attendance","allAttendance":"All","willCome":"Will attend","willNotCome":"Not attending","responseFilter":"Response","allResponse":"All","hasResponded":"Responded","notResponded":"No response","giftFilter":"Gift","allGifts":"All gifts","hasCash":"Cash gift","hasGold":"Gold","hasNoGift":"No gift yet","statusFilter":"Status","allStatus":"All status"},"batchDeleteModal":{"title":"Delete Multiple Guests","message":"Are you sure you want to delete {{count}} selected guests? This action cannot be undone."},"addGuestModal":{"title":"Add New Guest","fullName":"Full Name","email":"Email","phone":"Phone Number","belongsTo":"Belongs To","belongsToPlaceholder":"Select guest side","createNewSide":"+ Create new side","enterNewSide":"Enter new side name","numberOfPeople":"Number of People","event":"Event","eventPlaceholder":"Select event...","avatar":"Avatar","uploadAvatar":"Upload avatar","gifts":"Gifts","address":"Address","addressPlaceholder":"123 ABC Street, District 1, HCMC","addressHelper":"Maximum 500 characters (optional)","additionalNote":"Additional Notes","additionalNotePlaceholder":"E.g.: VIP guest, vegetarian, seafood allergy...","additionalNoteHelper":"Notes about special requirements, guest classification... (optional)","cancel":"Cancel","create":"Add Guest","creating":"Adding...","removeAvatar":"Delete Image","unlockMoreFields":"Unlock more fields","unlockMoreFieldsHint":"Upgrade to enter number of people, event, avatar, gifts, address and notes."},"editGuestModal":{"title":"Edit Guest","update":"Update","updating":"Updating...","cancel":"Cancel"},"deleteModal":{"title":"Confirm Delete","message":"Are you sure you want to delete guest {{name}}?","confirm":"Delete","cancel":"Cancel"},"groupModal":{"createTitle":"Create New Group","editTitle":"Edit Group","name":"Group Name","namePlaceholder":"Enter group name...","description":"Description","descriptionPlaceholder":"Group description (optional)...","color":"Color","cancel":"Cancel","create":"Create Group","update":"Update"},"pageSelectModal":{"title":"Select Page","noDescription":"No description","send":"Send Invitation","sending":"Sending..."},"toasts":{"groupNameRequired":"Please enter group name","groupCreated":"Group created successfully","groupUpdated":"Group updated successfully","groupDeleted":"Group deleted successfully","groupHasGuests":"This group has guests. Please remove guests from the group first.","selectGuests":"Please select guests","guestsAssigned":"Assigned {{count}} guests to group","guestsRemoved":"Removed {{count}} guests from group","guestAssigned":"Guest assigned to group","guestRemoved":"Guest removed from group","errorOccurred":"An error occurred","cannotLoadGuests":"Cannot load guest list","guestDeleted":"Guest deleted","guestCreated":"Guest added successfully","guestUpdated":"Guest information updated successfully","fullNameRequired":"Please enter full name","invitationSent":"Invitation sent successfully","pageRequired":"Please select an invitation page","importSuccess":"Guests imported successfully!","batchDeleteSuccess":"Successfully deleted {{count}} guests","batchDeletePartial":"Deleted {{success}} guests, {{failed}} guests could not be deleted"},"extraInfoModal":{"title":"Extra Information","noAnswer":"No answer yet","textType":"Text","choiceType":"Choice","noInfo":"No extra information"},"sendInvitationModal":{"title":"Send Invitation","selectPage":"Select invitation page to send to guest:","generatingLink":"Generating invitation link...","selectPagePlaceholder":"Select invitation page","selectedPage":"Selected page:","domain":"Domain:","invitationLinkFor":"Invitation link for guest:","linkLabel":"Invitation link:","copied":"Copied","copyError":"Failed to copy link","copyErrorDescription":"Please try again when this tab is active","share":"Share","generateQR":"Generate QR","note":"Note:","autoRecognition":"Guest {{name}} will be automatically recognized when accessing this link.","qrTitle":"QR Code for invitation","qrDescription":"Scan QR code to access invitation","shareTitle":"Invitation","shareText":"You are cordially invited {{name}}","shareTextDefault":"You are cordially invited","errorTitle":"Link Creation Error","errorCannotCreate":"Cannot create invitation link. Please try again later.","invalidGuestId":"Invalid invitation link. Guest ID is not in the correct format or does not exist.","linkLimitTitle":"Limit Reached","unlockUnlimitedLinks":"Unlock Unlimited Links","unlockFeature":"Unlock Feature","unlock":"Unlock","copyLink":"Copy link","copyAndClearCache":"Copy + Refresh cache","clearCacheSuccess":"Cache refresh request sent","clearCacheError":"Cannot clear cache"},"batchAddModal":{"title":"Add Multiple Guests at Once","instructions":{"title":"Instructions:","line1":"Enter one guest name per line","line2":"Maximum 100 guests per batch","line3":"Common settings will be applied to all guests"},"guestNames":"Guest Names List","guests":"guests","placeholder":"John Doe\\nJane Smith\\nBob Johnson\\n...","commonSettings":"Common Settings (apply to all)","group":"Group","noGroup":"No group","moneyType":"Gift Type","create":"Add","close":"Close","errors":{"minGuests":"Please enter at least one guest name","maxGuests":"Please enter maximum 100 guests per batch","createFailed":"An error occurred while adding guests"},"result":{"title":"Batch Add Result:","success":"Success","failed":"Failed"},"unlockConfigHint":"Upgrade to configure event, group and guest side."},"batchImportModal":{"title":"Import Guests from File","step1":"Step 1: Select CSV/Excel File","step2":"Step 2: Common Configuration","step3":"Step 3: Preview Data ({{count}} guests)","uploadPrompt":"Click to select CSV/Excel file","uploadDescription":"Supports CSV/Excel files with 3 columns: Name, Email, Phone (max 5MB)","downloadTemplate":"Download Template","guestOfLabel":"Guest Side","guestOfPlaceholder":"Select side (optional)","eventLabel":"Event","eventPlaceholder":"Select event (optional)","groupLabel":"Guest Group","groupPlaceholder":"Select group (optional)","moneyTypeLabel":"Currency Type","tableHeaders":{"no":"No.","name":"Guest Name","email":"Email","phone":"Phone Number","status":"Status","actions":"Actions"},"statusOk":"OK","statusErrors":"{{count}} errors","errors":{"unsupportedFormat":"Unsupported file format. Please select CSV or Excel file.","fileTooLarge":"File too large. Please select a file smaller than 5MB.","parseError":"File parsing error: {{errors}}","noData":"No valid guest data found in file.","tooManyGuests":"File contains too many guests (max 100). Please split the file.","cannotRead":"Cannot read file. Please check file format and try again.","minGuests":"Please add at least one guest","invalidData":"Some guests have invalid data. Please check and fix.","importFailed":"An error occurred while importing guests","title":"Error!"},"processing":{"validating":"Validating data...","sending":"Sending data...","complete":"Complete!"},"result":{"title":"Import Complete!","success":"Success: {{count}} guests","failed":"Failed: {{count}} guests","errorDetails":"Error Details:","guestError":"Guest #{{index}}: {{name}}"},"buttons":{"close":"Close","cancel":"Cancel","import":"Import {{count}} guests","importing":"Processing..."},"unlockConfigHint":"Upgrade to configure guest side, event and group."},"eventSelector":{"placeholder":"Select event...","customPlaceholder":"Enter event name...","customOption":"+ Custom...","events":{"groomReception":"Groom\'s Wedding Reception","weddingCeremony":"Wedding Ceremony","newlyWedCeremony":"Newlywed Ceremony","brideReception":"Bride\'s Wedding Reception","brideGoingCeremony":"Bride\'s Departure Ceremony","weddingParty":"Wedding Party","wedding":"Wedding","brideProcession":"Bride Procession","engagement":"Engagement Ceremony","matrimony":"Matrimony Ceremony"}},"exportModal":{"title":"Export Guest List","selectFormat":"Select Export Format","csvFormat":"CSV (Excel)","csvDescription":"Download CSV file to open with Excel or Google Sheets","includeInvitationLinkLabel":"Export with invitation links","invitationLinkPageLabel":"Page for invitation link generation","invitationLinkPageHint":"This does not affect guest filter pageId. It is only used when Export with invitation links is enabled.","includeInvitationLinkEnabledHint":"CSV will include the Invitation link column. A selected Page is required.","includeInvitationLinkDisabledHint":"CSV will be exported as usual without the Invitation link column.","pageIdRequiredForInvitationLink":"Please select a page for invitation link generation before exporting with invitation links.","googleSheetsFormat":"Google Sheets","googleSheetsDescription":"Create new Google Sheets and transfer ownership to you","ownerEmail":"Your Google Email","emailPlaceholder":"example@gmail.com","emailHint":"You will receive an email notification about spreadsheet ownership","cancel":"Cancel","export":"Export Data","emailRequired":"Please enter email to receive Google Sheets","invalidEmail":"Invalid email","csvSuccess":"CSV file downloaded successfully","googleSheetsSuccess":"Google Sheets created successfully","exportError":"An error occurred while exporting data"}},"wish":{"title":"Guest Messages","description":"Read the wishes from your guests, reply to them, and decide what appears publicly on your wedding page.","subtitle":"Show the love you\'re receiving — and keep private anything that\'s just for you.","premiumTitle":"Wish Management is a Premium feature","premiumDescription":"Upgrade your plan to use the wish management feature.","unlockButton":"Unlock Feature","featureName":"Wish Management"},"photobook":{"premiumTitle":"Photobook is a Premium feature","premiumDescription":"Upgrade your plan to use the photobook feature."},"wishStats":{"loadingStats":"Loading statistics...","total":{"label":"Total Messages","labelMobile":"Total","description":"All wishes you\'ve","description2":"received"},"replied":{"label":"Replied","description":"Messages you have","description2":"responded to"},"notReplied":{"label":"Not Replied","labelMobile":"Pending","description":"Messages awaiting your","description2":"reply"},"public":{"label":"Public","description":"Visible on your event","description2":"page"},"private":{"label":"Private","description":"Only you can see this"},"replyRate":{"label":"Reply Rate","description":"% replied"}},"wishFilter":{"searchPlaceholder":"Search messages...","allPages":"All Pages","allVisibility":"All Visibility","allStatus":"All Status","replied":"Replied","pending":"Pending","public":"Public","private":"Private"},"wishList":{"showPublicly":"Show publicly:","publicBadge":"Public","privateBadge":"Private","awaitingReply":"Awaiting reply","replied":"Replied","reply":"Reply","editReply":"Edit reply","deleteReply":"Delete reply","delete":"Delete","emptyState":"No wishes found","emptyStateDesc":"No wishes match your filters","loading":"Loading...","previousPage":"Previous","nextPage":"Next","errorLoadWishes":"Cannot load wish list","successTogglePublic":"Wish has been changed to public","successTogglePrivate":"Wish has been changed to private","errorToggleVisibility":"Cannot update visibility status","successUpdateWish":"Wish updated successfully","errorUpdateWish":"Cannot update wish","successDeleteWish":"Wish deleted successfully","errorDeleteWish":"Cannot delete wish","successReplyWish":"Wish replied successfully","errorReplyWish":"Cannot reply to wish","successDeleteReply":"Reply deleted successfully","errorDeleteReply":"Cannot delete reply","editModalTitle":"Edit Wish","replyModalTitle":"Reply to Wish","editReplyModalTitle":"Edit Reply","guestNameLabel":"Guest Name","messageLabel":"Message","publicLabel":"Public","cancel":"Cancel","save":"Save Changes","replyLabel":"Reply","replyPlaceholder":"Enter your reply...","sendReply":"Send Reply","updateReply":"Update Reply","deleteConfirmTitle":"Delete Wish","deleteConfirmMessage":"Are you sure you want to delete the wish from {{name}}? This action cannot be undone.","originalWishFrom":"Wish from {{name}}:","allLoaded":"All wishes loaded"}}'))
}, 530234, e => {
    e.v({
        myOrders: {
            title: "My Video Orders",
            description: "Track and manage your custom video orders.",
            placeOrder: "Place Video Order",
            filters: {
                search: "Search orders… #ID, title",
                allStatus: "All Status",
                sortNewest: "Newest",
                sortOldest: "Oldest",
                allPackages: "All Packages"
            },
            status: {
                created: "Created",
                pendingPayment: "Pending Payment",
                paid: "Paid",
                inProgress: "In Progress",
                delivered: "Delivered",
                completed: "Completed",
                canceled: "Canceled",
                refunded: "Refunded"
            },
            tier: {
                basic: "Basic",
                pro: "Pro",
                vip: "VIP"
            },
            actions: {
                viewDetails: "View Details",
                payNow: "Pay Now",
                requestRevision: "Request Revision",
                download: "Download"
            },
            empty: {
                title: "You don't have any video orders yet",
                description: "Explore our video catalog and place your first order!"
            },
            deliveries: "Delivered videos",
            revisions: "Revisions",
            dueDate: "Due",
            overdue: "Overdue",
            delivered: "Delivered",
            videoSpecs: {
                basic: "1-2 mins • HD",
                pro: "3-5 mins • 4K",
                vip: "5-10 mins • 4K"
            },
            pagination: {
                previous: "Previous",
                next: "Next",
                page: "Page"
            },
            errors: {
                loadOrders: "An error occurred while loading the order list",
                paymentInfoNotFound: "Payment information not found"
            },
            toast: {
                paymentSuccess: {
                    title: "Payment successful",
                    description: "Your order is being processed"
                },
                error: {
                    title: "Error"
                }
            },
            notAvailable: "N/A"
        },
        orderDetail: {
            title: "Order",
            pendingPayment: {
                title: "Order not yet paid",
                description: "Please scan the QR code or click the button below to pay and start the video production process.",
                openBankApp: "Open banking app",
                autoUpdate: "After payment, the order will be automatically updated in a few seconds"
            },
            statusMessages: {
                created: "Your order has been created. Please complete payment to start production.",
                pendingPayment: "Waiting for payment confirmation.",
                paid: "Payment received! We will start working on your video soon.",
                inProgress: "Your video is being produced by our team.",
                delivered: "Your video has been delivered! Please review and let us know if you need any changes.",
                completed: "Order completed. Thank you for using our service!",
                canceled: "This order has been canceled.",
                refunded: "This order has been refunded."
            },
            sections: {
                orderInfo: "Order Information",
                requirements: "Your Requirements",
                deliveries: "Delivered Videos",
                adminNote: "Note from Admin"
            },
            fields: {
                video: "Video",
                package: "Package",
                price: "Price",
                createdDate: "Created",
                dueDate: "Due Date",
                revisions: "Revisions"
            },
            requirements: {
                script: "Script",
                names: "Names",
                colorTheme: "Color Theme",
                note: "Note"
            },
            actions: {
                close: "Close"
            }
        },
        revisionModal: {
            title: "Request Revision - Order",
            orderInfo: {
                title: "Order Information",
                video: "Video",
                package: "Package",
                used: "Used",
                remaining: "Remaining",
                times: "times"
            },
            warning: {
                title: "Important Note!",
                description: "You have {count} revision(s) left. Please describe in detail what needs to be changed so we can support you best."
            },
            form: {
                label: "Describe your revision request in detail *",
                placeholder: "Example:\n- Change color from blue to pink\n- Add bride and groom names at the end\n- Change background music\n- Adjust video speed at 2:30-3:00\n- Add transition effects...",
                characterCount: "{current}/{max} characters"
            },
            tips: {
                title: "💡 Tips for effective revision requests:",
                item1: "• Describe specifically what needs to be changed",
                item2: '• If possible, specify the time in the video (e.g., "from 1:30-2:00")',
                item3: "• Mention specific colors, sounds, and effects",
                item4: "• If you want to add content, provide detailed information"
            },
            originalRequirements: "Your original requirements:",
            actions: {
                cancel: "Cancel",
                submit: "Send Request",
                submitting: "Sending..."
            },
            validation: {
                error: "Error"
            },
            confirm: {
                title: "Confirm revision request",
                message: "You will have {count} revision(s) left after this. Confirm sending request?",
                confirmButton: "Send Request",
                orderLabel: "Order:",
                remainingLabel: "Remaining revisions:"
            },
            toast: {
                success: {
                    title: "Success",
                    description: "Revision request sent successfully!"
                },
                error: {
                    title: "Error",
                    description: "Unable to send revision request. Please try again."
                }
            }
        },
        paymentModal: {
            title: "Payment",
            status: {
                waiting: "Waiting for payment...",
                waitingDescription: "System will automatically update when payment is successful",
                timeout: "Payment time expired",
                timeoutDescription: "Please create a new order or contact support"
            },
            instructions: {
                title: "Payment Instructions",
                step1: "Open your banking app or e-wallet on your phone",
                step2: "Scan the QR code below",
                step3: "Confirm payment",
                step4: "Wait for system confirmation (automatic)"
            },
            qrCode: {
                alt: "Payment QR Code",
                loading: "Loading QR code..."
            },
            paymentLink: {
                title: "Or pay with app",
                openApp: "Open banking app"
            },
            timer: {
                remaining: "Time remaining:",
                expireSoon: "Transaction will expire in {minutes} minute(s)"
            },
            orderInfo: {
                label: "Order ID"
            },
            actions: {
                cancel: "Cancel",
                close: "Close",
                retry: "Create New Order"
            },
            help: {
                text: "Having issues? Contact support via",
                supportLink: "support page"
            },
            toast: {
                success: {
                    title: "Payment successful!",
                    description: "Your order is being processed."
                },
                timeout: {
                    title: "Time expired",
                    description: "Please create a new order or contact support."
                }
            }
        },
        common: {
            confirm: "Confirm",
            cancel: "Cancel",
            close: "Close",
            download: "Download"
        },
        deliveryTimeline: {
            empty: {
                title: "No videos delivered yet",
                description: "Videos will be delivered when completed"
            },
            delivery: "Delivery",
            finalVersion: "Final Version",
            latest: "Latest",
            noteFromAdmin: "Note from admin:",
            actions: {
                download: "Download video",
                preview: "Preview"
            }
        },
        orderProgress: {
            title: "Order Status",
            canceled: "Order canceled",
            refunded: "Order refunded",
            steps: {
                pendingPayment: "Pending Payment",
                paid: "Paid",
                inProgress: "In Progress",
                delivered: "Delivered",
                completed: "Completed"
            }
        },
        catalogDetail: {
            completionTime: "Completion time:",
            days: "days",
            selectPackage: "Select service package",
            selected: "Selected",
            quality: "Quality:",
            revisions: "Revisions:",
            requirementsTitle: "Detailed requirements",
            requirements: {
                script: {
                    label: "Script/Storyline (optional)",
                    placeholder: "Enter script or storyline for the video..."
                },
                names: {
                    label: "Names to appear in video",
                    placeholder: "Name",
                    addName: "Add name"
                },
                colorTheme: {
                    label: "Color theme (optional)",
                    placeholder: "Example: White yellow, Pink pastel, Blue..."
                },
                note: {
                    label: "Additional notes (optional)",
                    placeholder: "Enter any other special requirements..."
                }
            },
            orderSummary: {
                title: "Order Summary",
                video: "Video:",
                package: "Package:",
                completionTime: "Completion time:",
                total: "Total:"
            },
            actions: {
                cancel: "Cancel",
                orderNow: "Order Now",
                creating: "Creating order..."
            },
            toast: {
                error: {
                    selectPackage: {
                        title: "Error",
                        description: "Please select a service package"
                    },
                    createOrder: {
                        title: "Error",
                        description: "Unable to create order. Please try again."
                    }
                },
                success: {
                    title: "Success",
                    description: "Order created successfully! Please pay to start."
                }
            }
        },
        videoCatalog: {
            banner: {
                badge: "Video Templates",
                title: "PROFESSIONAL VIDEO SERVICES",
                description: 'With many high-quality service packages, creating "Special" and "Memorable" videos for your event.',
                titleMobile: "PROFESSIONAL VIDEO",
                descriptionMobile: "Create special and memorable videos for your event."
            },
            tabs: {
                all: "All",
                basic: "Basic",
                pro: "Pro",
                vip: "VIP"
            },
            sort: {
                label: "Sort by",
                newest: "Newest",
                oldest: "Oldest",
                name: "Name"
            },
            search: {
                placeholder: "Search video templates...",
                placeholderMobile: "Search..."
            },
            filter: {
                allCategories: "All Categories"
            },
            results: {
                showing: "Showing",
                of: "of",
                templates: "templates",
                found: "templates found"
            },
            card: {
                days: "days",
                availablePackages: "Available packages:",
                viewDetails: "View Details",
                orderNow: "Order Now",
                from: "From"
            },
            categories: {
                wedding: "Wedding",
                event: "Event",
                birthday: "Birthday",
                anniversary: "Anniversary"
            },
            messages: {
                errorLoading: "Error loading video templates",
                noTemplates: "No video templates found"
            }
        }
    })
}, 13216, e => {
    e.v({
        pageTitle: {
            title: "Wedding Planning",
            subtitle: "Track what needs to be done and stay on top of your wedding prep.",
            description: "Staying organized helps you avoid last-minute stress and enjoy your day more.",
            addGroupButton: "Add Task Group",
            exportButton: "Export Checklist",
            manageTitle: "Manage Your Planning",
            manageDescription: "Create new task groups or organize your current ones"
        },
        statistics: {
            totalTasks: {
                label: "Total Tasks",
                description: "All planning tasks"
            },
            completed: {
                label: "Completed",
                description: "Tasks done so far"
            },
            inProgress: {
                label: "In Progress",
                description: "Currently working on"
            },
            progress: {
                label: "Progress",
                description: "Overall completion"
            }
        },
        todoList: {
            tasksCompleted: "{{completed}} of {{total}} tasks completed",
            addTask: "Add task",
            loading: "Loading tasks...",
            noTasks: "No tasks yet"
        },
        task: {
            statusCompleted: "Task completed",
            statusReset: "Task reset",
            statusUpdateError: "Cannot update status",
            deleted: "Task deleted",
            deleteError: "Cannot delete task",
            updated: "Task updated",
            updateError: "Cannot update task",
            titleRequired: "Title is required",
            edit: "Edit",
            delete: "Delete",
            confirmDelete: "Confirm deletion",
            confirmDeleteMessage: 'Are you sure you want to delete the task "{{title}}"?',
            confirmDeleteButton: "Delete",
            cancel: "Cancel",
            editTitle: "Edit task",
            titleLabel: "Title",
            titlePlaceholder: "Enter task title",
            descriptionLabel: "Description",
            descriptionPlaceholder: "Enter task description (optional)",
            dueDateLabel: "Due date",
            saveChanges: "Save changes",
            addNewTask: "Add new task",
            addTaskButton: "Add task"
        },
        todoListManager: {
            loadError: "Cannot load task list",
            loadStatsError: "Cannot load statistics",
            titleRequired: "Title cannot be empty",
            createListSuccess: "New list created",
            createListError: "Cannot create new list",
            addTaskError: "Cannot add task",
            addTaskSuccess: "New task added",
            updateTitleError: "Cannot update title",
            updateTitleSuccess: "Title updated",
            deleteListError: "Cannot delete list",
            deleteListSuccess: "List deleted",
            confirmDeleteList: "Confirm deletion",
            confirmDeleteListMessage: "Are you sure you want to delete this list?",
            editList: "Edit list",
            editListTitle: "Edit list",
            newTitlePlaceholder: "Enter new title",
            update: "Update",
            listTitle: "Task Lists",
            loadingLists: "Loading task lists...",
            noLists: "No task lists yet",
            noListsDescription: "Create your first task list to get started",
            addTaskGroup: "Add task group",
            addNewTaskGroup: "Add new task group",
            titleLabel: "Title",
            titlePlaceholder: "Enter task group title",
            createButton: "Create",
            exportNotImplemented: "Export feature coming soon"
        },
        spendingPlan: {
            title: "Wedding Budget",
            subtitle: "Plan your spending, track payments, and stay in control of wedding costs.",
            description: "Keeping track early helps you avoid last-minute stress.",
            addCategory: "Add Category",
            card: {
                title: "Current Budget Plan",
                newPlan: "New Plan",
                totalBudget: "Total Budget",
                notes: "Notes",
                noNotes: "No notes added yet",
                editPlan: "Edit plan",
                deletePlan: "Delete plan"
            },
            summary: {
                title: "Budget Overview",
                loading: "Loading summary...",
                noData: "No summary data available",
                totalBudget: "Total Budget",
                estimatedCost: "Estimated Cost",
                paid: "Paid",
                unpaid: "Unpaid",
                paymentProgress: "Payment Progress",
                paymentStatus: "Payment Status",
                planned: "Planned",
                unpaidItems: "Unpaid",
                partial: "Partial",
                paidItems: "Paid"
            },
            categories: {
                title: "Spending Categories",
                addItem: "Add item",
                estimated: "Estimated",
                actual: "Actual",
                loading: "Loading categories...",
                empty: "No spending categories yet",
                pleaseSelect: "Please select a spending plan"
            },
            plan: {
                loading: "Loading spending plan...",
                empty: "No spending plan yet",
                create: "Create spending plan",
                nameRequired: "Plan name is required",
                created: "Spending plan created",
                createError: "Cannot create spending plan",
                updated: "Spending plan updated",
                updateError: "Cannot update spending plan",
                deleted: "Spending plan deleted",
                deleteError: "Cannot delete spending plan"
            },
            category: {
                nameRequired: "Category name is required",
                created: "Category created",
                createError: "Cannot create category",
                updated: "Category updated",
                updateError: "Cannot update category",
                deleted: "Category deleted",
                deleteError: "Cannot delete category"
            },
            item: {
                deleted: "Item deleted",
                deleteError: "Cannot delete item",
                created: "Item created",
                createError: "Cannot create item",
                updated: "Item updated",
                updateError: "Cannot update item",
                markedPaid: "Marked as paid",
                markedUnpaid: "Marked as unpaid"
            },
            modal: {
                addPlan: "Add New Spending Plan",
                editPlan: "Edit Spending Plan",
                addCategory: "Add New Category",
                editCategory: "Edit Category",
                addItem: "Add New Item",
                editItem: "Edit Item",
                planName: "Plan Name",
                planNamePlaceholder: "Enter spending plan name",
                totalBudget: "Total Budget (VND)",
                totalBudgetPlaceholder: "Enter total budget (optional)",
                notes: "Notes",
                notesPlaceholder: "Enter notes (optional)",
                categoryName: "Category Name",
                categoryNamePlaceholder: "Enter category name",
                description: "Description",
                descriptionPlaceholder: "Enter description (optional)",
                itemName: "Item Name",
                itemNamePlaceholder: "Enter item name",
                estimatedCost: "Estimated Cost (VND)",
                estimatedCostPlaceholder: "Enter estimated cost",
                actualCost: "Actual Cost (VND)",
                actualCostPlaceholder: "Enter actual cost",
                dueDate: "Due Date",
                status: "Status",
                statusPlanned: "Planned",
                statusUnpaid: "Unpaid",
                statusPartial: "Partial Payment",
                statusPaid: "Paid",
                statusCanceled: "Canceled",
                cancel: "Cancel",
                save: "Save",
                create: "Create",
                delete: "Delete",
                creating: "Creating...",
                saving: "Saving...",
                adding: "Adding...",
                confirmDelete: "Confirm Delete",
                confirmDeletePlan: 'Are you sure you want to delete the spending plan "{{name}}"? All categories and items will be permanently deleted.',
                confirmDeleteCategory: 'Are you sure you want to delete the category "{{name}}"? All items in this category will also be deleted.',
                confirmDeleteItem: 'Are you sure you want to delete the item "{{name}}"?'
            }
        }
    })
}, 195525, e => {
    e.v({
        header: {
            nav: {
                about: "About Us",
                services: "Services",
                templates: "Templates",
                community: "Community",
                features: "Features",
                pricing: "Pricing",
                contact: "Contact"
            },
            navMobile: {
                home: "Home",
                community: "Couples",
                pricing: "Pricing",
                contact: "Contact",
                manage: "Manage",
                create: "Create"
            },
            signIn: "Sign In",
            access: "Access",
            accessExpanded: "Manage Created Invitations"
        },
        banner: {
            tag: "WEDDING INVITATION 5.0",
            titlePrefix: "CREATE WEDDING INVITATION",
            typing: ["DIGITAL", "ONLINE"],
            subtitle: "COMPLETELY FREE",
            description: "Make your Wedding become <br /> <0>Unique</0> and <0>Memorable</0> ♥",
            button: "Create Invitation Now",
            manageButton: "Open Invitation Manager",
            secondaryButton: "VIEW TEMPLATES",
            intro: {
                title: "Overview",
                description: "Free Wedding Website Creation Platform (Online Wedding Invitation) helps brides and grooms instantly own a trendy 4.0 wedding with many extremely useful features."
            }
        },
        introduction: {
            label: "Introduction",
            title: "Wedding Website - Online Wedding Invitation",
            content: "Online wedding invitations, electronic wedding invitations, wedding websites are a website dedicated to couples' weddings. A place to store moments, memories, images, Videos forever. <br /><br /> It is a website used to invite friends and relatives instead of classic paper invitations, a 5.0 wedding invitation with many features and usefulness. A place that provides full wedding information for your guests, helps you easily share with everyone, invite stylishly, store and share love stories, wedding albums with everyone. Allows everyone to send congratulations, send wedding money online, and can confirm attendance at your wedding,... isn't it great !!"
        },
        feature: {
            title: "HIGHLIGHT FEATURES",
            heading: "Experience features <br /> <span>only available on Digital Wedding Invitations</span>",
            description: "Unlike classic paper invitations, Digital Wedding Invitations bring useful features, helping Brides and Grooms share, manage, and prepare for the wedding most completely.",
            items: {
                info: {
                    title: "Wedding Information",
                    list: ["Bride & Groom Information", "Wedding Ceremony & Reception Venue", "Event Timeline", "Wedding Events (Ceremony, Party...)", "Parents of both sides"]
                },
                share: {
                    title: "Share Emotions",
                    list: ["Share Wedding Album and Video.", "Love Story of Bride & Groom", "Love Journey, Milestones.", "Introduction of Bride & Groom.", "Message, Thank You Note."]
                },
                features: {
                    title: "Wedding Invitation Features",
                    list: ["Send wedding wishes + manage wishes.", "Confirm attendance (RSVP).", "Manage guest list.", "Online wedding gift via Bank Transfer, QR Code.", "Countdown to the wedding event.", "Google Maps directions to the venue.", "Play favorite music and card effects.", "Write guest names, automatically display guest names."]
                },
                benefits: {
                    title: "Benefits & Gifts",
                    list: ["24/7 Support anytime, anywhere.", "Unlimited invitation editing.", "Customize invitation as you wish."]
                }
            },
            cta: {
                heading: "Start your <span>Dream Wedding</span> <br /> with an <span>Online Invitation</span> today!",
                button: "Start Now"
            }
        },
        featureHot: {
            title: "Make your Wedding Special with <span>Online Wedding Invitations</span>",
            description: "Impress guests with modern, luxurious, and informative wedding invitations.",
            button: "CHOOSE INVITATION NOW"
        },
        listTemplate: {
            label: "TEMPLATE GALLERY",
            title: "Wedding Template Gallery",
            description: "Start your Wedding with a beautiful Wedding Invitation right now ♥",
            heading: "Beautiful Wedding Templates",
            subHeading: "Start your Wedding with a beautiful Wedding Invitation right now ♥",
            filter: {
                label: "Filter by tag:",
                allTags: "All tags",
                showing: "Showing {{count}} templates",
                forTag: 'for tag "{{tag}}"'
            },
            seeAll: "View All Templates",
            error: "An error occurred while loading data."
        },
        community: {
            label: "COUPLES",
            title: "Community Wedding Invitations",
            description: "Explore beautiful wedding invitations created by the meWedding community.",
            heading: "Invitations From Couples",
            subHeading: "Discover stunning wedding invitations from our community and get inspired for your special day ♥",
            seeAll: "View All Invitations",
            error: "An error occurred while loading data."
        },
        step: {
            title: "4 Steps to Own a Digital Wedding Invitation",
            items: {
                1: {
                    title: "Step 1: Register/Login",
                    description: "Create a free account to start designing your wedding invitation."
                },
                2: {
                    title: "Step 2: Choose Template",
                    description: "Choose a favorite template from our diverse gallery."
                },
                3: {
                    title: "Step 3: Enter Information",
                    description: "Fill in wedding information, upload photos and videos to the invitation."
                },
                4: {
                    title: "Step 4: Publish & Share",
                    description: "Complete and share the wedding invitation with friends and family."
                }
            }
        },
        whyChoose: {
            title: "WHY CHOOSE US",
            heading: "Why choose <br /> <span>Digital Wedding Invitation</span>",
            items: {
                memory: {
                    title: "Keep Memories",
                    description: "Keep wedding albums, videos and love stories forever."
                },
                share: {
                    title: "Easy Sharing",
                    description: "Share wedding invitations via social networks with just 1 click."
                },
                features: {
                    title: "Modern Features",
                    description: "Integrated maps, online wedding gifts, RSVP and many other features."
                },
                design: {
                    title: "Diverse Designs",
                    description: "Rich gallery, continuously updated with the latest design trends."
                },
                cost: {
                    title: "Cost Saving",
                    description: "Completely free, no printing and shipping costs."
                },
                manage: {
                    title: "Guest Management",
                    description: "Easily control the number of guests attending and congratulations."
                }
            }
        },
        description: {
            title: "4 Steps to Create Free Digital Wedding Invitation",
            items: {
                1: {
                    title: "Register Account",
                    description: "Just 1 minute to create an account and start."
                },
                2: {
                    title: "Choose Interface",
                    description: "Hundreds of beautiful templates waiting for you to choose."
                },
                3: {
                    title: "Edit Content",
                    description: "Change information, images as you wish."
                },
                4: {
                    title: "Share Invitation",
                    description: "Send wedding invitation link to guests via social networks."
                }
            }
        }
    })
}, 3573, e => {
    e.v({
        header: {
            nav: {
                templates: "Templates",
                pricing: "Pricing",
                contact: "Contact"
            },
            signIn: "Sign In",
            access: "Dashboard"
        },
        inviteMenu: {
            invitation: "Invitations",
            guests: "Guest Management",
            wishes: "Wishes Management",
            productAffiliates: "Product Affiliates",
            referral: "Refer & Earn",
            settings: "Invitation Settings"
        },
        inviteManager: {
            description: "Manage your event invitations",
            createNew: "Create New Invitation",
            stats: {
                totalInvitations: "Total Invitations",
                publicInvitations: "Public Invitations",
                activeInvitations: "Active Invitations",
                totalViews: "Total Views",
                guests: "Guests",
                wishes: "Wishes"
            },
            create: {
                title: "Create New Invitation",
                description: "Design a beautiful invitation for your special event",
                button: "Create Invitation"
            },
            request: {
                title: "Too busy? We'll design for you ❤️",
                description: "If you're overwhelmed or don't have time, our team can create and design your invitation for you.",
                button: "Request Design Support"
            },
            card: {
                weddingDate: "Event Date:",
                created: "Created:",
                expiresAt: "Expires:",
                expired: "Expired",
                expiresIn: "{{date}} ({{days}} days left)",
                permanent: "Permanent",
                unpublished: "Unpublished",
                countdown: {
                    before: "Countdown to event"
                },
                unlockCountup: "Unlock Countdown",
                noDomain: "No domain",
                public: "Public",
                private: "Private",
                views: "{{count}} views",
                guestsCount: "{{count}} guests",
                wishesCount: "{{count}} wishes",
                unlockStats: "Unlock Stats",
                editInvitation: "Edit",
                preview: "Preview",
                guests: "Guests",
                publish: "Publish",
                unpublish: "Unpublish"
            },
            menu: {
                wishes: "Manage Comments",
                settings: "Settings",
                qrCode: "QR Code",
                socialShare: "Share on Social",
                designRequest: "Request Design",
                changeTemplate: "Change Template",
                clone: "Clone",
                resetToTemplate: "Reset to Template",
                delete: "Delete"
            }
        },
        banner: {
            tag: "Free & Simple",
            titlePrefix: "Create invitations for",
            typing: ["Birthday", "Baby Shower", "Grand Opening", "Conference"],
            subtitle: "Free online",
            description: "Create <0>beautiful</0> and <0>professional</0> event invitations in just minutes.<br/>Birthday, baby shower, grand opening, conference and more.",
            button: "Start now"
        },
        introduction: {
            label: "About meInvite",
            title: "Professional Event Invitations",
            content: "meInvite is a free online platform for creating event invitations. Whether you need birthday, baby shower, grand opening or conference invitations, we have the perfect template for you.<br/><br/>With an intuitive and easy-to-use interface, you can create beautiful invitations in just minutes."
        },
        feature: {
            title: "Features",
            heading: "Create <span>professional</span> invitations",
            description: "All the tools you need to create beautiful invitations and manage events effectively",
            items: {
                eventTypes: {
                    title: "Various event types",
                    list: {
                        0: "Birthday, baby shower",
                        1: "Grand opening, inauguration",
                        2: "Conference, seminar",
                        3: "Corporate party, special events"
                    }
                },
                share: {
                    title: "Easy sharing",
                    list: {
                        0: "Send via link, QR code",
                        1: "Share on social media",
                        2: "Send bulk emails",
                        3: "Track views"
                    }
                },
                features: {
                    title: "Rich features",
                    list: {
                        0: "Guest management",
                        1: "Collect wishes",
                        2: "Custom background music",
                        3: "Beautiful effects"
                    }
                },
                benefits: {
                    title: "Key benefits",
                    list: {
                        0: "Completely free",
                        1: "Professional design",
                        2: "Time saving",
                        3: "Eco-friendly"
                    }
                }
            }
        },
        listTemplate: {
            title: "Invitation Templates",
            description: "Explore beautiful invitation templates",
            label: "Templates",
            heading: "Event Invitation Templates",
            subHeading: "Choose a template that fits your event",
            seeAll: "See all templates",
            error: "An error occurred while loading templates"
        },
        step: {
            title: "<span>4 steps</span> to create invitations",
            items: {
                1: {
                    title: "Choose a template",
                    description: "Browse through hundreds of beautiful invitation templates and choose one that fits your event."
                },
                2: {
                    title: "Customize content",
                    description: "Add event information, images and customize the design to your liking."
                },
                3: {
                    title: "Share invitations",
                    description: "Send invitations via link, QR code or share directly on social media."
                },
                4: {
                    title: "Manage guests",
                    description: "Track guest list, confirm attendance and collect wishes."
                }
            }
        },
        inviteGuest: {
            title: "Guest Management",
            description: "Manage guest list for your event invitation",
            placeholder: "Guest management feature will be developed in the next phase",
            addGuest: "Add Guest",
            emailManagement: "Send Email",
            vipOnlyFeatureTitle: "Notice",
            vipOnlyFeatureDesc: 'The "Personalized Guest Names" feature is only available for VIP plan. With FREE/PRO plan, you can only add 3 guests to try. You can purchase this feature or upgrade your plan to use all features.',
            unlockFeature: "Unlock Feature",
            personalizedInvitesFeatureName: "Personalized Guest Names"
        },
        inviteComments: {
            description: "View and manage wishes from guests",
            placeholder: "Wish management feature will be developed in the next phase",
            premiumTitle: "Wish Management is a Premium Feature",
            premiumDescription: "Upgrade your plan to use the wish management feature.",
            unlockButton: "Unlock Feature",
            featureName: "Wish Management"
        },
        inviteSettings: {
            description: "Configure and customize your event invitation",
            placeholder: "Settings feature will be developed in the next phase"
        }
    })
}, 808808, e => {
    e.v({
        title: "Thank you for creating your card on meHappy!",
        subtitle: "MeHappy is very happy to be a small part of your special moment.",
        quickNote: "If you have a moment, please help meHappy a little",
        rating: {
            label: "Your rating",
            veryUnsatisfied: "Very unsatisfied",
            unsatisfied: "Unsatisfied",
            normal: "Normal",
            satisfied: "Satisfied",
            verySatisfied: "Very satisfied",
            selectRating: "Select star rating"
        },
        title_field: {
            label: "Review title",
            placeholder: "Enter a title for your review..."
        },
        social: {
            heading: "Support MeHappy by Like/Follow our platforms!",
            description: "If you are satisfied, please send us 1 positive review on our fanpage so we can have more motivation to keep improving.",
            hint: "Tap the MeHappy platforms below and support us",
            buttons: {
                facebook: "Facebook",
                instagram: "Instagram",
                tiktok: "TikTok"
            },
            mobileSummary: "Follow MeHappy on the platforms below to support us."
        },
        dissatisfied: {
            heading: "If there is anything you are not satisfied with!",
            description: "Please send feedback to MeHappy so we can improve the product. MeHappy truly values and wants to hear your opinion!",
            ratingLabel: "Your rating:",
            contentLabel: "Feedback content:",
            referral: "If you find this useful, please introduce MeHappy to your friends and family",
            mobileDescription: "Not fully satisfied? Leave us quick feedback so we can improve better.",
            referralShort: "If this helps, please share MeHappy with your friends."
        },
        description: {
            label: "Review content",
            placeholder: "Share your experience and suggestions with MeHappy"
        },
        autoTitle: {
            default: "Feedback from user",
            star1: "1 star - Very unsatisfied",
            star2: "2 stars - Unsatisfied",
            star3: "3 stars - Normal",
            star4: "4 stars - Satisfied",
            star5: "5 stars - Very satisfied"
        },
        buttons: {
            cancel: "Cancel",
            close: "Close",
            submit: "Submit review",
            submitting: "Submitting..."
        },
        validation: {
            titleRequired: "Please enter a review title",
            descriptionRequired: "Please enter review content",
            ratingRequired: "Please select a star rating"
        },
        success: {
            title: "Success",
            description: "Thank you for your feedback! We will review and improve our service."
        },
        error: {
            title: "Error",
            description: "An error occurred while submitting your review. Please try again."
        },
        subtitleShort: "We are happy to be part of your special moment.",
        mobileTabs: {
            feedback: "Feedback",
            social: "Like/Follow"
        },
        main: {
            title: "💌 Thank you for creating your card on meHappy!",
            subtitle: "MeHappy is very happy to be a small part of your special moment 🖤",
            quickNote: "If you have a moment, please help meHappy a little ❤️",
            social: {
                heading: "Support MeHappy by Like/Follow our platforms!",
                descriptionPrefix: "If you are satisfied, please send us 1",
                descriptionHighlight: "positive review",
                descriptionSuffix: "on our Fanpage so we can have more motivation to improve 🖤. Thank you so much!",
                hint: "👇 Tap and Follow MeHappy platforms below to support us 💗"
            },
            dissatisfied: {
                heading: "If there is anything you are not satisfied with!",
                description: "Please send feedback to MeHappy so we can improve the product. MeHappy truly values and wants to hear your opinion!"
            },
            openForm: "Send Feedback / Review",
            referral: "🎁 If this is helpful, please share MeHappy with your friends and family ❤️"
        },
        form: {
            title: "Send Feedback / Review",
            subtitle: "Share your quick experience so MeHappy can improve our service better.",
            ratingLabel: "Your rating:",
            contentLabel: "Review content:",
            submit: "Submit review",
            back: "Back"
        }
    })
}, 40057, e => {
    e.v({
        title: "QR Code",
        description: "Scan QR code to access the invitation",
        settings: {
            show: "QR Settings",
            hide: "Hide settings",
            title: "QR Code Settings",
            dotColor: "Dot color",
            backgroundColor: "Background color",
            cornerSquareColor: "Corner square color",
            cornerDotColor: "Corner dot color",
            dotType: "Dot type",
            cornerSquareType: "Corner square type",
            cornerDotType: "Corner dot type",
            errorCorrectionLevel: "Error correction level",
            margin: "Margin (px)",
            centerImage: "Center image",
            selectImage: "Select image",
            preview: "Preview:",
            deleteImage: "Delete image",
            imageSize: "Image size",
            hideBackgroundDots: "Hide background dots"
        },
        dotTypes: {
            square: "Square",
            rounded: "Rounded",
            extraRounded: "Extra rounded",
            classy: "Classy",
            classyRounded: "Classy rounded"
        },
        cornerTypes: {
            square: "Square",
            extraRounded: "Extra rounded",
            dot: "Dot"
        },
        errorLevels: {
            L: "L (7%)",
            M: "M (15%)",
            Q: "Q (25%)",
            H: "H (30%)"
        },
        actions: {
            copyLink: "Copy link",
            downloadQR: "Download QR"
        },
        messages: {
            copySuccess: "Copied!",
            copyDescription: "Link has been copied to clipboard",
            copyError: "Error",
            copyErrorDescription: "Cannot copy link",
            downloadSuccess: "Success!",
            downloadDescription: "QR code has been downloaded",
            downloadError: "Error",
            downloadErrorDescription: "Cannot download QR code"
        }
    })
}, 662675, e => {
    e.v({
        title: "Select Files",
        tabs: {
            browse: "Browse Files",
            upload: "Upload New",
            storage: "Storage"
        },
        search: {
            placeholder: "Search files...",
            groupPlaceholder: "Search groups..."
        },
        groups: {
            label: "Select group:",
            all: "All",
            showMore: "+ Show {{count}} more tags",
            showLess: "- Collapse"
        },
        upload: {
            dragDrop: "Drag and drop files here or click to browse",
            selectFiles: "Select Files",
            progress: "Upload Progress:",
            addTags: "Add tags to uploads:",
            addNewTag: "Add new tag"
        },
        footer: {
            selected: "{{count}} file selected",
            selected_other: "{{count}} files selected",
            cancel: "Cancel",
            select: "Select"
        },
        messages: {
            noFiles: "No files found",
            invalidType: "Invalid file type: {{name}} is not supported",
            uploadSuccess: "Successfully uploaded {{count}} file(s)",
            uploadFailed: "Upload failed: {{name}}",
            endOfFiles: "All files displayed"
        }
    })
}, 686913, e => {
    e.v({
        title: "Design Support Request",
        fields: {
            requestTitle: "Request Title *",
            requestTitlePlaceholder: "Brief title for your design request",
            description: "Description *",
            descriptionPlaceholder: "Detailed description of your design request...",
            selectPage: "Select Page (Optional)",
            selectPagePlaceholder: "Select a page to link with the request",
            noPage: "No page selected",
            contactEmail: "Contact Email *",
            contactEmailPlaceholder: "email@example.com",
            phone: "Phone Number",
            phonePlaceholder: "0123-456-789",
            priority: "Priority Level",
            priorityPlaceholder: "Select priority level"
        },
        priority: {
            low: "Low Priority (7-14 days)",
            medium: "Medium Priority (3-7 days)",
            high: "High Priority (1-3 days)",
            urgent: "Urgent (24-48 hours)"
        },
        actions: {
            cancel: "Cancel",
            submit: "Submit Request"
        },
        messages: {
            noPermission: "No permission to create request",
            noPermissionDescription: "You need to upgrade your plan to use the design support feature"
        },
        userInfoGate: {
            title: "Bride/Groom information is required",
            message: "Please complete Groom name, Bride name, Wedding date, and Wedding location before sending a design support request.",
            confirm: "Go to Bride/Groom",
            cancel: "Later"
        }
    })
}, 301513, e => {
    e.v({
        header: {
            feedback: "Feedback",
            upgradeToPremium: "Upgrade",
            buyFeatures: "Buy Features",
            plan: {
                basic: "Basic",
                pro: "Pro",
                vip: "VIP",
                loading: "...",
                free: "Free"
            }
        },
        menu: {
            invitation: {
                title: "Wedding Invitation",
                manage: "Manage Invitations",
                brideGroom: "Wedding Profile",
                yourCard: "Your Card"
            },
            wedding: {
                title: "Wedding",
                manage: "Wedding Planning",
                spending: "Spending Management",
                guests: "Guest Management",
                wishes: "Wish Management",
                photobook: "Photobook Management"
            },
            settings: {
                title: "Settings",
                invitation: "Invitation Settings",
                notificationGuide: "Notification Guide"
            },
            design: {
                title: "Design",
                saveTheDate: "Save The Date Card",
                videoOrders: "My Video Orders",
                logo: "Wedding Logo"
            },
            referral: {
                title: "Referral",
                dashboard: "Referral",
                commissionHistory: "Commission History",
                referees: "Referees",
                withdrawals: "Withdrawal Management"
            },
            productAffiliates: "Affiliate Products",
            quickMenu: "Management menu",
            expand: "Expand Menu",
            collapse: "Collapse Menu"
        },
        templateSelect: {
            title: "Select Template",
            allTiers: "All Tiers",
            tierInfo: "Showing templates for {{tier}} tier",
            searchPlaceholder: "Search templates...",
            loading: "Loading templates...",
            error: "Error loading templates",
            resultsCount: "Showing {{count}} template(s)",
            withKeyword: 'with keyword "{{keyword}}"',
            noImage: "No image",
            noResults: "No templates found",
            empty: "No templates available"
        },
        time: {
            days: "days",
            hours: "hours",
            minutes: "minutes",
            seconds: "seconds"
        },
        notification: {
            expired: "Expired",
            timeLeft: "Time remaining:",
            dismissTooltip: "Close notification (will reappear after 2 hours)"
        },
        systemSettings: {
            theme: "Theme",
            language: "Language"
        },
        modal: {
            confirmTitle: "Confirm",
            confirm: "Agree",
            cancel: "Cancel"
        },
        actions: {
            back: "Back",
            copy: "Copy",
            copied: "Copied",
            copyColor: "Copy color"
        },
        featureUnlockModal: {
            title: "Unlock Feature",
            subtitle: 'The "{{featureName}}" feature requires an upgrade to use',
            tabUpgrade: "Upgrade Plan",
            tabUpgradeShort: "Upgrade",
            tabBuyFeature: "Buy Feature",
            tabBuyFeatureShort: "Buy",
            upgradeDescription: "Choose a plan to unlock more features",
            buyFeatureDescription: "Buy this feature individually at a discounted price",
            openFeatureStore: "Open Feature Store",
            hasFeature: "Has this feature"
        },
        success: "Success",
        error: "Error"
    })
}, 245108, e => {
    e.v({
        title: "Notifications",
        markAllAsRead: "Mark all as read",
        loading: "Loading notifications...",
        empty: "No notifications",
        pinned: "Pinned",
        previous: "Previous",
        next: "Next",
        timeAgo: {
            justNow: "Just now",
            hoursAgo: "{{count}} hours ago",
            daysAgo: "{{count}} days ago"
        }
    })
}, 77603, e => {
    e.v({
        background: {
            title: "Color & Background",
            type: "Background Type",
            placeholder: "Select background type",
            color: "Background Color",
            gradientType: "Gradient Type",
            gradientAngle: "Angle",
            gradientColor1: "Color 1",
            gradientColor2: "Color 2",
            gradientPattern: "Gradient Pattern",
            image: "Image",
            imagePlaceholder: "https://...",
            select: "Select",
            remove: "Remove",
            size: "Size",
            position: "Position",
            repeat: "Repeat",
            videoSource: "Video Source",
            videoPlaceholder: "Select video source",
            youtubeUrl: "YouTube URL",
            videoUrl: "Video URL (MP4)",
            selectVideo: "Select Video",
            parallaxDesc: "Parallax: fixed background on scroll (cover + fixed).",
            advanced: "Advanced",
            hideAdvanced: "Hide Advanced",
            types: {
                none: "None",
                color: "Solid Color",
                transparent: "Transparent",
                gradient: "Gradient",
                image: "Image",
                video: "Video"
            },
            sizes: {
                auto: "Auto",
                cover: "Cover",
                contain: "Contain",
                custom: "Custom",
                parallax: "Parallax"
            },
            repeats: {
                "no-repeat": "No Repeat",
                repeat: "Repeat",
                "repeat-x": "Repeat X",
                "repeat-y": "Repeat Y"
            }
        },
        border: {
            title: "Border & Radius",
            style: "Border Style",
            color: "Border Color",
            width: "Width",
            radius: "Radius",
            styles: {
                none: "None",
                solid: "Solid",
                dashed: "Dashed",
                dotted: "Dotted",
                double: "Double",
                groove: "Groove",
                ridge: "Ridge",
                inset: "Inset",
                outset: "Outset"
            }
        },
        overlay: {
            title: "Overlay",
            type: "Overlay Type",
            blendMode: "Blend Mode",
            color: "Overlay Color",
            gradientDirection: "Gradient Direction",
            gradientStart: "Start Range (%)",
            gradientEnd: "End Range (%)",
            imageUrl: "Image URL",
            opacity: "Opacity",
            directions: {
                toRight: "Left to Right",
                toLeft: "Right to Left",
                toBottom: "Top to Bottom",
                toTop: "Bottom to Top",
                toBottomRight: "Top Left to Bottom Right",
                toTopRight: "Bottom Left to Top Right",
                toBottomLeft: "Top Right to Bottom Left",
                toTopLeft: "Bottom Right to Top Left"
            },
            sizes: {
                auto: "Default",
                cover: "Cover",
                contain: "Contain"
            },
            blendModes: {
                normal: "Normal",
                multiply: "Multiply",
                screen: "Screen",
                overlay: "Overlay",
                darken: "Darken",
                lighten: "Lighten",
                "color-dodge": "Color Dodge",
                "color-burn": "Color Burn",
                "hard-light": "Hard Light",
                "soft-light": "Soft Light",
                difference: "Difference",
                exclusion: "Exclusion",
                hue: "Hue",
                saturation: "Saturation",
                color: "Color",
                luminosity: "Luminosity"
            },
            gradientTypes: {
                linear: "Linear",
                radial: "Radial"
            }
        },
        shadow: {
            title: "Shadow",
            type: "Shadow Type",
            presets: "Presets",
            offset: "Offset",
            blur: "Blur",
            spread: "Spread",
            color: "Shadow Color"
        },
        transform: {
            title: "Transform Presets",
            reset: "Reset",
            "3dCard": "3D Card",
            tilt: "Tilt",
            transparent: "Transparent"
        }
    })
}, 277832, e => {
    e.v({
        editor: {
            loading: {
                message: "Loading page...",
                submessage: "Preparing the editor for you"
            }
        }
    })
}, 684294, e => {
    e.v({
        animationManager: {
            displayAnimation: {
                title: "Display Animation",
                preview: "Preview",
                duration: "Duration (seconds)",
                repeat: "Repeat",
                effects: {
                    none: "None",
                    bounce: "Bounce",
                    flash: "Flash",
                    pulse: "Pulse",
                    rubberBand: "Rubber Band",
                    shake: "Shake",
                    swing: "Swing",
                    tada: "Tada",
                    wobble: "Wobble",
                    bounceIn: "Bounce In",
                    bounceInDown: "Bounce In Down",
                    bounceInLeft: "Bounce In Left",
                    bounceInRight: "Bounce In Right",
                    bounceInUp: "Bounce In Up",
                    fadeIn: "Fade In",
                    fadeInDown: "Fade In Down",
                    fadeInDownBig: "Fade In Down Big",
                    fadeInLeft: "Fade In Left",
                    fadeInLeftBig: "Fade In Left Big",
                    fadeInRight: "Fade In Right",
                    fadeInRightBig: "Fade In Right Big",
                    fadeInUp: "Fade In Up",
                    fadeInUpBig: "Fade In Up Big",
                    flip: "Flip",
                    flipInX: "Flip In X",
                    flipInY: "Flip In Y",
                    lightSpeedIn: "Light Speed In",
                    rotateIn: "Rotate In",
                    rotateInDownLeft: "Rotate In Down Left",
                    rotateInDownRight: "Rotate In Down Right",
                    rotateInUpLeft: "Rotate In Up Left",
                    rotateInUpRight: "Rotate In Up Right",
                    slideInUp: "Slide In Up",
                    slideInDown: "Slide In Down",
                    slideInLeft: "Slide In Left",
                    slideInRight: "Slide In Right",
                    hinge: "Hinge",
                    rollIn: "Roll In"
                }
            },
            hoverAnimation: {
                title: "Hover Animation",
                status: "Status",
                preview: "Preview hover effect",
                borderColor: "Border Color",
                textColor: "Text Color",
                iconColor: "Icon Color",
                backgroundColor: "Background Color",
                opacity: "Opacity (%)",
                scale: "Scale (%)",
                rotate: "Rotate (degrees)",
                blur: "Blur (px)",
                grayscale: "Grayscale (%)",
                clearBorderColor: "Clear border color",
                clearTextColor: "Clear text color",
                clearIconColor: "Clear icon color",
                clearBackgroundColor: "Clear background color"
            }
        }
    })
}, 97193, e => {
    e.v({
        assetSaveModal: {
            title: "Save Element Template",
            tag: {
                label: "Tag",
                placeholder: "Enter tag for element template or select from list below...",
                loading: "Loading tags list...",
                available: "Available tags:",
                noMatch: "No matching tag found. Enter to create new tag.",
                empty: "No tags yet. Enter to create the first tag."
            },
            preview: {
                label: "Preview Image",
                description: "Upload a custom preview image or leave empty for auto-generation.",
                uploadButton: "Upload Image",
                uploading: "Uploading...",
                uploadSuccess: "Preview image uploaded successfully!",
                customUploaded: "Custom preview image uploaded",
                autoGenerateNote: "If no image is uploaded, preview will be auto-generated."
            },
            category: {
                label: "Template type",
                weddingCard: "Wedding card",
                giftBox: "Gift box"
            },
            buttons: {
                cancel: "Cancel",
                save: "Save",
                generating: "Generating preview...",
                saving: "Saving..."
            },
            errors: {
                submit: "Error processing save element template request. Please try again.",
                adminOnly: "Only admins can save Group templates.",
                missingPlatform: "One of the platforms is missing content. Asset may not work correctly on both platforms.",
                invalidStructure: "Invalid element structure. Please try again.",
                maxIterations: "Infinite loop when collecting nodes. There may be a circular reference in the element structure.",
                elementNotFound: "Element not found in DOM",
                blobCreation: "Failed to create blob from canvas",
                fallbackBlobCreation: "Fallback blob creation failed",
                placeholderBlob: "Failed to create placeholder blob",
                saveFailed: "Error saving asset to database:",
                invalidImageType: "Invalid file. Please select an image file.",
                previewUploadFailed: "Error uploading preview image. Please try again."
            },
            warnings: {
                missingNodes: "node(s) not found and skipped:",
                skippedNodes: "node(s) skipped during serialization:",
                moreNodes: "... and {count} more node(s)",
                noMobileNode: "Node not found in mobile content, will use converted version",
                noDesktopNode: "Node not found in desktop content, will use same as mobile",
                noMobileContent: "No mobile content available, will use converted version",
                noDesktopContent: "No desktop content available, will use same as mobile",
                fontNotFound: 'Font "{fontName}" is used but not found in current fontMap'
            },
            info: {
                nodesRecovered: "Recovered {count} node(s) from editor state."
            },
            validation: {
                title: "Tree Validation Failed: {label}",
                errorsFound: "{count} error{plural} found:",
                moreErrors: "... and {count} more error(s). Check console for details.",
                missingRootNodeId: "Missing rootNodeId",
                emptyNodes: "Empty nodes object",
                rootNotFound: 'Root node "{rootNodeId}" not found in nodes',
                invalidParent: 'Node "{nodeId}" ({nodeType}) has invalid parent "{parent}"',
                missingChild: 'Node "{nodeId}" ({nodeType}) has missing child "{childId}"',
                missingLinkedNode: 'Node "{nodeId}" ({nodeType}) has missing linked node "{linkedId}" in slot "{slot}"'
            },
            success: {
                title: "✅ Asset Saved Successfully",
                desktopNodes: "📦 Desktop Nodes: {count}",
                mobileNodes: "📦 Mobile Nodes: {count}",
                desktopSize: "💾 Desktop: {size} KB",
                mobileSize: "📱 Mobile: {size} KB",
                fonts: "🔤 Fonts: {count}",
                savedFrom: "Saved from: {platform}"
            }
        }
    })
}, 572887, e => {
    e.v({
        audioSettingsModal: {
            title: "Background Audio Settings",
            selectAudio: {
                label: "Select Audio",
                upload: "Upload",
                loading: "Loading...",
                placeholder: "-- Select audio template --",
                search: "Search...",
                noResults: "No results found",
                noTemplates: "No audio templates available",
                noPublicTemplates: "No system templates yet",
                noOwnerTemplates: "You have no personal templates yet",
                quickGuide: "Pick a music template, preview it, then press Select to apply.",
                scopeHint: "System templates are shown first by default.",
                selectedTemplateLabel: "Current",
                selectedBadge: "Selected",
                listenPreview: "Preview",
                stopPreview: "Stop",
                choose: "Select",
                countLabel: "{{count}} templates",
                scopes: {
                    public: "System templates",
                    owner: "Your templates"
                },
                sources: {
                    owner: "Yours",
                    system: "System"
                },
                browserNotSupported: "Your browser does not support audio."
            },
            tiers: {
                all: "All",
                free: "Free",
                pro: "Pro",
                vip: "VIP",
                custom: "Custom"
            },
            icons: {
                typeLabel: "Icon Type",
                typeStatic: "Static Icons",
                typeAnimated: "Animated Icons (VIP)",
                presetLabel: "Music icon",
                vipBadge: "(VIP)",
                proBadge: "(PRO+)",
                advancedTitle: "Advanced",
                customModeLabel: "Use custom icons",
                customModeHint: "Save with manual URL/icon picker and color settings.",
                usePresetHint: "Using the preset above.",
                modeAnimatedShort: "Animated",
                modeStaticShort: "Static",
                animatedFeatureName: "Animated audio icons",
                proFeatureName: "Pro animated audio icons",
                animatedVipHint: "Animated icons are available for VIP or Agent accounts only.",
                animatedTierHint: "Some animated icons require a PRO plan or higher.",
                noAnimatedPresets: "No animated icon presets available.",
                invalidAnimatedPreset: "Invalid animated icon preset.",
                defaultIcons: "Default Icons",
                defaultIconsHint: "Applies to icon states using static mode.",
                defaultIconsApplied: "Default static icon is active.",
                whenOpen: "When Open:",
                whenPause: "When Paused:",
                preview: "Preview:",
                color: "Color",
                select: "Select",
                urlPlaceholder: "Enter URL or select from library"
            },
            settings: {
                animations: "Enable Animations",
                autoPlay: "Auto-play on Scroll",
                tooltipLabel: "Tooltip content",
                tooltipPlaceholder: "Enter tooltip text for the music button",
                tooltipDefault: "Click here if you want to play music"
            },
            buttons: {
                remove: "Remove Audio",
                cancel: "Cancel",
                save: "Save Settings"
            },
            errors: {
                noAudio: "Please select an audio file.",
                animatedProRequired: "A PRO subscription or higher is required to save this animated icon.",
                animatedVipRequired: "A VIP subscription is required to save animated audio icons.",
                saveFailed: "Unable to save audio settings. Please try again."
            },
            confirm: {
                deleteMessage: "Are you sure you want to remove the audio settings?",
                deleteButton: "Remove"
            },
            upgrade: {
                title: "This track is not available for your current plan",
                description: "You need the {{tier}} plan or choose another track to save.",
                featureName: "Upgrade to {{tier}}"
            }
        }
    })
}, 816412, e => {
    e.v({
        calendarProviderModal: {
            title: "Add to Calendar",
            eventInfo: {
                locationIcon: "📍"
            },
            providers: {
                google: {
                    label: "Google Calendar",
                    description: "Open Google Calendar in browser"
                },
                apple: {
                    label: "Apple Calendar",
                    description: "Add to calendar (Safari)"
                },
                ics: {
                    label: "Download .ics file",
                    description: "Download calendar file to import"
                }
            },
            errors: {
                openCalendar: "Error opening calendar"
            }
        }
    })
}, 998867, e => {
    e.v({
        commonSettings: {
            tabs: {
                design: "Design",
                event: "Event",
                animation: "Animation",
                advanced: "Advanced"
            },
            quickActions: "Quick Actions",
            size: {
                title: "Size",
                width: "W",
                height: "H"
            },
            background: {
                title: "Background"
            },
            border: {
                title: "Border & Radius"
            },
            filter: {
                title: "Filter",
                blendMode: "Blend Mode",
                contrast: "Contrast",
                brightness: "Brightness",
                saturate: "Saturate",
                grayscale: "Grayscale",
                opacity: "Opacity",
                invert: "Invert",
                sepia: "Sepia",
                hueRotate: "Hue Rotate",
                contrastShort: "Contrast",
                brightnessShort: "Bright",
                saturateShort: "Saturate",
                grayscaleShort: "Gray",
                invertShort: "Invert",
                hueRotateShort: "Hue"
            },
            transform: {
                title: "Transform",
                origin: "Transform Origin",
                originShort: "Origin",
                rotate: "Rotate",
                skew: "Skew",
                perspective: "Perspective",
                presets: "Presets",
                reset: "Reset",
                "3d": "3D",
                "3dCard": "3D Card",
                skewPreset: "Skew",
                transparent: "Transparent",
                opacity: "Opacity"
            },
            transformOrigin: {
                center: "Center",
                topLeft: "Top Left",
                topCenter: "Top Center",
                topRight: "Top Right",
                centerLeft: "Center Left",
                centerRight: "Center Right",
                bottomLeft: "Bottom Left",
                bottomCenter: "Bottom Center",
                bottomRight: "Bottom Right"
            },
            shadow: {
                title: "Shadow"
            },
            overlay: {
                title: "Overlay"
            },
            brandProtection: {
                title: "Brand Protection",
                label: "Brand Element",
                description: "Mark this element as brand to protect from deletion\nNeed to lock element after editing"
            },
            visibility: {
                title: "Visibility",
                hiddenOnLoad: "Hidden on page load",
                hiddenOnLoadDescription: "Element will be hidden when entering preview mode. Can be shown via events."
            }
        }
    })
}, 433946, e => {
    e.v({
        colorPickerModal: {
            title: "Choose Color",
            recentColors: "Recently Used Colors",
            errors: {
                parseColor: "Failed to parse color",
                parseHistory: "Failed to load color history"
            }
        }
    })
}, 432882, e => {
    e.v({
        title: "Upload My Audio",
        name: {
            label: "Audio Name",
            placeholder: "Enter audio name"
        },
        tier: {
            label: "Tier",
            free: "Free",
            pro: "Pro",
            vip: "VIP"
        },
        file: {
            label: "Audio or Video File",
            clickToSelect: "Click to select audio or video file",
            supportedFormats: "Supported: MP3, WAV, OGG, MIDI, AAC, WebM, MP4, AVI, MOV, WMV, FLV, MKV, 3GP",
            change: "Change",
            willConvert: "(Will be converted to MP3)",
            videoConvertInfo: "📹 Video file will be automatically converted to MP3 when uploaded"
        },
        buttons: {
            cancel: "Cancel",
            upload: "Upload",
            uploading: "Uploading..."
        },
        uploading: {
            default: "Uploading...",
            convertingVideo: "Converting video to MP3 and uploading..."
        },
        errors: {
            unsupportedFormat: "Unsupported file format. Please select audio (MP3, WAV, OGG, MIDI, AAC, WebM) or video (MP4, AVI, MOV, WMV, FLV, MKV, 3GP) file.",
            fileTooLarge: "File too large. Maximum size for {{format}} is {{maxSize}}.",
            invalidFile: "Invalid file",
            pleaseSelectFile: "Please select audio or video file",
            pleaseEnterName: "Please enter audio name"
        }
    })
}, 510861, e => {
    e.v({
        title: "Cross-Platform Sync",
        titleCompact: "Sync",
        statusNotSynced: "Not Synced",
        description: {
            synced: "Element will sync between Desktop and Mobile",
            notSynced: "Element will not sync across platforms"
        }
    })
}, 236467, e => {
    e.v({
        title: "Custom Effects Settings",
        autoScroll: {
            enable: "Enable Auto Scroll",
            speedPreset: {
                label: "Scroll Pace",
                options: {
                    slow: "Slow",
                    normal: "Normal",
                    fast: "Fast"
                },
                hint: "Actual speed is still adaptively tuned by viewport height for smoother scrolling."
            }
        },
        buttons: {
            cancel: "Cancel",
            save: "Save"
        }
    })
}, 200510, e => {
    e.v({
        title: "Custom HTML Settings",
        description: "Add custom HTML code that will be inserted at the end of the page",
        htmlLabel: "HTML Code:",
        previewLabel: "Preview:",
        placeholder: "Enter your custom HTML code...",
        buttons: {
            cancel: "Cancel",
            save: "Save Settings",
            edit: "Edit",
            preview: "Preview"
        }
    })
}, 348714, e => {
    e.v({
        title: "Edit Element ID",
        label: "Element ID",
        placeholder: "Enter new ID for element",
        note: {
            title: "Note:",
            description: "ID must start with a letter and only contain letters, numbers, underscores (_) and hyphens (-)."
        },
        buttons: {
            cancel: "Cancel",
            save: "Save"
        },
        errors: {
            empty: "ID cannot be empty",
            invalidFormat: "ID must start with a letter and only contain letters, numbers, underscores and hyphens",
            duplicate: "This ID already exists, please choose a different ID",
            checkUniqueness: "Unable to check ID uniqueness",
            noElement: "No element selected",
            alreadyUsed: "This ID is already in use, please choose a different ID",
            updateFailed: "Unable to update ID. Please try again."
        }
    })
}, 881634, e => {
    e.v({
        sectionHeader: "Events",
        addEvent: "Add Event",
        noEvents: 'No events yet. Click "Add Event" to get started.',
        actionType: {
            label: "Action",
            click: "Click",
            firstClick: "First Click",
            secondClick: "Second Click",
            hover: "Hover",
            submit: "Submit Form"
        },
        eventType: {
            label: "Event",
            none: "None",
            navigateSection: "Navigate Section",
            call: "Make Call",
            link: "Open Link",
            toggleElement: "Toggle Element",
            copyClipboard: "Copy to Clipboard",
            email: "Open Email",
            openPopup: "Open Popup",
            openDropbox: "Open Dropbox",
            openLightbox: "Open LightBox",
            openAlbumModal: "Open Album Modal",
            addToCalendar: "Add to Calendar",
            setValue: "Set Value (Form)"
        },
        navigateSection: {
            selectSection: "Select Section:",
            placeholder: "Select section"
        },
        call: {
            phoneNumber: "Phone Number:",
            placeholder: "0123456789"
        },
        link: {
            url: "Link:",
            urlPlaceholder: "https://example.com",
            openOption: "Open Option:",
            currentTab: "Current Tab",
            newTab: "New Window",
            forwardGuestInfo: "Forward Guest Info",
            forwardGuestInfoHint: "Guest information (guestId) will be automatically added to the link",
            autoFillLabel: "Auto-fill from saved info",
            autoFillEmpty: 'No info available. Please fill in the "Auto-fill Info" section.',
            autoFill: {
                none: "No auto-fill",
                groomLink1: "Social Link 1 - Groom",
                groomLink2: "Social Link 2 - Groom",
                groomLink3: "Social Link 3 - Groom",
                brideLink1: "Social Link 1 - Bride",
                brideLink2: "Social Link 2 - Bride",
                brideLink3: "Social Link 3 - Bride"
            }
        },
        toggleElement: {
            hideElements: "Element IDs to hide (one per line or comma-separated):",
            hidePlaceholder: "element-id-1\nelement-id-2\nor: element-id-1, element-id-2",
            showElements: "Element IDs to show (one per line or comma-separated):",
            showPlaceholder: "element-id-3\nelement-id-4\nor: element-id-3, element-id-4"
        },
        copyClipboard: {
            elementId: "Element ID to copy:",
            elementIdPlaceholder: "element-id",
            defaultValue: "Default Value:",
            defaultValuePlaceholder: "Default text to copy",
            autoFillLabel: "Auto-fill from saved info",
            autoFillEmpty: 'No info available. Please fill in the "Auto-fill Info" section.',
            autoFill: {
                none: "No auto-fill",
                groomLink1: "Social Link 1 - Groom",
                groomLink2: "Social Link 2 - Groom",
                groomLink3: "Social Link 3 - Groom",
                groomGoogleMap: "Google Map URL - Groom",
                groomBankName: "Bank Name - Groom",
                groomAccountNumber: "Account Number - Groom",
                groomAccountHolder: "Account Holder - Groom",
                groomQrCode: "Bank QR URL - Groom",
                brideLink1: "Social Link 1 - Bride",
                brideLink2: "Social Link 2 - Bride",
                brideLink3: "Social Link 3 - Bride",
                brideGoogleMap: "Google Map URL - Bride",
                brideBankName: "Bank Name - Bride",
                brideAccountNumber: "Account Number - Bride",
                brideAccountHolder: "Account Holder - Bride",
                brideQrCode: "Bank QR URL - Bride"
            }
        },
        email: {
            address: "Email Address:",
            placeholder: "example@email.com"
        },
        popup: {
            selectPopup: "Select Popup:",
            placeholder: "Select popup",
            noPopups: "No popups available. Create a popup first."
        },
        dropbox: {
            selectDropbox: "Select Dropbox:",
            placeholder: "Select dropbox",
            noDropboxes: "No dropboxes available. Create a dropbox first.",
            position: "Position:",
            distance: "Distance (px):",
            positions: {
                topLeft: "Top Left",
                topCenter: "Top Center",
                topRight: "Top Right",
                bottomLeft: "Bottom Left",
                bottomCenter: "Bottom Center",
                bottomRight: "Bottom Right",
                leftTop: "Left Top",
                leftCenter: "Left Center",
                leftBottom: "Left Bottom",
                rightTop: "Right Top",
                rightCenter: "Right Center",
                rightBottom: "Right Bottom"
            }
        },
        lightbox: {
            type: "Type:",
            typePlaceholder: "Select media type",
            image: "Image",
            video: "Video",
            imageLabel: "Image:",
            changeImage: "Change Image",
            selectFromLibrary: "Select from Library",
            pasteImageUrl: "Or paste image URL:",
            imagePlaceholder: "https://example.com/image.jpg",
            videoType: "Video Type:",
            videoTypePlaceholder: "Select video type",
            youtube: "Youtube",
            meHappyVideo: "meHappyVideo",
            youtubeUrl: "Youtube URL:",
            videoUrl: "Video:",
            changeVideo: "Change Video",
            pasteVideoUrl: "Or paste video URL:",
            youtubePlaceholder: "https://www.youtube.com/watch?v=...",
            videoPlaceholder: "https://example.com/video.mp4",
            delete: "Delete"
        },
        albumModal: {
            selectAlbumModal: "Select Album Modal:",
            placeholder: "Select Album Modal",
            noAlbumModals: "No Album Modals available. Add an Album Modal to the page first."
        },
        calendar: {
            title: "Event Title:",
            titlePlaceholder: "Wedding Ceremony",
            description: "Description:",
            descriptionPlaceholder: "Event description...",
            location: "Location:",
            locationPlaceholder: "Wedding venue...",
            date: "Event Date:",
            datePlaceholder: "yyyy-mm-dd",
            autoFill: "Auto Fill",
            autoFillHint: '💡 Click "Auto Fill" to use date from page: {date}',
            startTime: "Start Time:",
            endTime: "End Time:",
            preview: "Preview:",
            defaultTitle: "Important Event",
            addToCalendar: "📅 Add to Calendar (Preview)",
            textOverrides: {
                title: "Display labels",
                modalTitle: "Modal title",
                modalTitlePlaceholder: "Modal title (leave empty for default)",
                displayDate: "Displayed date line",
                displayDatePlaceholder: "Displayed date line (leave empty for auto-format)",
                googleLabel: "Google label",
                googleLabelPlaceholder: "Google label (leave empty for default)",
                googleDescription: "Google description",
                googleDescriptionPlaceholder: "Google description (leave empty for default)",
                appleLabel: "Apple label",
                appleLabelPlaceholder: "Apple label (leave empty for default)",
                appleDescription: "Apple description",
                appleDescriptionPlaceholder: "Apple description (leave empty for default)",
                icsLabel: "ICS label",
                icsLabelPlaceholder: "ICS label (leave empty for default)",
                icsDescription: "ICS description",
                icsDescriptionPlaceholder: "ICS description (leave empty for default)"
            }
        },
        setValue: {
            targetId: "Form Element ID:",
            targetIdPlaceholder: "standard-fullName, custom-xxx, wishform-guestName...",
            targetIdHint: "See ID in form field settings (RSVPForm/WishForm)",
            value: "Value to set:",
            valuePlaceholder: "Enter value to fill in form..."
        },
        triggerAutoScroll: {
            label: "Auto-scroll Trigger",
            hint: "When this event is fired, the page auto-scroll starts (unless it has been permanently stopped)."
        },
        toast: {
            copySuccess: "Copied successfully!",
            copyError: "Failed to copy",
            popupOpened: "Popup opened",
            dropboxOpened: "Dropbox opened",
            lightboxOpened: "Lightbox opened",
            albumModalOpened: "Album opened",
            calendarOpened: "Calendar opened",
            navigated: "Navigated to section",
            linkOpened: "Opening link...",
            callStarted: "Opening phone app...",
            emailOpened: "Opening email app...",
            elementToggled: "Display updated",
            valueSet: "Value set"
        }
    })
}, 647834, e => {
    e.v({
        title: "File Management",
        fileTypes: {
            image: "Image",
            video: "Video",
            audio: "Audio",
            document: "Document",
            font: "Font",
            icon: "Icon",
            other: "Other"
        },
        tagFilter: {
            label: "Filter by tag:",
            loading: "Loading...",
            searchPlaceholder: "Search tags...",
            all: "All",
            showMore: "+ Show {{count}} more tags",
            collapse: "- Collapse",
            currentTag: "Tag: {{tag}}"
        },
        actions: {
            selectAll: "Select all",
            deselectAll: "Deselect all",
            selectedCount: "{{count}} files selected",
            delete: "Delete selected",
            deleting: "Deleting..."
        },
        loading: "Loading file list...",
        error: "Error loading files: {{message}}",
        noFiles: "No files of this type yet.",
        allLoaded: "All files loaded",
        deleteConfirm: {
            message: "Are you sure you want to delete {{count}} selected files? This action cannot be undone.",
            confirmLabel: "Delete",
            error: "Please select at least one file to delete.",
            errorDeleting: "An error occurred while deleting files. Please try again."
        }
    })
}, 143705, e => {
    e.v({
        title: {
            prefix: "Select or Upload",
            image: "Image",
            video: "Video",
            audio: "Audio",
            document: "Document",
            font: "Font",
            file: "File"
        },
        supportedFormats: {
            image: "Supported: JPG, PNG, GIF, WebP, SVG, BMP, TIFF",
            video: "Supported: MP4, MOV, AVI, WMV, WebM, OGG, 3GP",
            audio: "Supported: MP3, WAV, OGG, MIDI, WebM, AAC",
            document: "Supported: PDF, DOC, DOCX, XLS, XLSX, TXT, CSV",
            font: "Supported: TTF, OTF, WOFF, WOFF2",
            all: "All file types supported"
        },
        tabs: {
            select: "Select from Library",
            upload: "Upload New",
            storage: "Buy More Photos"
        },
        loading: "Loading file list...",
        error: "Error loading files: {{message}}",
        noFiles: "No files uploaded yet.",
        tagFilter: {
            label: "Filter by tag:",
            searchPlaceholder: "Search tags...",
            all: "All",
            showMore: "+ Show {{count}} more tags",
            collapse: "- Collapse",
            noFilesWithTag: 'No files with tag "{{tag}}"'
        },
        upload: {
            clickToSelect: "Click to select files to upload",
            multipleSupport: "Multiple file selection supported",
            uploading: "Uploading files...",
            filesSelected: "{{count}} files selected:",
            fileSelected: "File selected:",
            total: "Total: {{size}} MB",
            tagLabel: "Tag (optional)",
            tagPlaceholder: "Enter tag for file (e.g.: asset, profile-image, ...)",
            tagHelp: "Tags help categorize and search files more easily.",
            tagHelpMultiple: " This tag will be applied to all {{count}} selected files.",
            tagHelpSingle: " You can choose from existing tags or enter a new one.",
            uploadButton: "Upload",
            uploadMultiple: "Upload {{count}} files",
            cancel: "Cancel",
            successSingle: "✓ Upload successful!",
            successMultiple: "✓ {{count}} files uploaded successfully!",
            failedCount: "✗ {{count}} files failed to upload:",
            retrying: "Retrying...",
            retry: "Retry {{count}} files",
            switchToLibrary: 'You can switch to the "Select from Library" tab to use uploaded files.'
        },
        validation: {
            fileTooLarge: "File too large. Maximum size for {{extension}} is {{maxSize}} (current file: {{currentSize}})",
            unsupportedType: "Unsupported file type. Please select: {{formats}}",
            invalid: "Invalid file"
        },
        preview: {
            browserNotSupport: "Your browser does not support {{type}}."
        },
        multiSelect: {
            selected: "Selected: {{count}}/{{max}} files",
            deselectAll: "Deselect all",
            confirmHint: 'Click "Confirm" to select these {{count}} files',
            confirm: "Confirm ({{count}})",
            close: "Close"
        },
        infiniteScroll: {
            endMessage: "All files loaded"
        }
    })
}, 573196, e => {
    e.v({
        title: "Select or Upload Font",
        tabs: {
            select: "Select from Library",
            upload: "Upload New Font"
        },
        select: {
            loading: "Loading font list...",
            error: "Error loading fonts: {{message}}",
            empty: "No fonts uploaded yet.",
            searchPlaceholder: "Search fonts by name...",
            noResults: 'No fonts found matching "{{searchTerm}}"',
            previewText: "meHappy",
            previewNumbers: "0123456789 !@#$%^&*()",
            allLoaded: "All fonts loaded"
        },
        upload: {
            clickToSelect: "Click to select font to upload",
            supportedFormats: "Supports TTF, OTF, WOFF, WOFF2 formats",
            uploading: "Uploading...",
            success: "Upload successful!",
            successHint: 'You can switch to the "Select from Library" tab to use this font.'
        },
        error: {
            title: "Error Loading Font Selector",
            message: "There was a problem loading the font selector.",
            close: "Close"
        }
    })
}, 376823, e => {
    e.v({
        selectedCount: "{{count}} elements selected",
        createGroup: "Create Group",
        clearSelection: "Clear Selection",
        ungroup: "Ungroup",
        toast: {
            nestedGroupNotAllowedTitle: "Cannot create group",
            nestedGroupNotAllowedDescription: "Nested groups are not supported. Please ungroup the current group first."
        }
    })
}, 342398, e => {
    e.v({
        title: "Select Icon",
        tabs: {
            fontawesome: "System Icons",
            assets: "Templates",
            upload: "Upload SVG"
        },
        assets: {
            noAssets: "No icon templates available"
        },
        search: {
            placeholder: "Search icons...",
            noResults: "No icons found"
        },
        upload: {
            button: "Click to select SVG file to upload",
            uploading: "Uploading SVG...",
            format: "Supports SVG format, max 2MB",
            uploadedTitle: "Uploaded SVG Icons",
            allLoaded: "All icons loaded"
        },
        footer: {
            showing: "Showing {{count}} icons",
            showingWithSearch: 'Showing {{count}} icons for "{{term}}"'
        },
        errors: {
            invalidFileType: "Please select an SVG file",
            fileTooLarge: "SVG file must be smaller than 2MB",
            uploadError: "Error uploading SVG",
            loadError: "Error loading SVG"
        }
    })
}, 626886, e => {
    e.v({
        closePopup: "Close popup",
        closeDropbox: "Close dropbox",
        dragToMove: "Drag to move",
        bringForward: "Bring forward",
        sendBackward: "Send backward",
        duplicate: "Duplicate element",
        changeImage: "Change image",
        delete: "Delete element",
        hideToolbar: "Hide toolbar",
        showToolbar: "Show toolbar",
        moreOptions: "More options",
        lockElement: "Lock element",
        unlockElement: "Unlock element",
        hideElement: "Hide element",
        showElement: "Show element",
        syncFromMobile: "Sync from Mobile",
        syncFromDesktop: "Sync from Desktop",
        copyElement: "Copy element",
        saveTemplate: "Save template",
        unlockToDelete: "Unlock to delete this element",
        quickAdd: "Quick Add",
        hidden: "Hidden",
        visible: "Visible"
    })
}, 54440, e => {
    e.v({
        show: "Show",
        hide: "Hide",
        unlock: "Unlock",
        lock: "Lock",
        bringForward: "Bring forward",
        sendBackward: "Send backward",
        duplicate: "Duplicate",
        saveTemplate: "Save template",
        syncFromMobile: "From Mobile",
        syncFromDesktop: "From Desktop",
        closePopup: "Close popup",
        closeDropbox: "Close dropbox",
        delete: "Delete"
    })
}, 891501, e => {
    e.v({
        title: "Wishes Notification Settings",
        cancel: "Cancel",
        save: "Save Settings",
        premium: "Premium",
        enable: "Enable/Disable Wishes Notification:",
        enableLabel: "Enable wishes notification",
        disableLabel: "Disable wishes notification",
        enableDescription: "Disable this feature if the page has no wishes or to turn off in template preview",
        displayDuration: "Display Duration (s):",
        seconds: "seconds",
        size: "Size:",
        sizePlaceholder: "Select size",
        sizeSmall: "Small",
        sizeMedium: "Medium",
        sizeLarge: "Large",
        iconDisplay: "Icon Display:",
        showIcon: "Show icon",
        useDefaultIcon: "Use default icon",
        iconUrlPlaceholder: "Enter icon URL or select from library",
        selectIcon: "Select icon",
        iconColor: "Icon color"
    })
}, 492406, e => {
    e.v({
        title: "Particle Effects Settings",
        effectType: {
            label: "Effect Type",
            snow: "Snow Effect",
            heart: "Heart Effect",
            custom: "Custom Effect"
        },
        icons: {
            label: "Icons",
            add: "Add icon",
            remove: "Remove icon"
        },
        fallMode: {
            label: "Fall Mode",
            straight: "Straight Fall",
            wobble: "Wobble Fall",
            tumble: "Tumble Fall",
            float: "Float",
            description: {
                straight: "Particles fall straight down without rotation",
                wobble: "Particles gently wobble while falling",
                tumble: "Particles rotate and tumble as they fall",
                float: "Particles float gently in the air"
            }
        },
        preview: "Preview:",
        iconColor: "Icon Color",
        customIcon: {
            label: "Select Custom Icon",
            button: "Select Icon"
        },
        coverageLevel: "Coverage Level",
        fallSpeed: "Fall Speed",
        minSize: "Minimum Size",
        maxSize: "Maximum Size",
        tooltips: {
            coverageLevel: "Adjust the coverage level of the effect",
            fallSpeed: "Adjust the falling speed of particles",
            minSize: "Minimum size of particles (px)",
            maxSize: "Maximum size of particles (px)"
        },
        buttons: {
            remove: "Remove Effects",
            cancel: "Cancel",
            apply: "Apply",
            preview: "Preview"
        },
        confirmDelete: {
            message: "Are you sure you want to remove all effects?",
            confirm: "Remove"
        },
        errors: {
            noIcon: "Please select an icon to use the effect.",
            title: "Error"
        }
    })
}, 579793, e => {
    e.v({
        pinElement: "Pin Element",
        enablePinning: "Enable Pinning",
        position: "Position",
        selectPosition: "Select Position",
        positions: {
            auto: "Auto Top/Bottom",
            topLeft: "Top Left",
            topCenter: "Top Center",
            topRight: "Top Right",
            middleLeft: "Middle Left",
            middleRight: "Middle Right",
            bottomLeft: "Bottom Left",
            bottomCenter: "Bottom Center",
            bottomRight: "Bottom Right"
        },
        stickyDistanceFromTop: "Sticky Distance from Top (px)",
        distanceFromTop: "Distance from Top (px)",
        distanceFromBottom: "Distance from Bottom (px)",
        distanceFromLeft: "Distance from Left (px)",
        distanceFromRight: "Distance from Right (px)"
    })
}, 871672, e => {
    e.v({
        resizeSectionHeight: "Resize section height",
        addNewSectionBelow: "Add new section below",
        addSection: "Add section"
    })
}, 759819, e => {
    e.v({
        show: "Show",
        hide: "Hide",
        unlock: "Unlock",
        lock: "Lock",
        moveUp: "Move Up",
        moveDown: "Move Down",
        addNew: "Add New",
        duplicate: "Duplicate",
        saveTemplate: "Save Template",
        delete: "Delete",
        fromMobile: "From Mobile",
        fromDesktop: "From Desktop"
    })
}, 937179, e => {
    e.v({
        label: "🎯 Select Area"
    })
}, 717611, e => {
    e.v({
        title: "Share Preview",
        whatIsSeo: "What will people see when the link is shared?",
        seoExplanation: "When you share your invitation link via Zalo, Facebook, Messenger, etc., the preview shows a title, short description, and image. You can edit these so it's clear before they open the link.",
        cancel: "Cancel",
        save: "Save Settings",
        error: "Error",
        titleRequired: "Please enter a display title.",
        descriptionRequired: "Please enter a short description.",
        pageTitle: "Display title *:",
        pageTitlePlaceholder: "E.g. Minh & Lan's Wedding",
        pageTitleHelper: "{{count}}/200 characters.",
        guestTitle: "Title per guest (optional):",
        guestTitlePlaceholder: "E.g. Invitation for {guestName}",
        guestTitleHelper: "{{count}}/200 characters. You can use {guestName}, {TenChuRe}, {TenCoDau}, {Address}, {ThongTinKhac}.",
        guestTitleExample: "E.g: Invitation {TenChuRe} & {TenCoDau} for {guestName}",
        pageDescription: "Short description *:",
        pageDescriptionPlaceholder: "E.g. We would love to celebrate with you.",
        pageDescriptionHelper: "{{count}}/160 characters.",
        guestDescription: "Description per guest (optional):",
        guestDescriptionPlaceholder: "E.g. Dear {guestName}, please join us...",
        guestDescriptionHelper: "{{count}}/160 characters. You can use {guestName}, {TenChuRe}, {TenCoDau}, {Address}, {ThongTinKhac}.",
        guestDescriptionExample: "E.g: Dear {guestName}, please join the wedding of {TenChuRe} and {TenCoDau}",
        keywords: "Keywords (optional):",
        keywordPlaceholder: "Type a keyword and press Enter",
        addKeyword: "Add",
        socialImage: "Share image:",
        socialImagePlaceholder: "Paste an image link or pick from library",
        selectImage: "Select Image",
        socialImageHelper: "Recommended size: 1200x630.",
        favicon: "Browser tab icon (favicon):",
        faviconPlaceholder: "Paste an icon link or pick from library",
        selectIcon: "Select Icon",
        faviconHelper: "Recommended: 32x32 or 16x16 PNG/ICO.",
        password: "Lock with password (optional):",
        passwordPlaceholder: "Enter a password, or leave empty",
        passwordHelper: "If set, viewers must enter it to access the page.",
        socialImageAlt: "Social Media Preview",
        faviconAlt: "Favicon Preview"
    })
}, 437767, e => {
    e.v({
        selectedFont: "Selected Font:",
        selectFromLibrary: "Select from Library"
    })
}, 305792, e => {
    e.v({
        title: "Page Settings",
        cancel: "Cancel",
        save: "Save",
        error: "Error",
        saveError: "Failed to save viewport settings. Please try again.",
        mobileWidth: "Mobile Width",
        desktopWidth: "Desktop Width",
        mode: "Mode",
        mobileBackground: "Mobile Background",
        custom: "Custom",
        preset: "Preset",
        customPlaceholder: "Example: {{example}}",
        customHelper: "Enter width (example: {{examples}})",
        mobileOnlyConfirmTitle: "Confirm Mobile Only Mode",
        mobileOnlyConfirmMessage: 'Are you sure you want to enable "Mobile Only" mode?\n\nWhen enabled:\n• Editor will only display mobile interface\n• Cannot switch to desktop mode\n• Sync between mobile and desktop still works normally\n• Desktop content is still maintained and can be synced\n\nClick Confirm to continue or Cancel to abort.',
        confirm: "Confirm",
        bulkFontChange: "Bulk Font Change",
        bulkFontChangeHint: "Select a font to apply to all text elements on the page",
        selectFont: "Select font...",
        fontApplied: "Font Applied",
        fontAppliedCount: "Changed font for {{count}} elements"
    })
}, 878339, e => {
    e.v({
        title: "Quick Invite Setup",
        loading: "Loading information...",
        infoNotice: {
            withData: "Information loaded from the system. You can edit and apply to the design.",
            withoutData: "Enter information and apply to the marked fields in the design."
        },
        uploadSection: {
            description: "Upload a CSV or Excel file to auto-fill information",
            quickImport: "Quick import from file:",
            quickActions: "Quick actions:"
        },
        sections: {
            basic: "Basic Information",
            contact: "Contact & Description",
            family: "Family Information",
            bank: "Bank Information",
            datetime: "Date & Time",
            social: "Domain & Social Media",
            events: "Events"
        },
        sectionsShort: {
            basic: "Basic",
            contact: "Contact",
            family: "Family",
            bank: "Bank",
            datetime: "Date",
            social: "Social",
            events: "Events"
        },
        fields: {
            groom: "Groom",
            bride: "Bride",
            date: "Wedding Date",
            location: "Location",
            phone: "Phone Number",
            address: "Address",
            description: "Description",
            father: "Father",
            mother: "Mother",
            bankName: "Bank Name",
            accountNumber: "Account Number",
            accountHolder: "Account Holder",
            qrCode: "QR Code",
            hour: "Hour",
            dayOfWeek: "Day of Week",
            day: "Day",
            month: "Month",
            year: "Year",
            domain: "Domain",
            subDomain: "Sub Domain",
            socialLink1: "Social Link 1",
            socialLink2: "Social Link 2",
            socialLink3: "Social Link 3",
            solarDateTime: "Date & Time (Solar)",
            lunarTime: "Date & Time (Lunar)",
            eventTitle: "Event title",
            eventDateTime: "Event date & time",
            eventVenueLabel: "Venue label",
            eventLocation: "Address",
            eventMapUrl: "Directions link",
            eventGiftUrl: "Gift link"
        },
        placeholders: {
            groom: "Enter groom's name",
            bride: "Enter bride's name",
            date: "E.g: 01/01/2024",
            location: "Enter wedding location",
            groomPhone: "Enter groom's phone",
            bridePhone: "Enter bride's phone",
            groomAddress: "Enter groom's address",
            brideAddress: "Enter bride's address",
            groomDescription: "Description about groom",
            brideDescription: "Description about bride",
            groomFather: "Groom's father name",
            groomMother: "Groom's mother name",
            brideFather: "Bride's father name",
            brideMother: "Bride's mother name",
            bankName: "E.g: Vietcombank",
            accountNumber: "Enter account number",
            accountHolder: "Account holder name",
            qrCodeUrl: "QR code image URL",
            hour: "E.g: 10:00",
            dayOfWeek: "E.g: Saturday",
            day: "E.g: 15",
            month: "E.g: 12",
            year: "E.g: 2024",
            lunarTime: "E.g: 15:28 Wednesday, 10th December Year of the Dragon",
            domain: "E.g: example.com",
            subDomain: "E.g: wedding.example.com",
            socialLink: "Facebook, Instagram, etc.",
            eventTitle: "E.g: Groom family wedding ceremony",
            eventVenueLabel: "E.g: At the groom's home:",
            eventLocation: "E.g: Hoan Kiem, Ha Noi",
            eventMapUrl: "E.g: https://maps.google.com/...",
            eventGiftUrl: "E.g: https://momo.vn/..."
        },
        labels: {
            groomParents: "Groom's Parents",
            brideParents: "Bride's Parents",
            solarCalendar: "Solar Calendar",
            lunarCalendar: "Lunar Calendar",
            groomSolarCalendar: "Groom's Date & Time (Solar)",
            brideSolarCalendar: "Bride's Date & Time (Solar)",
            groomSocialLinks: "Social Links - Groom",
            brideSocialLinks: "Social Links - Bride",
            eventsList: "Events list",
            eventIndex: "Event {{index}}"
        },
        buttons: {
            close: "Close",
            apply: "Apply Information",
            select: "Select",
            uploadFile: "Upload File",
            downloadTemplate: "Download Template",
            quickReplaceImages: "Quick Replace Images",
            addEvent: "Add event"
        },
        quickGuide: {
            title: "3 quick steps",
            step1: "1. Choose a section below",
            step2: "2. Fill in your key information",
            step3: '3. Tap "Apply Information" to finish'
        },
        messages: {
            noEvents: "No events yet. Add events so the Event selector can auto-generate cards."
        },
        toast: {
            success: {
                title: "Success",
                description: "Information has been applied to the fields!"
            },
            uploadSuccess: {
                title: "Information imported from file!"
            },
            uploadError: {
                title: "File read error",
                invalidFormat: "Only CSV or Excel files are supported",
                emptyFile: "File is empty or has no data"
            }
        },
        mapFeature: {
            featureName: "Basic Map"
        }
    })
}, 359391, e => {
    e.v({
        title: "Concurrent Editing Warning",
        activeUsers: "{{count}} people are editing",
        pageBeingEdited: "This page is currently being edited by {{count}} other people",
        templateBeingEdited: "This template is currently being edited by {{count}} other people",
        continueQuestion: "Do you want to continue editing?",
        warningNote: "Note:",
        warningMessagePage: "If you continue, multiple people will be editing this page simultaneously. This may lead to data conflicts and lost changes.",
        warningMessageTemplate: "If you continue, multiple people will be editing this template simultaneously. This may lead to data conflicts and lost changes.",
        risk1: "Changes may overwrite each other",
        risk2: "Some edits may be lost",
        risk3: "We recommend waiting for others to finish before editing",
        cancelButton: "Go Back",
        acceptButton: "Accept"
    })
}, 895564, e => {
    e.v({
        title: "Select page to download",
        description: "Select a specific page or download all pages at once.",
        downloadAll: "Download all ({{count}} pages)",
        download: "Download",
        page: "Page {{number}}",
        close: "Close",
        noPages: "No pages found to download.",
        success: {
            title: "Success",
            singlePage: 'Successfully downloaded "{{pageName}}"!',
            allPages: "Successfully downloaded all {{count}} pages!"
        },
        error: {
            title: "Error",
            singlePage: 'Could not download "{{pageName}}". Please try again.',
            allPages: "Could not download all pages. Please try again."
        }
    })
}, 196935, e => {
    e.v({
        copyIdSuccess: "Copied!",
        copyId: "Copy ID",
        editElementId: "Edit Element ID",
        loadingSettings: "Loading settings...",
        retryingAttempt: "Retrying attempt {{count}}/3",
        failedToLoadSettings: "Failed to load settings",
        refreshToRetry: "Please refresh the page (F5) to try again",
        initializing: "Initializing...",
        pleaseWait: "Please wait...",
        selectElementToEdit: "Select an element to start editing",
        premiumElement: "Premium Element",
        unlockToEditBranding: "Unlock feature to edit or remove meWedding logo",
        unlockFeature: "Unlock Now"
    })
}, 688666, e => {
    e.v({
        ariaLabel: "Editor sidebar"
    })
}, 761002, e => {
    e.v({
        header: {
            title: "Manage or add elements to page"
        },
        tabs: {
            basic: "Basic",
            file: "File",
            popup: "Popup",
            dropbox: "Dropbox",
            albumModal: "Album Modal",
            quickActions: "QuickActions"
        },
        mobile: {
            advanced: "Advanced"
        },
        tabGuide: {
            basic: "The Basic tab contains essential design elements like: containers, text, images, buttons, icons, lines, wish forms, RSVP, calendar, countdown, and custom HTML elements.",
            file: "The File tab allows you to manage and insert uploaded files such as images, videos, audio, documents, and fonts into your design.",
            popup: "The Popup tab lets you create and manage custom popup windows. Popups can be triggered by events like button clicks or automatically opened.",
            dropbox: "The Dropbox tab allows creating tooltips/dropdowns that appear on hover or click. Ideal for menus, detailed info, or hidden content.",
            albumModal: "The Album Modal tab lets you create a gallery-style photo album modal. This modal can be triggered from other elements through events.",
            quickActions: "The QuickActions tab lets you create floating action buttons with multiple sub-buttons. Perfect for features like calling, messaging, and navigation."
        },
        elements: {
            container: "Container/ Box",
            text: "Text",
            guestText: "Guest Text",
            button: "Button",
            form: "Form",
            image: "Image",
            album: "Photo Album",
            icon: "Icon",
            line: "Line",
            video: "Video",
            calendar: "Calendar",
            eventcards: "Event cards",
            countdown: "Countdown",
            html: "HTML",
            page: "Page",
            section: "Section",
            weddingCard: "Wedding card",
            giftBox: "Gift box",
            wishlist: "Wishlist",
            other: "Other",
            audio: "Audio",
            document: "Document",
            font: "Font",
            createNew: "Create New",
            popup: "Popup"
        },
        actions: {
            addNew: "Add New",
            delete: "Delete Template",
            deletePopup: "Delete Popup",
            deleteDropbox: "Delete Dropbox",
            deleteAlbumModal: "Delete Album Modal",
            deleteQuickActions: "Delete QuickActions",
            deleteTemplate: "Delete popup template",
            deleteDropboxTemplate: "Delete dropbox template",
            deleteQuickActionsTemplate: "Delete QuickActions template",
            deleteAsset: "Delete asset"
        },
        tags: {
            selectGroup: "Select Group:",
            searchGroup: "Search group...",
            all: "All",
            showMore: "Show more",
            collapse: "Collapse",
            tag: "tag"
        },
        assetGroups: {
            private: "Your templates",
            public: "System templates"
        },
        messages: {
            loading: "Loading ...",
            loadingFiles: "Loading files...",
            loadingContent: "Loading content...",
            pleaseWait: "Please wait a moment",
            noTemplates: "No templates in this category",
            noTemplatesInGroup: "No templates in group",
            noFiles: "No files in this category",
            noFilesInGroup: "No files in group",
            noAssets: "No assets in this category",
            noAssetsInGroup: "No assets in group",
            noName: "No Name",
            assetLoaded: "Added",
            intoEditor: "to editor",
            noPopups: "No popups yet. Create a new popup to get started.",
            noDropboxes: "No dropboxes yet. Create a new dropbox to get started.",
            noAlbumModals: "No Album Modals yet. Create a new Album Modal to get started.",
            noQuickActions: "No QuickActions yet. Create new QuickActions to get started.",
            loadingPopupTemplates: "Loading popup templates...",
            loadingDropboxTemplates: "Loading dropbox templates...",
            loadingQuickActionsTemplates: "Loading QuickActions templates...",
            eventCardsLimitTitle: "EventCards limit reached",
            eventCardsLimitDescription: "Each platform can only contain one EventCards component."
        },
        fileTab: {
            inPage: "In Page",
            templates: "Templates",
            emptyPopup: "Empty Popup",
            emptyPopupDesc: "Create new popup with empty content",
            emptyDropbox: "Empty Dropbox",
            emptyDropboxDesc: "Create new dropbox with empty content",
            emptyQuickActions: "Empty QuickActions",
            emptyQuickActionsDesc: "Create new QuickActions with empty content",
            popupTemplate: "Popup Template",
            dropboxTemplate: "Dropbox Template",
            quickActionsTemplate: "QuickActions Template",
            clickToAdd: "Click to add popup template",
            clickToAddDropbox: "Click to add dropbox template",
            clickToAddQuickActions: "Click to add QuickActions template",
            dropboxInfo: "Dropbox works like a tooltip that appears when triggered by an event",
            albumModalInfo: "Album Modal allows you to create a modal displaying photo albums that can be triggered from other components through events.",
            quickActionsInfo: "QuickActions are floating quick action buttons that allow users to perform important actions quickly",
            quickActionsDetailInfo: "QuickActions allows you to create floating quick action buttons with multiple action buttons that can be configured to perform different events. You can create multiple QuickActions and place them at different positions on the page.",
            actionButtons: "action button(s)",
            position: "Position:",
            defaultPosition: "bottom-right (default)",
            asset: "Asset"
        },
        positions: {
            topLeft: "Top Left",
            topCenter: "Top Center",
            topRight: "Top Right",
            middleLeft: "Middle Left",
            middleRight: "Middle Right",
            bottomLeft: "Bottom Left",
            bottomCenter: "Bottom Center",
            bottomRight: "Bottom Right"
        },
        errors: {
            invalidAsset: "Invalid Asset Structure",
            circularReference: "Asset has circular reference(s). Need to re-save asset.",
            incompleteAsset: "Incomplete Asset",
            missingNodes: "Asset has",
            nodeMissing: "missing node(s)",
            loadFailed: "Load Asset Failed",
            cannotLoad: "Cannot load asset from library:",
            cannotLoadSection: "Cannot load Section asset from library:",
            cannotLoadPage: "Cannot load Page asset from library:",
            processingError: "Error processing asset data:",
            invalidPageAsset: "Invalid Page Asset",
            pageCircularRef: "Page asset has circular reference(s). This asset needs to be re-saved.",
            incompleteSection: "Incomplete Section",
            sectionMissingNodes: "Section asset has",
            and: "and",
            otherNodes: "other node(s)",
            otherCircularRefs: "other circular ref(s)",
            needResave: "This asset needs to be re-saved to fix structure."
        },
        confirmations: {
            deleteAssetMessage: 'Are you sure you want to delete template "{{name}}"? This action cannot be undone.',
            deleteNodeMessage: "Are you sure you want to delete this {{type}}?",
            deleteButton: "Delete"
        },
        guideModal: {
            title: "User Guide",
            images: "Illustrations",
            noImages: "No illustrations available",
            understood: "Got it"
        }
    })
}, 518880, e => {
    e.v({
        backButton: "Back",
        addElements: "Add elements",
        layer: "Layer",
        undo: "Undo",
        undoShortcut: "Undo (Ctrl+Z)",
        redo: "Redo",
        redoShortcut: "Redo (Ctrl+Shift+Z or Ctrl+Y)",
        settings: "Settings",
        effectsSettings: "Effects Settings",
        audioSettings: "Background Audio Settings",
        customHtmlSettings: "Custom HTML Settings",
        seoSettings: "SEO Settings",
        guestSeoSettings: "Guest SEO Settings",
        notificationSettings: "Wishes Notification Settings",
        customEffectsSettings: "Custom Effects Settings",
        openingEffectSettings: "Opening Effect",
        fileManagement: "File Management",
        viewportSettings: "Page Settings",
        autoFillInfo: "Quick Build",
        quickBuild: "Quick Build",
        quickBuildChooser: {
            title: "Quick Build",
            description: "Choose what you want to update before jumping into the editor.",
            personalInfo: "Personal info",
            quickReplace: "Quick image replace"
        },
        themeManager: "Theme Colors",
        themeManagerSelectDesc: "Select a color palette to apply to the entire page.",
        addPalette: "Add Palette",
        editPalette: "Edit Palette",
        savePalette: "Save Palette",
        deletePaletteConfirm: "Are you sure you want to delete this palette?",
        paletteName: "Palette Name",
        desktopEdit: "Desktop - Edit desktop version",
        desktopLabel: "Desktop",
        mobileEdit: "Mobile - Edit mobile version",
        mobileLabel: "Mobile",
        save: "Save",
        edit: "Edit",
        publish: "Publish",
        unpublish: "Unpublish",
        unpublishPage: "Unpublish page",
        publishPage: "Publish page",
        unpublishTemplate: "Unpublish template",
        publishTemplate: "Publish template",
        publishSocialGate: {
            title: "Before publishing, support MeHappy",
            description: "To unlock publishing, please visit one MeHappy social channel and wait {{seconds}} seconds.",
            freeNotice: "Free users need to visit social channels to unlock publishing.",
            followOnlyDescription: "Your page is published. If you can, please support MeHappy on the social channels below.",
            followOnlyNotice: "Pro/VIP does not require interaction to publish.",
            linksHint: "Click at least one social link below:",
            requiredVisitNotice: "You need to visit a social channel before publishing your page.",
            visitRequired: "Please visit one social channel before publishing",
            visitRequirement: "Visited at least one social channel",
            visitHint: "Open one social channel above to continue publishing.",
            startCountdownHint: "Click one social channel to start the {{seconds}}-second countdown.",
            waitRequirement: "Unlocking publish... {{seconds}} seconds remaining.",
            readyToPublish: "You can publish now.",
            publishButton: "Publish now",
            cancelButton: "Later"
        },
        downloadLogo: "Download logo",
        downloadPage: "Download page",
        downloadLogoShort: "Download logo",
        downloadPageShort: "Download page",
        hideSidebar: "Hide sidebar",
        showSidebar: "Show sidebar",
        loading: "Loading ...",
        success: "Success",
        error: "Error",
        downloadLogoSuccess: "Logo downloaded successfully!",
        downloadLogoError: "Unable to download logo. Please try again.",
        downloadPageSuccess: "Page downloaded successfully!",
        downloadPageError: "Unable to download page. Please try again.",
        noPageFound: "No pages found to download.",
        pageNotFound: "Page information not found",
        templateNotFound: "Template information not found",
        publishPageSuccess: "Page published successfully",
        unpublishPageSuccess: "Page unpublished",
        publishTemplateSuccess: "Template published successfully",
        unpublishTemplateSuccess: "Template unpublished",
        publishError: "An error occurred while updating publish status",
        navigationConfirmTitle: "Confirm leaving page",
        navigationConfirmMessage: "You have unsaved changes. Are you sure you want to leave this page?",
        leaveButton: "Leave",
        stayButton: "Stay",
        premiumAssetsFeature: "Premium Design Templates",
        premiumAssetsWarningTitle: "Premium Design Templates Detected",
        premiumAssetsWarningDescription: "Your page contains premium design templates. Please purchase the feature or upgrade your plan to save.",
        tierUpgradeRequired: "Upgrade Required",
        tierUpgradeDescription: "You need to upgrade to a higher tier or equal to this template to publish",
        tierUpgradeFeatureName: "Upgrade to Publish",
        audioTierForbiddenTitle: "Current music is not available in your plan",
        audioTierForbiddenDescription: "Please switch to another music track or upgrade your plan to continue.",
        audioTierForbiddenModalTitle: "Music track not available for your plan",
        audioTierForbiddenPublishTitle: "Cannot publish with the current music track",
        audioTierForbiddenSaveTitle: "Cannot save with the current music track",
        audioTierForbiddenModalDescription: "Your current plan does not include access to this music track.",
        audioTierForbiddenCountLabel: "Blocked music templates:",
        audioTierForbiddenCountHint: "Pick another track to continue saving in editor.",
        audioTierForbiddenUpgradeButton: "Upgrade to {{tier}}",
        audioTierForbiddenUpgradeFeatureName: "Upgrade to {{tier}} plan",
        audioTierForbiddenPickAnotherButton: "Choose another track",
        tierForbiddenUpgradeButton: "Upgrade to {{tier}}",
        tierForbiddenUpgradeFeatureName: "Upgrade to {{tier}} plan",
        lastSaved: "Saved {{time}}",
        justNow: "just now",
        secondsAgo: "{{seconds}}s ago",
        minutesAgo: "{{minutes}} min ago",
        hoursAgo: "{{hours}}h ago",
        autoSaveOn: "Auto-save is on",
        mobileDock: {
            add: "Add",
            edit: "Edit",
            layer: "Layer",
            quickBuild: "Quick Build",
            actions: "Actions"
        },
        mobileActionSheet: {
            title: "Actions",
            close: "Close"
        },
        history: "Edit history",
        saveAndExit: "Save and exit edit mode",
        guide: {
            label: "Guide",
            running: "Guide running",
            menuTitle: "Open guide",
            groups: {
                basic: "Basic",
                advanced: "Advanced"
            },
            next: "Next",
            prev: "Back",
            done: "Done",
            desktopOnlyTitle: "Desktop only",
            desktopOnlyDescription: "This guide currently supports desktop view only (>= 640px).",
            modalBlockedTitle: "Another dialog is open",
            modalBlockedDescription: "Please close open dialogs before starting the guide.",
            quickStart: {
                menu: "Quick start",
                edit: {
                    title: "Enter edit mode",
                    description: 'Click "Edit" to enter editing mode.'
                },
                elements: {
                    title: "Open elements panel",
                    description: 'Click "Add elements" to open the element panel.'
                },
                container: {
                    title: "Choose Container",
                    description: 'Select "Container" as the basic element type.'
                },
                addNew: {
                    title: "Add element",
                    description: 'Click "Add new" to insert the element into canvas.'
                },
                canvas: {
                    title: "Select on canvas",
                    description: "Click the inserted element on canvas to edit its settings."
                },
                settings: {
                    title: "Settings panel",
                    description: "Adjust style, content and behavior from this panel."
                },
                save: {
                    title: "Save changes",
                    description: 'Click "Save" to leave editing mode when finished.'
                }
            },
            advanced: {
                menu: "Advanced",
                overview: {
                    menu: "Advanced: Overview"
                },
                elementsFlow: {
                    menu: "Advanced: Popup/Dropbox/Album/QuickActions"
                },
                publishFlow: {
                    menu: "Advanced: Save and publish"
                },
                enterEdit: {
                    title: "Enter edit mode",
                    description: 'If you are in view mode, click "Edit" to unlock advanced tools.'
                },
                layer: {
                    title: "Layer panel",
                    description: "Use Layer to inspect your page structure."
                },
                history: {
                    title: "Edit history",
                    description: "Open history to review and restore previous states."
                },
                settings: {
                    title: "Advanced settings",
                    description: "Open settings for effects, audio, SEO and page options."
                },
                elements: {
                    title: "Open elements again",
                    description: "Open the element panel to explore advanced tabs."
                },
                popup: {
                    title: "Popup",
                    description: "Use Popup tab to create event-triggered popup content."
                },
                dropbox: {
                    title: "Dropbox",
                    description: "Use Dropbox for click/hover-triggered detail content."
                },
                albumModal: {
                    title: "Album Modal",
                    description: "Use Album Modal to build image gallery modals."
                },
                quickActions: {
                    title: "QuickActions",
                    description: "Use QuickActions to create floating quick-action buttons."
                },
                publish: {
                    title: "Publish page",
                    description: "After editing is done, return to view mode and publish."
                }
            },
            resume: {
                menu: "Resume last skipped step"
            }
        },
        publishShort: "Publish",
        unpublishShort: "Unpublish"
    })
}, 889648, e => {
    e.v({
        title: "Layers",
        close: "Close",
        searchPlaceholder: "Search by name, ID..."
    })
}, 875593, e => {
    e.v({
        componentTypes: {
            albumPhoto: "Photo Album",
            albumPhotoPopup: "Photo Album Popup",
            icon: "Icon",
            divider: "Divider",
            video: "Video",
            calendar: "Calendar",
            countdown: "Countdown",
            html: "HTML",
            section: "Section",
            wishes: "Wishes",
            text: "Text",
            image: "Image",
            button: "Button",
            box: "Box",
            dropbox: "Dropbox",
            form: "Form",
            group: "Group",
            actionButton: "Action Button",
            popup: "Popup",
            lightBox: "Light Box",
            input: "Input"
        },
        actions: {
            show: "Show element",
            hide: "Hide element",
            delete: "Delete element"
        },
        empty: "No elements yet. Add some components to see them here.",
        deleteModal: {
            title: "Confirm Delete Element",
            message: "Are you sure you want to delete this element?",
            warning: "⚠️ This action cannot be undone!",
            confirm: "Delete",
            cancel: "Cancel",
            idLabel: "ID"
        },
        warnings: {
            cannotDelete: "This element cannot be deleted"
        }
    })
}, 398975, e => {
    e.v({
        title: "QR Code Settings",
        sections: {
            colors: "Colors",
            shapes: "Shapes",
            size: "Size",
            logo: "Logo/Favicon"
        },
        colors: {
            dotColor: "Dot Color",
            backgroundColor: "Background Color",
            cornerSquareColor: "Corner Square Color",
            cornerDotColor: "Corner Dot Color"
        },
        shapes: {
            dotType: "Dot Type",
            cornerSquareType: "Corner Square Type",
            cornerDotType: "Corner Dot Type",
            errorCorrectionLevel: "Error Correction Level"
        },
        shapeOptions: {
            square: "Square",
            rounded: "Rounded",
            extraRounded: "Extra Rounded",
            dot: "Dot"
        },
        errorLevels: {
            low: "Low (L)",
            medium: "Medium (M)",
            high: "High (Q)",
            veryHigh: "Very High (H)"
        },
        size: {
            margin: "Margin",
            marginValue: "{{value}}px"
        },
        logo: {
            chooseImage: "Choose Image",
            remove: "Remove",
            selectedImage: "Selected Image:",
            logoSize: "Logo Size",
            logoSizeValue: "{{value}}%",
            hideBackgroundDots: "Hide background dots under logo"
        },
        actions: {
            reset: "Reset to Default",
            cancel: "Cancel",
            save: "Save Settings"
        },
        toasts: {
            saved: {
                title: "Saved!",
                description: "QR code settings have been saved"
            },
            reset: {
                title: "Reset!",
                description: "Default settings have been restored"
            }
        }
    })
}, 504005, e => {
    e.v({
        shareButton: "Share",
        openPage: "Open page",
        copyLink: "Copy invitation link",
        copyRefreshFB: "Copy + Refresh cache",
        cacheRefreshSuccess: "Cache refresh request sent",
        cacheRefreshError: "Cannot clear cache",
        socialShare: "Share on social media",
        generateQR: "Generate QR code",
        qrSettings: "QR settings",
        copiedTitle: "Copied!",
        copiedDescription: "Link has been copied to clipboard",
        errorTitle: "Error",
        copyErrorDescription: "Unable to copy link",
        infoTitle: "Information",
        shareNotSupportedDescription: "Browser does not support direct sharing. Link has been copied.",
        qrModalTitle: "QR Code",
        qrModalDescription: "Scan QR code to access the invitation",
        qrFileNamePage: "qr-wedding-invitation.png",
        qrFileNameTemplate: "qr-template.png"
    })
}, 506407, e => {
    e.v({
        closeSidebar: "Close sidebar",
        switchToDraggable: "Switch to draggable sidebar",
        switchToFixed: "Switch to fixed sidebar"
    })
}, 975385, e => {
    e.v({
        noAvailableSections: "No available sections left, adding an empty section",
        noAvailableSectionsAfterHiding: "No available sections left after hiding, adding an empty section",
        settingsButtonClicked: "Settings button clicked",
        settingsButtonTouched: "Settings button touched",
        deleteButtonClicked: "Delete button clicked",
        deleteButtonTouched: "Delete button touched",
        failedCheckDeletable: "Failed to check isDeletable for node",
        errorDeletingNode: "Error deleting node, hiding instead:",
        fallbackHideFailed: "Fallback hide also failed:",
        errorGettingNodeDOM: "Error getting node DOM for",
        errorDuplicatingNode: "Error duplicating node:",
        errorDuplicatingSection: "Error duplicating section:",
        errorAddingNewSection: "Error adding new section:",
        errorAddingEmptySection: "Error adding empty section:",
        errorCheckingAvailableSections: "Error checking available sections:",
        errorCheckingNode: "Error checking node"
    })
}, 554524, e => {
    e.v({
        title: "404 - Page Not Found",
        heading: "Oops! Page Not Found",
        description: "The page you are looking for might have been removed, renamed, or is temporarily unavailable.",
        buttons: {
            home: "Go Home",
            back: "Go Back"
        },
        helpText: "Or you can:",
        links: {
            createInvitation: "Create Free Wedding Invitation",
            viewTemplates: "View Wedding Templates",
            manageInvitations: "Manage My Invitations"
        }
    })
}, 574488, e => {
    e.v({
        sectionHeader: {
            albumImages: "Album Images"
        },
        buttons: {
            addImage: "Add Image",
            addMultipleImages: "Add Multiple Images",
            exitMultiSelect: "Exit Multi-Select",
            multiSelect: "Multi-Select",
            selectAll: "Select All",
            deselectAll: "Deselect All",
            delete: "Delete"
        },
        multiSelect: {
            selected: "Selected",
            of: "/"
        },
        emptyState: {
            noImages: "No images yet",
            clickToStart: 'Click "Add Image" to start'
        },
        placeholders: {
            imageUrl: "Image URL...",
            imageAlt: "Image description...",
            imageTitle: "Image title..."
        },
        tooltips: {
            selectImage: "Select Image",
            deleteImage: "Delete Image",
            dragToReorder: "Drag to reorder"
        },
        imageLabel: "Image"
    })
}, 30573, e => {
    e.v({
        editorMode: {
            title: "Photo Album Popup",
            imageCount: "Album has {count} images - Add images in settings",
            closeButton: "Close Album Modal",
            moreImages: "+{count}"
        },
        imageLabel: "Image",
        thumbnailLabel: "Thumbnail"
    })
}, 751945, e => {
    e.v({
        cropModal: {
            title: "Crop Album Image",
            image: "Image",
            error: "Error",
            selectCropArea: "Please select crop area",
            cropError: "Crop Error",
            cropErrorDescription: "Unable to save crop information. Please try again.",
            scale: "Scale",
            rotate: "Rotate",
            cancel: "Cancel",
            confirm: "Confirm",
            processing: "Processing..."
        },
        resizeModal: {
            title: "Resize Image",
            image: "Image",
            error: "Error",
            sizeError: "Size must be greater than 0",
            resizeError: "Resize Error",
            resizeErrorDescription: "Unable to save size information. Please try again.",
            size: "Size",
            width: "W",
            height: "H",
            lockAspectRatio: "Lock aspect ratio",
            currentSize: "Current size",
            px: "px",
            cancel: "Cancel",
            confirm: "Confirm",
            processing: "Processing..."
        },
        settings: {
            sectionHeight: "Section Height",
            height: "Height",
            carouselConfig: "Carousel Configuration",
            autoPlay: "Auto play",
            showDots: "Show dots",
            showArrows: "Show arrows",
            loop: "Loop",
            centerMode: "Center mode",
            speed: "Speed (s)",
            transitionDuration: "Transition duration (s)",
            desktop: "Desktop",
            mobile: "Mobile",
            inactiveScale: "Inactive scale",
            inactiveOpacity: "Inactive opacity",
            imageSpacing: "Image spacing",
            wrapperSpacing: "Wrapper spacing",
            useIndividualEdges: "Use individual edges",
            padding: "Padding",
            top: "Top",
            right: "Right",
            bottom: "Bottom",
            left: "Left",
            images: "Images",
            totalImages: "Total",
            imagesCount: "images",
            addImages: "Add images",
            image: "Image",
            noDescription: "No description",
            replace: "Replace",
            crop: "Crop",
            resize: "Resize",
            delete: "Delete",
            noImages: 'No images yet. Click "Add images" to get started.',
            imageDisplay: "Image Display",
            borderRadius: "Border radius",
            objectFit: "Display mode",
            objectFitCover: "Cover",
            objectFitContain: "Contain",
            showThumbnails: "Show thumbnails"
        }
    })
}, 921587, e => {
    e.v({
        "iconSection.title": "Icon settings",
        "iconSection.showIcon": "Show icon",
        "iconSection.position": "Position",
        "iconSection.positionLeft": "Left",
        "iconSection.positionCenter": "Center",
        "iconSection.positionRight": "Right",
        "iconSection.offset": "Offset",
        "iconSection.horizontalPosition": "Horizontal position",
        "tab.button": "Button",
        "tab.buttonShort": "Button",
        "tab.text": "Text",
        "tab.textShort": "Text",
        "tab.icon": "Icon",
        "tab.iconShort": "Icon"
    })
}, 53711, e => {
    e.v({
        title: "Calendar Settings",
        mode: {
            label: "Mode",
            today: "Today",
            custom: "Custom Date",
            placeholder: "Select mode"
        },
        date: {
            label: "Date"
        },
        highlight: {
            label: "Highlight",
            color: "Color",
            icon: "Icon",
            colorLabel: "Highlight Color",
            placeholder: "Select highlight"
        },
        svg: {
            label: "SVG",
            placeholder: "Enter SVG code",
            select: "Select",
            fillNote: "Fill in SVG will be replaced by highlight color"
        },
        colors: {
            title: "Text & Border Colors",
            border: "Calendar Border",
            header: "Header",
            date: "Date",
            selectedDate: "Selected Date"
        },
        typography: {
            title: "Typography",
            font: "Font",
            fontSizeMode: "Font Size Mode",
            auto: "Auto",
            custom: "Custom",
            fontSize: "Font Size (px)",
            placeholder: "Select mode"
        },
        layout: {
            label: "Layout Style",
            standard: "Standard",
            elegant: "Elegant",
            compact: "Compact",
            decorated: "Decorated",
            placeholder: "Select style"
        },
        decoration: {
            position: "Decoration Position",
            corners: "Corners",
            header: "Header",
            both: "Both",
            selectIcon: "Select decoration"
        },
        highlightDates: {
            label: "Additional highlight dates",
            add: "Add date"
        },
        animation: {
            label: "Animation",
            none: "None"
        },
        weekStart: {
            label: "Week starts on",
            monday: "Monday",
            sunday: "Sunday"
        },
        showYear: {
            label: "Show year"
        },
        showAdjacent: {
            label: "Show adjacent month dates"
        },
        titleSettings: {
            title: "Calendar Title",
            templateLabel: "Title template",
            templatePlaceholder: "{month} / {year}",
            templateHint: "Use {month} and {year} to build your own title format",
            monthNamesLabel: "Month names (12 lines or comma-separated)",
            weekdayNamesLabel: "Weekday names (7 lines or comma-separated, Monday -> Sunday)"
        },
        common: {
            yes: "Yes",
            no: "No"
        },
        multiColor: {
            label: "Multi-color highlights"
        }
    })
}, 667038, e => {
    e.v({
        countdown: {
            title: "Countdown Settings",
            type: "Type",
            selectType: "Select type",
            minutes: "Minutes",
            endTime: "End Time",
            mode: "Mode",
            selectMode: "Select mode",
            countDown: "Count down",
            countUp: "Count up",
            minutesValue: "Minutes",
            endTimeValue: "End Time",
            autoCountUp: "Auto Count up",
            showDays: "Show Days",
            showHours: "Show Hours",
            showMinutes: "Show Minutes",
            showSeconds: "Show Seconds"
        },
        spacing: {
            title: "Spacing",
            cellSpacing: "Cell Spacing"
        },
        label: {
            title: "Labels",
            contentTitle: "Label Content",
            typographyTitle: "Label Typography",
            showLabels: "Show Labels",
            position: "Position",
            positionTop: "Top",
            positionBottom: "Bottom",
            days: "Days Label",
            hours: "Hours Label",
            minutes: "Minutes Label",
            seconds: "Seconds Label",
            font: "Font",
            fontSize: "Font Size",
            format: "Formatting",
            lineHeight: "Line Height",
            letterSpacing: "Letter Spacing",
            textTransform: "Text Transform",
            color: "Color"
        },
        typography: {
            title: "Typography",
            font: "Font",
            fontSize: "Font Size",
            color: "Text Color",
            textTransform: "Text Transform",
            selectTextTransform: "Select text transform"
        }
    })
}, 4741, e => {
    e.v({
        formType: {
            title: "Form Type",
            selectType: "Select form type",
            weddingWish: "Wedding Wish Form",
            guest: "Guest Form"
        },
        customQuestions: {
            title: "Custom Questions",
            upgradeToUse: "Upgrade to use this feature",
            addQuestion: "Add question",
            deleteAll: "Delete all",
            questionPlaceholder: "Question",
            deleteQuestion: "Delete question"
        },
        suggestedWishes: {
            title: "Suggested Wishes",
            customTitleLabel: "Popup title",
            customTitlePlaceholder: "Leave empty to use language default",
            show: "Show suggested wishes",
            on: "On",
            add: "Add",
            newWish: "New wish",
            deleteWish: "Delete wish",
            characters: "characters",
            limitReached: "Maximum limit of 20 wishes reached"
        },
        spacing: {
            title: "Spacing",
            gap: "Spacing between elements"
        },
        submission: {
            title: "Submission Settings",
            type: "Submission Type",
            selectType: "Select submission type",
            comingSoon: "Coming soon",
            apiUrl: "API URL"
        },
        fields: {
            yourName: "Your name *",
            yourWish: "Your wish *",
            sendWish: "Send wish",
            fullName: "Full name *",
            phone: "Phone number *",
            email: "Email *",
            guestOf: "Guest of",
            numberOfPeople: "Number of people",
            willAttend: "Will you attend?",
            yesAttend: "Yes, I will attend",
            noAttend: "No, I cannot attend",
            selectEvent: "Select event...",
            sendInfo: "Send information"
        },
        events: {
            mainWedding: "Main Wedding",
            weddingParty: "Wedding Party",
            engagement: "Engagement Ceremony",
            yearEndParty: "Year-end Party",
            betrothal: "Betrothal Ceremony",
            intimateParty: "Intimate Party"
        },
        guestOfOptions: {
            bride: "Bride",
            groom: "Groom",
            both: "Both",
            family: "Family",
            friend: "Friend"
        }
    })
}, 785125, e => {
    e.v({
        modal: {
            title: "Edit HTML",
            description: "Enter custom HTML code for the component",
            htmlLabel: "HTML Code:",
            placeholder: "Enter your custom HTML code...",
            previewLabel: "Preview:"
        },
        validation: {
            unclosedQuotes: "HTML attribute has unclosed quotes.",
            malformedTags: "HTML tag is malformed.",
            scriptTag: "Script tag must be closed properly.",
            genericError: "Cannot validate HTML code. Please check syntax.",
            saveError: "An error occurred while saving. Please try again.",
            overLimit: "Exceeds {{max}} character limit"
        },
        buttons: {
            edit: "Edit",
            preview: "Preview",
            cancel: "Cancel",
            save: "Save",
            saving: "Saving..."
        },
        settings: {
            sectionTitle: "HTML Content",
            editButton: "Edit HTML",
            charCount: "{{current}} / {{max}} characters",
            overLimit: "Over limit!"
        }
    })
}, 326637, e => {
    e.v({
        title: "Icon Settings",
        svg: "SVG",
        svgPlaceholder: "Enter SVG code",
        select: "Select",
        color: "Color"
    })
}, 454599, e => {
    e.v({
        title: "Image Settings",
        urlPlaceholder: "Enter Image URL",
        selectImage: "Select Image",
        autoFill: "Auto fill from form for",
        selectField: "Select field",
        guestInfo: "Guest Info",
        selectGuestInfo: "Select guest info",
        lockAspectRatio: "Lock Aspect Ratio",
        displayMode: "Display Mode",
        selectMode: "Select mode",
        cropImage: "Crop Image",
        editCrop: "Edit Crop",
        resetCrop: "Reset Crop",
        cropModal: {
            title: "Crop Image",
            cancel: "Cancel",
            apply: "Apply",
            loading: "Loading image...",
            error: "Error cropping image. Please try again.",
            dragToCrop: "Drag and drop to select crop area. Drag corners to resize.",
            cropSize: "Size",
            coverage: "Coverage"
        },
        objectFit: {
            cover: "Cover",
            contain: "Contain",
            fill: "Fill",
            none: "None"
        },
        initField: {
            none: "None",
            groomQr: "Groom QR Code",
            brideQr: "Bride QR Code"
        },
        guestInfoField: {
            none: "None",
            avatar: "Guest Avatar"
        }
    })
}, 569467, e => {
    e.v({
        inputConfig: {
            title: "Input Configuration",
            type: "Type",
            selectType: "Select input type",
            dataName: "Data Name",
            dataNamePlaceholder: "input_field",
            required: "Required",
            placeholder: "Placeholder",
            placeholderPlaceholder: "Enter content...",
            defaultValue: "Default Value",
            noSelection: "No selection",
            elementPosition: "Element Position",
            options: "Options (one per line)",
            optionsPlaceholder: "Option 1\nOption 2\nOption 3",
            direction: "Display Direction",
            vertical: "Vertical",
            horizontal: "Horizontal"
        },
        inputTypes: {
            text: "Text Input",
            password: "Password",
            number: "Number Input",
            email: "Email Input",
            tel: "Phone Input",
            date: "Date",
            textarea: "Textarea",
            select: "Select Box",
            radio: "Radio Button",
            checkbox: "Checkbox",
            file: "File Upload"
        },
        typography: {
            title: "Typography",
            font: "Font",
            fontSize: "Font Size",
            color: "Text Color"
        }
    })
}, 469894, e => {
    e.v({
        lineConfig: {
            title: "Line",
            direction: "Direction",
            selectDirection: "Select direction",
            horizontal: "Horizontal",
            vertical: "Vertical"
        }
    })
}, 158822, e => {
    e.v({
        autoOpenSection: {
            title: "Auto Open Popup",
            enableLabel: "Enable auto open",
            delayLabel: "Delay (seconds)"
        }
    })
}, 261071, e => {
    e.v({
        "mainButton.title": "Main Button",
        "mainButton.icon": "Icon",
        "mainButton.iconPlaceholder": "Enter SVG code",
        "mainButton.searchIcon": "Search icon",
        "mainButton.iconColor": "Icon color",
        "mainButton.iconSize": "Icon size",
        "mainButton.backgroundType": "Background type",
        "mainButton.backgroundColor": "Background color",
        "mainButton.gradientType": "Gradient type",
        "mainButton.gradientAngle": "Angle",
        "mainButton.gradientColor1": "Color 1",
        "mainButton.gradientColor2": "Color 2",
        "mainButton.buttonSize": "Button size",
        "mainButton.spacing": "Spacing",
        "mainButton.expandDirection": "Expand direction",
        "mainButton.animationDuration": "Animation duration (s)",
        "openButton.title": "Button When Open",
        "openButton.icon": "Icon when open",
        "openButton.iconPlaceholder": "Enter SVG code",
        "openButton.searchIcon": "Search icon",
        "openButton.iconColor": "Icon color when open",
        "openButton.iconSize": "Icon size when open",
        "openButton.backgroundType": "Background type when open",
        "openButton.backgroundColor": "Background color when open",
        "openButton.gradientType": "Gradient type when open",
        "openButton.gradientAngle": "Angle",
        "openButton.gradientColor1": "Color 1 when open",
        "openButton.gradientColor2": "Color 2 when open",
        "layout.title": "Layout & Animation",
        "actionButtons.title": "Action Buttons",
        "actionButtons.count": "Action Buttons ({{count}}/8)",
        "actionButtons.add": "Add action button",
        "actionButtons.maxReached": "Maximum limit of 8 buttons reached",
        "actionButtons.empty": "No action buttons yet. Click + to add.",
        "actionButtons.button": "Button {{index}}",
        "actionButtons.edit": "Edit",
        "actionButtons.collapse": "Collapse",
        "actionButtons.delete": "Delete",
        "actionButtons.icon": "Icon",
        "actionButtons.iconPlaceholder": "Enter SVG code",
        "actionButtons.searchIcon": "Search icon",
        "actionButtons.iconColor": "Icon color",
        "actionButtons.iconSize": "Icon size",
        "actionButtons.backgroundType": "Background type",
        "actionButtons.backgroundColor": "Background color",
        "actionButtons.events": "Events",
        "actionButtons.tooltip": "Tooltip",
        "actionButtons.tooltipEnable": "Enable tooltip",
        "actionButtons.tooltipText": "Content",
        "actionButtons.tooltipTextPlaceholder": "Enter tooltip content",
        "actionButtons.tooltipPosition": "Position",
        "actionButtons.tooltipDelay": "Delay (s)",
        "position.title": "Position Settings",
        "position.enable": "Enable fixed position",
        "position.position": "Position",
        "position.topDistance": "Top distance (px)",
        "position.bottomDistance": "Bottom distance (px)",
        "position.leftDistance": "Left distance (px)",
        "position.rightDistance": "Right distance (px)",
        "position.preview": "Preview",
        "position.previewLabel": "Website",
        "autoOpen.title": "Auto Open",
        "autoOpen.enable": "Enable auto open",
        "backgroundType.color": "Color",
        "backgroundType.gradient": "Gradient",
        "gradientType.linear": "Linear",
        "gradientType.radial": "Radial",
        "expandDirection.up": "Up",
        "expandDirection.down": "Down",
        "expandDirection.left": "Left",
        "expandDirection.right": "Right",
        "tooltipPosition.top": "Top",
        "tooltipPosition.bottom": "Bottom",
        "tooltipPosition.left": "Left",
        "tooltipPosition.right": "Right",
        "position.topLeft": "Top Left",
        "position.topCenter": "Top Center",
        "position.topRight": "Top Right",
        "position.middleLeft": "Middle Left",
        "position.middleRight": "Middle Right",
        "position.bottomLeft": "Bottom Left",
        "position.bottomCenter": "Bottom Center",
        "position.bottomRight": "Bottom Right",
        "select.backgroundTypePlaceholder": "Select background type",
        "select.gradientTypePlaceholder": "Select gradient type",
        "select.expandDirectionPlaceholder": "Select expand direction",
        "select.tooltipPositionPlaceholder": "Select position",
        "select.positionPlaceholder": "Select position",
        "preview.title": "Action Buttons - Edit Mode",
        "preview.label": "Preview:",
        "preview.instruction": "Click the trigger button to test expand/collapse",
        "preview.saveTemplate": "Save as template",
        "preview.closeModal": "Close QuickActions modal",
        "preview.buttonLabel": "Action button {{index}}",
        "preview.eventsConfigured": "{{count}} events configured",
        "preview.noButtons": "No action buttons configured yet",
        "preview.addFirstButton": 'Click "Add button" to create your first action button',
        "preview.addButton": "Add button",
        "preview.dragToReorder": "Drag to reorder",
        "preview.editButton": "Edit button",
        "preview.deleteButton": "Delete button",
        "preview.deleteConfirm": "Are you sure you want to delete this action button?",
        "preview.deleteLabel": "Delete",
        "preview.stateOpen": "Open - Click main button to close",
        "preview.stateClosed": "Closed - Click main button to open",
        "preview.clickToOpen": "Click to open preview",
        "preview.clickToClose": "Click to close preview"
    })
}, 224785, e => {
    e.v({
        "contentSection.title": "Content",
        "contentSection.placeholder": "Enter text content",
        "textSetupSection.title": "Text Setup",
        "textSetupSection.autofill": "Autofill",
        "textSetupSection.autofillPlaceholder": "Select autofill field",
        "textSetupSection.guestInfo": "Guest Info",
        "textSetupSection.guestInfoPlaceholder": "Select guest info",
        "textSetupSection.font": "Font",
        "textSetupSection.size": "Size",
        "textSetupSection.textTransform": "Text Transform",
        "textSetupSection.textTransformPlaceholder": "Select transform",
        "tooltip.bold": "Bold",
        "tooltip.italic": "Italic",
        "tooltip.underline": "Underline",
        "tooltip.strikethrough": "Strikethrough",
        "tooltip.uppercase": "Uppercase",
        "tooltip.alignLeft": "Align Left",
        "tooltip.alignCenter": "Align Center",
        "tooltip.alignRight": "Align Right",
        "tooltip.alignJustify": "Justify",
        "colorControl.textColor": "Text Color",
        "shadowSection.title": "Text Shadow",
        "shadowSection.enable": "Enable",
        "shadowSection.x": "X",
        "shadowSection.y": "Y",
        "shadowSection.blur": "Blur",
        "shadowSection.color": "Shadow Color",
        "strokeSection.title": "Text Stroke",
        "strokeSection.width": "Width",
        "strokeSection.color": "Stroke Color"
    })
}, 531083, e => {
    e.v({
        videoSource: {
            title: "Video Source",
            type: "Type",
            selectType: "Select video type",
            youtubeUrl: "YouTube URL",
            videoPath: "Video Path",
            youtubePlaceholder: "https://youtube.com/watch?v=...",
            videoPlaceholder: "https://.../video.mp4",
            selectButton: "Select"
        },
        videoTypes: {
            youtube: "YouTube",
            library: "Library"
        },
        playback: {
            title: "Playback & Display",
            showControls: "Show Controls",
            autoPlay: "Auto Play"
        },
        messages: {
            enterVideoUrl: "Enter video URL",
            invalidYoutubeUrl: "Invalid YouTube URL",
            browserNotSupported: "Your browser does not support video."
        },
        overlay: {
            disableToControl: "Disable overlay to control video",
            enableToSelect: "Enable overlay to select element",
            enableControls: "Enable video controls",
            disableControls: "Disable video controls"
        }
    })
}, 741006, e => {
    e.v({
        listContent: "List Content",
        maxWishes: "Max Wishes",
        showDemo: "Show Demo",
        emptyWishText: "Empty wish text",
        emptyWishTextPlaceholder: "No wishes yet",
        typography: "Typography",
        wishNameSection: "Wish Name",
        wishContentSection: "Wish Content",
        replySection: "Reply from Bride & Groom",
        font: "Font",
        size: "Size",
        color: "Color",
        transform: "Transform",
        textTransform: "Text Transform",
        lineHeight: "Line Height",
        letter: "Letter Spacing",
        cardStyle: "Wish Card Style",
        backgroundColor: "Background Color",
        padding: "Padding",
        border: "Border",
        borderRadius: "Border Radius",
        borderColor: "Border Color",
        borderStyle: "Border Style",
        replyBackground: "Reply Background",
        replyBorder: "Reply Border",
        replyContentSize: "Reply Content Size",
        replyContentColor: "Reply Content Color",
        selectTransform: "Select transform",
        selectTextTransform: "Select text transform",
        selectBorderStyle: "Select border style"
    })
}, 21479, e => {
    e.v({
        templatePassword: {
            title: "Protected Template",
            description: "Please enter the password to view this template",
            placeholder: "Enter password",
            submit: "Submit",
            error: {
                notFound: "Template not found",
                incorrect: "Incorrect password",
                generic: "An error occurred. Please try again."
            }
        }
    })
}, 525286, e => {
    e.v({
        title: "Upgrade Plan to Use This Feature",
        description: "Design Support feature is only available for plan include design support.",
        featuresTitle: "What you'll get:",
        features: {
            designSupport: "Professional design support",
            prioritySupport: "24/7 priority support",
            customDesign: "Custom design on demand",
            unlimitedRevisions: "Unlimited revisions"
        },
        actions: {
            cancel: "Maybe Later",
            viewPricing: "View Pricing"
        }
    })
}, 379726, e => {
    e.v({
        tabs: {
            pageTemplates: "Page Templates",
            spendingPlans: "Spending Plan Templates",
            todoLists: "Todo List Templates"
        },
        pageTemplatesTab: {
            title: "Page Templates",
            subtitle: "Manage invitation page templates",
            createFromPage: "Create from existing page",
            searchPlaceholder: "Search by template name...",
            resultsCount: "Found {{count}} templates",
            loading: "Loading...",
            empty: "No templates yet",
            noResults: "No matching templates found",
            noImage: "No image",
            status: {
                published: "Published",
                draft: "Draft"
            },
            actions: {
                edit: "Edit",
                openNew: "Open in new tab"
            }
        },
        createFromPage: {
            title: "Create Template from Existing Page",
            description: "Create a new template by copying content from an existing page. The template will include all content and settings from the source page.",
            fields: {
                sourcePage: "Source Page",
                name: "Template Name",
                domain: "Domain",
                description: "Description",
                tier: "Tier",
                category: "Category",
                tags: "Tags",
                isPublished: "Publish immediately"
            },
            placeholders: {
                selectPage: "Select source page",
                name: "Enter template name...",
                domain: "e.g. my-template or my-template.mehappy.info",
                description: "Enter template description...",
                tags: "Enter tags separated by commas..."
            },
            helper: {
                tags: "Enter multiple tags to categorize the template (separated by commas)",
                domain: "Enter a subdomain or full domain. If there is no dot, the system will append the default suffix automatically."
            },
            tier: {
                free: "Free",
                pro: "Pro",
                vip: "VIP"
            },
            category: {
                wedding: "Wedding",
                birthday: "Birthday",
                baby: "Baby Shower",
                newHouse: "Housewarming",
                newYear: "New Year",
                grandOpening: "Grand Opening",
                reunite: "Reunion",
                event: "Event"
            },
            currentTags: "Current tags",
            suggestedTags: "Suggested tags",
            actions: {
                cancel: "Cancel",
                create: "Create Template",
                creating: "Creating..."
            },
            errors: {
                title: "Error",
                pageRequired: "Please select a source page",
                nameRequired: "Please enter template name",
                createFailed: "An error occurred while creating template"
            },
            success: {
                title: "Success",
                description: "Template has been created successfully"
            },
            selectPageModal: {
                title: "Select Source Page",
                searchPlaceholder: "Search by title, domain...",
                allTypes: "All",
                loading: "Loading...",
                resultsCount: "Found {{count}} pages",
                noResults: "No matching pages found",
                empty: "No pages yet"
            },
            pageType: {
                page: "Wedding Page",
                card: "Invitation Card",
                logo: "Logo"
            },
            status: {
                published: "Published",
                unpublished: "Unpublished",
                disabled: "Disabled"
            }
        },
        spendingPlanTemplatesTab: {
            title: "Spending Plan Templates",
            subtitle: "Manage spending plan templates",
            createButton: "Create Template",
            emptyMessage: "No templates found",
            loadingMessage: "Loading templates...",
            resetButton: "Reset Filters",
            columns: {
                id: "ID",
                name: "Template Name",
                description: "Description",
                status: "Status",
                createdAt: "Created At",
                noDescription: "No description"
            },
            status: {
                active: "Active",
                inactive: "Inactive"
            },
            actions: {
                view: "View",
                edit: "Edit",
                delete: "Delete"
            },
            filters: {
                searchPlaceholder: "Search by template name...",
                statusLabel: "Status",
                allStatus: "All Status",
                activeStatus: "Active",
                inactiveStatus: "Inactive"
            },
            deleteModal: {
                title: "Confirm Delete Template",
                message: 'Are you sure you want to delete template "{{name}}"? This action cannot be undone.',
                confirm: "Delete",
                cancel: "Cancel"
            }
        },
        todoListTemplatesTab: {
            title: "Todo List Templates",
            subtitle: "Manage todo list templates",
            createButton: "Create Template",
            emptyMessage: "No templates found",
            loadingMessage: "Loading templates...",
            resetButton: "Reset Filters",
            columns: {
                id: "ID",
                title: "Template Title",
                description: "Description",
                taskCount: "Task Count",
                status: "Status",
                createdAt: "Created At",
                noDescription: "No description"
            },
            status: {
                active: "Active",
                inactive: "Inactive"
            },
            actions: {
                edit: "Edit",
                delete: "Delete"
            },
            deleteModal: {
                title: "Confirm Delete Template",
                message: 'Are you sure you want to delete template "{{title}}"? This action cannot be undone.',
                confirm: "Delete",
                cancel: "Cancel"
            }
        },
        todoListTemplate: {
            modal: {
                createTitle: "Create New Template",
                editTitle: "Edit Template",
                basicInfo: "Basic Information",
                templateTitle: "Template Title",
                templateTitlePlaceholder: "Enter template title...",
                description: "Description",
                descriptionPlaceholder: "Enter template description...",
                activeStatus: "Active Status",
                tasks: "Task List",
                addTask: "Add task",
                taskTitle: "Task {{number}}",
                taskTitleLabel: "Task Title",
                taskTitlePlaceholder: "Enter task title...",
                taskDescription: "Task Description",
                taskDescriptionPlaceholder: "Enter task description...",
                taskStatus: "Status",
                taskStatusPlaceholder: "Select status...",
                dueDate: "Due Date",
                deleteTask: "Delete task",
                noTasks: 'No tasks yet. Click "Add Task" to get started.',
                cancel: "Cancel",
                create: "Create Template",
                update: "Update",
                creating: "Creating...",
                updating: "Updating..."
            },
            taskStatus: {
                todo: "To Do",
                done: "Done",
                archived: "Archived"
            },
            toast: {
                error: "Error",
                success: "Success",
                titleRequired: "Please enter template title",
                templateCreated: "Template has been created",
                templateUpdated: "Template has been updated",
                saveFailed: "An error occurred while saving template"
            }
        },
        spendingPlanTemplate: {
            modal: {
                createTitle: "Create New Template",
                editTitle: "Edit Template",
                basicInfo: "Basic Information",
                templateName: "Template Name",
                templateNamePlaceholder: "Enter template name...",
                description: "Description",
                descriptionPlaceholder: "Enter template description...",
                notes: "Notes",
                notesPlaceholder: "Enter notes...",
                totalBudget: "Total Budget",
                totalBudgetPlaceholder: "Enter total budget...",
                activeStatus: "Active Status",
                categories: "Spending Categories",
                addCategory: "Add Category",
                categoryTitle: "Category {{number}}",
                categoryName: "Category Name",
                categoryNamePlaceholder: "Enter category name...",
                categoryDescription: "Category Description",
                categoryDescriptionPlaceholder: "Enter category description...",
                items: "Spending Details",
                addItem: "Add Item",
                itemTitle: "Item {{number}}",
                itemTitleLabel: "Title",
                itemTitlePlaceholder: "Enter title...",
                itemDescription: "Description",
                itemDescriptionPlaceholder: "Enter description...",
                estimatedAmount: "Estimated Amount",
                estimatedAmountPlaceholder: "Enter amount...",
                paymentStatus: "Payment Status",
                paymentStatusPlaceholder: "Select status...",
                dueDate: "Due Date",
                cancel: "Cancel",
                create: "Create Template",
                update: "Update",
                creating: "Creating...",
                updating: "Updating...",
                deleteCategory: "Delete category",
                deleteItem: "Delete item"
            },
            paymentStatus: {
                planned: "Planned",
                unpaid: "Unpaid",
                partial: "Partial Payment",
                paid: "Paid",
                canceled: "Canceled"
            },
            toast: {
                error: "Error",
                success: "Success",
                nameRequired: "Please enter template name",
                templateCreated: "Template has been created",
                templateUpdated: "Template has been updated",
                saveFailed: "An error occurred while saving template"
            }
        }
    })
}, 247434, e => {
    e.v({
        title: "Photo Storage",
        myStorage: {
            title: "My Storage",
            defaultLimit: "Default Limit",
            purchasedPhotos: "Purchased",
            totalLimit: "Total Limit",
            currentCount: "Current Usage",
            remaining: "Remaining",
            tier: "Current Tier",
            photos: "photos",
            upgradeStorage: "Buy More Storage"
        },
        packages: {
            title: "Buy More Photos",
            description: "Choose a storage package that fits your needs",
            photoCount: "photos",
            price: "Price",
            vnd: "VND",
            purchase: "Purchase",
            popular: "Popular",
            bestValue: "Best Value",
            noPackages: "No storage packages available"
        },
        purchaseModal: {
            title: "Confirm Purchase",
            selectedPackage: "Selected Package",
            photoCount: "Photo Count",
            price: "Price",
            total: "Total",
            vnd: "VND",
            currentLimit: "Current Limit",
            afterPurchase: "After Purchase",
            photos: "photos",
            cancel: "Cancel",
            confirm: "Confirm Payment",
            processing: "Processing...",
            note: "Note: You will be redirected to the payment page to complete the transaction.",
            orderCanceled: "Order has been canceled"
        },
        subscriptions: {
            title: "Purchase History",
            packageName: "Package Name",
            photoCount: "Photo Count",
            price: "Price",
            status: "Status",
            purchasedAt: "Purchase Date",
            transactionId: "Transaction ID",
            statusActive: "Active",
            statusExpired: "Expired",
            statusCancelled: "Cancelled",
            noData: "No purchase history",
            loadMore: "Load More"
        },
        storageInfo: {
            title: "Storage Information",
            usage: "Used",
            of: "of",
            photos: "photos",
            almostFull: "Storage Almost Full",
            almostFullMessage: "You have used more than 80% of your storage. Purchase more to continue uploading.",
            full: "Storage Full",
            fullMessage: "You have reached your storage limit. Please purchase more storage to continue."
        },
        tierLimits: {
            basic: "10 photos",
            pro: "40 photos",
            vip: "500 photos"
        },
        messages: {
            purchaseSuccess: "Package purchased successfully! Your storage has been updated.",
            purchaseError: "An error occurred while purchasing. Please try again.",
            loadError: "Unable to load storage information"
        }
    })
}, 51808, e => {
    e.v({
        title: "Photo Storage Package Management",
        description: "Manage available photo storage packages for users",
        createPackage: "Create Package",
        editPackage: "Edit Package",
        deletePackage: "Delete Package",
        packageName: "Package Name",
        packageDescription: "Description",
        photoCount: "Photo Count",
        price: "Price",
        currency: "Currency",
        isActive: "Active",
        sortOrder: "Sort Order",
        actions: "Actions",
        edit: "Edit",
        delete: "Delete",
        active: "Active",
        inactive: "Inactive",
        vnd: "VND",
        photos: "photos",
        createPackageModal: {
            title: "Create New Storage Package",
            nameLabel: "Package Name",
            namePlaceholder: "e.g: 50_photos",
            descriptionLabel: "Description",
            descriptionPlaceholder: "e.g: 50 Photos Package",
            photoCountLabel: "Photo Count",
            photoCountPlaceholder: "e.g: 50",
            priceLabel: "Price (VND)",
            pricePlaceholder: "e.g: 50000",
            currencyLabel: "Currency",
            isActiveLabel: "Activate Package",
            sortOrderLabel: "Sort Order",
            sortOrderPlaceholder: "e.g: 1",
            cancel: "Cancel",
            create: "Create Package",
            update: "Update"
        },
        deleteConfirm: {
            title: "Confirm Delete",
            message: "Are you sure you want to delete this package? This action cannot be undone.",
            cancel: "Cancel",
            confirm: "Delete"
        },
        subscriptions: {
            title: "Purchase History",
            userId: "User ID",
            userEmail: "Email",
            userName: "User Name",
            packageName: "Package Name",
            photoCount: "Photo Count",
            price: "Price",
            status: "Status",
            purchasedAt: "Purchase Date",
            transactionId: "Transaction ID",
            statusActive: "Active",
            statusExpired: "Expired",
            statusCancelled: "Cancelled",
            noData: "No data available"
        },
        validation: {
            nameRequired: "Package name is required",
            photoCountRequired: "Photo count is required",
            photoCountMin: "Photo count must be greater than 0",
            priceRequired: "Price is required",
            priceMin: "Price must be greater than or equal to 0",
            priceInteger: "Price must be an integer number"
        }
    })
}, 17781, e => {
    e.v({
        error: {
            title: "Out of Page Slots",
            buyMore: "Buy More Page Slots",
            close: "Close"
        },
        packages: {
            title: "Buy More Page Slots",
            description: "Choose a package to create more invitation pages",
            popular: "Popular",
            slotCount: "slots",
            vnd: "VND",
            purchase: "Buy Now",
            noPackages: "No packages available"
        },
        purchaseModal: {
            title: "Confirm Page Slots Purchase",
            packageInfo: "Package Information",
            slotCount: "Slot Count",
            slots: "slots",
            price: "Price",
            vnd: "VND",
            promotionCode: "Promotion Code (optional)",
            promotionCodePlaceholder: "Enter promotion code",
            applyPromotion: "Apply",
            summary: "Summary",
            subtotal: "Subtotal",
            discount: "Discount",
            total: "Total",
            note: "After payment, page slots will be automatically added to your account.",
            cancel: "Cancel",
            confirm: "Confirm Payment",
            processing: "Processing..."
        },
        paymentModal: {
            title: "Payment",
            orderId: "Order ID",
            amount: "Amount",
            vnd: "VND",
            scanQR: "Scan QR code to pay",
            bankInfo: "Bank Transfer Information",
            bank: "Bank",
            accountNumber: "Account Number",
            transferDescription: "Transfer Description",
            note: "Please transfer with exact description for automatic confirmation.",
            close: "Close",
            checkStatus: "Check Status",
            copied: "Copied",
            copiedDesc: "has been copied"
        },
        messages: {
            purchaseSuccess: "Order created successfully",
            purchaseError: "Failed to create order",
            invalidPromotion: "Invalid promotion code",
            paymentPending: "Waiting for payment",
            paymentSuccess: "Payment successful! Page slots added to your account.",
            paymentFailed: "Payment failed"
        },
        notifications: {
            orderCreated: {
                title: "Order Created",
                description: "Please complete payment to activate your package"
            },
            paymentSuccess: {
                title: "Payment Successful! 🎉",
                description: "Your package has been activated"
            },
            paymentFailed: {
                title: "Payment Failed",
                description: "Please try again or contact support"
            },
            orderError: {
                title: "Order Creation Error"
            }
        }
    })
}, 219730, e => {
    e.v({
        title: "Page Slot Management",
        description: "Manage page slot packages for users to purchase",
        createPackage: "Create Package",
        edit: "Edit",
        delete: "Delete",
        active: "Active",
        inactive: "Inactive",
        vnd: "VND",
        slots: "slots",
        packageName: "Package Name",
        packageDescription: "Description",
        slotCount: "Slot Count",
        price: "Price",
        isActive: "Status",
        sortOrder: "Sort Order",
        createdAt: "Created At",
        updatedAt: "Updated At",
        form: {
            title: {
                create: "Create New Page Slot Package",
                edit: "Edit Page Slot Package"
            },
            name: {
                label: "Package Name",
                placeholder: "e.g., 5_slots",
                required: "Package name is required"
            },
            description: {
                label: "Description",
                placeholder: "e.g., 5 page slots package (save 10%)",
                required: "Description is required"
            },
            slotCount: {
                label: "Slot Count",
                placeholder: "e.g., 5",
                required: "Slot count is required",
                min: "Slot count must be greater than 0"
            },
            priceCents: {
                label: "Price (VND)",
                placeholder: "e.g., 225000",
                required: "Price is required",
                min: "Price must be greater than 0",
                helper: "Enter price in VND (system will auto-convert)"
            },
            currency: {
                label: "Currency",
                placeholder: "VND"
            },
            isActive: {
                label: "Activate Package",
                helper: "Only active packages are visible to users"
            },
            sortOrder: {
                label: "Display Order",
                placeholder: "e.g., 1",
                helper: "Lower numbers display first"
            },
            cancel: "Cancel",
            create: "Create Package",
            update: "Update",
            creating: "Creating...",
            updating: "Updating..."
        },
        deleteConfirm: {
            title: "Confirm Delete",
            message: "Are you sure you want to delete this page slot package? This action cannot be undone.",
            confirm: "Delete",
            cancel: "Cancel"
        },
        messages: {
            createSuccess: "Page slot package created successfully",
            updateSuccess: "Page slot package updated successfully",
            deleteSuccess: "Page slot package deleted successfully",
            createError: "Failed to create page slot package",
            updateError: "Failed to update page slot package",
            deleteError: "Failed to delete page slot package",
            noData: "No page slot packages yet"
        }
    })
}, 218410, e => {
    e.v({
        packages: {
            title: "Extend Publishing Time",
            description: "Choose a package to extend the publishing time for your invitation",
            popular: "Popular",
            bestValue: "Best Value",
            lifetime: "Lifetime",
            months: "months",
            vnd: "VND",
            purchase: "Buy Now",
            noPackages: "No packages available"
        },
        purchaseModal: {
            title: "Confirm Time Extension",
            pageInfo: "Invitation Information",
            pageName: "Invitation Name",
            currentExpiry: "Current Expiry Date",
            newExpiry: "New Expiry Date (estimated)",
            packageInfo: "Package Information",
            duration: "Extension Duration",
            months: "months",
            lifetime: "Lifetime",
            price: "Price",
            vnd: "VND",
            promotionCode: "Promotion Code (optional)",
            promotionCodePlaceholder: "Enter promotion code",
            applyPromotion: "Apply",
            summary: "Summary",
            subtotal: "Subtotal",
            discount: "Discount",
            total: "Total",
            note: "After payment, the publishing time will be automatically extended for your invitation.",
            cancel: "Cancel",
            confirm: "Confirm Payment",
            processing: "Processing..."
        },
        paymentModal: {
            title: "Payment",
            orderId: "Order ID",
            amount: "Amount",
            vnd: "VND",
            scanQR: "Scan QR code to pay",
            bankInfo: "Bank Transfer Information",
            bank: "Bank",
            accountNumber: "Account Number",
            transferDescription: "Transfer Description",
            note: "Please transfer with exact description for automatic confirmation.",
            close: "Close",
            checkStatus: "Check Status",
            copied: "Copied",
            copiedDesc: "has been copied"
        },
        messages: {
            purchaseSuccess: "Order created successfully",
            purchaseError: "Failed to create order",
            invalidPromotion: "Invalid promotion code",
            paymentPending: "Waiting for payment",
            paymentSuccess: "Payment successful! Publishing time has been extended.",
            paymentFailed: "Payment failed"
        },
        notifications: {
            orderCreated: {
                title: "Order Created",
                description: "Please complete payment to extend publishing time"
            },
            paymentSuccess: {
                title: "Payment Successful! 🎉",
                description: "Publishing time has been extended"
            },
            paymentFailed: {
                title: "Payment Failed",
                description: "Please try again or contact support"
            },
            orderError: {
                title: "Order Creation Error"
            }
        },
        button: {
            extend: "Extend",
            extendTime: "Extend Time"
        }
    })
}, 467406, e => {
    e.v({
        title: "Page Duration Package Management",
        description: "Manage duration extension packages for users to purchase",
        createPackage: "Create New Package",
        edit: "Edit",
        delete: "Delete",
        active: "Active",
        inactive: "Inactive",
        vnd: "VND",
        months: "months",
        lifetime: "Lifetime",
        packageName: "Package Name",
        packageLabel: "Display Label",
        packageDescription: "Description",
        durationMonths: "Extension Duration",
        price: "Price",
        isActive: "Status",
        sortOrder: "Sort Order",
        createdAt: "Created At",
        updatedAt: "Updated At",
        form: {
            title: {
                create: "Create New Duration Package",
                edit: "Edit Duration Package"
            },
            name: {
                label: "Package Name (unique)",
                placeholder: "E.g. 6_months",
                required: "Package name is required"
            },
            label: {
                label: "Display Label",
                placeholder: "E.g. 6 Months",
                required: "Display label is required"
            },
            description: {
                label: "Description",
                placeholder: "E.g. Extend page for 6 months"
            },
            durationMonths: {
                label: "Duration (months)",
                placeholder: "E.g. 6 (leave empty = lifetime)",
                helper: "Leave empty or enter null for lifetime package"
            },
            priceCents: {
                label: "Price (VND)",
                placeholder: "E.g. 200000",
                required: "Price is required",
                min: "Price must be greater than 0",
                helper: "Enter price in VND"
            },
            currency: {
                label: "Currency",
                placeholder: "VND"
            },
            isActive: {
                label: "Activate Package",
                helper: "Only activated packages will be shown to users"
            },
            sortOrder: {
                label: "Display Order",
                placeholder: "E.g. 1",
                helper: "Lower numbers will be displayed first"
            },
            cancel: "Cancel",
            create: "Create Package",
            update: "Update",
            creating: "Creating...",
            updating: "Updating..."
        },
        deleteConfirm: {
            title: "Confirm Delete",
            message: "Are you sure you want to delete this duration package? This action cannot be undone.",
            confirm: "Delete",
            cancel: "Cancel"
        },
        messages: {
            createSuccess: "Duration package created successfully",
            updateSuccess: "Duration package updated successfully",
            deleteSuccess: "Duration package deleted successfully",
            createError: "Failed to create duration package",
            updateError: "Failed to update duration package",
            deleteError: "Failed to delete duration package",
            noData: "No duration packages found"
        }
    })
}, 332651, e => {
    e.v({
        title: "Asset Management",
        description: "Manage all system assets",
        columns: {
            id: "ID",
            key: "Key",
            previewUrl: "Preview",
            tag: "Tag",
            ownerId: "Owner ID",
            isPublic: "Public",
            tier: "Tier",
            createdAt: "Created At",
            updatedAt: "Updated At"
        },
        filters: {
            search: "Search by key...",
            tag: "Filter by tag",
            tier: "Filter by tier",
            allTags: "All tags",
            allTiers: "All tiers",
            allKeys: "All keys"
        },
        tier: {
            basic: "Basic",
            pro: "Pro",
            vip: "VIP"
        },
        public: {
            yes: "Public",
            no: "Private"
        },
        actions: {
            edit: "Edit",
            delete: "Delete",
            togglePublic: "Toggle public status"
        },
        form: {
            title: {
                edit: "Edit Asset"
            },
            key: {
                label: "Key",
                placeholder: "e.g., invitation-card-1"
            },
            previewUrl: {
                label: "Preview URL",
                placeholder: "https://example.com/preview.jpg"
            },
            tag: {
                label: "Tag",
                placeholder: "e.g., invitation"
            },
            isPublic: {
                label: "Public",
                helper: "Public assets will be visible to all users"
            },
            tier: {
                label: "Tier",
                placeholder: "Select tier",
                helper: "Tier determines user access level"
            },
            cancel: "Cancel",
            save: "Save",
            saving: "Saving..."
        },
        deleteConfirm: {
            title: "Confirm Delete Asset",
            message: "Are you sure you want to delete this asset? This action cannot be undone.",
            confirm: "Delete",
            cancel: "Cancel"
        },
        messages: {
            updateSuccess: "Asset updated successfully",
            updateError: "Failed to update asset",
            deleteSuccess: "Asset deleted successfully",
            deleteError: "Failed to delete asset",
            togglePublicSuccess: "Public status toggled",
            togglePublicError: "Failed to toggle public status",
            noData: "No assets found"
        }
    })
}, 484911, e => {
    e.v({
        autoSaveSuccess: "Auto-save successful",
        autoSaveSuccessDescription: "Your changes have been saved automatically",
        autoSaveError: "Auto-save error",
        autoSaveErrorDescription: "Unable to auto-save changes. Please try again later",
        autoSaveException: "System error",
        autoSaveExceptionDescription: "An error occurred while auto-saving. Please check your network connection"
    })
}, 290136, e => {
    e.v({
        title: "Opening Effect",
        direction: {
            label: "Opening Direction",
            horizontal: "Horizontal (Left/Right)",
            vertical: "Vertical (Top/Bottom)"
        },
        startTriggerMode: {
            label: "How Opening Starts",
            auto: "Open automatically",
            centerTap: "Tap to open",
            centerTapHint: "Public view will wait for a tap anywhere on the screen before opening. If no tap happens, it opens automatically after 5 seconds."
        },
        renderer: {
            label: "Opening Type",
            splitPanels: "Split panels",
            video: "Fullscreen video"
        },
        timing: {
            duration: "Duration",
            delay: "Start Delay"
        },
        configMode: {
            label: "Configuration Mode",
            template: "Use Template",
            custom: "Custom Settings"
        },
        selectTemplate: "Select Template",
        desktopSettings: "Desktop Settings",
        mobileSettings: "Mobile Settings",
        leftPanel: {
            label: "Left Panel",
            labelVertical: "Top Panel"
        },
        rightPanel: {
            label: "Right Panel",
            labelVertical: "Bottom Panel"
        },
        panelType: {
            color: "Color",
            template: "Use Template",
            custom: "Upload Custom"
        },
        imageSource: {
            template: "Use Template",
            custom: "Upload Custom"
        },
        zIndexPriority: {
            label: "Panel on Top",
            left: "Left/Top",
            right: "Right/Bottom"
        },
        initialOffset: {
            label: "Initial Panel Position",
            description: "Adjust the closed-state position of both panels before the opening animation starts.",
            desktop: "Desktop",
            mobile: "Mobile",
            left: "Left/Top Panel",
            right: "Right/Bottom Panel",
            x: "Horizontal Offset (X)",
            y: "Vertical Offset (Y)",
            rightHint: "Tip: increase X on the right panel to pull the seal/button closer to the center."
        },
        selectImage: "Select Image",
        video: {
            title: "Opening Video Settings",
            desktop: "Desktop Video",
            mobile: "Mobile Video",
            hardcoded: "Opening video uses a hard-coded mobile preset.",
            select: "Select video",
            clear: "Clear",
            empty: "No video selected",
            urlPlaceholder: "Paste video URL or pick from library",
            autoplayHint: "Video autoplays muted and always opens the page when it ends.",
            pageFade: {
                label: "Fade page after video",
                enabled: "Enable fade",
                disabled: "Disable fade",
                duration: "Fade duration",
                fixed: "Page fade is fixed: enabled, 1.0 second."
            }
        },
        autoSplit: {
            title: "Auto-Split Image Upload",
            description: "Upload an image, the system will automatically split it into 2 parts (Left/Right or Top/Bottom) based on the opening direction.",
            desktopButton: "Upload Desktop Image",
            mobileButton: "Upload Mobile Image",
            desktopSuccess: "Desktop images updated successfully",
            mobileSuccess: "Mobile images updated successfully"
        },
        customImageTip: "Tip: Custom images should keep the original dimensions (e.g., 1920x1080). Cut out the unwanted part and make it transparent. Left/top panel uses the left half of the image, right/bottom panel uses the right half.",
        vip: {
            badge: "VIP",
            hint: "Opening Video and Diagonal Envelope are VIP effects.",
            required: "Opening Video and Diagonal Envelope are available for VIP accounts only.",
            featureName: "VIP opening effects"
        },
        buttons: {
            preview: "Preview",
            apply: "Apply",
            cancel: "Cancel",
            remove: "Remove Effect"
        },
        confirmDelete: {
            message: "Are you sure you want to remove the opening effect?",
            confirm: "Remove"
        }
    })
}, 66656, e => {
    e.v({
        settings: {
            sectionTitle: "Map",
            selectLocationButton: "Select location",
            changeLocationButton: "Change location",
            clearLocationButton: "Clear location",
            autoFillLabel: "Auto-fill from",
            autoFillOptions: {
                none: "No auto-fill",
                weddingLocation: "Wedding venue",
                groomLocation: "Groom's address",
                brideLocation: "Bride's address"
            }
        },
        placeholder: "Click to select location"
    })
}, 462857, e => {
    e.v({
        title: "Select location",
        searchPlaceholder: "Search for a place...",
        noResults: "No results found",
        selectButton: "Select",
        cancelButton: "Cancel",
        loading: "Loading..."
    })
}, 515996, e => {
    e.v({
        title: "Feature Management",
        subtitle: "Manage feature list and pricing for each feature",
        searchPlaceholder: "Search by key or description...",
        sortBy: {
            label: "Sort by",
            order: "Order",
            key: "Key",
            description: "Description"
        },
        sortOrder: {
            asc: "Ascending",
            desc: "Descending"
        },
        columns: {
            order: "Order",
            key: "Key",
            description: "Description",
            tiers: {
                basic: "Basic",
                pro: "Pro",
                vip: "VIP"
            },
            price: "Price (VND)",
            status: "Status",
            actions: "Actions"
        },
        status: {
            active: "Active",
            inactive: "Inactive"
        },
        empty: {
            noResults: "No matching features found",
            noData: "No features yet"
        },
        summary: "Total: {{count}} features",
        summaryActive: "Active: {{count}}",
        summaryInactive: "Inactive: {{count}}",
        modal: {
            createTitle: "Add New Feature",
            editTitle: "Edit Feature",
            key: {
                label: "Feature Key",
                placeholder: "Enter feature key (e.g., design_full_service)",
                warning: "Key cannot be changed when editing"
            },
            description: {
                label: "Description",
                placeholder: "Enter detailed description"
            },
            order: {
                label: "Display Order"
            },
            price: {
                label: "Price (VND)"
            },
            originalPrice: {
                label: "Original Price (VND) - Optional"
            },
            previewType: {
                label: "Preview Type",
                image: "Image",
                video: "Video"
            },
            previewLink: {
                label: "Preview Link (URL)",
                placeholder: "https://example.com/image.jpg",
                selectFile: "Select File"
            },
            availableInTiers: {
                label: "Available In Tiers"
            },
            status: {
                label: "Status"
            },
            actions: {
                cancel: "Cancel",
                create: "Create Feature",
                update: "Update"
            },
            errors: {
                keyRequired: "Please enter feature key",
                descriptionRequired: "Please enter description",
                priceNegative: "Price cannot be negative",
                sortOrderNegative: "Order cannot be negative"
            }
        },
        delete: {
            title: "Confirm Delete",
            message: "Are you sure you want to delete this feature?",
            confirm: "Delete",
            cancel: "Cancel"
        },
        quickEdit: {
            title: "Update Available Tier",
            message: "Are you sure you want to change the {{tier}} tier status for feature {{feature}}?",
            confirm: "Update",
            cancel: "Cancel"
        }
    })
}, 430824, e => {
    e.v({
        title: "Analytics Dashboard",
        description: "Realtime rollup target is around 5 minutes. Traffic/source/session accuracy is guaranteed from the analytics go-live date.",
        actions: {
            refresh: "Refresh",
            createAffiliateRevenue: "Create affiliate revenue",
            edit: "Edit",
            cancel: "Cancel",
            update: "Update",
            create: "Create"
        },
        tabs: {
            overview: "Overview",
            content: "Content",
            agents: "Agents",
            affiliate: "Affiliate"
        },
        filters: {
            from: "From (Asia/Ho_Chi_Minh)",
            to: "To (Asia/Ho_Chi_Minh)",
            granularity: "Granularity",
            hour: "Hour",
            day: "Day",
            platform: "Platform",
            flowType: "Flow Type",
            source: "Traffic source",
            allPlatforms: "All platforms",
            allFlows: "All flows",
            allSources: "All sources"
        },
        platform: {
            wedding: "Wedding",
            inviter: "Inviter",
            birthday: "Birthday",
            event: "Event",
            video: "Video",
            affiliate: "Affiliate",
            other: "Other"
        },
        flow: {
            user: "User",
            mod_design: "Moderator design",
            agent: "Agent",
            admin: "Admin",
            design_support: "Design support",
            system: "System"
        },
        source: {
            direct: "Direct",
            facebook: "Facebook",
            tiktok: "TikTok",
            google: "Google",
            referral: "Referral",
            organic: "Organic",
            other: "Other"
        },
        sections: {
            kpi: "KPI Dashboard",
            traffic: "Traffic",
            funnel: "Funnel",
            content: "Content",
            contentTier: "Tier Breakdown",
            contentTopTemplates: "Top Templates",
            contentTemplateSeries: "Template Usage Trend",
            agents: "Agents",
            agentsDrilldown: "Per-agent Drilldown",
            agentReminders: "Agent Reminders",
            revenue: "Revenue",
            affiliateRevenue: "Affiliate Revenue"
        },
        messages: {
            noData: "No data available",
            noKpi: "No KPI data available.",
            noContent: "No content analytics data.",
            noAgents: "No agent analytics data.",
            noReminders: "No reminders found.",
            noAffiliateRevenue: "No affiliate revenue records.",
            loadError: "Failed to load {{name}}"
        },
        funnel: {
            range: "Time range",
            summaryTitle: "Conversion summary",
            ratesTitle: "Conversion rates"
        },
        charts: {
            trafficTrend: "Traffic chart",
            funnelSteps: "Funnel steps chart",
            revenueByType: "Revenue by type",
            contentTierDistribution: "Tier distribution",
            agentBalance: "Top agent balances",
            affiliateRevenueByPartner: "Affiliate revenue by partner"
        },
        endpoints: {
            dashboard: "dashboard",
            traffic: "traffic",
            funnel: "funnel",
            content: "content",
            agents: "agents",
            agentsReminders: "agents/reminders",
            revenue: "revenue",
            affiliateRevenue: "affiliate-revenue"
        },
        table: {
            id: "ID",
            revenueDate: "Revenue date (HCM)",
            partnerName: "Partner",
            productName: "Product",
            revenueCents: "Revenue (cents)",
            currency: "Currency",
            source: "Source",
            reminderType: "Reminder type",
            level: "Level",
            agent: "Agent",
            message: "Message",
            reportTime: "Report time",
            action: "Action"
        },
        affiliateFilters: {
            partnerName: "Filter by partner",
            productName: "Filter by product",
            campaignName: "Filter by campaign",
            partnerNamePlaceholder: "Enter partner name",
            productNamePlaceholder: "Enter product name",
            campaignNamePlaceholder: "Enter campaign name"
        },
        metrics: {
            users: "Users",
            sessions: "Sessions",
            pageviews: "Pageviews",
            bounce: "Bounce rate",
            avgSessionDuration: "Avg session duration",
            createdPages: "Created pages",
            publishedPages: "Published pages",
            paidOrders: "Paid orders",
            paidUsers: "Paid users",
            revenue: "Revenue",
            visitors: "Visitors",
            visitToCreateRate: "Visit -> Create rate",
            createToPublishRate: "Create -> Publish rate",
            createToPayRate: "Create -> Pay rate",
            manualAffiliateRevenue: "Manual affiliate revenue",
            topupRevenue: "Top-up revenue",
            agentTopupRevenue: "Agent top-up revenue",
            source: "Source",
            utmSource: "UTM Source",
            utmMedium: "UTM Medium",
            utmCampaign: "UTM Campaign",
            platform: "Platform",
            flowType: "Flow type",
            createRate: "Create rate",
            publishRate: "Publish rate",
            payRate: "Pay rate",
            revenueCents: "Revenue (cents)",
            avgOrderValueCents: "Average order value (cents)",
            orders: "Orders",
            type: "Type",
            granularity: "Granularity",
            from: "From",
            to: "To",
            agentUserId: "Agent user ID",
            fullName: "Full name",
            dealerLevel: "Dealer level",
            isActive: "Active",
            balanceCents: "Balance (cents)",
            currentSubscriptionTier: "Current subscription tier",
            subscriptionEndsAt: "Subscription ends at",
            email: "Email"
        },
        columns: {
            date: "Date",
            time: "Time",
            hour: "Hour",
            day: "Day",
            source: "Source",
            platform: "Platform",
            flowType: "Flow Type",
            users: "Users",
            sessions: "Sessions",
            pageviews: "Pageviews",
            bounce: "Bounce rate",
            avgSessionDuration: "Avg session duration",
            visitors: "Visitors",
            createdPages: "Created pages",
            publishedPages: "Published pages",
            paidUsers: "Paid users",
            paidOrders: "Paid orders",
            revenue: "Revenue",
            templateId: "Template ID",
            templateName: "Template name",
            tier: "Tier",
            count: "Count",
            value: "Value",
            metric: "Metric",
            type: "Type",
            orders: "Orders",
            revenueCents: "Revenue (cents)",
            avgOrderValueCents: "Avg order value (cents)",
            createRate: "Create rate",
            publishRate: "Publish rate",
            payRate: "Pay rate",
            granularity: "Granularity",
            from: "From",
            to: "To",
            agentUserId: "Agent user ID",
            fullName: "Full name",
            dealerLevel: "Dealer level",
            isActive: "Active",
            balanceCents: "Balance (cents)",
            currentSubscriptionTier: "Current subscription tier",
            subscriptionEndsAt: "Subscription ends at",
            email: "Email"
        },
        values: {
            true: "Yes",
            false: "No",
            hour: "Hourly",
            day: "Daily",
            free: "Free",
            basic: "Basic",
            pro: "Pro",
            vip: "VIP",
            page_plan: "Page plan",
            photo_storage: "Photo storage",
            page_slot: "Page slot",
            feature_purchase: "Feature purchase",
            agent_topup: "Agent top-up",
            video: "Video",
            wedding: "Wedding",
            inviter: "Inviter",
            birthday: "Birthday",
            event: "Event",
            affiliate: "Affiliate",
            other: "Other",
            user: "User",
            mod_design: "Moderator design",
            agent: "Agent",
            admin: "Admin",
            design_support: "Design support",
            system: "System",
            direct: "Direct",
            facebook: "Facebook",
            tiktok: "TikTok",
            google: "Google",
            referral: "Referral",
            organic: "Organic",
            level_1: "Level 1",
            level_2: "Level 2",
            level_3: "Level 3",
            unlimited: "Unlimited",
            null: "-"
        },
        modal: {
            title: {
                create: "Create affiliate revenue",
                edit: "Update affiliate revenue"
            },
            description: "Payload maps to BE contract fields: revenueDate, partnerName, productName, revenueCents, currency...",
            fields: {
                revenueDate: "revenueDate (Asia/Ho_Chi_Minh)",
                revenueCents: "revenueCents",
                partnerName: "partnerName",
                productName: "productName",
                currency: "currency",
                source: "source",
                platform: "platform (optional)",
                flowType: "flowType (optional)",
                metadata: "metadata JSON (optional)",
                metadataPlaceholder: '{"campaign":"spring"}'
            }
        },
        toasts: {
            createSuccess: "Affiliate revenue created",
            updateSuccess: "Affiliate revenue updated",
            saveError: {
                title: "Failed to save affiliate revenue",
                description: "Please verify the data and try again."
            },
            validation: {
                missingRequired: {
                    title: "Missing required information",
                    description: "partnerName and productName are required."
                },
                invalidRevenueDate: {
                    title: "Invalid revenueDate",
                    description: "Please select date and time in Asia/Ho_Chi_Minh timezone."
                },
                invalidRevenueCents: {
                    title: "Invalid revenueCents",
                    description: "Value must be a non-negative integer."
                },
                invalidMetadata: {
                    title: "Invalid metadata",
                    description: "metadata must be a JSON object.",
                    parseError: "Unable to parse metadata JSON."
                },
                missingRecordId: {
                    title: "Missing record ID",
                    description: "Cannot update because this record has no id. Please create a new record."
                }
            }
        }
    })
}, 812717, e => {
    e.v({
        banner: {
            badge: "meWedding Community",
            title: "Community Wedding Invitations",
            description: "Explore beautiful wedding invitations created by the meWedding community.",
            titleMobile: "Community Invitations",
            descriptionMobile: "Explore community wedding invitations"
        },
        search: {
            placeholder: "Search by bride, groom name, location…",
            placeholderMobile: "Search invitations..."
        },
        sort: {
            label: "Sort",
            newest: "Newest",
            oldest: "Oldest"
        },
        filter: {
            allTypes: "All types",
            normal: "Wedding",
            card: "Card",
            logo: "Logo"
        },
        results: {
            showing: "Showing",
            of: "of",
            pages: "invitations",
            found: "invitations found"
        },
        messages: {
            errorLoading: "Unable to load invitations. Please try again later.",
            noPages: "No invitations found"
        },
        card: {
            viewPage: "View Page",
            by: "by",
            couple: "Couple",
            location: "Location",
            template: "Template"
        }
    })
}, 868778, e => {
    e.v({
        title: "Typography",
        font: "Font",
        fontSize: "Font size",
        color: "Text color",
        colorMode: "Color Mode",
        colorModeSolid: "Solid",
        colorModeGradient: "Gradient",
        gradientType: "Gradient Type",
        gradientLinear: "Linear",
        gradientRadial: "Radial",
        gradientAngle: "Gradient Angle",
        gradientColor1: "Color 1",
        gradientColor2: "Color 2",
        textTransform: "Text transform",
        bold: "Bold",
        italic: "Italic",
        underline: "Underline",
        strikethrough: "Strikethrough",
        uppercase: "Uppercase",
        lineHeight: "Line height",
        letterSpacing: "Letter spacing"
    })
}, 233018, e => {
    e.v({
        meta: {
            title: "Terms of Use | meHappy",
            description: "Terms of Service for meHappy - Agreements between users and the platform"
        },
        title: "TERMS OF USE",
        effectiveDate: "Effective Date: 01/11/2025",
        intro: {
            paragraph1: "Welcome to meHappy. By accessing our website or using our services, you agree to comply with these Terms of Use. Please read them carefully.",
            paragraph2: "If you do not agree with any terms, please stop using our services immediately."
        },
        section1: {
            title: "1. ACCEPTANCE OF TERMS",
            content: "By using meHappy, you confirm that you are of legal age or have parental consent. You agree to comply with all applicable laws."
        },
        section2: {
            title: "2. USER ACCOUNTS",
            content: "You are responsible for maintaining the security of your account credentials.",
            item1: "Provide accurate information when registering.",
            item2: "Do not share your password with anyone."
        },
        section3: {
            title: "3. INTELLECTUAL PROPERTY",
            content: "Content, design, and software on meHappy are the property of MEHAPPY and are protected by copyright laws."
        },
        section4: {
            title: "4. USER CONTENT",
            content: "You retain ownership of the content you upload. By uploading, you grant us the right to store and display it to provide the service.",
            prohibited: "Uploading illegal or offensive content is strictly prohibited."
        },
        section5: {
            title: "5. PAYMENT AND REFUNDS",
            content: "Paid services are non-refundable unless there is a technical error from our side."
        },
        section6: {
            title: "6. LIMITATION OF LIABILITY",
            content: "meHappy is provided 'as is'. We are not liable for indirect damages arising from your use of the service."
        },
        section7: {
            title: "7. CONTACT",
            content: "For questions about these Terms, please contact: mehappy.info1@gmail.com"
        }
    })
}, 131668, e => {
    e.v({
        meta: {
            title: "Payment Policy | meHappy",
            description: "Payment guidelines and policies of meHappy"
        },
        title: "PAYMENT POLICY",
        effectiveDate: "Effective Date: 01/11/2025",
        intro: {
            paragraph1: "meHappy offers a secure and convenient payment method via Bank Transfer (QR Code Scanning) to easily upgrade your services.",
            paragraph2: "Below are the details of our payment process."
        },
        section1: {
            title: "1. PAYMENT METHODS",
            intro: "Currently, meHappy exclusively supports payment via Bank Transfer (QR Code Scanning). The system automatically generates a precise QR code for each of your orders."
        },
        section2: {
            title: "2. PAYMENT PROCESS",
            content: "To complete your payment quickly and accurately, please follow these steps:",
            step1: "Select the service package or feature you wish to purchase.",
            step2: "At checkout, the system will display a transfer QR code containing your order details.",
            step3: "Use your Mobile Banking app to scan the QR code (Content and amount will be filled automatically).",
            step4: "Confirm the transfer in your banking app to complete.",
            note: "Note: The QR code is valid only for the current session. Service will be activated automatically immediately after payment is received (usually within 1-2 minutes)."
        },
        section3: {
            title: "3. CANCELLATION AND REFUNDS",
            content: "meHappy does NOT offer refunds for purchased services, except in the following cases:",
            item1: "Critical system errors preventing service usage.",
            item2: "Duplicate payments due to system error.",
            note: "Refund requests must be submitted to support within 24 hours of payment."
        },
        section4: {
            title: "4. SECURITY",
            content: "We are committed to securing your payment information. meHappy does not store your bank account details. All transactions are processed automatically and securely."
        },
        section5: {
            title: "5. SUPPORT",
            content: "If you encounter any issues during payment (e.g., transferred but service not activated), please contact us immediately:",
            email: "Email: mehappy.info1@gmail.com",
            phone: "Online support channels (Fanpage, Zalo) for the fastest assistance."
        }
    })
}, 576597, e => {
    e.v({
        meta: {
            title: "Customer Support | meHappy",
            description: "meHappy Customer Support Center. Contact us for inquiries and technical support."
        },
        title: "CUSTOMER SUPPORT",
        intro: {
            title: "We are here to help",
            desc: "The meHappy team is always ready to answer your questions and help you create the perfect wedding invitations."
        },
        channels: {
            title: "Main Support Channels",
            zalo: {
                title: "Official Zalo",
                desc: "Chat directly for the fastest support.",
                action: "Chat via Zalo"
            },
            messenger: {
                title: "Facebook Messenger",
                desc: "Follow our fanpage and send messages.",
                action: "Chat via Messenger"
            },
            email: {
                title: "Email Support",
                desc: "Send technical support requests or partnership inquiries.",
                action: "Send Email"
            },
            hotline: {
                title: "Hotline",
                desc: "Emergency contact during working hours.",
                action: "Call Now"
            }
        },
        faq: {
            title: "Frequently Asked Questions",
            desc: "Find quick answers to common issues.",
            action: "View FAQ"
        },
        workingHours: {
            title: "Working Hours",
            content: "Mon - Sun: 8:00 - 22:00"
        }
    })
}, 810933, e => {
    e.v({
        menu: {
            greeting: "Xin chào,",
            account: "Tài khoản",
            dashboard: {
                title: "Dashboard",
                desc: "Thông tin cá nhân"
            },
            billExport: {
                title: "Xuất hóa đơn",
                desc: "Yêu cầu xuất hóa đơn"
            },
            changePassword: {
                title: "Đổi mật khẩu",
                desc: "Thay đổi mật khẩu của bạn"
            },
            admin: {
                title: "Admin Dashboard",
                desc: "Quản trị hệ thống",
                badge: "Admin"
            },
            agent: {
                title: "Đại lý",
                titleRegister: "Đăng ký đại lý",
                desc: "Quản lý đại lý",
                descRegister: "Đăng ký làm đại lý",
                badge: "Agent"
            },
            supportRequest: {
                title: "Yêu cầu hỗ trợ",
                desc: "Xem danh sách yêu cầu hỗ trợ thiết kế"
            },
            logout: "Đăng xuất",
            logoutSuccess: "Đăng xuất thành công",
            logoutError: "Đăng xuất thất bại",
            logoutErrorDesc: "Có lỗi xảy ra khi đăng xuất. Vui lòng thử lại sau.",
            featureNotImplemented: "Chức năng này chưa được triển khai"
        },
        buttons: {
            create: "Tạo",
            createInvitation: "Tạo thiệp",
            login: "Đăng nhập"
        },
        changePassword: {
            title: "Đổi mật khẩu",
            oldPassword: "Mật khẩu hiện tại",
            oldPasswordPlaceholder: "Nhập mật khẩu hiện tại",
            newPassword: "Mật khẩu mới",
            newPasswordPlaceholder: "Nhập mật khẩu mới (ít nhất 6 ký tự)",
            confirmPassword: "Xác nhận mật khẩu mới",
            confirmPasswordPlaceholder: "Nhập lại mật khẩu mới",
            submit: "Đổi mật khẩu",
            cancel: "Hủy",
            success: "Đổi mật khẩu thành công",
            successDesc: "Mật khẩu của bạn đã được thay đổi",
            error: "Đổi mật khẩu thất bại",
            errorDesc: "Có lỗi xảy ra khi đổi mật khẩu. Vui lòng thử lại.",
            errors: {
                oldPasswordRequired: "Vui lòng nhập mật khẩu hiện tại",
                newPasswordRequired: "Vui lòng nhập mật khẩu mới",
                newPasswordMinLength: "Mật khẩu mới phải có ít nhất 6 ký tự",
                confirmPasswordRequired: "Vui lòng xác nhận mật khẩu mới",
                passwordsNotMatch: "Mật khẩu xác nhận không khớp"
            }
        },
        billExportRequest: {
            modalTitle: "Yêu cầu xuất hóa đơn",
            yourRequests: "Yêu cầu của bạn",
            createNew: "Tạo yêu cầu mới",
            formDescription: "Điền thông tin xuất hóa đơn để hệ thống xử lý nhanh và chính xác.",
            requiredLegend: "Các trường có dấu * là bắt buộc.",
            noteOptional: "Ghi chú (tùy chọn)",
            placeholders: {
                taxCode: "Ví dụ: 0312345678",
                companyName: "Ví dụ: Công ty TNHH ABC",
                companyAddress: "Ví dụ: 123 Nguyễn Huệ, Quận 1, TP.HCM",
                email: "invoice@abc.vn",
                buyerName: "Ví dụ: Nguyễn Văn A",
                phoneNumber: "Ví dụ: 0912345678",
                citizenIdNumber: "Ví dụ: 012345678901",
                note: "Ví dụ: Xuất hóa đơn trong tháng này"
            },
            fields: {
                taxCode: "Mã số thuế",
                companyName: "Tên đơn vị",
                companyAddress: "Địa chỉ",
                email: "Email nhận hóa đơn",
                buyerName: "Người mua hàng",
                phoneNumber: "Số điện thoại",
                citizenIdNumber: "Số CCCD",
                note: "Ghi chú"
            },
            requiredField: "{{field}} là bắt buộc.",
            invalidEmail: "Email không đúng định dạng.",
            validationError: "Vui lòng kiểm tra lại các trường bắt buộc.",
            charCount: "{{count}}/500 ký tự",
            cancel: "Hủy",
            submit: "Gửi yêu cầu",
            pendingMessage: "Bạn đã có yêu cầu đang chờ xử lý",
            pendingDesc: "Bạn chỉ có thể có một yêu cầu đang chờ xử lý tại một thời điểm. Vui lòng chờ yêu cầu hiện tại được xử lý hoặc hủy yêu cầu đó trước khi tạo yêu cầu mới.",
            noteInfo: "Lưu ý: Yêu cầu xuất hóa đơn sẽ được xử lý bởi quản trị viên. Thời gian xử lý có thể mất từ 1-3 ngày làm việc. Bạn sẽ nhận được thông báo khi yêu cầu được hoàn thành.",
            status: {
                pending: "Đang chờ xử lý",
                processing: "Đang xử lý",
                completed: "Hoàn thành",
                failed: "Thất bại",
                cancelled: "Đã hủy"
            },
            createdAt: "Tạo lúc: {{date}}",
            adminNote: "Ghi chú admin: {{note}}",
            error: "Lỗi: {{error}}",
            download: "Tải xuống",
            successTitle: "Yêu cầu xuất hóa đơn đã được gửi",
            successDesc: "Chúng tôi sẽ xử lý yêu cầu của bạn trong thời gian sớm nhất.",
            errorTitle: "Lỗi khi gửi yêu cầu",
            defaultError: "Có lỗi xảy ra. Vui lòng thử lại sau."
        }
    })
}, 342729, e => {
    e.v(JSON.parse('{"header":{"agentLevel":"Cấp đại lý","loading":"Đang tải..."},"menu":{"dashboard":"Dashboard","pages":"Quản lý trang","catalog":"Danh mục trang","pricing":"Bảng giá","designRequests":"Yêu cầu thiết kế","settings":"Cài đặt","branding":"Thương hiệu"},"pages":{"title":"Quản lý trang","subtitle":"Tạo và quản lý trang web cho khách hàng của bạn.","description":"Theo dõi quyền sở hữu, trạng thái và bàn giao của từng trang khách hàng.","createTemplate":"Tạo Template","createPage":"Tạo Trang","tabAll":"Tất cả ({{count}})","tabTemplates":"Templates","searchPlaceholder":"Tìm theo tên trang hoặc domain...","searchPlaceholderMobile":"Tìm kiếm trang...","listTitle":"Danh sách trang ({{count}})","listSubtitle":"Đây là tất cả các trang web khách hàng bạn đang quản lý.","columnPageInfo":"Thông tin trang","columnTemplate":"Template","columnStatus":"Trạng thái / Quyền sở hữu","columnCreated":"Ngày tạo","columnActions":"Hành động","tierFree":"Miễn phí","tierPro":"Pro","tierVip":"VIP","badgePublic":"Công khai","badgePrivate":"Riêng tư","badgeTemplate":"TEMPLATE","badgeImported":"Đã nhập","badgeFreeTier":"✨ MIỄN PHÍ","statusDraft":"Bản nháp","statusTransferred":"Đã chuyển giao","statusPublished":"Đã xuất bản","transferredTo":"Chuyển giao cho: {{email}}","siteOwner":"Chủ sở hữu: {{name}}","siteId":"ID trang: {{id}}","transferredDate":"Chuyển giao {{date}}","createdDate":"Tạo {{date}}","noDomain":"Chưa có domain","templateId":"ID: {{id}}","free":"Miễn phí","actionTransfer":"Chuyển giao","actionEdit":"Chỉnh sửa","actionClone":"Nhân bản","actionCloneReal":"Real","actionDelete":"Xóa","actionViewDetail":"Xem chi tiết","templateNoHandoff":"⚠️ Template (không thể chuyển giao)","emptyTitle":"Chưa có trang nào","emptyDescription":"Tạo trang đầu tiên để bắt đầu kinh doanh.","paginationShowing":"Hiển thị {{count}} / {{total}} trang","paginationSearch":"Tìm thấy {{total}} kết quả • Hiển thị {{count}} trang","paginationPrev":"Trước","paginationNext":"Sau","paginationPage":"Trang {{current}} / {{total}}","handoffStatusDraft":"Bản nháp","handoffStatusReady":"Sẵn sàng","handoffStatusHanded":"Đã chuyển giao","priceDisplay":"{{price}}k VND","priceFree":"Miễn phí","domainAvailable":"Tên miền \\"{{domain}}\\" có thể sử dụng","domainNotAvailable":"Tên miền \\"{{domain}}\\" đã được sử dụng","domainCheckError":"Lỗi kiểm tra tên miền","pageNumber":"Trang #{{id}}","copyPrefix":"Bản sao - {{title}}","copyPrefixPage":"Bản sao - Trang #{{id}}","detailModal":{"modalTitle":"Chi tiết trang #{{id}}","dealerInfo":"Thông tin đại lý","dealerId":"ID đại lý:","tier":"Cấp độ:","fee":"Phí:","status":"Trạng thái:","createdAt":"Ngày tạo:","recipient":"Người nhận:","recipientUserId":"👤 User ID: {{id}}","handoffDate":"Ngày chuyển giao:","pageInfo":"Thông tin trang web","pageId":"ID trang:","pageTitle":"Tiêu đề:","noTitle":"Chưa có tiêu đề","domain":"Domain:","template":"Template:","pageStatus":"Trạng thái:","visibility":"Chế độ:","visibilityPublic":"Công khai","visibilityPrivate":"Riêng tư","statusDraft":"Nháp","statusActive":"Hoạt động","pageCreated":"Ngày tạo:","lastUpdated":"Cập nhật lần cuối:","noDomain":"N/A","revoking":"Đang thu hồi...","actionRevoke":"Thu hồi","actionRevoking":"Đang thu hồi...","actionEdit":"Chỉnh sửa","actionChangeDomain":"Đổi Domain","actionBuyFeature":"Mua tính năng","actionClose":"Đóng","revokeSuccess":"Thu hồi trang thành công!","revokeSuccessDesc":"Trang đã chuyển về trạng thái chỉnh sửa.","revokeError":"Lỗi","revokeErrorDesc":"Không thể thu hồi trang. Vui lòng thử lại.","revokeConfirmTitle":"Xác nhận thu hồi bàn giao","revokeConfirmMessage":"Bạn có chắc chắn muốn thu hồi trang này? Trang sẽ chuyển về trạng thái chỉnh sửa.","revokeConfirmButton":"Thu hồi","revokeConfirmCancel":"Hủy","actionUpgradeTier":"Nâng cấp Tier","actionBuySlot":"Mua Slot"},"editTitle":{"title":"Chỉnh sửa tiêu đề trang","label":"Tiêu đề mới","placeholder":"Nhập tiêu đề mới cho trang","error":"Lỗi","errorEmpty":"Tiêu đề không được để trống","errorUpdate":"Không thể cập nhật tiêu đề. Vui lòng thử lại.","success":"Cập nhật tiêu đề thành công"}},"dashboard":{"title":"Dashboard Đại lý","subtitle":"Quản lý tài khoản đại lý, số dư tín dụng và các trang web khách hàng.","description":"Tạo trang mới cho khách hàng, theo dõi số dư tín dụng có sẵn và xem hoạt động gần đây.","accountSummary":{"title":"Tóm tắt tài khoản","status":"Trạng thái tài khoản","statusActive":"Hoạt động","statusInactive":"Không hoạt động","tier":"Cấp đại lý","tierUnlimited":"Bao gồm tất cả tính năng","tierStandard":"Tính năng tiêu chuẩn","freeQuota":"Hạn mức trang miễn phí","freeQuotaUsed":"{{remaining}} / {{total}} đã dùng","freeQuotaDescription":"Số trang miễn phí bạn có thể tạo","balance":"Số dư","balanceTopUp":"Nạp tiền","joined":"Ngày tham gia"},"quickActions":{"title":"Thao tác nhanh","createPage":"Tạo trang mới","createPageDescription":"Tạo trang web cưới mới cho khách hàng","createPageButton":"Tạo","topUpBalance":"Nạp tiền vào tài khoản","topUpBalanceDescription":"Thêm tiền vào tài khoản đại lý của bạn","topUpBalanceButton":"Nạp tiền","openCatalog":"Mở danh mục trang","openCatalogDescription":"Duyệt các mẫu và trang đích","openCatalogButton":"Duyệt"},"levelBenefits":{"title":"Lợi ích cấp đại lý","unlimitedAccess":"Quyền truy cập không giới hạn"},"availablePlans":{"title":"Gói dịch vụ có sẵn","grantPeriod":"Thời gian cấp: {{days}} ngày","grantTier":"Cấp độ: {{tier}}","active":"Hoạt động","inactive":"Không hoạt động"},"recentTransactions":{"title":"Giao dịch gần đây","filterAll":"Tất cả","filterAdminAdjust":"Điều chỉnh admin","filterPageCharge":"Phí tạo trang","filterRefund":"Hoàn tiền","typeAdminAdjust":"Điều chỉnh admin","typePageCharge":"Phí tạo trang","typeRefund":"Hoàn tiền","columnType":"Loại","columnAmount":"Số tiền","columnBalanceAfter":"Số dư sau","columnNotes":"Ghi chú","columnDate":"Ngày","noNotes":"-","balanceAfterLabel":"Số dư sau"},"errors":{"loadFailed":"Không thể tải thông tin đại lý","loadFailedDescription":"Vui lòng thử lại sau hoặc liên hệ hỗ trợ."}},"catalog":{"title":"Quản lý Page Catalog","subtitle":"Mẫu thiệp các trang template cho khách hàng xem.","description":"Khách hàng có thể duyệt các trang demo để chọn phong cách thiết kế.","addButton":"Thêm trang template","needTemplateFirst":"Cần tạo trang template trước?","goToPageManagement":"Đi tới quản lý trang","pagesInCatalog":"{{count}} trang trong catalog","allLoaded":"Đã hiển thị tất cả trang","searchPlaceholder":"Tìm kiếm theo tên trang...","searchPlaceholderMobile":"Tìm kiếm catalog...","badgeTemplate":"TEMPLATE","badgeFeatured":"Nổi bật","pageInfo":"Page #{{id}} · {{views}} lượt xem","actionEdit":"Chỉnh sửa","actionToggleFeatured":"Đánh dấu nổi bật","actionCopy":"Sao chép","actionDelete":"Xóa","actionPreview":"Xem trước","actionFeature":"Đánh dấu","actionFeatured":"Nổi bật","addNewCard":{"title":"Thêm trang template mới","description":"Mẫu thiệp thêm trang demo để giúp khách hàng chọn phong cách","button":"Thêm trang template"},"addModal":{"title":"Thêm Trang Template vào Catalog","titleSelectPage":"Chọn Trang Template","infoBox":"ℹ️ Chỉ có thể thêm **Trang Template (MIỄN PHÍ)** vào catalog. Trang template dùng để showcase, không thể bàn giao cho khách.","selectPageLabel":"Chọn Trang Template *","selectPagePlaceholder":"-- Chọn trang template --","searchPlaceholder":"Tìm kiếm trang template...","showingResults":"Hiển thị {{count}} trang","noResults":"Không tìm thấy trang nào","noImage":"Chưa có ảnh","allLoaded":"Đã tải tất cả","noTemplatesAvailable":"Không có trang template nào để thêm vào catalog. Hãy tạo trang template miễn phí trước.","thumbnailLabel":"Ảnh đại diện","thumbnailButtonSelect":"Chọn ảnh","thumbnailButtonChange":"Đổi ảnh","thumbnailButtonRemove":"Xóa","thumbnailHelp":"Ảnh đại diện hiển thị trong catalog (nếu không chọn sẽ dùng ảnh từ page)","categoryLabel":"Danh mục","categoryPlaceholder":"VD: Wedding, Birthday, Corporate","tagsLabel":"Tags (ngăn cách bằng dấu phẩy)","tagsPlaceholder":"VD: elegant, luxury, modern","descriptionLabel":"Mô tả","descriptionPlaceholder":"Mô tả ngắn về trang này...","featuredCheckbox":"Đánh dấu là trang nổi bật","buttonCancel":"Hủy","buttonAdd":"Thêm vào Catalog"},"editModal":{"title":"Chỉnh sửa danh sách mẫu thiệp","displayOrderLabel":"Thứ tự hiển thị","displayOrderPlaceholder":"Số càng lớn càng hiển thị trước","featuredCheckbox":"Đánh dấu nổi bật","buttonCancel":"Hủy","buttonSave":"Lưu thay đổi"},"thumbnailModal":{"title":"Chọn ảnh đại diện"},"messages":{"errorSelectPage":"Vui lòng chọn trang","successAdd":"Đã thêm trang vào catalog","errorAdd":"Không thể thêm trang vào catalog","successUpdate":"Đã cập nhật thông tin showcase","errorUpdate":"Không thể cập nhật","confirmDelete":"Bạn có chắc muốn xóa trang này khỏi catalog?","successDelete":"Đã xóa trang khỏi catalog","errorDelete":"Không thể xóa","successToggleFeatured":"Đã cập nhật trạng thái nổi bật","successUnfeatured":"Đã bỏ nổi bật","errorToggleFeatured":"Không thể cập nhật"}},"designRequests":{"title":"Yêu Cầu Hỗ Trợ Thiết Kế","subtitle":"Yêu cầu meWedding thiết kế hộ cho các trang dealer, mẫu thiệp hoặc yêu cầu tùy chỉnh","description":"Gửi yêu cầu tùy chỉnh giao diện, điều chỉnh nội dung hoặc thiết kế thiệp mời mới.","createButton":"Tạo yêu cầu mới","viewAllButton":"Xem danh sách yêu cầu","stats":{"total":{"label":"Tổng số yêu cầu","description":"Tất cả yêu cầu bạn đã gửi","descriptionMobile":"Tất cả yêu cầu đã gửi"},"waiting":{"label":"Đang chờ","description":"Đã gửi, đang chờ xem xét","descriptionMobile":"Đang chờ xem xét"},"inProgress":{"label":"Đang xử lý","description":"Đội ngũ thiết kế đang làm việc","descriptionMobile":"Đang được xử lý"},"completed":{"label":"Hoàn thành","description":"Đã hoàn thành và đóng","descriptionMobile":"Đã hoàn thành"}},"recentRequests":{"title":"Yêu cầu gần đây","subtitle":"Các yêu cầu gần đây nhất của bạn được hiển thị ở đây.","empty":{"title":"Bạn chưa có yêu cầu thiết kế nào","titleMobile":"Chưa có yêu cầu thiết kế","description":"Tạo yêu cầu đầu tiên để chúng tôi hỗ trợ bạn thiết kế trang dealer, mẫu thiệp hoặc bất kỳ công việc thiết kế tùy chỉnh nào.","button":"Tạo yêu cầu đầu tiên"},"adminNote":"Ghi chú từ Admin:","viewAll":"Xem tất cả {{count}} yêu cầu"},"createModal":{"title":"Yêu Cầu Hỗ Trợ Thiết Kế Trang Dealer","dealerPage":"Trang Dealer","dealerPagePlaceholder":"Tìm kiếm trang dealer (tên, domain, ID)...","loading":"Đang tải...","selected":"Đã chọn: {{label}}","pricingTier":"Tier trang: {{tier}}","dealerLevel":"Level đại lý: {{level}}","unlimitedNote":"(Miễn phí tất cả)","currentBalance":"Số dư hiện tại: {{balance}} VND","noPageFound":"Không tìm thấy trang nào","requestTitle":"Tiêu Đề Yêu Cầu","requestTitlePlaceholder":"Tiêu đề ngắn gọn cho yêu cầu thiết kế của bạn","description":"Mô Tả Chi Tiết","descriptionPlaceholder":"Mô tả chi tiết về yêu cầu thiết kế, bao gồm phong cách, màu sắc, nội dung mong muốn...","priority":"Độ Ưu Tiên","priorityLow":"Ưu Tiên Thấp (7-14 ngày)","priorityMedium":"Ưu Tiên Trung Bình (3-7 ngày)","priorityHigh":"Ưu Tiên Cao (1-3 ngày)","priorityUrgent":"Khẩn Cấp (24-48 giờ)","referenceUrls":"URLs Tham Khảo","referenceUrlPlaceholder":"https://example.com","addButton":"Thêm","removeButton":"Xóa","cancel":"Hủy","submit":"Gửi Yêu Cầu","validationError":"Lỗi Validation","validationErrorDesc":"Vui lòng điền đầy đủ thông tin bắt buộc","free":"Miễn phí","notAvailable":"Không khả dụng"},"listModal":{"title":"Danh Sách Yêu Cầu Hỗ Trợ Thiết Kế","loading":"Đang tải...","error":"Có lỗi xảy ra khi tải dữ liệu","empty":"Bạn chưa có yêu cầu hỗ trợ thiết kế nào","createdAt":"Tạo: {{date}}","completedAt":"Hoàn thành: {{date}}","assignedTo":"Được giao cho: {{name}}","adminNote":"Ghi chú từ Admin:","previous":"Trước","next":"Sau","pageInfo":"Trang {{current}} / {{total}}"}},"brandingSettings":{"title":"Cài đặt thương hiệu","subtitle":"Tùy chỉnh nhận diện thương hiệu, URL công khai và thông tin liên hệ hiển thị cho khách hàng.","verified":"Đã xác minh","brandIdentity":{"title":"Nhận diện thương hiệu","brandName":{"label":"Tên thương hiệu","placeholder":"Wedding Studio Pro","helper":"Hiển thị trên các trang công khai và hóa đơn."},"logo":{"label":"Logo","buttonChange":"Thay đổi Logo","buttonRemove":"Xóa","helper":"PNG, SVG, hoặc JPG. Tối thiểu 512×512 pixels. Tối đa 2MB."},"description":{"label":"Mô tả ngắn","placeholder":"Dịch vụ tổ chức và thiết kế tiệc cưới cao cấp","helper":"Mô tả một dòng được sử dụng trên các khối thương hiệu công khai."}},"websiteAddress":{"title":"Địa chỉ website","currentLink":{"label":"Link công khai hiện tại"},"defaultDomain":{"label":"Tên miền phụ mặc định","placeholder":"weddingstudio","suffix":".mehappy.vn","helper":"3–63 ký tự; chữ cái, số và dấu gạch ngang. Phải bắt đầu và kết thúc bằng chữ cái hoặc số."},"customDomain":{"toggleLabel":"Sử dụng tên miền tùy chỉnh","toggleHelper":"Thay thế link *.mehappy.vn mặc định bằng tên miền của riêng bạn.","label":"Tên miền tùy chỉnh","placeholder":"events.weddingstudio.com","dnsTitle":"Hướng dẫn cấu hình DNS","dnsSubtitle":"Thêm các bản ghi này tại nhà cung cấp tên miền của bạn. Thay đổi có thể mất đến 24 giờ.","dnsNote1":"• Tên miền gốc (apex) thường sử dụng bản ghi A.","dnsNote2":"• Chỉ sử dụng một trong số A hoặc ALIAS/ANAME nếu nhà cung cấp của bạn hỗ trợ.","verifyButton":"Xác minh tên miền","verifiedBadge":"Đã xác minh","lastChecked":"Kiểm tra lần cuối {{time}}"}},"contactInfo":{"title":"Thông tin liên hệ","email":{"label":"Email liên hệ","placeholder":"hello@weddingstudio.com","helper":"Khách hàng có thể liên hệ bạn qua địa chỉ này; cũng được dùng cho thông báo.","helperMobile":"Khách hàng có thể liên hệ bạn qua địa chỉ này."},"phone":{"label":"Số điện thoại","placeholder":"+84 (555) 123-4567","helper":"Hiển thị trên hóa đơn và khối liên hệ.","helperMobile":"Hiển thị trên hóa đơn và khối liên hệ."},"zalo":{"label":"Zalo","placeholder":"Số điện thoại Zalo (ví dụ: 0901234567)","helper":"Số điện thoại Zalo để khách hàng liên hệ"},"facebook":{"label":"Facebook","placeholder":"facebook.com/username hoặc link Facebook của bạn","helper":"Link trang Facebook hoặc fanpage"},"tiktok":{"label":"TikTok","placeholder":"@username hoặc link TikTok của bạn","helper":"Tên người dùng hoặc link TikTok"}},"favicon":{"title":"Favicon","preview":"Xem trước tab trình duyệt","buttonChange":"Thay đổi Favicon","buttonRemove":"Xóa","helper1":"Ảnh vuông, 32×32 pixels (hoặc 48×48/64×64 cho màn hình retina). Định dạng PNG hoặc ICO. Tối đa 256KB.","helper1Mobile":"Ảnh vuông, 32×32 pixels. Định dạng PNG hoặc ICO. Tối đa 256KB.","helper2":"Hiển thị trên tab trình duyệt và dấu trang."},"appearance":{"title":"Tùy Chỉnh Giao Diện","subtitle":"Tùy chỉnh màu sắc, font chữ và bố cục trang showcase của bạn","colors":{"title":"Bảng Màu","subtitle":"Tùy chỉnh màu sắc cho các thành phần trên trang showcase","header":{"title":"Header","background":"Màu nền header","backgroundHelper":"Màu nền của thanh header trên cùng","text":"Màu chữ header","textHelper":"Màu chữ và icon trên header"},"button":{"title":"Nút Bấm","primary":"Màu nút chính","primaryHelper":"Màu nền của các nút hành động chính","primaryHover":"Màu hover nút chính","primaryHoverHelper":"Màu khi di chuột qua nút","primaryText":"Màu chữ nút chính","primaryTextHelper":"Màu chữ trên nút chính"},"card":{"title":"Card Catalog","background":"Màu nền card","backgroundHelper":"Màu nền của các card thiệp","border":"Màu viền card","borderHelper":"Màu viền xung quanh card","hoverShadow":"Bóng đổ khi hover","hoverShadowHelper":"Hiệu ứng bóng khi di chuột qua card"},"category":{"title":"Category Pills","active":"Màu category đang chọn","activeHelper":"Màu nền khi category được chọn","activeText":"Màu chữ category đang chọn","activeTextHelper":"Màu chữ khi category được chọn","inactive":"Màu category không chọn","inactiveHelper":"Màu nền khi category chưa chọn","inactiveText":"Màu chữ category không chọn","inactiveTextHelper":"Màu chữ khi category chưa chọn"},"footer":{"title":"Footer","background":"Màu nền footer","backgroundHelper":"Màu nền của footer ở cuối trang","text":"Màu chữ footer","textHelper":"Màu chữ trong footer"},"link":{"title":"Liên Kết","default":"Màu link","defaultHelper":"Màu của các liên kết","hover":"Màu link khi hover","hoverHelper":"Màu khi di chuột qua liên kết"}},"typography":{"title":"Kiểu Chữ","subtitle":"Tùy chỉnh font chữ và kích thước","primaryFont":"Font chữ chính","primaryFontHelper":"Font chữ sử dụng cho toàn bộ trang","headingFont":"Font tiêu đề","headingFontHelper":"Font chữ cho các tiêu đề","bodyFont":"Font nội dung","bodyFontHelper":"Font chữ cho nội dung văn bản","fontSize":{"title":"Kích Thước Chữ","header":"Kích thước chữ header","headerHelper":"Kích thước chữ trên header (px)","body":"Kích thước chữ nội dung","bodyHelper":"Kích thước chữ nội dung (px)"},"fontWeight":{"title":"Độ Đậm Chữ","normal":"Normal","medium":"Medium","semibold":"Semibold","bold":"Bold"},"uploadFont":"📁 Tải lên font tùy chỉnh","customFonts":"Font tùy chỉnh","standardFonts":"Font chuẩn"},"hero":{"title":"Banner Chính (Hero)","subtitle":"Tùy chỉnh phần banner đầu trang","backgroundImage":"Ảnh nền banner","backgroundImageHelper":"URL ảnh nền cho banner chính","backgroundImageButton":"Chọn ảnh nền","backgroundImageChange":"Đổi ảnh","backgroundImageRemove":"Xóa ảnh","overlayColor":"Màu overlay","overlayColorHelper":"Màu lớp phủ trên ảnh nền (rgba)","overlayOpacity":"Độ trong suốt overlay","overlayOpacityHelper":"Độ trong suốt của lớp phủ (0-1)","titleColor":"Màu tiêu đề","titleColorHelper":"Màu chữ tiêu đề chính","descriptionColor":"Màu mô tả","descriptionColorHelper":"Màu chữ mô tả","badge":{"title":"Badge Thương Hiệu","background":"Màu nền badge","backgroundHelper":"Màu nền của badge tên thương hiệu","textColor":"Màu chữ badge","textColorHelper":"Màu chữ trên badge"}},"layout":{"title":"Bố Cục","subtitle":"Tùy chỉnh khoảng cách và bo góc","containerMaxWidth":"Chiều rộng tối đa","containerMaxWidthHelper":"Chiều rộng tối đa của container (px)","sectionPadding":"Khoảng cách section","sectionPaddingHelper":"Padding của các section (px)","cardBorderRadius":"Bo góc card","cardBorderRadiusHelper":"Độ bo góc của card (px)","buttonBorderRadius":"Bo góc nút","buttonBorderRadiusHelper":"Độ bo góc của nút bấm (px)","cardGap":"Khoảng cách giữa card","cardGapHelper":"Khoảng cách giữa các card (px)"},"localization":{"title":"Ngôn ngữ mặc định","subtitle":"Chọn ngôn ngữ mặc định khi khách truy cập website đại lý của bạn.","defaultLanguage":"Ngôn ngữ website","languages":{"vi":"Tiếng Việt","en":"English"}},"textOverrides":{"title":"Tùy chỉnh text mặc định","subtitle":"Chỉnh sửa nhanh các label quan trọng trên website đại lý. Để trống để dùng text hệ thống.","language":{"title":"Ngôn ngữ chỉnh text","hint":"Mỗi ngôn ngữ có bộ label riêng. Để trống sẽ fallback theo cấu hình cũ hoặc text hệ thống.","vi":"Tiếng Việt","en":"English"},"groups":{"nav":"Thanh điều hướng","catalog":"Catalog","pricing":"Bảng giá","content":"Nội dung trang","chat":"Popup chat","footer":"Footer"},"fields":{"navShowcase":"Menu: Mẫu thiệp","navPricing":"Menu: Bảng giá","navContact":"Menu: Liên hệ","navStartNow":"Nút: Bắt đầu ngay","catalogSearchPlaceholder":"Catalog: Placeholder tìm kiếm","catalogAll":"Catalog: Nhãn Tất cả","catalogFeatured":"Catalog: Nhãn Nổi bật","catalogAllTemplates":"Catalog: Nhãn Tất cả thiệp","catalogNoResults":"Catalog: Text không có kết quả","pricingStartNow":"Bảng giá: Nút bắt đầu","pricingViewAllFeatures":"Bảng giá: Xem tất cả tính năng","pricingContactNow":"Bảng giá: Liên hệ ngay","pricingEmptyTitle":"Bảng giá: Tiêu đề trạng thái rỗng","pricingEmptySubtitle":"Bảng giá: Mô tả trạng thái rỗng","heroCustomTitle":"Hero: Tiêu đề tùy chỉnh","heroCustomDescription":"Hero: Mô tả tùy chỉnh","catalogCustomTitle":"Catalog: Tiêu đề tùy chỉnh","catalogCustomSubtitle":"Catalog: Phụ đề tùy chỉnh","chatPhone":"Popup chat: Label số điện thoại","chatZalo":"Popup chat: Label Zalo","chatMessenger":"Popup chat: Label Messenger","chatWhatsapp":"Popup chat: Label WhatsApp","chatEmail":"Popup chat: Label Email","footerContactTitle":"Footer: Tiêu đề Liên hệ","footerServicesTitle":"Footer: Tiêu đề Dịch vụ"}},"footerServiceLinks":{"title":"Footer Dịch vụ Links","subtitle":"Thiết lập link đích cho 3 mục Dịch vụ ở footer. Để trống sẽ dùng hành vi mặc định.","helper":"Hỗ trợ: https://..., /path, #anchor (ví dụ: #dealer-contact-id).","fields":{"showcase":"Link mục Showcase","pricing":"Link mục Pricing","contact":"Link mục Contact"}},"chatWidget":{"title":"Kênh chat nổi (Floating)","subtitle":"Bật/tắt và sắp xếp các kênh hiển thị trong popup nổi góc phải.","whatsappValue":"WhatsApp (số điện thoại hoặc URL)","whatsappPlaceholder":"Ví dụ: +84901234567 hoặc https://wa.me/84901234567","whatsappHelper":"Nếu bật WhatsApp mà không có giá trị hợp lệ thì kênh sẽ không hiển thị.","position":"Vị trí #{{position}}","channels":{"whatsapp":"WhatsApp","zalo":"Zalo","messenger":"Messenger","phone":"Gọi điện","email":"Email"}},"presets":{"title":"Giao Diện Có Sẵn","subtitle":"Chọn một trong các giao diện được thiết kế sẵn","apply":"Áp dụng","current":"Đang dùng","modern":"Modern","modernDesc":"Giao diện hiện đại với màu xanh dương","classic":"Classic","classicDesc":"Giao diện cổ điển với màu đỏ","elegant":"Elegant","elegantDesc":"Giao diện thanh lịch với màu tím","vibrant":"Vibrant","vibrantDesc":"Giao diện sống động với màu vàng cam","minimal":"Minimal","minimalDesc":"Giao diện tối giản với màu đen trắng","custom":"Tùy Chỉnh","customDesc":"Giao diện tùy chỉnh của bạn"},"preview":{"title":"Xem Trước","openInNewTab":"Mở trong tab mới","openHomepage":"Review trang chủ","openPricing":"Review bảng giá","loading":"Đang tải preview..."},"reset":{"button":"Đặt lại mặc định","buttonAll":"Đặt lại tất cả","confirm":"Bạn có chắc muốn đặt lại tất cả tùy chỉnh về mặc định?","confirmSection":"Bạn có chắc muốn đặt lại phần này về mặc định?","success":"Đã đặt lại về mặc định","cancel":"Hủy","confirmButton":"Đặt lại"}},"actions":{"cancel":"Hủy","save":"Lưu thay đổi","saving":"Đang lưu..."},"messages":{"saveSuccess":"Thành công","saveSuccessDesc":"Đã cập nhật thông tin thương hiệu","saveError":"Lỗi","saveErrorDesc":"Không thể cập nhật thông tin","loadError":"Không thể tải thông tin","loadErrorDesc":"Vui lòng thử lại sau","domainCheckError":"Lỗi kiểm tra tên miền","copiedSuccess":"Copied!","copiedSuccessDesc":"Link copied to clipboard"},"modals":{"selectLogo":"Select Logo","selectFavicon":"Select Favicon"}},"pricingPage":{"title":"Trang bảng giá","subtitle":"Tạo và xuất bản trang bảng giá độc lập với các gói của riêng bạn.","subtitleMobile":"Tạo và xuất bản trang bảng giá độc lập với các gói của riêng bạn.","note":"Trang này có thể được công khai để khách hàng xem.","loading":"Đang tải...","publicPageToggle":{"title":"Công khai trang","description":"Bật tính năng này để làm cho trang bảng giá của bạn hiển thị công khai.","statusInvisible":"Trang bảng giá của bạn không hiển thị với khách hàng."},"pageContent":{"title":"Nội dung trang","pageTitle":{"label":"Tiêu đề trang","placeholder":"Bảng Giá Dịch Vụ Wedding","helper":"Được hiển thị là tiêu đề chính trên trang bảng giá."},"subtitle":{"label":"Subtitle / Intro","placeholder":"Xem bảng giá chi tiết các gói dịch vụ wedding của chúng tôi.","helper":"Phụ đề ngắn hoặc dòng giới thiệu dưới tiêu đề chính."}},"packages":{"title":"Gói dịch vụ","description":"Thêm, chỉnh sửa và sắp xếp lại các gói giá. Mỗi gói sẽ xuất hiện như một ưu đãi riêng biệt trên trang bảng giá công khai của bạn.","descriptionMobile":"Thêm, chỉnh sửa và sắp xếp lại các gói giá.","addButton":"Thêm gói","packageLabel":"Gói {{number}}","fields":{"name":{"label":"Tên gói","placeholder":"Gói mới","helper":"Tên này sẽ được hiển thị cho khách hàng."},"price":{"label":"Giá (VND)","placeholder":"0","helper":"Được hiển thị trên trang bảng giá.","currency":"₫"},"description":{"label":"Mô tả / Chi tiết","placeholder":"Mô tả những gì có trong gói này...","helper":"Mô tả những gì có trong gói này."}}},"seo":{"title":"Thông tin SEO","description":"Được sử dụng cho công cụ tìm kiếm và xem trước liên kết.","fields":{"title":{"label":"Tiêu đề SEO","placeholder":"Bảng Giá – Wedding Studio","helper":"Có thể xuất hiện trong tab trình duyệt và kết quả tìm kiếm."},"description":{"label":"Mô tả Meta","placeholder":"Xem bảng giá chi tiết các gói dịch vụ wedding...","helper":"Tóm tắt ngắn cho kết quả tìm kiếm và xem trước."},"keywords":{"label":"Từ khóa","placeholder":"thiệp cưới, wedding, bảng giá","helper":"Từ khóa được phân tách bằng dấu phẩy (ví dụ: wedding, pricing, packages)."}}},"actions":{"save":"Lưu Trang","saving":"Đang lưu...","deactivate":"Vô Hiệu Hóa","deactivating":"Đang vô hiệu hóa..."},"messages":{"saveSuccess":"Đã lưu trang bảng giá","saveError":"Không thể lưu trang","deactivateSuccess":"Đã vô hiệu hóa trang bảng giá","deactivateError":"Không thể vô hiệu hóa","deactivateConfirm":"Bạn có chắc muốn vô hiệu hóa trang bảng giá?","titleRequired":"Vui lòng nhập tiêu đề trang","error":"Lỗi","success":"Thành công"}},"changeDomain":{"title":"Thay đổi Domain","currentDomain":"Domain hiện tại:","newDomain":"Domain mới","customDomain":"Tên miền tùy chỉnh","systemDomain":"Tên miền hệ thống","systemDomainDesc":"Sử dụng tên miền .mehappy.info","agentDomain":"Tên miền đại lý","agentDomainDesc":"Sử dụng tên miền của đại lý:","customDomainToggle":"Sử dụng tên miền tùy chỉnh","customDomainDesc":"Bật tùy chọn này nếu bạn muốn sử dụng tên miền riêng thay vì .mehappy.info","placeholder":{"subdomain":"john-mary-wedding","custom":"mydomain.com"},"helper":{"subdomain":"Địa chỉ website phải lớn hơn 3 và nhỏ hơn 63 kí tự (a-z 0-9), có thể sử dụng ký tự \\"-\\"","custom":"Nhập tên miền đầy đủ của bạn (ví dụ: mydomain.com)","agentDomain":"Nhập phần đầu của tên miền, phần đuôi sẽ tự động thêm"},"suggestions":"Gợi ý các tên miền khác:","actions":{"cancel":"Hủy","update":"Cập nhật Domain"},"errors":{"empty":"Vui lòng nhập domain mới","same":"Domain mới phải khác domain hiện tại","invalidFormat":"Domain chỉ được sử dụng chữ thường, số, dấu gạch ngang và dấu chấm","invalidSubdomain":"Domain chỉ được sử dụng chữ thường, số và dấu gạch ngang","tooShort":"Domain phải có ít nhất 3 ký tự","notAvailable":"Domain không khả dụng","checking":"Đang kiểm tra domain, vui lòng đợi","updateFailed":"Không thể cập nhật domain. Vui lòng thử lại."},"success":{"title":"Thành công","description":"Đã cập nhật domain thành {{domain}}"}},"createPage":{"title":"Tạo trang mới","fields":{"title":"Tiêu đề trang","titleRequired":"Tiêu đề trang *","tier":"Cấp độ","tierRequired":"Cấp độ *","eventDate":"Ngày cưới","eventDateRequired":"Ngày cưới *","template":"Template (tùy chọn)","domain":"Domain","domainRequired":"Domain *"},"placeholders":{"title":"Nhập tiêu đề trang","eventDate":"Nhập ngày cưới","subdomain":"john-mary-wedding","customDomain":"example.com"},"helper":{"subdomain":"Địa chỉ website phải lớn hơn 3 và nhỏ hơn 63 kí tự (a-z 0-9), có thể sử dụng ký tự \\"-\\".","customDomain":"Nhập tên miền đầy đủ của bạn (vd: example.com)"},"templateId":"ID:","selectTemplate":"Chọn template","currentLevel":"Level hiện tại:","notAvailable":"(Không khả dụng)","quotaRemaining":"Còn {{count}} trang","loadingProfile":"Đang tải thông tin đại lý...","noFreeQuota":"Không còn hạn mức FREE","insufficientBalance":"Không đủ số dư tài khoản","actions":{"cancel":"Hủy","create":"Tạo trang"},"success":{"title":"Thành công","description":"Tạo trang thành công!"},"errors":{"titleRequired":"Vui lòng nhập tiêu đề trang","domainRequired":"Vui lòng nhập domain","domainInvalid":"Domain chỉ được sử dụng chữ thường, số và dấu gạch ngang","domainTooShort":"Domain phải có ít nhất 3 ký tự","domainNotAvailable":"Domain không khả dụng","domainChecking":"Đang kiểm tra domain, vui lòng đợi","createFailed":"Có lỗi xảy ra khi tạo trang"}},"createTemplatePage":{"title":"Tạo Trang Template","description":"✨ Trang template hoàn toàn miễn phí! Dùng để showcase trong catalog. Không thể bàn giao cho khách hàng.","fields":{"title":"Tiêu đề trang","titleRequired":"Tiêu đề trang *","templateSource":"Template gốc","domain":"Domain","domainRequired":"Domain *","eventDate":"Ngày sự kiện (tùy chọn)"},"placeholders":{"title":"VD: Thiết kế Cưới Sang Trọng","template":"Chọn template","templateSelected":"Đã chọn: {{name}}","subdomain":"john-mary-wedding"},"helper":{"domain":"Địa chỉ website phải lớn hơn 3 và nhỏ hơn 63 kí tự (a-z 0-9), có thể sử dụng ký tự \\"-\\"."},"actions":{"cancel":"Hủy","create":"Tạo Template"},"success":{"title":"Thành công","description":"Tạo trang template miễn phí thành công! Bạn có thể thêm vào catalog sau."},"errors":{"titleRequired":"Vui lòng nhập tiêu đề trang","domainInvalid":"Domain chỉ được sử dụng chữ thường, số và dấu gạch ngang","domainTooShort":"Domain phải có ít nhất 3 ký tự","domainNotAvailable":"Domain không khả dụng","domainChecking":"Đang kiểm tra domain, vui lòng đợi","createFailed":"Có lỗi xảy ra khi tạo trang template"}},"cloneTemplateToReal":{"title":"Clone Template → Trang Thực","description":"💰 Clone trang template thành trang thực để bán cho khách hàng. Có tính phí theo tier bạn chọn.","cloneFrom":"Clone từ:","fields":{"title":"Tiêu đề trang mới","titleRequired":"Tiêu đề trang mới *","tier":"Cấp độ","tierRequired":"Cấp độ *","domain":"Domain (tùy chọn)","eventDate":"Ngày sự kiện (tùy chọn)"},"placeholders":{"title":"VD: Thiệp cưới Anh Minh & Chị Hoa","domain":"vd: minh-hoa-wedding"},"actions":{"cancel":"Hủy","clone":"Clone thành Trang Thực"},"success":{"title":"Thành công","description":"Clone thành trang thực ({{tier}}) thành công!"},"errors":{"titleRequired":"Vui lòng nhập tiêu đề trang","domainInvalid":"Domain chỉ được sử dụng chữ thường, số và dấu gạch ngang","domainTooShort":"Domain phải có ít nhất 3 ký tự","cloneFailed":"Có lỗi xảy ra khi clone trang"}},"handoffModal":{"title":"Chuyển giao trang cho khách hàng","recipientType":"Loại người nhận","typeExisting":"Người dùng đã có tài khoản","typeNew":"Tạo tài khoản mới","fields":{"userId":"User ID của người nhận","email":"Email","fullName":"Họ và tên","password":"Mật khẩu tạm thời"},"placeholders":{"userId":"Nhập User ID (email)","email":"email@example.com","fullName":"Nguyễn Văn A","password":"Mật khẩu cho tài khoản mới"},"actions":{"cancel":"Hủy","transfer":"Chuyển giao"},"errors":{"cannotHandoffTemplate":"Không thể bàn giao","cannotHandoffTemplateDesc":"Trang template không thể bàn giao. Vui lòng clone thành trang thực trước.","userIdRequired":"Vui lòng nhập ID người dùng","allFieldsRequired":"Vui lòng điền đầy đủ thông tin người nhận","handoffFailed":"Có lỗi xảy ra khi chuyển giao trang"},"success":{"title":"Thành công","description":"Chuyển giao trang thành công!"}},"cloneModal":{"title":"Nhân bản trang","description":"Nhân bản trang sẽ tạo một bản sao hoàn toàn mới với nội dung giống hệt trang gốc.","fields":{"title":"Tiêu đề trang mới","titleRequired":"Tiêu đề trang mới *","domain":"Domain","domainRequired":"Domain *","eventDate":"Ngày sự kiện (tùy chọn)"},"placeholders":{"title":"Nhập tiêu đề cho trang mới","domain":"vd: my-wedding"},"helper":{"domain":"Chỉ nhập phần subdomain. Hệ thống sẽ tự thêm .mehappy.info.","eventDate":"Để trống nếu muốn giữ nguyên ngày sự kiện từ trang gốc"},"actions":{"cancel":"Hủy","clone":"Nhân bản"},"errors":{"titleRequired":"Vui lòng nhập tiêu đề cho trang mới","domainRequired":"Vui lòng nhập domain","domainInvalid":"Domain chỉ được sử dụng chữ thường, số và dấu gạch ngang","domainTooShort":"Domain phải có ít nhất 3 ký tự","domainNotAvailable":"Domain không khả dụng","domainChecking":"Đang kiểm tra domain, vui lòng đợi","cloneFailed":"Có lỗi xảy ra khi nhân bản trang"},"success":{"title":"Thành công","description":"Nhân bản trang thành công!"}},"deleteModal":{"title":"Xác nhận xóa trang","pageInfo":"Thông tin trang:","status":"Trạng thái","warningTransferred":"⚠️ Cảnh báo: Trang này đã được chuyển giao","messageTransferred":"Trang này đã được bàn giao. Xóa sẽ chỉ gỡ bỏ trang khỏi danh sách dealer page của bạn. Trang vẫn sẽ tồn tại và thuộc về người nhận.","noteTransferred":"Lưu ý: Trang vẫn thuộc về {{owner}}. Bạn chỉ xóa trang khỏi danh sách quản lý của mình.","warningDraft":"⚠️ Cảnh báo: Xóa vĩnh viễn","messageDraft":"Trang này chưa được bàn giao. Xóa sẽ xóa hoàn toàn trang khỏi hệ thống.","noteDraft":"Hành động này không thể hoàn tác. Trang sẽ bị xóa hoàn toàn khỏi hệ thống.","actions":{"cancel":"Hủy","delete":"Xóa"},"success":{"titleRemoved":"Thành công","descriptionRemoved":"Đã xóa trang khỏi danh sách dealer page","titleDeleted":"Thành công","descriptionDeleted":"Đã xóa trang hoàn toàn"},"errors":{"deleteFailed":"Có lỗi xảy ra khi xóa trang"}},"application":{"modalTitle":"Đăng ký trở thành đại lý","statusTitle":"Trạng thái đơn đăng ký đại lý","personalInfo":"Thông tin cá nhân","fullName":"Họ và tên","fullNamePlaceholder":"Nhập họ và tên đầy đủ","gender":"Giới tính","selectGender":"Chọn giới tính","male":"Nam","female":"Nữ","other":"Khác","birthDate":"Ngày sinh","address":"Địa chỉ","addressPlaceholder":"Nhập địa chỉ đầy đủ","country":"Quốc gia","countryPlaceholder":"Nhập quốc gia","province":"Tỉnh/Thành phố","provincePlaceholder":"Nhập tỉnh/thành phố","phoneNumber":"Số điện thoại","phoneNumberPlaceholder":"Nhập số điện thoại","cccd":"CCCD/CMND","cccdPlaceholder":"Nhập số CCCD/CMND","cancel":"Hủy","submit":"Gửi đơn đăng ký","successTitle":"Thành công","successDesc":"Đơn đăng ký đại lý đã được gửi thành công!","errorTitle":"Lỗi","errorDesc":"Có lỗi xảy ra khi gửi đơn đăng ký","status":{"pending":"Đang chờ duyệt","approved":"Đã phê duyệt","rejected":"Đã từ chối","unknown":"Không xác định"},"info":{"title":"Thông tin đơn đăng ký:","adminNote":"Ghi chú từ admin:","sentAt":"Ngày gửi:"},"validation":{"fullName":"Họ tên là bắt buộc","address":"Địa chỉ là bắt buộc","country":"Quốc gia là bắt buộc","province":"Tỉnh/thành phố là bắt buộc","phoneNumber":"Số điện thoại là bắt buộc","cccd":"Số CCCD/CMND là bắt buộc"}},"designRequestsStatus":{"pending":"Chờ xử lý","in_progress":"Đang xử lý","completed":"Hoàn thành","cancelled":"Đã hủy"},"designRequestsPriority":{"urgent":"Khẩn cấp","high":"Cao","medium":"Trung bình","low":"Thấp"},"pricingManagement":{"title":"Quản lý giá đại lý","subtitle":"Quản lý pricing matrix cho các level và tier của đại lý","createButton":"Tạo pricing mới","loading":"Đang tải...","error":"Lỗi tải pricing matrix","errorDescription":"Vui lòng thử lại sau.","table":{"title":"Pricing Matrix","entries":"{{count}} entries","columns":{"id":"ID","level":"Level","tier":"Tier","price":"Giá","designRequestPrice":"Giá Design Request","status":"Trạng thái","createdAt":"Ngày tạo","actions":"Hành động"},"actions":{"edit":"Sửa","delete":"Xóa"},"status":{"active":"Hoạt động","inactive":"Không hoạt động"}},"matrix":{"title":"Matrix Visualization","level":"Level"},"createModal":{"title":"Tạo pricing entry mới","dealerLevel":"Dealer Level *","dealerTier":"Dealer Tier *","price":"Giá (cents) *","pricePlaceholder":"Nhập giá (cents)","priceHelper":"Ví dụ: 80000 = 80,000 VND","designRequestPrice":"Giá Design Request (cents) *","designRequestPricePlaceholder":"Nhập giá design request (cents)","designRequestPriceHelper":"Ví dụ: 50000 = 50,000 VND","currency":"Currency","currencyPlaceholder":"VND","isActive":"Hoạt động","cancel":"Hủy","create":"Tạo pricing"},"editModal":{"title":"Cập nhật pricing entry","cancel":"Hủy","update":"Cập nhật"},"deleteModal":{"title":"Xác nhận xóa","message":"Bạn có chắc chắn muốn xóa pricing entry này không?","price":"Giá: {{price}}","cancel":"Hủy","delete":"Xóa"},"messages":{"createSuccess":"Tạo pricing entry thành công","createError":"Có lỗi xảy ra khi tạo pricing entry","updateSuccess":"Cập nhật pricing entry thành công","updateError":"Có lỗi xảy ra khi cập nhật pricing entry","deleteSuccess":"Xóa pricing entry thành công","deleteError":"Có lỗi xảy ra khi xóa pricing entry"}},"featurePurchase":{"title":"Mua tính năng cho khách hàng","customer":"Khách hàng:","email":"Email:","currentBalance":"Số dư hiện tại:","noFeaturesAvailable":"Không có tính năng nào khả dụng","tierBasic":"Cơ bản","tierPro":"PRO","tierVip":"VIP","alreadyOwned":"Đã có","expiresAt":"Hết hạn:","lifetime":"Trọn đời","selectedCount":"Số tính năng đã chọn:","totalCost":"Tổng chi phí:","insufficientBalance":"⚠️ Số dư không đủ. Vui lòng nạp thêm tiền.","cancel":"Hủy","confirm":"Xác nhận mua","processing":"Đang xử lý...","note":"💡 Lưu ý: Chi phí sẽ được trừ trực tiếp từ số dư của bạn. Tất cả tính năng sẽ được kích hoạt <strong>trọn đời</strong> cho khách hàng ngay lập tức.","errors":{"selectAtLeastOne":"Vui lòng chọn ít nhất một tính năng","purchaseFailed":"Không thể mua tính năng. Vui lòng thử lại.","error":"Lỗi"},"success":{"title":"Mua tính năng thành công!","description":"Đã mua {{count}} tính năng cho user. Tổng chi phí: {{total}}"}},"tierUpgrade":{"title":"Nâng cấp Tier","customer":"Khách hàng:","email":"Email:","currentTier":"Tier hiện tại","selectNewTier":"Chọn tier mới","tierPro":"PRO","tierVip":"VIP","cost":"Chi phí","note":"Ghi chú (tùy chọn)","notePlaceholder":"Nhập ghi chú...","currentBalance":"Số dư hiện tại","insufficientBalance":"Số dư không đủ để nâng cấp","alreadyMaxTier":"User đã ở tier cao nhất (VIP)","free":"Miễn phí","cancel":"Hủy","confirm":"Xác nhận nâng cấp","processing":"Đang xử lý...","success":{"title":"Nâng cấp thành công!","description":"Đã nâng cấp lên {{tier}}"},"errors":{"selectTier":"Vui lòng chọn tier để nâng cấp","upgradeFailed":"Không thể nâng cấp tier","error":"Lỗi"}},"slotPurchase":{"title":"Mua Slot cho Khách hàng","customer":"Khách hàng:","email":"Email:","currentBalance":"Số dư hiện tại","loading":"Đang tải danh sách gói...","selectPackage":"Chọn gói slot","slots":"slots","noPackages":"Không có gói slot nào khả dụng","note":"Ghi chú (tùy chọn)","notePlaceholder":"Nhập ghi chú...","cost":"Chi phí","insufficientBalance":"Số dư không đủ để mua gói slot","free":"Miễn phí","cancel":"Hủy","confirm":"Xác nhận mua","processing":"Đang xử lý...","success":{"title":"Mua slot thành công!","description":"Đã mua {{count}} slots ({{package}}) cho user"},"errors":{"selectPackage":"Vui lòng chọn gói slot","purchaseFailed":"Không thể mua slot","error":"Lỗi"}}}'))
}, 561650, e => {
    e.v({
        title: "Nạp tiền vào tài khoản đại lý",
        selectAmount: "Chọn số tiền nạp",
        customAmountLabel: "Hoặc nhập số tiền tùy chỉnh",
        customAmountPlaceholder: "Nhập số tiền (VND)",
        minimumAmount: "Số tiền tối thiểu: {{amount}}",
        noteLabel: "Ghi chú (tùy chọn)",
        notePlaceholder: "Ghi chú cho giao dịch nạp tiền",
        amountSummary: "Số tiền nạp:",
        continuePayment: "Tiếp tục thanh toán",
        paymentNote: "Sau khi thanh toán thành công, số dư sẽ được cập nhật vào tài khoản đại lý của bạn.",
        orderNumber: "Đơn hàng #{{orderId}}",
        scanQrTitle: "Quét mã QR để thanh toán",
        scanQrDescription: "Vui lòng quét mã QR bên dưới bằng ứng dụng ngân hàng để hoàn tất thanh toán",
        qrCodeAlt: "QR Code thanh toán",
        manualTransferTitle: "Hoặc chuyển khoản thủ công:",
        bankLabel: "Ngân hàng:",
        accountNumberLabel: "Số tài khoản:",
        amountLabel: "Số tiền:",
        transferDescriptionLabel: "Nội dung chuyển khoản:",
        transferDescriptionWarning: "⚠️ Vui lòng nhập chính xác nội dung chuyển khoản",
        paymentSuccess: "✅ Thanh toán thành công!",
        waitingPayment: "Đang chờ thanh toán...",
        closeButton: "Đóng",
        errors: {
            minimumAmount: "Số tiền nạp tối thiểu là {{amount}}",
            createOrderFailed: "Đã xảy ra lỗi khi tạo đơn nạp tiền",
            paymentFailed: "Thanh toán thất bại",
            orderCanceled: "Đơn hàng đã bị hủy"
        }
    })
}, 117934, e => {
    e.v({
        login: {
            title: "Đăng nhập",
            subtitle: "Chào mừng trở lại! Đăng nhập để tiếp tục.",
            email: "Email",
            emailPlaceholder: "Nhập email của bạn",
            password: "Mật khẩu",
            passwordPlaceholder: "Nhập mật khẩu",
            forgotPassword: "Quên mật khẩu?",
            loginButton: "Đăng nhập",
            loggingIn: "Đang đăng nhập...",
            processingLogin: "Đang xử lý đăng nhập...",
            noAccount: "Chưa có tài khoản?",
            signUp: "Đăng ký ngay",
            backToHome: "Quay lại trang chủ",
            googleLogin: "Đăng nhập bằng Google",
            orDivider: "Hoặc",
            inAppBrowser: {
                banner: "Trình duyệt trong ứng dụng không hỗ trợ đăng nhập Google. Vui lòng mở bằng Safari/Chrome.",
                modalTitle: "Mở bằng Safari/Chrome để đăng nhập Google",
                modalDescription: "Vui lòng mở link này bằng Safari/Chrome rồi đăng nhập bằng Google.",
                step1: "Nhấn nút Sao chép link bên dưới.",
                step2: "Mở Safari hoặc Chrome trên điện thoại của bạn.",
                step3: "Dán link và tiếp tục đăng nhập bằng Google.",
                fallbackNote: "Bạn vẫn có thể đăng nhập ngay bằng email và mật khẩu ở màn hình này.",
                copyLink: "Sao chép link hiện tại",
                closeButton: "Đã hiểu",
                copySuccessTitle: "Đã sao chép link",
                copySuccessDescription: "Vui lòng mở Safari/Chrome và dán link để đăng nhập.",
                copyErrorTitle: "Không thể sao chép link",
                copyErrorDescription: "Vui lòng thử lại khi tab đang hoạt động."
            },
            errors: {
                emailRequired: "Email là bắt buộc",
                emailInvalid: "Email không hợp lệ",
                passwordRequired: "Mật khẩu là bắt buộc",
                passwordMinLength: "Mật khẩu phải có ít nhất 6 ký tự",
                loginFailed: "Đăng nhập thất bại",
                invalidCredentials: "Email hoặc mật khẩu không đúng",
                captchaRequired: "Vui lòng hoàn thành xác thực captcha"
            },
            success: {
                title: "Đăng nhập thành công! 🎉",
                description: "Chào mừng bạn quay trở lại!"
            },
            info: {
                registrationComplete: "Đăng ký thành công!",
                pleaseLogin: "Vui lòng đăng nhập với tài khoản vừa tạo"
            },
            emailVerification: {
                title: "Yêu cầu xác thực email",
                message: "Vui lòng xác thực email trước khi đăng nhập",
                description: "Email xác thực đã được gửi đến:",
                checkSpam: "Vui lòng kiểm tra thư mục spam nếu không thấy email",
                resendButton: "Gửi lại email xác thực",
                resendCountdown: "Gửi lại sau {{seconds}}s",
                sending: "Đang gửi...",
                closeButton: "Đóng"
            }
        },
        register: {
            title: "Đăng ký",
            subtitle: "Tạo tài khoản mới để bắt đầu",
            email: "Email",
            emailPlaceholder: "Nhập email của bạn",
            password: "Mật khẩu",
            passwordPlaceholder: "Tạo mật khẩu",
            confirmPassword: "Xác nhận mật khẩu",
            confirmPasswordPlaceholder: "Nhập lại mật khẩu",
            registerButton: "Đăng ký",
            registering: "Đang đăng ký...",
            haveAccount: "Đã có tài khoản?",
            signIn: "Đăng nhập ngay",
            backToHome: "Quay lại trang chủ",
            errors: {
                emailRequired: "Email là bắt buộc",
                emailInvalid: "Email không hợp lệ",
                passwordRequired: "Mật khẩu là bắt buộc",
                passwordMinLength: "Mật khẩu phải có ít nhất 6 ký tự",
                confirmPasswordRequired: "Xác nhận mật khẩu là bắt buộc",
                passwordMismatch: "Mật khẩu và xác nhận mật khẩu không khớp",
                registerFailed: "Đăng ký thất bại",
                emailExists: "Email đã tồn tại",
                captchaRequired: "Vui lòng hoàn thành xác thực captcha"
            },
            success: {
                title: "Đăng ký thành công! 🎉",
                description: "Tài khoản của bạn đã được tạo thành công!"
            }
        },
        forgotPassword: {
            title: "Quên mật khẩu",
            subtitle: "Nhập email của bạn để nhận liên kết đặt lại mật khẩu",
            email: "Email",
            emailPlaceholder: "Nhập email của bạn",
            sendButton: "Gửi liên kết đặt lại",
            sending: "Đang gửi...",
            rememberPassword: "Nhớ mật khẩu?",
            backToLogin: "Quay lại đăng nhập",
            backToHome: "Quay lại trang chủ",
            errors: {
                emailRequired: "Email là bắt buộc",
                emailInvalid: "Email không hợp lệ",
                failed: "Gửi liên kết thất bại",
                emailNotFound: "Không tìm thấy email",
                captchaRequired: "Vui lòng hoàn thành xác thực captcha"
            },
            success: {
                title: "Đã gửi liên kết! 📧",
                description: "Vui lòng kiểm tra email để nhận liên kết đặt lại mật khẩu"
            }
        },
        resetPassword: {
            title: "Đặt lại mật khẩu",
            subtitle: "Nhập mật khẩu mới cho tài khoản của bạn",
            newPassword: "Mật khẩu mới",
            newPasswordPlaceholder: "Nhập mật khẩu mới",
            confirmPassword: "Xác nhận mật khẩu",
            confirmPasswordPlaceholder: "Nhập lại mật khẩu mới",
            resetButton: "Đặt lại mật khẩu",
            resetting: "Đang đặt lại mật khẩu",
            rememberPassword: "Nhớ mật khẩu?",
            backToHome: "Quay lại trang chủ",
            errors: {
                invalidLinkTitle: "Liên kết không hợp lệ",
                invalidLinkDesc: "Liên kết đặt lại mật khẩu không hợp lệ hoặc đã hết hạn",
                invalidToken: "Token đặt lại mật khẩu không hợp lệ",
                failedTitle: "Đặt lại mật khẩu thất bại",
                failedDesc: "Đã có lỗi xảy ra. Vui lòng thử lại sau"
            },
            success: {
                title: "Đặt lại mật khẩu thành công! 🎉",
                description: "Mật khẩu của bạn đã được cập nhật thành công",
                loginTitle: "Đăng nhập với mật khẩu mới",
                loginDesc: "Bạn sẽ được chuyển hướng đến trang đăng nhập"
            }
        },
        verifyEmail: {
            loading: {
                title: "Đang xác thực email...",
                description: "Vui lòng chờ trong giây lát"
            },
            success: {
                title: "Xác thực email thành công!",
                description: "Tài khoản của bạn đã được kích hoạt thành công.",
                redirect: "Bạn sẽ được chuyển hướng về trang chủ trong giây lát...",
                toastTitle: "Xác thực email thành công",
                toastDescription: "Tài khoản của bạn đã được kích hoạt. Chào mừng bạn!"
            },
            error: {
                title: "Xác thực email thất bại",
                description: "Liên kết xác thực không hợp lệ hoặc đã hết hạn.",
                resendButton: "Gửi lại email xác thực",
                backToHome: "Quay lại trang chủ",
                toastTitle: "Xác thực email thất bại",
                toastDescription: "Liên kết xác thực không hợp lệ hoặc đã hết hạn."
            },
            resend: {
                title: "Gửi lại email xác thực",
                description: "Nhập địa chỉ email để nhận liên kết xác thực mới",
                email: "Địa chỉ email",
                emailPlaceholder: "Nhập địa chỉ email",
                sendButton: "Gửi email xác thực",
                sending: "Đang gửi email",
                backToHome: "Quay lại trang chủ",
                errors: {
                    emailRequired: "Email là bắt buộc",
                    emailInvalid: "Email không hợp lệ"
                },
                success: {
                    title: "Email xác thực đã được gửi",
                    description: "Vui lòng kiểm tra email để xác thực tài khoản."
                },
                failed: {
                    title: "Gửi email thất bại",
                    description: "Vui lòng kiểm tra lại địa chỉ email và thử lại."
                }
            }
        }
    })
}, 781402, e => {
    e.v({
        pageTitle: {
            title: "Cài Đặt Hồ Sơ Cưới",
            subtitle: "Cập nhật thông tin sẽ xuất hiện trên thiệp cưới của bạn.",
            description: "Điều này giúp khách mời hiểu rõ hơn về bạn và gửi lời chúc hoặc quà tặng."
        },
        tabs: {
            groom: "Chú Rể",
            bride: "Cô Dâu",
            moreDetails: "Chi Tiết Khác"
        },
        loading: "Đang tải thông tin Chú rể & Cô dâu...",
        photo: {
            addButton: "Thêm Ảnh",
            uploadHint: "Tải ảnh lên cho hồ sơ của bạn"
        },
        fields: {
            fullName: {
                label: "Họ và Tên",
                placeholder: "Nhập họ và tên",
                hint: "Dùng cho thông tin liên hệ và nội bộ."
            },
            displayName: {
                label: "Tên hiển thị trên thiệp",
                placeholder: "Tên hiển thị",
                hint: "Sẽ hiển thị công khai trên trang thiệp cưới của bạn."
            },
            phone: {
                label: "Số Điện Thoại",
                placeholder: "Nhập số điện thoại",
                hint: "Khách có thể dùng để liên hệ với bạn."
            },
            birthday: {
                label: "Ngày Sinh",
                placeholder: "dd/mm/yyyy",
                hint: "Tùy chọn."
            },
            hometown: {
                label: "Quê Quán / Địa Chỉ",
                placeholder: "Nhập quê quán hoặc địa chỉ",
                hint: "Hiển thị trên thiệp nếu bạn bật tính năng này."
            },
            aboutGroom: {
                label: "Về Chú Rể",
                placeholder: "Chia sẻ một vài lời về bản thân hoặc câu chuyện tình yêu...",
                hint: "Một vài lời về bản thân hoặc câu chuyện tình yêu."
            },
            aboutBride: {
                label: "Về Cô Dâu",
                placeholder: "Chia sẻ một vài lời về bản thân hoặc câu chuyện tình yêu...",
                hint: "Một vài lời về bản thân hoặc câu chuyện tình yêu."
            },
            selectOnMap: "Chọn trên bản đồ"
        },
        moreDetails: {
            groomTitle: "Thông Tin Bổ Sung - Chú Rể",
            brideTitle: "Thông Tin Bổ Sung - Cô Dâu",
            socialLinks: {
                title: "Mạng Xã Hội",
                facebook: {
                    label: "Facebook",
                    placeholder: "https://facebook.com/username",
                    hint: "Link Facebook"
                },
                zalo: {
                    label: "Zalo",
                    placeholder: "Link hoặc số Zalo",
                    hint: "Link Zalo"
                },
                instagram: {
                    label: "Instagram",
                    placeholder: "https://instagram.com/username",
                    hint: "Link Instagram"
                },
                twitter: {
                    label: "Twitter",
                    placeholder: "https://twitter.com/username",
                    hint: "Link Twitter"
                }
            },
            parents: {
                title: "Thông Tin Bố Mẹ",
                description: "Để trống nếu đã mất hoặc bạn không muốn hiển thị",
                father: {
                    label: "Họ và Tên Bố",
                    placeholder: "Nhập họ và tên bố",
                    hint: "Họ và tên bố"
                },
                mother: {
                    label: "Họ và Tên Mẹ",
                    placeholder: "Nhập họ và tên mẹ",
                    hint: "Họ và tên mẹ"
                }
            },
            bankInfo: {
                title: "Thông Tin Ngân Hàng",
                description: "Hiển thị trên thiệp cưới để nhận mừng cưới Online",
                bankName: {
                    label: "Tên Ngân Hàng",
                    placeholder: "Ví dụ: Vietcombank, BIDV, Techcombank...",
                    hint: "Tên ngân hàng"
                },
                accountHolder: {
                    label: "Tên Chủ Tài Khoản",
                    placeholder: "Nhập tên chủ tài khoản",
                    hint: "Tên trên thẻ ngân hàng"
                },
                accountNumber: {
                    label: "Số Tài Khoản",
                    placeholder: "Nhập số tài khoản",
                    hint: "Số tài khoản ngân hàng"
                },
                qrCode: {
                    label: "Mã QR Ngân Hàng (Tùy chọn)",
                    noQr: "Chưa có mã QR",
                    uploadButton: "Tải Lên QR",
                    changeButton: "Thay Đổi QR",
                    removeButton: "Xóa QR",
                    hint: "Tải lên mã QR để khách dễ dàng chuyển tiền"
                }
            }
        },
        validation: {
            fullNameRequired: "Họ và Tên là bắt buộc",
            displayNameRequired: "Tên hiển thị là bắt buộc",
            phoneRequired: "Số điện thoại là bắt buộc",
            phoneInvalid: "Số điện thoại không hợp lệ",
            hometownRequired: "Địa chỉ là bắt buộc"
        },
        actions: {
            save: "Lưu Thông Tin"
        },
        toast: {
            updateSuccess: "Cập nhật thông tin Chú Rể & Cô Dâu thành công",
            updateError: "Cập nhật thông tin Chú Rể & Cô Dâu thất bại",
            updateErrorDescription: "Vui lòng kiểm tra lại."
        },
        fileModal: {
            title: "Chọn ảnh đại diện"
        },
        mapFeature: {
            featureName: "Bản đồ cơ bản"
        }
    })
}, 444857, e => {
    e.v({
        nav: {
            showcase: "Mẫu thiệp",
            pricing: "Bảng giá",
            contact: "Liên hệ",
            startNow: "Bắt đầu ngay"
        },
        banner: {
            title: "Thiệp cưới online đẹp & chuyên nghiệp",
            description: "Được thiết kế với tình yêu và sự tỉ mỉ, thiệp cưới của chúng tôi giúp ngày trọng đại của bạn trở nên đáng nhớ."
        },
        catalog: {
            title: "Thiệp Cưới",
            subtitle: "Khám phá những mẫu thiệp được thiết kế bởi đội ngũ chúng tôi",
            searchPlaceholder: "Tìm kiếm thiệp...",
            all: "Tất cả",
            featured: "Nổi bật",
            allTemplates: "Tất cả thiệp",
            noResults: "Không tìm thấy thiệp phù hợp",
            preview: "Xem trước",
            useTemplate: "Dùng mẫu này",
            quickPreview: "Xem nhanh",
            by: "Bởi"
        },
        footer: {
            contact: "Liên hệ",
            services: "Dịch vụ",
            showcase: "Xem Mẫu thiệp",
            pricing: "Bảng giá",
            defaultDescription: "Chuyên cung cấp dịch vụ thiệp cưới online chuyên nghiệp, giúp bạn tạo ra những lời mời đẹp mắt và ấn tượng.",
            contactUpdating: "Thông tin liên hệ đang được cập nhật",
            copyright: "All rights reserved.",
            poweredBy: "Powered by meHappy Platform"
        },
        pricing: {
            free: "Miễn phí",
            moreFeatures: "+ {{count}} tính năng khác",
            viewAllFeatures: "Xem tất cả tính năng",
            contactNow: "Liên hệ ngay",
            emptyTitle: "Chưa có thông tin bảng giá",
            emptySubtitle: "Vui lòng liên hệ trực tiếp để được tư vấn",
            allFeaturesTitle: "{{name}} - Tất cả tính năng"
        }
    })
}, 543661, e => {
    e.v({
        verification: {
            title: "Xác thực quyền sở hữu tên miền",
            description: "Xác thực domain theo 2 bước: TXT record để chứng minh quyền sở hữu, sau đó CNAME để định tuyến traffic",
            required: "Domain cần được xác thực",
            success: "Domain đã được xác thực thành công",
            successDescription: "Domain đã được xác thực và SSL certificate sẽ được cấp tự động",
            failed: "Xác thực domain thất bại",
            pending: "Đang chờ xác thực",
            inProgress: "Đang xác thực domain...",
            step1: "Bước 1: Xác thực quyền sở hữu (TXT Record)",
            step2: "Bước 2: Cấu hình định tuyến (CNAME Record)",
            verified: "Đã xác thực",
            configured: "Đã cấu hình",
            partial: "Xác thực một phần",
            partialMessage: "TXT record đã được xác thực nhưng CNAME record chưa được cấu hình đúng",
            step1Description: "Thêm TXT record tại host xác thực riêng để chứng minh bạn sở hữu domain. Host này tách biệt với hostname chạy website để tránh xung đột với CNAME.",
            step2Description: "Thêm CNAME cho đúng hostname bạn dùng để truy cập website.",
            sameHostWarning: "Không tạo TXT và CNAME trên cùng một hostname.",
            apexCnameWarning: "Nếu DNS provider không hỗ trợ apex/root CNAME, hãy dùng subdomain như www.",
            fullName: "Full name: {{name}}",
            waitingTXT: "Chưa xác thực TXT",
            txtVerifiedNeedCname: "Đã xác thực TXT, cần thêm CNAME"
        },
        status: {
            verified: "Đã xác thực",
            notVerified: "Chưa xác thực",
            systemDomain: "Domain hệ thống",
            customDomain: "Domain tùy chỉnh",
            verifiedAt: "Đã xác thực lúc {{time}}",
            awaitingTXT: "Đang chờ TXT record",
            needCNAME: "Cần cấu hình CNAME",
            tokenExpired: "Token hết hạn"
        },
        customDomain: {
            toggle: "Sử dụng tên miền tùy chỉnh",
            description: "Bật tùy chọn này nếu bạn muốn sử dụng tên miền riêng"
        },
        cname: {
            guide: "Hướng dẫn cấu hình DNS",
            title: "Cấu hình CNAME Record",
            description: "Để sử dụng domain tùy chỉnh, bạn cần tạo CNAME record trong DNS của nhà cung cấp domain:",
            descriptionSubdomain: "Tạo CNAME record để kết nối subdomain của bạn với dịch vụ:",
            target: "cname.mehappy.info",
            type: "Loại",
            host: "Host",
            value: "Giá trị",
            ttl: "TTL",
            copied: "Đã sao chép!",
            copyValue: "Sao chép giá trị",
            step1: "Đăng nhập vào tài khoản quản lý domain của bạn",
            step2: "Tìm phần cài đặt DNS hoặc DNS Management",
            step3: "Thêm CNAME record mới với thông tin trên",
            step4: "Đợi DNS propagate (5-10 phút) và nhấn nút Xác thực",
            hostNote: "Host là '{{host}}' (phần subdomain của bạn). Một số nhà cung cấp như GoDaddy có thể tự động điền '.{{baseDomain}}'.",
            wildcardDefaultNote: "Mặc định dùng host `*` cho CNAME. Nếu DNS provider của bạn không hỗ trợ wildcard hoặc yêu cầu host cụ thể, hãy thay bằng subdomain tương ứng.",
            wildcardTitle: "Nếu DNS provider dùng wildcard `*`",
            wildcardDescription: "Một số DNS provider cho phép bạn tạo wildcard CNAME bằng host `*` để cover nhiều subdomain của `{{baseDomain}}`.",
            wildcardNote: "Lưu ý: `*` là wildcard cho các subdomain chưa khai báo, không hoàn toàn thay thế cho `www` hoặc domain gốc nếu provider yêu cầu bản ghi riêng.",
            wildcardAdvancedTitle: "Tùy chọn nâng cao: thêm wildcard `*`",
            wildcardAdvancedDescription: "Nếu bạn muốn cover thêm các subdomain chưa khai báo, có thể thêm một bản ghi wildcard như dưới đây. Đây không phải cấu hình bắt buộc.",
            wildcardAdvancedNote: "Wildcard `*` chỉ là tùy chọn nâng cao. Nó chỉ áp dụng cho subdomain chưa có record riêng; nếu hostname đã có TXT/A/AAAA/CNAME riêng thì wildcard sẽ không cover hostname đó."
        },
        txtRecord: {
            title: "TXT Record - Xác thực quyền sở hữu",
            description: "Thêm TXT record này vào DNS để chứng minh bạn sở hữu domain:",
            name: "Tên TXT Record",
            value: "Giá trị Token",
            copied: "Đã sao chép token!",
            expires: "Token hết hạn sau",
            expiresInDays: "Còn {{days}} ngày",
            expiresInHours: "Còn {{hours}} giờ",
            expired: "Token đã hết hạn",
            regenerate: "Tạo token mới",
            verifying: "Đang kiểm tra TXT record...",
            verified: "TXT record đã được xác thực",
            subdomain: "Host là '{{host}}', tức là phần subdomain trước '{{baseDomain}}'."
        },
        rootDomainWarning: {
            title: "Cảnh báo: Bạn đang dùng Domain Gốc (Apex Domain)",
            description: "Hầu hết các nhà cung cấp DNS (như GoDaddy, Namecheap) không cho phép tạo bản ghi CNAME cho domain gốc theo tiêu chuẩn DNS. Bạn có thể chọn một trong các cách sau:",
            option1Title: "Lựa chọn 1 (Khuyến nghị): Dùng Subdomain",
            option1Description: "Cách dễ nhất và tốt nhất là sử dụng subdomain, ví dụ {{subdomain}}. Vui lòng quay lại và nhập {{subdomain}} thay vì domain gốc.",
            option2CnameTitle: "Lựa chọn 2: Dùng CNAME trực tiếp cho domain gốc",
            option2CnameDescription: "Nếu DNS provider của bạn cho phép tạo CNAME record cho root/apex domain, bạn có thể cấu hình trực tiếp bản ghi CNAME cho `@` như bên dưới.",
            option2CnameNote: "Chỉ dùng cách này khi giao diện DNS thực sự cho phép tạo CNAME cho host `@` hoặc root domain.",
            option2Title: "Lựa chọn 3 (Nâng cao): Dùng ALIAS, ANAME hoặc CNAME Flattening",
            option2Description: "Nếu nhà cung cấp DNS của bạn hỗ trợ tính năng này (thường có ở Cloudflare, Vercel, Netlify...), bạn có thể cấu hình như sau. Nếu không tìm thấy các loại này, bạn bắt buộc phải dùng Lựa chọn 1.",
            cloudflareNote: "Nếu dùng Cloudflare, bạn chỉ cần tạo CNAME record, Cloudflare sẽ tự động 'Flatten' (làm phẳng) nó cho bạn.",
            option3Title: "Lựa chọn 4 (Không khuyến khích): Dùng bản ghi A",
            option3Description: "Nếu không còn cách nào khác, bạn có thể trỏ bản ghi A đến IP server của chúng tôi. Đây là giải pháp cuối cùng.",
            option3Warning: "Cảnh báo: Nếu IP này thay đổi trong tương lai, trang của bạn sẽ ngừng hoạt động cho đến khi bạn cập nhật lại IP.",
            cnameNotSupported: "Với domain gốc, hãy chọn cách phù hợp với DNS provider của bạn:",
            wwwAlsoSupportsRootTitle: "Nếu DNS provider hỗ trợ host `@`",
            wwwAlsoSupportsRootDescription: "Một số DNS provider cho phép bạn dùng `@` cho root/apex domain. Khi gặp trường hợp đó, dùng bản ghi dưới đây cho `{{baseDomain}}`.",
            wwwAlsoSupportsRootNote: "Chỉ dùng bản ghi `@` khi DNS provider thực sự hỗ trợ apex/root CNAME. Nếu không hỗ trợ, tiếp tục dùng `*` hoặc chuyển sang ALIAS/ANAME."
        },
        propagation: {
            title: "DNS Propagation",
            description: "DNS propagation có thể mất từ 5-10 phút. Trong một số trường hợp có thể mất đến vài giờ tùy thuộc vào nhà cung cấp DNS.",
            minTime: "Tối thiểu: 5 phút",
            avgTime: "Trung bình: 10-30 phút",
            maxTime: "Tối đa: vài giờ",
            checkTool: "Kiểm tra DNS propagation",
            retry: "Thử lại sau {{seconds}} giây",
            retrying: "Đang thử lại... ({{current}}/{{max}})"
        },
        errors: {
            cnameNotFound: "CNAME record chưa được cấu hình",
            cnameNotFoundDesc: "Vui lòng tạo CNAME record trỏ đến cname.mehappy.info và thử lại sau vài phút",
            txtNotFound: "TXT record không tìm thấy",
            txtNotFoundDesc: "Vui lòng thêm TXT record vào DNS và đợi 5-10 phút để DNS propagate",
            tokenExpired: "Token xác thực đã hết hạn",
            tokenExpiredDesc: "Vui lòng tạo token mới và cập nhật TXT record",
            domainTaken: "Domain đã được sử dụng",
            domainTakenDesc: "Domain này đã được người dùng khác xác thực",
            tooManyAttempts: "Quá nhiều lần thử",
            tooManyAttemptsDesc: "Vui lòng đợi {{seconds}} giây trước khi thử lại",
            alreadyVerified: "Domain đã được xác thực trước đó",
            noCustomDomain: "Chưa cấu hình custom domain",
            notFound: "Không tìm thấy page/domain",
            domainNotFound: "Domain không tồn tại trong hệ thống",
            dnsError: "Lỗi khi kiểm tra DNS record",
            dnsErrorDesc: "Vui lòng thử lại sau hoặc liên hệ hỗ trợ nếu vấn đề vẫn tiếp diễn.",
            verificationFailed: "Xác thực thất bại",
            tryAgain: "Vui lòng thử lại",
            checkFailed: "Lỗi kiểm tra tên miền"
        },
        actions: {
            verify: "Xác thực Domain",
            verifying: "Đang xác thực...",
            generateGuide: "Tạo hướng dẫn xác thực",
            configured: "Đã cấu hình xong",
            retry: "Thử lại",
            skipForNow: "Bỏ qua tạm thời",
            checkDns: "Kiểm tra DNS",
            viewGuide: "Xem hướng dẫn",
            loginToVerify: "Đăng nhập để xác thực",
            generateToken: "Tạo token xác thực",
            verifyOwnership: "Xác thực quyền sở hữu",
            checkStatus: "Kiểm tra trạng thái",
            retryVerification: "Thử xác thực lại"
        },
        unverifiedPage: {
            title: "Domain chưa được xác thực",
            description: "Domain này chưa được xác thực. Chủ sở hữu cần xác thực domain trước khi có thể truy cập công khai.",
            ownerAction: "Nếu bạn là chủ sở hữu, vui lòng đăng nhập để xác thực domain này."
        },
        systemDomain: {
            description: "Domain hệ thống được xác thực tự động",
            autoVerified: "Tự động xác thực",
            noSetupRequired: "Không cần cấu hình DNS"
        },
        providers: {
            cloudflare: "Cloudflare",
            cloudflareNote: "Đặt Proxy status thành 'DNS only' (biểu tượng đám mây màu xám)",
            godaddy: "GoDaddy",
            namecheap: "NameCheap",
            generic: "Nhà cung cấp khác"
        }
    })
}, 440343, e => {
    e.v({
        header: {
            logo: "meHappy",
            nav: {
                templates: "Mẫu Thiệp",
                features: "Nền tảng của MeHappy",
                featuresShort: "Nền tảng của Me",
                pricing: "Giá",
                about: "Giới Thiệu",
                whyChoose: "Tại sao chọn MeHappy",
                faq: "Câu hỏi thường gặp"
            },
            navMobile: {
                home: "Home",
                features: "Nền tảng",
                whyChoose: "Tại sao",
                faq: "FAQs"
            },
            signIn: "Đăng Nhập",
            getStarted: "Bắt Đầu",
            dashboard: "Dashboard"
        },
        invitationType: {
            wedding: "Thiệp Cưới",
            weddingDesc: "Thiệp cưới truyền thống sang trọng",
            card: "Thiệp Điện Tử",
            cardDesc: "Thiệp sinh nhật, sự kiện đa dạng"
        },
        dashboard: {
            wedding: "Quản Lý Thiệp Cưới",
            weddingDesc: "Thiệp cưới & lời mời",
            card: "Quản Lý Thiệp Điện Tử",
            cardDesc: "Thiệp sinh nhật, sự kiện"
        },
        productSelection: {
            title: "Chọn loại thiệp",
            wedding: {
                title: "Thiệp đám cưới",
                description: "Website đám cưới đầy đủ tính năng"
            },
            invite: {
                title: "Thiệp mời sự kiện",
                description: "Sinh nhật, thôi nôi, hội nghị..."
            }
        },
        banner: {
            tag: "Thiết kế cho đám cưới & sự kiện hiện đại",
            title: "Thiệp Mời Trong Mơ Của Bạn.<br />Hoàn Hảo Trên Mọi Thiết Bị.",
            description: "Tạo thiệp kỹ thuật số tuyệt đẹp cho đám cưới và sự kiện. Chia sẻ qua liên kết, theo dõi RSVP và quản lý khách mời dễ dàng.",
            buttons: {
                startDesigning: "Bắt Đầu Miễn Phí",
                access: "Bắt đầu",
                watchDemo: "Xem demo 2 phút"
            },
            socialProof: "Đã được tin tưởng và sử dụng bới hơn 2000+ khách hàng"
        },
        feature: {
            title: "CÁC NỀN TẢNG CỦA MEHAPPY",
            description: "Để đồng hành cùng bạn trong mọi cột mốc quan trọng, meHappy phát triển nhiều nền tảng chuyên biệt, phù hợp cho từng nhu cầu. Từ thiệp cưới sang trọng, thiệp sinh nhật vui tươi đến những sự kiện đặc biệt, mỗi nền tảng đều được thiết kế để mang lại sự tiện lợi, hiện đại và cá nhân hóa tối đa.",
            invitationSystem: {
                name: "meHappy Invite",
                description1: "Nền tảng tạo",
                description2: "Thiệp mời cưới điện tử, Thiệp mời cưới Online",
                free: "MIỄN PHÍ",
                description3: "Cho Đám cưới của bạn trở nên độc đáo và đáng nhớ hơn"
            },
            meVideo: {
                name: "meVideo",
                description1: "Nền tảng thiết kế",
                description2: "Video, Video kỷ niệm, Video sự kiện",
                description3: "chuyên nghiệp.",
                tagline: "Ghi dấu khoảnh khắc, giữ trọn yêu thương"
            },
            meWeddingPlanner: {
                name: "meWedding Planner",
                description1: "Nền tảng",
                description2: "Lập kế hoạch cưới",
                free: "MIỄN PHÍ",
                tagline: "Cưới dễ dàng, không lo sót việc"
            }
        },
        whyChoose: {
            title: "Tại sao nên chọn MeHappy ?",
            description: "Một đường link đẹp mắt thay thế thiệp giấy, mang lại cảm giác cá nhân và cao cấp cho từng khách mời.",
            stats: {
                couplesSave: "Tiết kiệm trung bình",
                comparedToPrint: "So với in ấn",
                percent: "40%",
                timeSaved: "thời gian hơn để quản lý và mời khách"
            },
            testimonial: {
                quote: "“Gửi thiệp thật dễ dàng”",
                author: "Linh & Nam · TP. Hồ Chí Minh"
            },
            features: {
                lifeJourney: {
                    title: "Trọn hành trình cuộc đời",
                    description: "Từ thiệp cưới, sinh nhật đến các sự kiện, meHappy đồng hành cùng bạn ở mọi cột mốc quan trọng."
                },
                convenient: {
                    title: "Tiện lợi & nhanh chóng",
                    description: "Tạo, chia sẻ và quản lý thiệp chỉ trong vài phút, mọi lúc – mọi nơi."
                },
                easyConnect: {
                    title: "Kết nối dễ dàng",
                    description: "Khách mời có thể xác nhận tham dự, gửi lời chúc và lưu giữ kỷ niệm trực tuyến."
                },
                modern: {
                    title: "Hiện đại & tiết kiệm",
                    description: "Thay thế thiệp giấy truyền thống, vừa sang trọng vừa thân thiện với môi trường, và",
                    free: "MIỄN PHÍ"
                },
                personalize: {
                    title: "Cá nhân hóa độc đáo",
                    description: "Tự do sáng tạo, biến mỗi tấm thiệp thành dấu ấn riêng, mang đậm cá tính của bạn."
                },
                support: {
                    title: "Đội ngũ đồng hành",
                    description: "meHappy không chỉ là nền tảng, mà là người bạn luôn hỗ trợ bạn trong mọi sự kiện quan trọng."
                }
            }
        },
        partner: {
            title: "Trở thành Đối tác hoặc Nhà thiết kế của meWedding",
            description: "Tham gia cộng đồng sáng tạo của chúng tôi và kiếm tiền bằng cách chia sẻ các thiết kế đẹp mắt của bạn hoặc giới thiệu khách hàng đến nền tảng của chúng tôi.",
            mobileTitle: "Tham gia Cộng đồng",
            mobileDescription: "Trở thành đối tác hoặc nhà thiết kế và bắt đầu kiếm tiền",
            buttons: {
                agent: "Đăng ký Đại lý",
                creator: "Đăng ký Nhà sáng tạo"
            }
        },
        faq: {
            title: "Những câu hỏi thường gặp",
            description: "Giải đáp những câu hỏi thường gặp nhất về việc sử dụng MeHappy.",
            questions: {
                q1: {
                    question: "Website đám cưới, thiệp cưới điện tử là gì ?",
                    answer: "Website đám cưới, thiệp cưới online là 1 trang web dành riêng cho đám cưới của các cặp đôi. Nơi dùng để lưu trữ những khoảnh khắc, kỷ niệm, hình ảnh cưới 1 cách mãi mãi. Là trang web dùng để mời cưới tới bạn bè và người thân thay cho những chiếc thiệp giấy cổ điển, là chiếc thiệp cưới thời 5.0 với rất nhiều tính năng và sự hữu ích. Giúp bạn mời cưới dễ dàng sành điệu, lưu trữ và chia sẽ câu chuyện tình yêu, album ảnh cưới đến mọi người. Cho phép mọi người gửi lời chúc, gửi tiền mừng cưới online, và có thể xác nhận tham dự,...giúp bạn quản lý kế hoạch cưới dễ dàng. Đám cưới của bạn sẽ trở nên đặc biệt hơn với mọi người."
                },
                q2: {
                    question: "Tôi cần chuẩn bị những gì để bắt đầu có 1 chiếc thiệp cưới ?",
                    answer: "Bạn cần chuẩn bị Album ảnh cưới, Video nếu có để có thể chia sẻ đến mọi người. Một câu chuyện tình yêu đơn giản tự bạn viết. Các thông tin dâu rể và nội ngoại kèm ngày cưới cùng 1 vài thông tin cần thiết. Sau đấy thì tự tay tạo cho mình 1 chiếc thiệp cực xinh và ưng ý nhất thôi ^^!"
                },
                q3: {
                    question: "Ý nghĩa của Website thiệp cưới này là gì ?",
                    answer: "Website thiệp cưới hay thiệp cưới online chính là chiếc thiệp hồng trao tay 5.0 thay thế cho những chiếc thiệp giấy thông thường. Là nơi cung cấp đầy đủ các thông tin cưới cho khách mời của bạn, giúp bạn dễ dàng chia sẻ đến mọi người, dù ở xa hay gần 1 cách dễ dàng. Ngoài ra thiệp cưới online còn làm cho đám cưới của bạn trở nên rộn ràng hơn trước ngày cưới với những chia sẻ của bạn như: Album ảnh cưới, Video, gửi lời chúc cho vợ chồng bạn, câu chuyện tình yêu của bạn, hay thậm chí là đếm ngược thời gian để nhắc nhở khách mời, google maps chỉ dẫn tận nơi cho khách dự tiệc...Đám cưới của bạn sẽ rất tuyệt vời nhỉ !!"
                },
                q4: {
                    question: "Tôi có thể thay đổi thiết kế hoặc thông tin thiệp cưới sau khi nó đã hoàn thành và đã bàn giao không ?",
                    answer: "Dâu Rể hoàn toàn có thể thay đổi cho đến khi vừa ý kể các khi thiệp đã được bàn giao cho bạn, meWedding luôn mong muốn bạn sẽ có 1 đám cưới thật tuyệt vời và hoàn mỹ nhất, nên đừng ngần ngại liên hệ với meWedding để được hỗ trợ khi cần thiết nhé Dâu Rể. Đội ngũ sẽ luôn túc trực hỗ trợ Dâu Rể 24/7 mọi lúc mọi nơi!"
                },
                q5: {
                    question: "Tự thiết kế thiệp này có dễ không, tôi không rành về máy tính",
                    answer: "Hoàn toàn rất dễ để thiết kế. Bạn chỉ cần bấm vào sửa lại các thông tin đúng với của bạn. Không cần biết về thiết kế hay code web bạn cũng có thể dễ dàng hoàn thành thiệp này chỉ bằng vài thao tác chỉnh sửa. Bạn cũng có thể thực hiện việc đó trên điện thoại hoàn toàn đơn giản."
                },
                q6: {
                    question: "Tôi có thể gửi thiệp cho bao nhiêu người ?",
                    answer: "Thiệp cưới điện tử sẽ không giới hạn số khách mời bạn muốn gửi, đây cũng là điều giúp bạn giảm được nhiều chi phí so với thiệp giấy phải in ấn."
                }
            }
        },
        cta: {
            title: "Sẵn sàng tạo và lưu trữ những khoảnh khắc, những sự kiện quan trọng trong hành trình của bạn ?",
            button: "Bắt đầu ngay"
        },
        footer: {
            brand: {
                name: "meHappy",
                tagline: "Gửi hạnh phúc - Kết nối yêu thương",
                companyName: "CÔNG TY TNHH MEHAPPY",
                taxCode: "Mã số thuế : 0111152872",
                address: "Địa chỉ: Tầng 3, số 34 ngõ 182 Đường Phú Diễn, Phường Phú Diễn, TP Hà Nội, Việt Nam",
                email: "Email: mehappy.vnn@gmail.com"
            },
            services: {
                title: "| Dịch vụ",
                meWedding: "meWedding",
                meBirthday: "meBirthday (Coming Soon)",
                meEvent: "meEvent (Coming Soon)",
                meWeddingInvite: "meWedding Invite",
                meInvite: "meInvite",
                meVideo: "meVideo",
                meWeddingPlanner: "meWedding Planner"
            },
            contact: {
                title: "| Liên hệ",
                description: "Bạn cần tư vấn vui lòng liên hệ với chúng tôi qua các kênh liên hệ phía dưới"
            },
            links: {
                title: "| meHappy",
                home: "Trang chủ",
                terms: "Điều khoản sử dụng",
                privacy: "Chính sách bảo mật",
                support: "Chăm sóc khách hàng",
                payment: "Thanh toán"
            }
        }
    })
}, 818122, e => {
    e.v({
        page: {
            title: "Quản lý thiệp cưới",
            titleCard: "Quản lý thiệp cưới",
            description: "Quản lý thiệp cưới của bạn. Bạn có thể chỉnh sửa, tạo mới và quản lý mọi thứ cho thiệp cưới của mình tại đây.",
            descriptionCard: "Quản lý thiệp cưới của bạn. Bạn có thể chỉnh sửa, tạo mới và quản lý mọi thứ cho thiệp cưới của mình tại đây."
        },
        stats: {
            totalInvitations: "Tổng số thiệp cưới",
            publicInvitations: "Thiệp công khai",
            activeInvitations: "Thiệp đang hoạt động",
            totalViews: "Tổng lượt xem",
            guests: "Khách mời",
            wishes: "Lời chúc",
            unlockAnalytics: "Mở khóa thống kê"
        },
        createNew: "Tạo thiệp mới",
        planBanner: {
            title: "Bạn đang dùng gói thiệp {{tier}}",
            descriptionFree: "Trải nghiệm cơ bản với một số giới hạn",
            descriptionPro: "Bạn đã mở khóa nhiều tính năng nâng cao",
            descriptionVip: "Bạn đang sử dụng đầy đủ tính năng cao cấp",
            viewPlanDetails: "Chi tiết gói của bạn",
            unlockFeatures: "Mở khóa thêm các tính năng",
            upgradeVip: "Nâng cấp VIP"
        },
        card: {
            weddingDate: "Ngày cưới:",
            created: "Ngày tạo:",
            noDomain: "Chưa đặt tên miền",
            active: "Kích hoạt",
            inactive: "Không kích hoạt",
            public: "Công khai",
            private: "Riêng tư",
            views: "{{count}} lượt xem",
            guestsCount: "{{count}} khách mời",
            wishesCount: "{{count}} lời chúc",
            editInvitation: "Chỉnh sửa",
            preview: "Xem trước",
            guests: "Khách mời",
            publish: "Công khai",
            unpublish: "Bỏ công khai",
            countdown: {
                before: "Đếm ngược về chung một nhà",
                after: "Đã về chung một nhà được"
            },
            expiresAt: "Hạn sử dụng:",
            permanent: "Vĩnh viễn",
            expired: "Đã hết hạn",
            expiresIn: "{{date}} (còn {{days}} ngày)",
            unpublished: "Chưa công khai",
            unlockCountup: "Mở khóa đếm ngược",
            unlockStats: "Mở khóa thống kê"
        },
        menu: {
            wishes: "Quản lý lời chúc",
            settings: "Cài đặt",
            share: "Chia sẻ",
            qrCode: "Mã QR",
            socialShare: "Chia sẻ mạng xã hội",
            designRequest: "Yêu cầu thiết kế",
            changeTemplate: "Đổi giao diện",
            clone: "Nhân bản",
            cloning: "Đang nhân bản...",
            resetToTemplate: "Reset lại theo mẫu",
            statistics: "Thống kê",
            delete: "Xóa",
            expand: "Mở rộng menu",
            collapse: "Thu gọn menu"
        },
        create: {
            title: "Tạo thiệp cưới mới",
            description: "Thiết kế một thiệp cưới đẹp cho ngày đặc biệt của bạn",
            button: "Tạo thiệp cưới"
        },
        loading: "Đang tải thiệp cưới...",
        error: "Không thể tải thiệp cưới. Vui lòng thử lại.",
        empty: "Bạn chưa có thiệp cưới nào. Tạo một cái mới!",
        pagination: {
            show: "Hiển thị",
            perPage: "/ trang ",
            previous: "‹ Trước",
            next: "Tiếp theo ›",
            goto: "Đi đến",
            go: "Đi",
            total: "Tổng: {{count}} thiệp cưới"
        },
        messages: {
            copySuccess: "Đã sao chép!",
            copyDescription: "Link đã được sao chép vào clipboard",
            copyError: "Lỗi",
            copyErrorDescription: "Không thể sao chép link",
            publishSuccess: "Đã công khai thiệp cưới",
            publishSuccessDescription: "Thiệp cưới của bạn đã được công khai và có thể truy cập qua link",
            unpublishSuccess: "Đã bỏ công khai thiệp cưới",
            unpublishSuccessDescription: "Thiệp cưới của bạn đã bị ẩn khỏi công khai",
            updateError: "Lỗi cập nhật",
            updateErrorDescription: "Không thể cập nhật trạng thái thiệp cưới",
            cloneSuccess: "Nhân bản thành công",
            cloneSuccessDescription: "Thiệp cưới đã được nhân bản thành công",
            cloneError: "Lỗi nhân bản",
            cloneErrorDescription: "Không thể nhân bản thiệp cưới",
            deleteSuccess: "Đã xóa thiệp cưới",
            deleteSuccessDescription: "Thiệp cưới đã được xóa thành công",
            deleteError: "Lỗi xóa",
            deleteErrorDescription: "Không thể xóa thiệp cưới",
            templateChangeSuccess: 'Đã đổi giao diện thành "{{name}}" cho thiệp cưới "{{title}}"',
            templateChangeError: "Đã xảy ra lỗi trong quá trình đổi giao diện. Vui lòng thử lại.",
            resetSuccess: "Đã reset thiệp cưới về mẫu gốc",
            resetError: "Lỗi reset",
            resetErrorDescription: "Không thể reset thiệp cưới về mẫu gốc",
            tierUpgradeRequired: "Cần nâng cấp gói",
            tierUpgradeDescription: "Bạn cần nâng cấp gói lớn hơn hoặc bằng mẫu này để xuất bản",
            copyLink: "Sao chép link",
            copyAndClearCache: "Sao chép + Làm mới cache",
            clearCacheSuccess: "Đã gửi yêu cầu làm mới cache",
            clearCacheError: "Không thể xóa cache"
        },
        tierUpgradeFeatureName: "Nâng cấp gói để xuất bản",
        modals: {
            delete: {
                title: "Xác nhận xóa",
                message: "Bạn có chắc chắn muốn xóa thiệp cưới này không? Hành động này không thể hoàn tác.",
                confirm: "Xóa",
                cancel: "Hủy"
            },
            templateChange: {
                title: "Cảnh báo đổi giao diện",
                message: "Bạn có chắc chắn muốn đổi giao diện cho thiệp cưới",
                toTemplate: "sang mẫu",
                warning: "⚠️ Lưu ý: Khi đổi giao diện, tất cả nội dung và cài đặt hiện tại sẽ bị xóa và thay thế bằng giao diện mới.",
                note: "Hành động này không thể hoàn tác. Vui lòng xem xét kỹ lưỡng trước khi tiếp tục.",
                keepInfo: "Giữ nguyên thông tin",
                keepInfoHelper: "Bật để giữ các nội dung làm thiệp nhanh. Tắt để làm mới theo mẫu.",
                confirm: "Tiếp tục",
                cancel: "Hủy"
            },
            reset: {
                title: "Xác nhận reset thiệp cưới",
                message: "Bạn có chắc chắn muốn reset lại thiệp cưới",
                warning: "⚠️ Lưu ý: Tất cả nội dung và cài đặt hiện tại sẽ bị xóa và thay thế bằng nội dung mẫu gốc. Hành động này không thể hoàn tác.",
                confirm: "Reset",
                cancel: "Hủy"
            }
        },
        analytics: {
            upgradeTitle: "Nâng cấp để xem thống kê chi tiết",
            buyFeature: "Mua tính năng này",
            upgradePlan: "Nâng cấp gói"
        }
    })
}, 27061, e => {
    e.v({
        createPage: {
            title: "Tạo thiệp mới",
            fields: {
                title: "Tiêu đề thiệp",
                domain: "Địa chỉ website",
                eventDate: "Ngày sự kiện",
                template: "Template"
            },
            placeholders: {
                title: "Nhập tiêu đề cho thiệp...",
                subdomain: "john-mary",
                custom: "example.com"
            },
            defaults: {
                title: "Đám cưới Tên chú rể & Tên cô dâu"
            },
            defaultDomain: "Tên miền mặc định",
            customDomainLabel: "Tên miền tùy chỉnh",
            customDomain: {
                toggle: "Sử dụng tên miền tùy chỉnh",
                description: "Bật tùy chọn này nếu bạn muốn sử dụng tên miền riêng của mình thay vì .mehappy.info"
            },
            helper: {
                subdomain: 'Địa chỉ website phải lớn hơn 3 và nhỏ hơn 63 kí tự (a-z 0-9), có thể sử dụng ký tự "-".',
                custom: "Nhập tên miền đầy đủ của bạn (ví dụ: mydomain.com)",
                customDomainHint: "Bạn có thể cài đặt tên miền riêng (ví dụ: yourname.com) sau khi tạo trang trong phần Cài đặt."
            },
            suggestion: {
                message: "Gợi ý từ nội dung bạn nhập: {{domain}}",
                apply: "Dùng gợi ý"
            },
            cnameGuide: {
                title: "Hướng dẫn sử dụng tên miền",
                description: "Tên miền không được nhập kèm www. (Ví dụ: chỉ được nhập abc.com, không được nhập www.abc.com). Sau khi cài đặt tên miền riêng vào hệ thống, hãy đến hệ thống quản trị tên miền của bạn và thiết lập 2 bản ghi như sau:"
            },
            template: {
                choose: "Chọn template",
                id: "Template #{{id}}"
            },
            actions: {
                cancel: "Hủy",
                create: "Tạo thiệp",
                creating: "Đang tạo..."
            },
            errors: {
                titleRequired: "Vui lòng nhập tiêu đề thiệp",
                domainRequired: "Vui lòng nhập domain",
                domainInvalid: "Domain chỉ được sử dụng chữ thường, số và dấu gạch ngang",
                domainTooShort: "Domain phải có ít nhất 3 ký tự",
                domainNotAvailable: "Domain không khả dụng",
                domainChecking: "Đang kiểm tra domain, vui lòng đợi",
                eventDateRequired: "Vui lòng chọn ngày sự kiện"
            },
            verification: {
                success: "Trang của bạn đã được tạo thành công!",
                needsVerification: "Tuy nhiên, tên miền tùy chỉnh {{domain}} cần được xác thực trước khi có thể truy cập công khai.",
                skipNote: "Lưu ý: Bạn có thể bỏ qua bước này và xác thực sau trong trang quản lý. Trang vẫn có thể chỉnh sửa nhưng sẽ không thể truy cập công khai cho đến khi domain được xác thực.",
                skipButton: "Bỏ qua, xác thực sau",
                verifyButton: "Xác thực ngay"
            },
            tierWarning: {
                title: "Cần nâng cấp gói để xuất bản",
                description: "Template này yêu cầu gói {{templateTier}}, nhưng bạn đang sử dụng gói {{userTier}}. Bạn vẫn có thể tạo trang nhưng sẽ cần nâng cấp gói để xuất bản.",
                upgradeButton: "Nâng cấp ngay"
            },
            seo: {
                sectionTitle: "Cài đặt SEO",
                pageTitle: "Tiêu đề trang (hiển thị trên tab trình duyệt)",
                pageTitlePlaceholder: "VD: Đám cưới Văn An & Thùy Linh",
                pageTitleHelper: "{{count}}/200 ký tự",
                pageDescription: "Mô tả trang",
                pageDescriptionPlaceholder: "Mô tả ngắn gọn về thiệp cưới của bạn",
                pageDescriptionHelper: "{{count}}/160 ký tự. Mô tả này sẽ hiển thị khi chia sẻ link.",
                socialImage: "Hình ảnh chia sẻ mạng xã hội",
                socialImagePlaceholder: "https://example.com/image.jpg",
                socialImageHelper: "Khuyến nghị: 1200x630px. Hình ảnh hiển thị khi chia sẻ link.",
                favicon: "Biểu tượng trang (Favicon)",
                faviconPlaceholder: "https://example.com/favicon.ico",
                faviconHelper: "Khuyến nghị: 32x32 hoặc 16x16px",
                password: "Mật khẩu bảo vệ trang",
                passwordPlaceholder: "Để trống nếu không cần",
                passwordHelper: "Người xem cần nhập mật khẩu để truy cập trang.",
                premiumLabel: "Tính năng nâng cao"
            }
        }
    })
}, 704972, e => {
    e.v({
        permissions: {
            accessDenied: "Bạn không có quyền truy cập tính năng này",
            insufficientPermission: "Quyền hạn không đủ",
            contactAdmin: "Vui lòng liên hệ quản trị viên để được cấp quyền",
            roleRequired: "Cần có role {{role}} để truy cập"
        },
        roles: {
            admin: "Quản trị viên",
            mod: "Điều hành viên",
            super_admin: "Quản trị viên cấp cao",
            user: "Người dùng",
            agent: "Đại lý"
        }
    })
}, 999241, e => {
    e.v({
        title: "Quản lý Photobook",
        description: "Thu thập và chia sẻ những bức ảnh cưới yêu thích của bạn trong những album đẹp.",
        subtitle: "Tạo một photobook cho mỗi sự kiện hoặc khoảnh khắc và liên kết nó với trang cưới của bạn.",
        descriptionMobile: "Thu thập và chia sẻ những bức ảnh cưới yêu thích của bạn",
        subtitleMobile: "Tạo photobook cho mỗi sự kiện hoặc khoảnh khắc",
        newPhotobook: "Photobook Mới",
        addPhotobook: "Thêm Photobook",
        editPhotobook: "Chỉnh sửa Photobook",
        deleteConfirmTitle: "Xác nhận xóa",
        deleteConfirmMessage: "Bạn có chắc chắn muốn xóa photobooth này?",
        deleteSuccess: "Đã xóa Photobook",
        deleteError: "Lỗi khi xóa photobooth",
        emptyState: "Không tìm thấy photobooth",
        loading: "Đang tải photobooths...",
        delete: "Xóa",
        cancel: "Hủy",
        tableHeaders: {
            title: "Tiêu đề",
            page: "Trang cưới",
            images: "Hình ảnh",
            createdAt: "Ngày tạo",
            actions: "Hành động"
        },
        filter: {
            searchPlaceholder: "Tìm kiếm photobook...",
            allPages: "Tất cả trang"
        },
        card: {
            linkedTo: "Liên kết với",
            created: "Tạo ngày",
            photosTotal: "ảnh tổng cộng",
            view: "Xem",
            edit: "Chỉnh sửa",
            delete: "Xóa"
        },
        pagination: {
            previous: "Trước",
            next: "Tiếp",
            pageInfo: "Trang {{current}} / {{total}}"
        },
        form: {
            createTitle: "Tạo Photobook",
            editTitle: "Sửa Photobook",
            titleLabel: "Tiêu đề",
            titlePlaceholder: "Nhập tiêu đề photobook",
            pageLabel: "Trang cưới",
            pageSelectPlaceholder: "Chọn trang cưới",
            imagesLabel: "Hình ảnh",
            addImages: "Thêm hình ảnh",
            dragToReorder: "Kéo thả để sắp xếp hình ảnh",
            noImages: "Chưa có hình ảnh",
            imageDescription: "Mô tả hình ảnh",
            imageDescriptionPlaceholder: "Nhập mô tả cho hình ảnh này...",
            cancel: "Hủy",
            create: "Tạo",
            update: "Cập nhật",
            creating: "Đang tạo...",
            updating: "Đang cập nhật...",
            selectImagesTitle: "Chọn hình ảnh cho photobook",
            validation: {
                titleRequired: "Tiêu đề không được để trống",
                pageRequired: "Vui lòng chọn trang cưới",
                imagesRequired: "Vui lòng thêm ít nhất một hình ảnh"
            },
            success: {
                created: "Đã tạo photobook thành công",
                updated: "Đã cập nhật photobook thành công"
            },
            error: {
                create: "Lỗi khi tạo photobook",
                update: "Lỗi khi cập nhật photobook"
            }
        }
    })
}, 466077, e => {
    e.v(JSON.parse('{"banner":{"title":"Lựa chọn gói cước hoàn hảo","subtitle":"Từ thông báo đơn giản đến trải nghiệm đám cưới cao cấp, chúng tôi có gói phù hợp cho ngày đặc biệt của bạn"},"plans":{"basic":"BASIC","pro":"PRO","vip":"VIP"},"currentPlan":"Đang sử dụng","usingPlan":"Đang sử dụng","save":"Tiết kiệm","upgradeNow":"Nâng cấp ngay","selectPlan":"Chọn gói này","included":"Đã bao gồm","designRequestIncluded":"Yêu cầu thiết kế hộ đã được bao gồm trong gói của bạn","addDesignRequest":"Yêu cầu thiết kế hộ","upgradeDiscount":"Giảm giá nâng cấp","upgradeFrom":"Nâng cấp từ gói {{plan}}","owned":"Đã sở hữu","designFee":"khi yêu cầu thiết kế hộ","cards":{"basic":{"name":"BASIC","subtitle":"Dành cho thông báo đơn giản","price":"Free","period":"/mãi mãi","button":"Bắt đầu miễn phí"},"pro":{"name":"PRO","subtitle":"Phù hợp cho hầu hết các cặp đôi","period":"/một lần","note":"Bao gồm thiết kế & cài đặt","badge":"Phổ biến","button":"Chọn gói PRO"},"vip":{"name":"VIP","subtitle":"Trải nghiệm cao cấp hoàn chỉnh","period":"/một lần","note":"Bao gồm thiết kế & cài đặt","button":"Chọn gói VIP","badge":"Tốt nhất"},"features":{"useBasicCards":"Sử dụng thiệp gói cơ bản","useProCards":"Sử dụng thiệp gói PRO","useVipCards":"Sử dụng thiệp gói VIP"}},"features_list":{"basic_designer":"Trình thiết kế thiệp cơ bản","advanced_designer":"Trình thiết kế thiệp nâng cao","comprehensive_designer":"Trình thiết kế thiệp toàn diện","public_time_6m":"6 tháng công khai thiệp","public_time_2y":"2 năm công khai thiệp","public_time_lifetime":"Trọn đời công khai thiệp","photos_basic":"Số lượng ảnh cơ bản","photos_advanced":"Số lượng ảnh nâng cao","photos_max":"Số lượng ảnh tối đa","features_basic":"Các tính năng cơ bản","features_advanced":"Các tính năng nâng cao","features_unlock_all":"Mở khóa tất cả các tính năng","unlimited_invites":"Gửi mời không giới hạn","use_pro":"Sử dụng thiệp gói PRO","use_vip":"Sử dụng thiệp gói VIP"},"comparison":{"title":"So sánh tính năng chi tiết","subtitle":"Xem chính xác những gì có trong mỗi gói","viewAll":"So sánh tất cả tính năng","categories":{"core":"Tính năng cốt lõi","guest":"Quản lý khách mời","customization":"Tuỳ chỉnh","support":"Hỗ trợ"},"features":{"publicTime":"công khai thiệp","features":"Tính năng","photos":"Số lượng ảnh","templates":"Mẫu tuỳ chỉnh","rsvp":"Theo dõi RSVP","guestList":"Quản lý danh sách khách","reminders":"Nhắc nhở tự động","customDomain":"Tên miền riêng","musicVideos":"Nhạc & Video","animations":"Hoạt ảnh cao cấp","support":"Mức độ hỗ trợ","design":"Hỗ trợ thiết kế"},"values":{"sixMonths":"6 tháng","twoYears":"2 năm","lifetime":"Trọn đời","basic":"Cơ bản","advanced":"Nâng cao","premium":"Cao cấp","selfService":"Tùy ý chỉnh sửa nội dung","azSetup":"Hỗ trợ cài đặt từ A-Z","priority247":"Hỗ trợ ưu tiên 24/7","unlimited":"Không giới hạn"}},"basicModal":{"title":"Gói Basic - Mua thêm tính năng nâng cao:","buyFeatures":"Mua thêm tính năng"},"proModal":{"title":"Gói Pro - Mua thêm tính năng nâng cao:","buyFeatures":"Mua thêm tính năng"},"vipModal":{"currentPlan":"Bạn đang sử dụng gói VIP - gói cao cấp nhất của chúng tôi!","description":"Cảm ơn bạn đã tin tưởng sử dụng dịch vụ cao cấp của chúng tôi."},"contactSupport":"Liên hệ hỗ trợ:","note":{"title":"Lưu ý:","content":"Hiện tại chúng tôi chưa có chính sách hoàn tiền và huỷ dịch vụ các gói, nhưng nếu như bạn gặp lỗi hoặc có sự nhầm lẫn nào trong thanh toán, hãy liên hệ với chúng tôi để được hỗ trợ. Các tính năng trong gói sẽ không được quy đổi ra tiền để khấu trừ hoặc đổi cho tính năng khác giữa các gói. Xin chân thành cảm ơn!"},"purchaseModal":{"title":"Thanh toán đơn hàng","orderInfo":"Thông tin đơn hàng","coupon":"Mã giảm giá","enterCoupon":"Nhập mã giảm giá","couponPlaceholder":"Nhập mã giảm giá...","checking":"Đang kiểm tra...","invalidCoupon":"Mã giảm giá không hợp lệ","couponApplied":"Mã \\"{{code}}\\" đã được áp dụng","discount":"Giảm {{amount}}","remove":"Xóa","additionalOptions":"Tùy chọn thêm","designRequest":"Yêu cầu thiết kế hộ","designRequestDesc":"meWedding sẽ hỗ trợ cài đặt và thiết kế từ A-Z cho bạn","orderSummary":"Tóm tắt đơn hàng","originalPrice":"Giá gốc","total":"Tổng cộng","confirmOrder":"Xác nhận đơn hàng","createOrder":"Tạo đơn hàng","creatingOrder":"Đang tạo đơn hàng...","paymentSuccess":"Thanh toán thành công!","paymentSuccessDesc":"Gói dịch vụ của bạn đã được kích hoạt","paymentFailed":"Thanh toán không thành công","paymentFailedDesc":"Vui lòng thử lại hoặc liên hệ hỗ trợ","scanQR":"Quét mã QR để thanh toán","generatingQR":"Đang tạo mã QR...","bankTransferInfo":"Thông tin chuyển khoản","bank":"Ngân hàng","accountNumber":"Số tài khoản","content":"Nội dung","orderId":"Đơn hàng","autoUpdate":"Hệ thống sẽ tự động cập nhật khi nhận được thanh toán","status":{"paid":"Đã thanh toán","requiresPayment":"Chờ thanh toán","created":"Đã tạo đơn hàng","failed":"Thanh toán thất bại","canceled":"Đã hủy","label":"Trạng thái đơn hàng"}},"featurePurchaseModal":{"title":"Mua lẻ các tính năng","titleWithTier":"Mua lẻ tính năng gói {{tier}}","loading":"Đang tải danh sách tính năng...","availableFeatures":"Tính năng có thể mua","allOwned":"Bạn đã sở hữu tất cả các tính năng có sẵn!","key":"Key","ownedFeatures":"Tính năng đã sở hữu","owned":"Đã sở hữu","total":"Tổng cộng","selectedCount":"Đã chọn {{count}} tính năng","paymentInfo":"Thông tin thanh toán","scanQR":"Quét mã QR để thanh toán:","bankTransfer":"Chuyển khoản ngân hàng:","bank":"Ngân hàng","accountNumber":"Số tài khoản","content":"Nội dung","amount":"Số tiền","paymentPrompt":"Vui lòng thanh toán để kích hoạt các tính năng đã chọn.","cancel":"Hủy","buy":"Mua","processing":"Đang xử lý...","note":"Lưu ý","noteContent":"Sau khi thanh toán thành công, các tính năng sẽ được kích hoạt ngay lập tức cho tài khoản của bạn.","paymentSuccess":"Thanh toán thành công","paymentFailed":"Thanh toán thất bại","orderCanceled":"Đơn hàng đã bị hủy","createOrderError":"Không thể tạo đơn hàng. Vui lòng thử lại.","orderCreated":"Đã tạo đơn hàng"},"planDetailsModal":{"title":"Chi tiết gói {{plan}}","close":"Đóng","feature":"Tính năng","included":"Có trong gói","unlockFeatures":"Bạn có thể mở khóa thêm các tính năng cho gói {{plan}} bằng cách","buyMoreFeatures":"Mua thêm tính năng","upgradePlan":"Nâng cấp gói Thiệp"},"viewDetails":"Xem chi tiết","buyFeatures":"Mua lẻ tính năng","customDesign":"Thiết kế theo yêu cầu","endsIn":"Kết thúc sau","featureList":{"designSupport":"Hỗ trợ Thiết kế và cài đặt Thiệp cưới từ A-Z","anytimeSupport":"Hỗ trợ mọi lúc mọi nơi","unlimitedEdits":"Chỉnh sửa không giới hạn","basicFeatures":"Các tính năng cơ bản (Nhạc nền, hiệu ứng, thông tin cưới...)","publicTime":"Thời gian công khai Thiệp cưới","photoCount":"Số lượng ảnh cưới","brideGroomInfo":"Thông tin về cô Dâu chú Rể","parentsInfo":"Thông tin \\"Song Thân Phụ Mẫu\\", tư gia địa chỉ 2 nhà","eventsInfo":"Thông tin các \\"Sự kiện cưới\\", thời gian, địa điểm, time line","weddingBox":"Hộp mừng cưới (Thông tin chuyển khoản, QR Code)","qrCode":"Tạo mã QR cho thiệp cưới (in lên thiệp giấy, gửi cho bạn bè)","countdown":"Tính năng \\"Đếm ngược thời gian\\" đến Sự kiện cưới","googleMaps":"Google Maps chỉ dẫn đến tận nơi diễn ra sự kiện cưới","removeAds":"Loại bỏ quảng cáo trên Website meWedding,...","customColorsFonts":"Tuỳ chỉnh màu sắc, Font chữ cho Thiệp cưới","customEffects":"Tuỳ chỉnh hiệu ứng hiển thị tim, tuyết, hoa rơi","wishes":"Gửi lời chúc mừng cưới và quản lý lời chúc của bạn bè","uploadVideo":"Tải lên Video","customLayout":"Tuỳ chỉnh thay đổi, sắp xếp các mục, các thiết kế giữa các mẫu với nhau","rsvp":"Tính năng Xác nhận tham dự và quản lý khách mời dự tiệc","vipInterface":"Sử dụng \\"Giao diện VIP\\" chỉ dành riêng gói VIP","removeBranding":"Loại bỏ Logo và thông tin meWedding trên Thiệp cưới","customLogo":"Logo thiết kế riêng theo tên cô Dâu chú Rể","logoOptions":"Tuỳ chọn kiểu hiển thị Logo cho Thiệp cưới","saveTheDate":"Thiệp mời báo cưới (Save the Date) + Ghi tên từng khách mời","innerInvitation":"Thiệp mời hiển thị bên trong Thiệp chính, hiện tên khách mời","downloadData":"Tải xuống danh sách lời chúc và khách mời","uploadFont":"Tải lên Font chữ yêu thích","uploadMusic":"Tải lên bài hát yêu thích","uploadEffect":"Tải lên hiệu ứng yêu thích","customDomain":"Tích hợp tên miền riêng (Custom Domain)","bonusVideo":"Tặng Video Chibi, Animation vui nhộn, có thể trình chiếu ở sự kiện cưới","custom_qrcode_style":"Tùy chỉnh style mã QR","countup_timer":"Đếm tiến thời gian cưới (khi đã qua ngày cưới)","analytics":"Thống kê lượt truy cập thiệp","custom_visual_effects":"Hiệu ứng trang (hoa bay, tim bay...)","custom_visual_effects_advance":"Tải hiệu ứng theo ý muốn","custom_colors_fonts":"Tùy chỉnh Font chữ Editor","custom_colors_font_advance":"Tải Font chữ theo ý muốn","layout_block_reorder":"Thêm phần tử, mở khóa phần tử, sắp xếp lại","photobook":"Quản lý, thêm sửa xóa Photobook","wedding_reminders":"Thêm sự kiện vào lịch (Google Calendar...)","change_template":"Đổi template cho page (giữ nguyên nội dung)","wishes_management":"Quản lý lời chúc & Cài đặt thông báo","upload_wedding_video":"Tải lên Video (giới hạn 30Mb)","rsvp_guest_management":"Quản lý RSVP khách mời","personalized_invites":"Cá nhân hóa thiệp mời (Tự điền thông tin khách)","personalized_invites_seo":"SEO kèm thông tin khách (Cá nhân hóa)","email_reminders":"Hẹn giờ gửi email nhắc lịch","remove_mewedding_logo":"Loại bỏ branding meWedding","custom_domain":"Tên miền riêng","editor_event_action_limits":"Full tính năng Event (trừ gửi form)","editor_event_action_limits_vip":"Full tính năng Event (bao gồm gửi form)","seo_settings":"Cài đặt SEO (Bảo vệ mật khẩu)","seo_settings_vip":"Cài đặt SEO (Favicon, ...)","file_manager_access":"Quản lý file (Video...)","file_manager_access_vip":"Quản lý file (Mở khóa toàn bộ)","element_text_limits":"Cài đặt Text (Mở khóa font)","element_form_limits":"Cài đặt Form (Tạo form lẻ)","element_html_block_basic":"Cài đặt HTML (Tạo HTML lẻ)"},"values":{"6months":"6 Tháng","2years":"2 Năm","lifetime":"Trọn đời","20photos":"20 ảnh","50photos":"50 ảnh","unlimited":"Không giới hạn"},"customDesignModal":{"title":"Thiệp Thiết kế theo Yêu Cầu","description":"Thiệp sẽ được thiết kế theo yêu cầu riêng của Dâu Rể, thay đổi bố cục, màu sắc, ý tưởng,....Chỉ mình dâu rể sử dụng. Tạo ra màu sắc riêng và những trải nghiệm tốt hơn cho Dâu Rể. (Có thể cover từ những mẫu thiệp khác mà dâu rể thích,...)","price":"Giá Thiết Kế từ : 450.000đ - 2.000.000đ","note1":"Sẽ tuỳ theo độ khó và yêu cầu của Dâu Rể.","note2":"Dâu Rể vui lòng nhắn tin qua cho meWedding để được hỗ trợ tư vấn chi tiết nhé ạ !!"},"upsell":{"currentPlanRibbon":"Gói hiện tại","specialUpgradeRibbon":"Ưu đãi nâng cấp đặc biệt","promotionRibbon":"Khuyến mãi {{percent}}% OFF","specialOfferTitle":"Ưu đãi đặc biệt!","specialOfferDescription":"Bạn đang ở gói {{fromPlan}}, chỉ cần thêm {{amount}} để nâng cấp lên {{toPlan}}.","specialOfferCountdown":"Ưu đãi còn {{time}}","mobileQuickSwitch":"Chạm vào từng gói để xem chi tiết ngay bên dưới.","mobileUpgradeTag":"Ưu đãi nâng cấp","miniCurrentTag":"Đang dùng","miniUpgradeTag":"Ưu đãi","showMoreFeatures":"Xem thêm tính năng","showLessFeatures":"Thu gọn","priceDiscountInline":"Tiết kiệm {{percent}}%","vipUpgradeRemaining":"Còn {{amount}} để nâng cấp VIP"}}'))
}, 847712, e => {
    e.v({
        meta: {
            title: "Chính Sách Quyền Riêng Tư | meWedding",
            description: "Chính sách quyền riêng tư của meWedding - Cam kết bảo vệ thông tin cá nhân của bạn"
        },
        title: "CHÍNH SÁCH QUYỀN RIÊNG TƯ",
        effectiveDate: "Ngày hiệu lực: 01/11/2025",
        intro: {
            paragraph1: 'Chúng tôi, CÔNG TY TNHH MEHAPPY (sau đây gọi là "Chúng tôi", "Trang Web"), cam kết bảo vệ quyền riêng tư của khách truy cập và người dùng (sau đây gọi là "Bạn"). Chính sách Quyền riêng tư này giải thích cách chúng tôi thu thập, sử dụng, tiết lộ và bảo vệ thông tin cá nhân của bạn khi bạn truy cập trang web của chúng tôi và sử dụng dịch vụ thiết kế thiệp mời online của chúng tôi.',
            paragraph2: "Vui lòng đọc kỹ chính sách này. Nếu bạn không đồng ý với các điều khoản của chính sách này, vui lòng không truy cập hoặc sử dụng Dịch vụ của chúng tôi."
        },
        section1: {
            title: "1. THÔNG TIN CHÚNG TÔI THU THẬP",
            intro: "Chúng tôi có thể thu thập thông tin về bạn theo nhiều cách khác nhau:",
            a: {
                title: "A. Thông tin cá nhân bạn cung cấp:",
                item1: "Thông tin tài khoản: Tên, địa chỉ email, mật khẩu khi bạn đăng ký tài khoản.",
                item2: "Thông tin thiệp mời: Tên (ví dụ: tên cô dâu, chú rể, chủ tiệc), ngày, giờ, địa điểm sự kiện, và bất kỳ văn bản hoặc hình ảnh nào bạn tải lên để cá nhân hóa thiệp mời.",
                item3: "Thông tin khách mời: Nếu bạn sử dụng tính năng quản lý khách mời, bạn có thể cung cấp tên, email, hoặc số điện thoại của khách mời. Chúng tôi chỉ sử dụng thông tin này để thay mặt bạn gửi thiệp mời.",
                item4: "Thông tin liên hệ: Khi bạn liên hệ với bộ phận hỗ trợ của chúng tôi."
            },
            b: {
                title: "B. Thông tin thu thập tự động:",
                item1: "Dữ liệu nhật ký (Log Data) và Thiết bị: Địa chỉ IP, loại trình duyệt, hệ điều hành, trang bạn đã truy cập, thời gian truy cập.",
                item2: "Cookies: Chúng tôi sử dụng cookies để giúp cá nhân hóa và cải thiện trải nghiệm của bạn."
            },
            c: {
                title: 'C. Thông tin từ Facebook (Nếu bạn dùng "Đăng nhập bằng Facebook"):',
                content: "Nếu bạn chọn đăng nhập bằng Facebook, chúng tôi sẽ nhận được quyền truy cập vào thông tin hồ sơ cơ bản của bạn từ Facebook, chẳng hạn như tên, địa chỉ email, và ảnh đại diện của bạn, theo sự cho phép của bạn thông qua Facebook."
            }
        },
        section2: {
            title: "2. CHÚNG TÔI SỬ DỤNG THÔNG TIN CỦA BẠN NHƯ THẾ NÀO?",
            intro: "Chúng tôi sử dụng thông tin thu thập được cho các mục đích sau:",
            item1: "Cung cấp và vận hành Dịch vụ (tạo và quản lý thiệp mời của bạn).",
            item2: "Cá nhân hóa trải nghiệm người dùng.",
            item3: "Gửi cho bạn các thông báo quản trị, cập nhật dịch vụ và thông tin hỗ trợ.",
            item4: "Quản lý tài khoản của bạn.",
            item5: "Cải thiện trang web và dịch vụ của chúng tôi.",
            item6: "Tuân thủ các yêu cầu pháp lý."
        },
        section3: {
            title: "3. CHÚNG TÔI CHIA SẺ THÔNG TIN CỦA BẠN NHƯ THẾ NÀO?",
            commitment: "Chúng tôi cam kết không bán, trao đổi hoặc cho thuê thông tin nhận dạng cá nhân của bạn cho bên thứ ba.",
            intro: "Chúng tôi chỉ có thể chia sẻ thông tin trong các trường hợp sau:",
            item1: "Với các nhà cung cấp dịch vụ bên thứ ba: Để hỗ trợ chúng tôi vận hành trang web (ví dụ: dịch vụ lưu trữ web, dịch vụ gửi email). Các bên này có nghĩa vụ giữ bí mật thông tin của bạn.",
            item2: "Theo yêu cầu của pháp luật: Khi chúng tôi tin rằng việc tiết lộ là cần thiết để tuân thủ luật pháp, bảo vệ quyền lợi hoặc sự an toàn của chúng tôi hoặc của người khác."
        },
        section4: {
            title: "4. BẢO MẬT THÔNG TIN",
            content: "Chúng tôi áp dụng các biện pháp bảo mật hành chính, kỹ thuật và vật lý hợp lý để bảo vệ thông tin cá nhân của bạn khỏi bị truy cập, sử dụng hoặc tiết lộ trái phép. Tuy nhiên, không có phương thức truyền tải qua Internet hoặc lưu trữ điện tử nào là an toàn 100%."
        },
        section5: {
            title: "5. QUYỀN CỦA BẠN",
            content: "Bạn có quyền truy cập, cập nhật hoặc yêu cầu xóa thông tin cá nhân của mình. Bạn có thể thực hiện việc này bằng cách đăng nhập vào cài đặt tài khoản của mình hoặc liên hệ trực tiếp với chúng tôi."
        },
        section6: {
            title: "6. THAY ĐỔI CHÍNH SÁCH NÀY",
            content: 'Chúng tôi có thể cập nhật Chính sách Quyền riêng tư này theo thời gian. Chúng tôi sẽ thông báo cho bạn về bất kỳ thay đổi nào bằng cách đăng Chính sách mới trên trang này và cập nhật "Ngày hiệu lực" ở trên cùng.'
        },
        section7: {
            title: "7. LIÊN HỆ VỚI CHÚNG TÔI",
            intro: "Nếu bạn có bất kỳ câu hỏi hoặc thắc mắc nào về Chính sách Quyền riêng tư này, vui lòng liên hệ với chúng tôi qua:",
            email: "Email: mehappy.info1@gmail.com"
        }
    })
}, 374463, e => {
    e.v({
        header: {
            title: "Sản Phẩm Đối Tác",
            description: "Khám phá các dịch vụ cưới đáng tin cậy và ưu đãi được tuyển chọn từ đối tác của chúng tôi.",
            disclaimer: "Tất cả danh sách được cung cấp bởi đối tác. Giá cả và tính khả dụng có thể thay đổi."
        },
        search: {
            title: "Tìm kiếm & Lọc",
            titleMobile: "Tìm kiếm & Lọc",
            description: "Tìm một dịch vụ cụ thể — ví dụ 'nhiếp ảnh gia', 'váy cưới', hoặc 'địa điểm'.",
            descriptionMobile: "Tìm dịch vụ cụ thể",
            label: "Tìm kiếm",
            placeholder: "Tìm kiếm sản phẩm đối tác...",
            refresh: "Làm mới",
            categoryLabel: "Danh mục",
            allCategories: "Tất cả danh mục"
        },
        products: {
            title: "Các sản phẩm từ đối tác",
            loading: "Đang tải sản phẩm...",
            noResults: "Không tìm thấy sản phẩm nào",
            noResultsSearch: "Thử tìm kiếm với từ khóa khác",
            noResultsEmpty: "Hiện tại chưa có sản phẩm nào được đăng",
            showing: "Hiển thị {{count}} trong tổng số {{total}} sản phẩm",
            showingOf: "Hiển thị {{current}} trong tổng số {{total}} sản phẩm",
            searchFor: 'cho từ khóa "{{term}}"',
            viewProduct: "Xem",
            startingAt: "Chỉ từ",
            updated: "Cập nhật lúc",
            status: {
                active: "Active",
                inactive: "Inactive"
            },
            notAvailable: "Sản phẩm hiện không khả dụng"
        },
        pagination: {
            previous: "Trước",
            next: "Sau"
        },
        error: {
            title: "Lỗi",
            retry: "Thử lại"
        }
    })
}, 611671, e => {
    e.v({
        title: "Chương trình giới thiệu",
        subtitle: "Chia sẻ meWedding với bạn bè và nhận hoa hồng khi họ bắt đầu sử dụng.",
        description: "Theo dõi thu nhập của bạn, sao chép link giới thiệu và xem ai đã tham gia qua bạn.",
        tabs: {
            dashboard: "Dashboard",
            bankInfo: "Thông tin ngân hàng",
            commissionHistory: "Lịch sử hoa hồng",
            referredUsers: "Người được giới thiệu",
            withdrawals: "Lịch sử rút tiền"
        },
        balances: {
            available: "Có Thể Rút",
            availableDescription: "Số tiền bạn có thể yêu cầu ngay",
            pending: "Đang Chờ / Giữ",
            pendingDescription: "Số tiền đang chờ duyệt",
            totalEarned: "Tổng Thu Nhập",
            totalEarnedDescription: "Tổng hoa hồng bạn đã tạo ra",
            paidOut: "Tổng Đã Thanh Toán",
            paidOutDescription: "Tổng số tiền chúng tôi đã gửi cho bạn"
        },
        links: {
            title: "Liên Kết Giới Thiệu Của Bạn",
            description: "Chia sẻ liên kết này với bạn bè. Khi họ đăng ký và bắt đầu sử dụng meWedding, bạn sẽ kiếm được hoa hồng.",
            descriptionMobile: "Chia sẻ với bạn bè để kiếm hoa hồng",
            linkLabel: "Liên Kết Giới Thiệu",
            codeLabel: "Mã Giới Thiệu",
            copy: "Sao Chép",
            tipTitle: "Mẹo:",
            tipDescription: " Gửi liên kết hoặc chia sẻ mã của bạn. Khi họ nâng cấp, bạn sẽ kiếm được hoa hồng."
        },
        withdrawal: {
            button: "Rút Tiền",
            title: "Yêu Cầu Rút Tiền",
            availableBalance: "Số dư khả dụng:",
            placeholder: "Nhập số tiền muốn rút (VND)",
            cancel: "Hủy",
            submit: "Gửi Yêu Cầu",
            processing: "Đang xử lý..."
        },
        errors: {
            title: "Lỗi",
            balanceError: "Không thể lấy thông tin số dư",
            validationError: "Lỗi xác thực"
        },
        success: {
            title: "Thành công",
            withdrawalSuccess: "Đã gửi yêu cầu rút tiền"
        },
        history: {
            withdrawals: {
                title: "Rút Tiền Gần Đây",
                subtitle: "Các yêu cầu thanh toán mới nhất của bạn",
                empty: "Chưa có rút tiền nào",
                emptyDescription: "Khi bạn yêu cầu thanh toán, nó sẽ hiển thị ở đây."
            },
            referrals: {
                title: "Người Bạn Giới Thiệu",
                subtitle: "Xem ai đã đăng ký bằng liên kết của bạn",
                empty: "Chưa có giới thiệu nào",
                emptyDescription: "Khi ai đó tham gia bằng liên kết của bạn, họ sẽ xuất hiện ở đây."
            },
            noResults: "Không tìm thấy kết quả nào.",
            columns: {
                index: "#",
                time: "Thời gian",
                amount: "Số tiền",
                status: "Trạng thái",
                approvedDate: "Ngày Duyệt",
                email: "Email",
                totalSpent: "Tổng chi tiêu",
                commission: "Hoa hồng"
            }
        },
        bankAccount: {
            title: "Quản lý tài khoản ngân hàng",
            subtitle: {
                hasAccount: "Xem và cập nhật thông tin tài khoản ngân hàng của bạn",
                hasAccountMobile: "Xem và cập nhật thông tin tài khoản",
                noAccount: "Thêm tài khoản ngân hàng để nhận thanh toán hoa hồng",
                noAccountMobile: "Thêm tài khoản để nhận hoa hồng"
            },
            addButton: "Thêm tài khoản",
            updateButton: "Cập nhật tài khoản",
            noAccount: "Chưa có tài khoản ngân hàng nào",
            noAccountDescription: "Thêm tài khoản ngân hàng để có thể rút tiền hoa hồng",
            default: "Mặc định",
            fields: {
                bankCode: "Mã ngân hàng",
                bankName: "Tên ngân hàng",
                accountNumber: "Số tài khoản",
                accountName: "Tên chủ tài khoản",
                branch: "Chi nhánh (tùy chọn)"
            },
            placeholders: {
                bankCode: "VD: VCB, TCB, ACB",
                bankName: "VD: Vietcombank, Techcombank",
                accountNumber: "Nhập số tài khoản",
                accountName: "Nhập tên chủ tài khoản",
                branch: "Nhập chi nhánh"
            },
            modalTitle: {
                add: "Thêm tài khoản ngân hàng",
                update: "Cập nhật tài khoản ngân hàng"
            },
            cancel: "Hủy",
            add: "Thêm",
            update: "Cập nhật",
            processing: "Đang xử lý..."
        },
        messages: {
            copySuccess: "Đã sao chép",
            copyError: "Không thể sao chép link",
            withdrawalSuccess: "Đã gửi yêu cầu rút tiền",
            bankAccountSuccess: "Đã cập nhật tài khoản ngân hàng",
            balanceError: "Không thể lấy thông tin số dư",
            exportInfo: "Tính năng xuất dữ liệu sẽ được triển khai sớm"
        },
        commissionHistory: {
            stats: {
                totalCommissions: "Tổng Hoa Hồng",
                totalCommissionsDesc: "Tất cả sự kiện hoa hồng",
                totalEarned: "Tổng Thu Nhập",
                totalEarnedDesc: "Tổng giá trị hoa hồng cho đến nay",
                paidOut: "Đã Thanh Toán",
                paidOutDesc: "Hoa hồng bạn đã nhận",
                pending: "Đang Chờ",
                pendingDesc: "Đang chờ phê duyệt hoặc thanh toán"
            },
            filters: {
                title: "Bộ Lọc & Tìm Kiếm",
                subtitle: "Tìm kiếm theo ID đơn hàng, người mua hoặc trạng thái.",
                search: "Tìm kiếm",
                searchPlaceholder: "Tìm theo ID đơn hàng hoặc người mua…",
                status: "Trạng thái",
                statusAll: "Tất cả",
                statusPending: "Đang chờ",
                statusAvailable: "Có sẵn",
                statusLocked: "Bị khóa",
                statusPaid: "Đã thanh toán",
                statusCanceled: "Đã hủy",
                refresh: "Làm mới",
                export: "Xuất dữ liệu"
            },
            table: {
                title: "Danh Sách Hoa Hồng",
                subtitle: "Mỗi bản ghi hiển thị cách hoa hồng được kiếm, số tiền và đã được thanh toán chưa.",
                subtitleMobile: "Theo dõi tất cả thu nhập hoa hồng",
                empty: "Chưa có hoa hồng nào",
                emptyMobile: "Chưa có hoa hồng",
                emptyDescription: "Khi giới thiệu của bạn bắt đầu tạo ra thanh toán, chúng sẽ xuất hiện ở đây.",
                emptyDescriptionMobile: "Bắt đầu giới thiệu người dùng để kiếm hoa hồng",
                columns: {
                    id: "ID",
                    amount: "Số tiền",
                    status: "Trạng thái",
                    orderId: "ID Đơn hàng",
                    buyerId: "ID Người mua",
                    date: "Ngày"
                }
            },
            pagination: {
                previous: "Trước",
                next: "Sau"
            }
        },
        referredUsers: {
            stats: {
                totalReferred: "Tổng Giới Thiệu",
                totalReferredDesc: "Người đã tham gia bằng link của bạn",
                activeUsers: "Người Dùng Hoạt Động",
                activeUsersDesc: "Đang sử dụng meWedding",
                totalSpend: "Tổng Chi Tiêu",
                totalSpendDesc: "Số tiền giới thiệu của bạn đã chi",
                totalCommission: "Tổng Hoa Hồng",
                totalCommissionDesc: "Hoa hồng kiếm được từ giới thiệu"
            },
            filters: {
                title: "Bộ Lọc & Tìm Kiếm",
                titleMobile: "Tìm Kiếm & Lọc",
                subtitle: "Tìm kiếm theo email để nhanh chóng tìm người bạn đã giới thiệu.",
                subtitleMobile: "Tìm người dùng đã giới thiệu nhanh chóng",
                search: "Tìm kiếm",
                searchPlaceholder: "Tìm theo email…",
                status: "Trạng thái",
                statusAll: "Tất cả",
                statusActive: "Hoạt động",
                statusInactive: "Chưa hoạt động",
                refresh: "Làm mới",
                export: "Xuất dữ liệu"
            },
            table: {
                title: "Người Được Giới Thiệu",
                subtitle: "Mỗi người bên dưới đã đăng ký bằng link hoặc mã giới thiệu của bạn.",
                subtitleMobile: "Người đã đăng ký bằng link giới thiệu của bạn",
                empty: "Chưa có người được giới thiệu",
                emptySearch: "Không tìm thấy người dùng nào.",
                emptyDescription: "Khi ai đó đăng ký bằng link của bạn, họ sẽ xuất hiện ở đây — và bạn sẽ bắt đầu kiếm hoa hồng.",
                columns: {
                    index: "#",
                    user: "Người dùng",
                    registeredDate: "Ngày đăng ký",
                    firstCommissionDate: "Ngày hoa hồng đầu tiên",
                    totalSpent: "Tổng chi tiêu",
                    commission: "Hoa hồng kiếm được",
                    status: "Trạng thái"
                },
                statusActive: "Hoạt động",
                statusInactive: "Chưa hoạt động"
            }
        },
        withdrawalManagement: {
            info: {
                availableToWithdraw: "Có thể rút",
                minimumToRequest: "Số tiền tối thiểu yêu cầu",
                requestButton: "Yêu cầu rút tiền",
                helperText: "Bạn cần ít nhất 1.000 VND có sẵn trước khi có thể yêu cầu thanh toán.",
                helperTextDesktop: "Bạn chỉ có thể yêu cầu thanh toán khi số dư khả dụng của bạn ít nhất bằng số tiền này.",
                loading: "Đang tải..."
            },
            filters: {
                title: "Bộ Lọc & Tìm Kiếm",
                titleMobile: "Tìm Kiếm & Lọc",
                subtitle: "Tìm kiếm theo email để nhanh chóng tìm người bạn đã giới thiệu.",
                subtitleMobile: "Tìm người được giới thiệu nhanh chóng",
                search: "Tìm kiếm",
                searchPlaceholder: "Tìm theo email…",
                status: "Trạng thái",
                statusAll: "Tất cả",
                statusPending: "Đang chờ",
                statusApproved: "Đã duyệt",
                statusPaid: "Đã thanh toán",
                statusRejected: "Đã từ chối",
                refresh: "Làm mới",
                export: "Xuất dữ liệu"
            },
            table: {
                title: "Yêu Cầu Rút Tiền",
                subtitle: "Xem các yêu cầu thanh toán của bạn và trạng thái của chúng",
                empty: "Chưa có yêu cầu rút tiền nào",
                emptyDescription: "Khi bạn yêu cầu thanh toán, nó sẽ xuất hiện ở đây.",
                emptySearch: "Không tìm thấy yêu cầu rút tiền nào phù hợp với tìm kiếm của bạn.",
                columns: {
                    id: "ID",
                    amount: "Số tiền",
                    status: "Trạng thái",
                    bankInfo: "Thông tin ngân hàng",
                    requestDate: "Ngày yêu cầu",
                    approvedDate: "Ngày duyệt",
                    notes: "Ghi chú"
                }
            },
            pagination: {
                previous: "Trước",
                next: "Sau"
            }
        }
    })
}, 475671, e => {
    e.v(JSON.parse('{"title":"Cài đặt Thiệp","description":"Chọn thiệp của bạn, quản lý hình ảnh đại diện, chế độ hiển thị, địa chỉ công khai và nội dung hiển thị với khách mời.","descriptionMobile":"Quản lý cài đặt thiệp","tabs":{"general":"Chung","guestView":"Khách mời"},"selectPage":{"title":"Chọn Thiệp","label":"Trang thiệp","placeholder":"Chọn trang để cài đặt","helper":"Chọn trang thiệp để cấu hình."},"seoImage":{"title":"Hình đại diện & Xem trước","changeImage":"Thay đổi Hình ảnh","dragDrop":"Kéo & thả hình ảnh vào đây","uploadButton":"Tải lên Hình ảnh","previewLaptop":"Xem trước Desktop","previewMobile":"Xem trước Mobile","note":"Khuyến nghị 1200×630px (JPG/PNG)","selectImageTitle":"Chọn hình ảnh SEO"},"publication":{"title":"Hiển thị","publishTitle":"Thiệp công khai","publishDescription":"Bất kỳ ai có link đều có thể xem thiệp của bạn","publicTitle":"Hiển thị trên meHappy Marketplace","publicDescription":"Hiển thị thiệp của bạn trong thư viện công khai"},"domain":{"title":"Địa chỉ website","currentUrl":"URL hiện tại","live":"Đang hoạt động","currentDomain":"Địa chỉ hiện tại:","currentlyUsing":"Đang sử dụng","defaultSubdomain":"Tên miền mặc định","defaultSubdomainHelper":"Đây sẽ là URL thiệp công khai của bạn","defaultDomain":"Tên miền mặc định","defaultDomainRequired":"Vui lòng nhập tên miền mặc định","defaultDomainPattern":"Chỉ được sử dụng chữ thường, số và dấu gạch ngang","defaultDomainMinLength":"Tên miền phải có ít nhất 3 ký tự","inputGuide":{"title":"Quy tắc nhập tên miền mặc định","line1":"Dùng 3-63 ký tự, chỉ gồm chữ thường a-z, số 0-9 và dấu gạch ngang (-).","line2":"Không dùng dấu tiếng Việt, chữ hoa, khoảng trắng hoặc ký tự đặc biệt.","line3":"Ví dụ đúng: xuan-tu-ngoc-anh"},"validation":{"required":"Vui lòng nhập tên miền mặc định.","tooShort":"Tên miền phải có ít nhất 3 ký tự.","tooLong":"Tên miền không được vượt quá 63 ký tự.","containsSpace":"Tên miền không được chứa khoảng trắng.","containsUnicode":"Tên miền không được chứa dấu tiếng Việt hoặc ký tự đặc biệt.","containsUppercase":"Tên miền chỉ được dùng chữ thường (a-z).","startsWithHyphen":"Tên miền không được bắt đầu bằng dấu gạch ngang (-).","endsWithHyphen":"Tên miền không được kết thúc bằng dấu gạch ngang (-).","invalidChars":"Tên miền chỉ được dùng chữ thường, số và dấu gạch ngang (-).","custom":{"required":"Vui lòng nhập tên miền tùy chỉnh.","hasProtocol":"Không nhập http:// hoặc https://. Ví dụ đúng: tenmiencuaban.com","containsSpace":"Tên miền tùy chỉnh không được chứa khoảng trắng.","containsUnicode":"Tên miền tùy chỉnh không được chứa dấu tiếng Việt hoặc ký tự đặc biệt.","startsWithWww":"Không nhập tiền tố www. (ví dụ đúng: tenmiencuaban.com).","missingDot":"Tên miền tùy chỉnh phải là tên miền đầy đủ (ví dụ: tenmiencuaban.com).","tooLong":"Tên miền tùy chỉnh quá dài. Vui lòng dùng tối đa 253 ký tự.","invalidFormat":"Định dạng tên miền tùy chỉnh chưa đúng. Ví dụ hợp lệ: tenmiencuaban.com"}},"checkResult":{"available":"Tên miền \\"{{domain}}\\" có thể sử dụng.","unavailable":"Tên miền \\"{{domain}}\\" đã được sử dụng.","reserved":"Tên miền \\"{{domain}}\\" không khả dụng vì thuộc danh sách hạn chế.","invalid":"Định dạng tên miền chưa hợp lệ. Vui lòng kiểm tra lại.","genericError":"Không thể kiểm tra tên miền lúc này. Vui lòng thử lại."},"domainError":"Lỗi kiểm tra tên miền","checkingAvailability":"Đang kiểm tra tính khả dụng...","domainNote":"Địa chỉ website phải lớn hơn 3 và nhỏ hơn 63 kí tự (a-z 0-9), có thể sử dụng ký tự \\"-\\".","customDomainToggle":"Sử dụng Tên miền Tùy chỉnh","customDomainDescription":"Kết nối tên miền riêng của bạn","customDomain":"Tên miền Tùy chỉnh","customDomainRequired":"Vui lòng nhập tên miền tùy chỉnh","customDomainPattern":"Định dạng tên miền không hợp lệ. Chỉ sử dụng chữ cái, số, dấu gạch ngang và dấu chấm","customDomainNote":"Nhập tên miền đầy đủ của bạn (ví dụ: mydomain.com)","domainUnavailable":"Tên miền không khả dụng","stillChecking":"Đang kiểm tra tên miền","pleaseWait":"Vui lòng đợi kiểm tra tên miền hoàn tất","verification":{"success":"Xác minh tên miền thành công","successDescription":"Tên miền của bạn đã được xác minh thành công","failed":"Xác minh tên miền thất bại"},"errors":{"notFound":"Không tìm thấy trang","noCustomDomain":"Vui lòng nhập tên miền tùy chỉnh","cnameNotFoundDesc":"Không tìm thấy bản ghi CNAME. Vui lòng kiểm tra cài đặt DNS của bạn.","tryAgain":"Vui lòng thử lại sau"},"systemDomain":{"autoVerified":"Tên miền hệ thống được tự động xác minh"},"instructions":{"title":"Hướng dẫn sử dụng tên miền","line1":"Tên miền không được nhập kèm www. (Ví dụ: chỉ được nhập abc.com, không được nhập www.abc.com). Sau khi cài đặt tên miền riêng vào hệ thống, hãy đến hệ thống quản trị tên miền của bạn và thiết lập 2 bản ghi như sau:","line2":"Tên miền hiện tại của bạn là","line3":"nhưng bạn có thể thêm tên miền tùy chỉnh để giúp website của bạn trở nên chuyên nghiệp hơn, in đậm đều ấn có nhấn hơn và trở nên độc đáo hơn trong mắt người khác."}},"save":"LƯU THÔNG TIN","selectPageError":"Vui lòng chọn trang để cập nhật","updateSuccess":"Cập nhật thành công","updateError":"Lỗi cập nhật","publishSuccess":"Đã công khai thiệp","publishSuccessDescription":"Thiệp của bạn đã được công khai và có thể truy cập qua link.","publishError":"Lỗi công khai thiệp","publishErrorDescription":"Không thể công khai thiệp.","unpublishSuccess":"Đã ẩn thiệp","unpublishSuccessDescription":"Thiệp của bạn đã được ẩn và không thể truy cập qua link.","unpublishError":"Lỗi ẩn thiệp","unpublishErrorDescription":"Không thể ẩn thiệp.","tierUpgradeRequired":"Cần nâng cấp gói","tierUpgradeDescription":"Bạn cần nâng cấp gói lớn hơn hoặc bằng mẫu này để xuất bản","tierUpgradeFeatureName":"Nâng cấp gói để xuất bản","guestView":{"modalTitle":"Cài đặt SEO cho khách mời","titleForGuest":"Tiêu đề cho khách mời","titlePlaceholder":"Ví dụ: Chào mừng, {guestName}!","titleHelper":"Hiển thị trong kết quả tìm kiếm và trên thẻ chia sẻ khi khách mời sử dụng link riêng.","descriptionForGuest":"Mô tả cho khách mời","descriptionPlaceholder":"Thân gửi {guestName}, chúng tôi rất hân hạnh được mời bạn đến chia sẻ ngày đặc biệt của chúng tôi...","descriptionHelper":"Hiển thị bên dưới tiêu đề trên thẻ chia sẻ. Giữ ngắn gọn.","availableVariables":"Các biến có sẵn","fullName":"Họ và tên","email":"Email","phoneNumber":"Số điện thoại","viewExamples":"Xem ví dụ","infoNote":"Nếu để trống, tiêu đề và mô tả mặc định của trang sẽ được sử dụng.","beforeRawText":"Trước khi render (text gốc)","title":"Tiêu đề:","description":"Mô tả:","renderedExample":"Ví dụ đã render","useSampleData":"Sử dụng dữ liệu mẫu","titleShown":"Tiêu đề hiển thị:","descriptionShown":"Mô tả hiển thị:","sharePreview":"Xem trước khi chia sẻ","sharePreviewDescription":"Đây là cách thiệp của bạn hiển thị khi được chia sẻ hoặc khi khách mời mở link riêng.","sharePreviewDescriptionMobile":"Cách thiệp của bạn hiển thị khi được chia sẻ hoặc mở qua link riêng.","desktopShareCard":"Thẻ chia sẻ Desktop","mobileShareCard":"Thẻ chia sẻ Mobile","shareCardPreview":"Xem trước thẻ chia sẻ","shareInfoNote":"Nếu tiêu đề/mô tả để trống, giá trị mặc định của trang sẽ được sử dụng.","saveButton":"Lưu cài đặt","saveSuccess":"Đã lưu cài đặt cho khách mời thành công!","saveError":"Lỗi khi lưu cài đặt khách mời","selectPageError":"Vui lòng chọn trang thiệp","titleRequired":"Vui lòng nhập tiêu đề cho khách mời","descriptionRequired":"Vui lòng nhập mô tả cho khách mời","variables":{"guestNameDesc":"Tên đầy đủ của khách mời","guestNameExample":"Nguyễn Văn A","guestEmailDesc":"Email của khách mời","guestEmailExample":"nguyenvana@email.com","guestPhoneDesc":"Số điện thoại của khách mời","guestPhoneExample":"0123456789"},"modal":{"title":"Hướng dẫn sử dụng biến cá nhân hóa","howItWorks":"Cách hoạt động","howItWorksDesc":"Khi khách mời truy cập trang qua link riêng (có chứa guestId), hệ thống sẽ tự động thay thế các biến bằng thông tin thực tế của khách mời đó.","availableVariablesTitle":"Danh sách biến có thể sử dụng:","variable":"Biến","examplePrefix":"Ví dụ:","usageExample":"📝 Ví dụ sử dụng:","exampleTitle":"Tiêu đề:","exampleTitleValue":"Thiệp dành riêng cho {guestName}","exampleDescription":"Mô tả:","exampleDescriptionValue":"Xin chào {guestName}! Chúng tôi rất hân hạnh được mời bạn đến dự lễ của chúng tôi. Vui lòng xác nhận tham dự qua email {guestEmail}.","importantNote":"Lưu ý quan trọng","note1":"• Các biến chỉ hoạt động khi khách mời truy cập qua link có chứa guestId","note2":"• Nếu khách mời chưa có thông tin, biến sẽ hiển thị giá trị mặc định","note3":"• Các biến phân biệt chữ hoa chữ thường"}}}'))
}, 858026, e => {
    e.v({
        tier: {
            vip: "VIP",
            pro: "PRO",
            free: "MIỄN PHÍ"
        },
        preview: "Xem trước",
        viewCard: "Xem thiệp",
        use: "Sử dụng",
        chooseCard: "Chọn thiệp",
        useTemplate: "Sử dụng mẫu",
        quickPreview: "Xem nhanh",
        viewVipBundles: "Xem gói VIP",
        defaultDescription: "Truyền thống • Dọc",
        defaultDesigner: "Thiết kế: Nature Studio · Ngang · Ảnh + Nhạc",
        tierComparison: {
            basic: "Xem gói Basic",
            pro: "Xem gói Pro",
            vip: "Xem gói VIP"
        },
        search: {
            modalTitle: "Chọn Template",
            placeholder: "Tìm kiếm template...",
            filterAll: "Tất cả",
            filterFree: "Miễn phí",
            filterPro: "Pro",
            filterVip: "VIP",
            tierInfo: "Hiển thị template phù hợp với cấp độ {{tier}} của bạn",
            loading: "Đang tải templates...",
            error: "Lỗi khi tải templates",
            showingResults: "Hiển thị {{count}} template",
            withKeyword: ' với từ khóa "{{keyword}}"',
            noImage: "Không có hình ảnh",
            noResults: "Không tìm thấy template nào",
            empty: "Không có template nào",
            allLoaded: "Đã tải hết template",
            select: "Chọn mẫu này"
        }
    })
}, 187798, e => {
    e.v({
        banner: {
            badge: "Wedding 5.0",
            title: "Thư Viện Mẫu Thiệp Cưới",
            description: "Chọn mẫu thiệp phù hợp nhất để làm cho đám cưới của bạn trở nên đặc biệt và đáng nhớ.",
            titleMobile: "Mẫu Thiệp Cưới",
            descriptionMobile: "Chọn mẫu thiệp hoàn hảo cho ngày trọng đại"
        },
        search: {
            placeholder: "Tìm kiếm theo phong cách, màu sắc, tên, mã…",
            placeholderMobile: "Tìm kiếm mẫu..."
        },
        sort: {
            label: "Sắp xếp",
            newest: "Mới nhất",
            oldest: "Cũ nhất",
            name: "Tên"
        },
        filter: {
            allTags: "Tất cả Tags",
            all: "Tất cả"
        },
        tabs: {
            all: "Tất cả",
            free: "Miễn phí",
            pro: "Pro",
            vip: "VIP"
        },
        results: {
            showing: "Hiển thị",
            of: "trong",
            templates: "mẫu",
            found: "mẫu được tìm thấy"
        },
        messages: {
            errorLoading: "Không thể tải mẫu. Vui lòng thử lại sau.",
            noTemplates: "Không tìm thấy mẫu nào"
        }
    })
}, 483935, e => {
    e.v({
        banner: {
            badge: "meInvite",
            title: "Thư Viện Mẫu Thiệp Mời",
            description: "Chọn mẫu thiệp phù hợp nhất để tạo thiệp mời cho sự kiện của bạn.",
            titleMobile: "Mẫu Thiệp Mời",
            descriptionMobile: "Chọn mẫu thiệp hoàn hảo cho sự kiện"
        },
        search: {
            placeholder: "Tìm kiếm theo phong cách, màu sắc, tên, mã…",
            placeholderMobile: "Tìm kiếm mẫu..."
        },
        sort: {
            label: "Sắp xếp",
            newest: "Mới nhất",
            oldest: "Cũ nhất",
            name: "Tên"
        },
        filter: {
            allTags: "Tất cả Tags",
            all: "Tất cả",
            allCategories: "Tất cả loại thiệp"
        },
        tabs: {
            all: "Tất cả",
            free: "Miễn phí",
            pro: "Pro",
            vip: "VIP"
        },
        results: {
            showing: "Hiển thị",
            of: "trong",
            templates: "mẫu",
            found: "mẫu được tìm thấy"
        },
        messages: {
            errorLoading: "Không thể tải mẫu. Vui lòng thử lại sau.",
            noTemplates: "Không tìm thấy mẫu nào"
        }
    })
}, 162150, e => {
    e.v(JSON.parse('{"request":{"title":"Bạn bận rộn? Chúng tôi sẽ thiết kế giúp bạn ❤️","description":"Nếu bạn đang quá tải hoặc không có thời gian, đội ngũ của chúng tôi có thể tạo và thiết kế thiệp cưới cho bạn.","button":"Yêu cầu Hỗ trợ Thiết kế"},"guest":{"title":"Quản lý Khách mời","description":"Theo dõi khách mời, gửi thiệp mời qua email, và kiểm soát những gì khách mời thấy khi mở link riêng của họ.","subtitle":"Quản lý khách mời, thu thập xác nhận tham dự và quà tặng, mang đến trải nghiệm đặc biệt cho mỗi khách.","addGuest":"Thêm Khách","add":"Thêm","batchAddGuests":"Thêm nhiều khách","unlockEmailReminders":"Mở khóa nhắc lịch qua email","vipOnlyFeatureTitle":"Chú ý","vipOnlyFeatureDesc":"Tính năng \\"Ghi tên khách mời\\" và link chỉ dành riêng cho gói VIP, với gói FREE/PRO bạn được thử với 3 khách mời để trải nghiệm. Bạn có thể mua thêm tính năng này hoặc nâng cấp gói để sử dụng tất cả tính năng.","unlockFeature":"Mở khóa tính năng","personalizedInvitesFeatureName":"Ghi tên khách mời"},"guestCard":{"title":"Danh sách Khách mời & Xác nhận","description":"Theo dõi tham dự, quà tặng và trạng thái mời cho từng khách."},"guestStats":{"totalGuests":"Tổng Khách mời","totalGuestsDesc":"Tất cả khách trong danh sách","invitesSent":"Đã Gửi Mời","invitesSentDesc":"Thiệp đã được gửi","willAttend":"Sẽ Tham dự","willAttendDesc":"Đã xác nhận tham dự","totalAttendees":"Tổng Người Tham dự","totalAttendeesDesc":"Tổng số người sẽ tham dự","noResponse":"Chưa Phản hồi","noResponseDesc":"Đã mời nhưng chưa phản hồi","notAttending":"Không Tham dự","notAttendingDesc":"Đã xác nhận không tham dự","pending":"Chưa Mời","pendingDesc":"Chưa gửi lời mời","loading":"Đang tải thống kê..."},"moneyStats":{"cashGifts":"Tiền Mặt","cashGiftsDesc":"Từ {{count}} khách","goldGifts":"Vàng","goldGiftsDesc":"{{count}} khách","guestsWithGifts":"Khách Có Quà","guestsWithGiftsDesc":"Khách đã gửi quà","guests":"khách"},"emailManagement":{"title":"Thiệp Mời Email","description1":"Lên lịch và gửi thiệp mời qua email đến","description2":"khách mời của bạn, và theo dõi trạng thái gửi.","tipsTitle":"Mẹo cho email mời","tip1Line1":"• Gửi lời mời trước ~5 phút so với","tip1Line2":"thời gian sự kiện thực tế","tip2Line1":"• Sử dụng link mời để khách","tip2Line2":"có thể xác nhận tham dự","tip3Line1":"• Kiểm tra trạng thái email trong","tip3Line2":"danh sách bên dưới","scheduleButton":"Lên Lịch Gửi Email","scheduledTitle":"Email Đã Lên Lịch","noEmails":"Chưa có email nào được lên lịch","noEmailsDesc":"Bạn có thể tạo thiệp mời qua email và chúng tôi sẽ gửi đến tất cả khách có email.","loading":"Đang tải danh sách email đã lên lịch...","listTitle":"📧 Email đã lên lịch ({{count}})","refresh":"Làm mới","details":"Chi tiết","cancel":"Hủy","delete":"Xóa","sendTime":"Thời gian gửi:","type":"Loại:","typeIndividual":"Khách mời cụ thể","typeAll":"Tất cả khách mời","page":"Trang thiệp:","pageId":"Trang ID {{id}}","card":"(Card)","regular":"(Regular)","guestCount":"Số khách:","guestsSelected":"{{count}} khách mời được chọn","sent":"Đã gửi:","detailModalTitle":"Chi tiết email đã lên lịch","createdAt":"Thời gian tạo:","scheduledAt":"Thời gian gửi:","selectedGuests":"Khách mời được chọn:","selectedGuestsCount":"{{count}} khách","sendProgress":"Tiến độ gửi:","failures":"Lỗi:","failureCount":"{{count}} email gửi thất bại","customMessage":"Lời nhắn tùy chỉnh:","error":"Lỗi:","close":"Đóng","subject":"Tiêu đề:","status":"Trạng thái:","cancelConfirmTitle":"Xác nhận hủy email","cancelConfirmMessage":"Bạn có chắc chắn muốn hủy email này?","cancelConfirmButton":"Hủy email","cancelWarning":"Email sẽ không được gửi và không thể khôi phục sau khi hủy.","deleteConfirmTitle":"Xác nhận xóa email","deleteConfirmMessage":"Bạn có chắc chắn muốn xóa email này khỏi lịch sử?","deleteConfirmButton":"Xóa","deleteWarning":"Thao tác này không thể hoàn tác.","previousPage":"Trước","nextPage":"Sau"},"emailScheduling":{"modalTitle":"Lên lịch gửi email mời","defaultSubject":"Lời mời tham dự đám cưới - Hẹn gặp bạn!","defaultMessage":"Chúng tôi rất hân hạnh được mời bạn tham dự lễ cưới của chúng tôi. Hy vọng sẽ được gặp bạn trong ngày trọng đại này!","pageSelection":"Thiệp *","selectPage":"Chọn trang thiệp...","regularPage":"Thiệp cưới chi tiết với đầy đủ thông tin, RSVP form","cardPage":"Thiệp cưới đơn giản, Save the Date, thông tin cơ bản","noPages":"Bạn chưa có trang thiệp nào. Vui lòng tạo trang thiệp trước khi gửi email.","recipientSelection":"Đối tượng gửi email","selectRecipients":"Chọn đối tượng nhận email mời:","allGuests":"Tất cả khách mời có email","byGroup":"Gửi theo nhóm khách","selectGroup":"Chọn nhóm khách...","guestsCount":"{{count}} khách","specificGuests":"Khách mời được chọn (tùy chỉnh sau)","selectedGuestsTitle":"Khách mời được chọn","selectedGuestsCount":"Đã chọn {{count}} khách mời để gửi email","scheduledTime":"Thời gian gửi *","scheduleHelper":"Chọn thời điểm muốn gửi email (tối thiểu 5 phút từ bây giờ)","emailSubject":"Tiêu đề email *","subjectPlaceholder":"Nhập tiêu đề email...","templatesAvailable":"Mẫu có sẵn:","customMessage":"Lời nhắn tùy chỉnh","messagePlaceholder":"Nhập lời nhắn tùy chỉnh (tùy chọn)...","summaryTitle":"📋 Tóm tắt lịch gửi email","summaryTime":"Thời gian:","summarySubject":"Tiêu đề:","summaryPage":"Trang thiệp:","summaryRecipients":"Đối tượng:","notSelected":"Chưa chọn","notEntered":"Chưa nhập","card":"(Card)","regular":"(Regular)","unknown":"Không xác định","selectedGuests":"{{count}} khách mời được chọn","groupRecipients":"Nhóm \\"{{name}}\\" ({{count}} khách)","allGuestsWithEmail":"Tất cả khách mời có email của trang đã chọn","autoSendNote":"💡 Email sẽ được gửi tự động vào thời gian đã chọn","cancel":"Hủy","schedule":"Lên lịch gửi","confirmTitle":"Xác nhận lên lịch gửi email","confirmLabel":"Xác nhận lên lịch","confirmMessage":"Bạn có chắc chắn muốn lên lịch gửi email với thông tin sau?","confirmSendTime":"Thời gian gửi:","confirmWarning":"⚠️ Email sẽ được gửi tự động đến khách mời đã chọn vào thời gian đã chọn.","errorSelectPage":"Vui lòng chọn trang thiệp cưới để gửi email","errorSelectTime":"Vui lòng chọn thời gian gửi email","errorFutureTime":"Thời gian gửi phải là thời điểm trong tương lai","errorEnterSubject":"Vui lòng nhập tiêu đề email","errorScheduling":"Có lỗi xảy ra khi lên lịch email"},"guestSelector":{"title":"Chọn khách mời cụ thể","noGuestSelected":"Nhấp để chọn khách mời","guestsSelected":"{{count}} khách mời được chọn","hint":"Nhấp để chọn khách mời cụ thể sẽ nhận email","modalTitle":"Chọn khách mời nhận email","searchPlaceholder":"Tìm kiếm theo tên, email hoặc nhóm...","loading":"Đang tải...","guestsWithEmail":"{{count}} khách mời có email","selectAll":"Chọn tất cả","deselectAll":"Bỏ chọn tất cả","loadingGuests":"Đang tải danh sách khách mời...","noGuestsWithEmail":"Không có khách mời nào có email","noMatchingGuests":"Không tìm thấy khách mời phù hợp","selectedCount":"Đã chọn {{count}} khách mời sẽ nhận email","confirm":"Xác nhận ({{count}})"},"guestList":{"addGuest":"Thêm khách mời","add":"Thêm","searchPlaceholder":"Tìm kiếm khách...","itemsPerPage":"Hiển thị","itemsPerPageSuffix":"khách/trang","allGroups":"Tất cả Nhóm","allSides":"Tất cả Phía","importFromFile":"Tải danh sách khách mời","import":"Tải lên","export":"Xuất","exportList":"Xuất danh sách","selectMultiple":"Chọn nhiều","select":"Chọn","cancel":"Hủy","createGroup":"Tạo nhóm","guestSettings":"Cài đặt thiệp","settings":"Cài đặt","noGroups":"Chưa có nhóm nào","editGroups":"Sửa nhóm","deleteGroup":"Xóa nhóm","selectAll":"Chọn tất cả ({{count}} khách mời)","selectedGuests":"Đã chọn {{count}} khách mời","assignToGroup":"Gán vào nhóm...","removeFromGroup":"Bỏ gán nhóm","unassigned":"Chưa phân nhóm","changeGroup":"Thay đổi nhóm...","emptyState":"Không có khách mời nào","guestInfo":"Thông tin khách","fullName":"Họ tên","contact":"Liên hệ","belongsTo":"Thuộc về","group":"Nhóm","event":"Sự kiện","numberOfPeople":"Số người","gifts":"Quà","extraInfo":"Thông tin thêm","eventAndPeople":"SK","status":"Trạng thái","actions":"Thao tác","edit":"Chỉnh sửa","delete":"Xóa","send":"Gửi lời mời","sendLink":"Gửi link","sendInvitation":"Gửi lời mời","notSelected":"Chưa chọn","invitedLabel":"Đã mời:","invited":"Đã mời","notInvited":"Chưa mời","attendingLabel":"Tham dự:","willAttend":"Sẽ tham dự","notAttending":"Không tham dự","noResponseYet":"Chưa có phản hồi","respondedLabel":"Phản hồi:","respondedAt":"Lúc: {{time}}","hasResponded":"Đã phản hồi","notResponded":"Chưa phản hồi","unlockGroupAssign":"Mở khóa","viewExtraInfo":"Xem thông tin thêm","editGuest":"Chỉnh sửa khách mời","deleteGuest":"Xóa khách mời","expandDetails":"Xem chi tiết","collapseDetails":"Thu gọn","deleteSelected":"Xóa đã chọn","filters":{"all":"Tất cả","invitationFilter":"Lời mời","allInvitation":"Tất cả","hasInvited":"Đã gửi lời mời","notInvitedYet":"Chưa gửi lời mời","attendanceFilter":"Tham dự","allAttendance":"Tất cả","willCome":"Sẽ tham dự","willNotCome":"Không tham dự","responseFilter":"Phản hồi","allResponse":"Tất cả","hasResponded":"Đã phản hồi","notResponded":"Chưa phản hồi","giftFilter":"Quà tặng","allGifts":"Tất cả quà","hasCash":"Tiền mừng","hasGold":"Vàng","hasNoGift":"Chưa có quà","statusFilter":"Trạng thái","allStatus":"Tất cả trạng thái"},"batchDeleteModal":{"title":"Xóa nhiều khách mời","message":"Bạn có chắc chắn muốn xóa {{count}} khách mời đã chọn? Thao tác này không thể hoàn tác."},"addGuestModal":{"title":"Thêm khách mời mới","fullName":"Họ tên","email":"Email","phone":"Số điện thoại","belongsTo":"Thuộc về","belongsToPlaceholder":"Chọn phía khách mời","createNewSide":"+ Tạo phía mới","enterNewSide":"Nhập phía khách mời mới","numberOfPeople":"Số người","event":"Sự kiện","eventPlaceholder":"Chọn sự kiện...","avatar":"Avatar","uploadAvatar":"Tải ảnh đại diện","gifts":"Tiền mừng","address":"Địa chỉ","addressPlaceholder":"123 Đường ABC, Quận 1, TP.HCM","addressHelper":"Tối đa 500 ký tự (tùy chọn)","additionalNote":"Ghi chú bổ sung","additionalNotePlaceholder":"VD: Khách VIP, ăn chay, dị ứng hải sản...","additionalNoteHelper":"Ghi chú về yêu cầu đặc biệt, phân loại khách... (tùy chọn)","cancel":"Hủy","create":"Thêm khách","creating":"Đang thêm...","removeAvatar":"Xóa ảnh","unlockMoreFields":"Mở khóa thêm trường thông tin","unlockMoreFieldsHint":"Nâng cấp để nhập số người, sự kiện, avatar, tiền mừng, địa chỉ và ghi chú."},"editGuestModal":{"title":"Chỉnh sửa khách mời","update":"Cập nhật","updating":"Đang cập nhật...","cancel":"Hủy"},"deleteModal":{"title":"Xác nhận xóa","message":"Bạn có chắc chắn muốn xóa khách mời {{name}}?","confirm":"Xóa","cancel":"Hủy"},"groupModal":{"createTitle":"Tạo nhóm khách mới","editTitle":"Chỉnh sửa nhóm","name":"Tên nhóm","namePlaceholder":"Nhập tên nhóm...","description":"Mô tả","descriptionPlaceholder":"Mô tả nhóm (tùy chọn)...","color":"Màu sắc","cancel":"Hủy","create":"Tạo nhóm","update":"Cập nhật"},"pageSelectModal":{"title":"Chọn trang","noDescription":"Không có mô tả","send":"Gửi lời mời","sending":"Đang gửi..."},"toasts":{"groupNameRequired":"Vui lòng nhập tên nhóm","groupCreated":"Tạo nhóm thành công","groupUpdated":"Cập nhật nhóm thành công","groupDeleted":"Xóa nhóm thành công","groupHasGuests":"Nhóm này đang có khách. Vui lòng di chuyển khách ra khỏi nhóm trước.","selectGuests":"Vui lòng chọn khách mời","guestsAssigned":"Đã gán {{count}} khách vào nhóm","guestsRemoved":"Đã bỏ gán {{count}} khách khỏi nhóm","guestAssigned":"Đã gán khách vào nhóm","guestRemoved":"Đã bỏ gán khách khỏi nhóm","errorOccurred":"Có lỗi xảy ra","cannotLoadGuests":"Không thể tải danh sách khách mời","guestDeleted":"Đã xóa khách mời","guestCreated":"Thêm khách mời thành công","guestUpdated":"Cập nhật thông tin khách thành công","fullNameRequired":"Vui lòng nhập họ tên","invitationSent":"Đã gửi lời mời thành công","pageRequired":"Vui lòng chọn trang thiệp","importSuccess":"Import khách mời thành công!","batchDeleteSuccess":"Đã xóa {{count}} khách mời thành công","batchDeletePartial":"Đã xóa {{success}} khách mời, {{failed}} khách không thể xóa"},"extraInfoModal":{"title":"Thông tin thêm","noAnswer":"Chưa có câu trả lời","textType":"Văn bản","choiceType":"Lựa chọn","noInfo":"Không có thông tin thêm"},"sendInvitationModal":{"title":"Gửi lời mời","selectPage":"Chọn trang thiệp mời để gửi lời mời cho khách:","generatingLink":"Đang tạo link mời...","selectPagePlaceholder":"Chọn trang thiệp mời","selectedPage":"Trang đã chọn:","domain":"Domain:","invitationLinkFor":"Link thiệp cưới cho khách mời:","linkLabel":"Đường link thiệp:","copied":"Đã sao chép","copyError":"Không thể sao chép link","copyErrorDescription":"Vui lòng thử lại khi tab đang hoạt động","share":"Chia sẻ","generateQR":"Tạo mã QR","note":"Lưu ý:","autoRecognition":"Khách mời {{name}} sẽ được nhận diện tự động khi truy cập link này.","qrTitle":"Mã QR cho thiệp mời","qrDescription":"Quét mã QR để truy cập thiệp mời","shareTitle":"Thiệp cưới","shareText":"Trân trọng kính mời {{name}}","shareTextDefault":"Trân trọng kính mời bạn","errorTitle":"Lỗi tạo link","errorCannotCreate":"Không thể tạo link mời. Vui lòng thử lại sau.","invalidGuestId":"Link mời không hợp lệ. Liên hệ qua Zalo để được hỗ trợ.","linkLimitTitle":"Đã đạt giới hạn","unlockUnlimitedLinks":"Mở khóa liên kết không giới hạn","unlockFeature":"Mở khóa tính năng","unlock":"Mở khóa","copyLink":"Sao chép link","copyAndClearCache":"Sao chép + Làm mới cache","clearCacheSuccess":"Đã gửi yêu cầu làm mới cache","clearCacheError":"Không thể xóa cache"},"batchAddModal":{"title":"Thêm nhiều khách cùng lúc","instructions":{"title":"Hướng dẫn:","line1":"Nhập mỗi tên khách trên một dòng","line2":"Có thể thêm tối đa 100 khách mỗi lần","line3":"Các thông tin khác sẽ được áp dụng chung cho tất cả"},"guestNames":"Danh sách tên khách mời","guests":"khách","placeholder":"Nguyễn Văn A\\nTrần Thị B\\nLê Văn C\\n...","commonSettings":"Cài đặt chung (áp dụng cho tất cả)","group":"Nhóm","noGroup":"Không chọn nhóm","moneyType":"Loại tiền mừng","create":"Thêm","close":"Đóng","errors":{"minGuests":"Vui lòng nhập ít nhất một tên khách mời","maxGuests":"Vui lòng nhập tối đa 100 khách mời mỗi lần","createFailed":"Có lỗi xảy ra khi thêm khách mời"},"result":{"title":"Kết quả thêm khách:","success":"Thành công","failed":"Thất bại"},"unlockConfigHint":"Nâng cấp để cấu hình sự kiện, nhóm khách và phía khách."},"batchImportModal":{"title":"Import khách mời từ file","step1":"Bước 1: Chọn file CSV/Excel","step2":"Bước 2: Cấu hình chung","step3":"Bước 3: Xem trước dữ liệu ({{count}} khách mời)","uploadPrompt":"Click để chọn file CSV/Excel","uploadDescription":"Hỗ trợ file CSV/Excel với 3 cột: Tên, Email, Số điện thoại (tối đa 5MB)","downloadTemplate":"Tải mẫu","guestOfLabel":"Phía khách mời","guestOfPlaceholder":"Chọn phía (tùy chọn)","eventLabel":"Sự kiện","eventPlaceholder":"Chọn sự kiện (tùy chọn)","groupLabel":"Nhóm khách","groupPlaceholder":"Chọn nhóm (tùy chọn)","moneyTypeLabel":"Loại tiền tệ","tableHeaders":{"no":"STT","name":"Tên khách mời","email":"Email","phone":"Số điện thoại","status":"Trạng thái","actions":"Thao tác"},"statusOk":"OK","statusErrors":"{{count}} lỗi","errors":{"unsupportedFormat":"Định dạng file không được hỗ trợ. Vui lòng chọn file CSV hoặc Excel.","fileTooLarge":"File quá lớn. Vui lòng chọn file nhỏ hơn 5MB.","parseError":"Lỗi phân tích file: {{errors}}","noData":"Không tìm thấy dữ liệu khách mời hợp lệ trong file.","tooManyGuests":"File chứa quá nhiều khách mời (tối đa 100 khách). Vui lòng chia nhỏ file.","cannotRead":"Không thể đọc file. Vui lòng kiểm tra định dạng file và thử lại.","minGuests":"Vui lòng thêm ít nhất một khách mời","invalidData":"Một số khách mời có dữ liệu không hợp lệ. Vui lòng kiểm tra và sửa lại.","importFailed":"Có lỗi xảy ra khi import khách mời","title":"Lỗi!"},"processing":{"validating":"Đang kiểm tra dữ liệu...","sending":"Đang gửi dữ liệu...","complete":"Hoàn thành!"},"result":{"title":"Import hoàn thành!","success":"Thành công: {{count}} khách mời","failed":"Thất bại: {{count}} khách mời","errorDetails":"Chi tiết lỗi:","guestError":"Khách mời #{{index}}: {{name}}"},"buttons":{"close":"Đóng","cancel":"Hủy","import":"Import {{count}} khách mời","importing":"Đang xử lý..."},"unlockConfigHint":"Nâng cấp để cấu hình phía khách mời, sự kiện và nhóm khách."},"eventSelector":{"placeholder":"Chọn sự kiện...","customPlaceholder":"Nhập tên sự kiện...","customOption":"+ Tùy chỉnh...","events":{"groomReception":"Tiệc Cưới nhà Trai","weddingCeremony":"Lễ Thành Hôn","newlyWedCeremony":"Lễ Tân Hôn","brideReception":"Tiệc Cưới nhà Gái","brideGoingCeremony":"Lễ Vu Quy","weddingParty":"Lễ Tiệc Cưới","wedding":"Lễ Cưới","brideProcession":"Lễ Rước Dâu","engagement":"Lễ Ăn Hỏi","matrimony":"Lễ Hôn Phối"}},"exportModal":{"title":"Xuất danh sách khách mời","selectFormat":"Chọn định dạng xuất","csvFormat":"CSV (Excel)","csvDescription":"Tải xuống file CSV để mở bằng Excel hoặc Google Sheets","includeInvitationLinkLabel":"Export kèm link mời","invitationLinkPageLabel":"Trang dùng để tạo link mời","invitationLinkPageHint":"Không ảnh hưởng bộ lọc trang (pageId), chỉ dùng khi bật Export kèm link mời.","includeInvitationLinkEnabledHint":"CSV sẽ thêm cột Invitation link. Yêu cầu chọn Trang để export.","includeInvitationLinkDisabledHint":"CSV sẽ được export như hiện tại, không kèm cột Invitation link.","pageIdRequiredForInvitationLink":"Vui lòng chọn Trang tạo link mời trước khi export kèm link mời.","googleSheetsFormat":"Google Sheets","googleSheetsDescription":"Tạo Google Sheets mới và chuyển quyền sở hữu cho bạn","ownerEmail":"Email Google của bạn","emailPlaceholder":"example@gmail.com","emailHint":"Bạn sẽ nhận được email thông báo về quyền sở hữu spreadsheet","cancel":"Hủy","export":"Xuất dữ liệu","emailRequired":"Vui lòng nhập email để nhận Google Sheets","invalidEmail":"Email không hợp lệ","csvSuccess":"Đã tải xuống file CSV thành công","googleSheetsSuccess":"Đã tạo Google Sheets thành công","exportError":"Có lỗi xảy ra khi xuất dữ liệu"}},"wish":{"title":"Lời Chúc Khách Mời","description":"Đọc lời chúc từ khách mời, trả lời họ, và quyết định nội dung nào hiển thị công khai trên trang thiệp của bạn.","subtitle":"Chia sẻ tình yêu bạn nhận được — và giữ riêng tư những gì chỉ dành cho bạn.","premiumTitle":"Quản lý Lời chúc là tính năng Premium","premiumDescription":"Nâng cấp gói dịch vụ để sử dụng tính năng quản lý lời chúc.","unlockButton":"Mở khóa tính năng","featureName":"Quản lý lời chúc"},"photobook":{"premiumTitle":"Quản lý Photobook là tính năng Premium","premiumDescription":"Nâng cấp gói dịch vụ để sử dụng tính năng quản lý photobook."},"wishStats":{"loadingStats":"Đang tải thống kê...","total":{"label":"Tổng Lời Chúc","labelMobile":"Tổng","description":"Tất cả lời chúc bạn đã","description2":"nhận được"},"replied":{"label":"Đã Trả Lời","description":"Lời chúc bạn đã","description2":"phản hồi"},"notReplied":{"label":"Chưa Trả Lời","labelMobile":"Đang Chờ","description":"Lời chúc đang chờ","description2":"phản hồi của bạn"},"public":{"label":"Công Khai","description":"Hiển thị trên trang","description2":"thiệp cưới của bạn"},"private":{"label":"Riêng Tư","description":"Chỉ bạn mới thấy"},"replyRate":{"label":"Tỷ Lệ Trả Lời","description":"% đã trả lời"}},"wishFilter":{"searchPlaceholder":"Tìm kiếm lời chúc...","allPages":"Tất Cả Trang","allVisibility":"Tất Cả Hiển Thị","allStatus":"Tất Cả Trạng Thái","replied":"Đã Trả Lời","pending":"Đang Chờ","public":"Công Khai","private":"Riêng Tư"},"wishList":{"showPublicly":"Hiển thị công khai:","publicBadge":"Công khai","privateBadge":"Riêng tư","awaitingReply":"Đang chờ trả lời","replied":"Đã trả lời","reply":"Trả lời","editReply":"Sửa trả lời","deleteReply":"Xóa trả lời","delete":"Xóa","emptyState":"Không tìm thấy lời chúc nào","emptyStateDesc":"Chưa có lời chúc nào phù hợp với bộ lọc","loading":"Đang tải...","previousPage":"Trước","nextPage":"Sau","errorLoadWishes":"Không thể tải danh sách lời chúc","successTogglePublic":"Lời chúc đã được chuyển sang công khai","successTogglePrivate":"Lời chúc đã được chuyển sang riêng tư","errorToggleVisibility":"Không thể cập nhật trạng thái hiển thị","successUpdateWish":"Cập nhật lời chúc thành công","errorUpdateWish":"Không thể cập nhật lời chúc","successDeleteWish":"Xóa lời chúc thành công","errorDeleteWish":"Không thể xóa lời chúc","successReplyWish":"Trả lời lời chúc thành công","errorReplyWish":"Không thể trả lời lời chúc","successDeleteReply":"Xóa trả lời thành công","errorDeleteReply":"Không thể xóa trả lời","editModalTitle":"Chỉnh sửa lời chúc","replyModalTitle":"Trả lời lời chúc","editReplyModalTitle":"Chỉnh sửa trả lời","guestNameLabel":"Tên khách","messageLabel":"Lời chúc","publicLabel":"Công khai","cancel":"Hủy","save":"Lưu thay đổi","replyLabel":"Trả lời","replyPlaceholder":"Nhập trả lời của bạn...","sendReply":"Gửi trả lời","updateReply":"Cập nhật trả lời","deleteConfirmTitle":"Xóa lời chúc","deleteConfirmMessage":"Bạn có chắc chắn muốn xóa lời chúc từ {{name}}? Hành động này không thể hoàn tác.","originalWishFrom":"Lời chúc từ {{name}}:","allLoaded":"Đã tải tất cả lời chúc"}}'))
}, 613267, e => {
    e.v({
        myOrders: {
            title: "Đơn hàng Video của tôi",
            description: "Theo dõi và quản lý các đơn hàng video tùy chỉnh của bạn.",
            placeOrder: "Đặt hàng Video",
            filters: {
                search: "Tìm kiếm đơn hàng… #ID, title",
                allStatus: "Tất cả trạng thái",
                sortNewest: "Mới nhất",
                sortOldest: "Cũ nhất",
                allPackages: "Tất cả gói"
            },
            status: {
                created: "Đã tạo",
                pendingPayment: "Chờ thanh toán",
                paid: "Đã thanh toán",
                inProgress: "Đang thực hiện",
                delivered: "Đã giao",
                completed: "Hoàn thành",
                canceled: "Đã hủy",
                refunded: "Đã hoàn tiền"
            },
            tier: {
                basic: "Basic",
                pro: "Pro",
                vip: "VIP"
            },
            actions: {
                viewDetails: "Xem chi tiết",
                payNow: "Thanh toán",
                requestRevision: "Y/c chỉnh sửa",
                download: "Tải xuống"
            },
            empty: {
                title: "Bạn chưa có đơn hàng video nào",
                description: "Hãy khám phá catalog video và đặt hàng ngay!"
            },
            deliveries: "Video đã bàn giao",
            revisions: "Số lần sửa",
            dueDate: "Hạn",
            overdue: "Quá hạn",
            delivered: "Đã giao",
            videoSpecs: {
                basic: "1-2 phút • HD",
                pro: "3-5 phút • 4K",
                vip: "5-10 phút • 4K"
            },
            pagination: {
                previous: "Trước",
                next: "Sau",
                page: "Trang"
            },
            errors: {
                loadOrders: "Có lỗi xảy ra khi tải danh sách đơn hàng",
                paymentInfoNotFound: "Không tìm thấy thông tin thanh toán"
            },
            toast: {
                paymentSuccess: {
                    title: "Thanh toán thành công",
                    description: "Đơn hàng của bạn đang được xử lý"
                },
                error: {
                    title: "Lỗi"
                }
            },
            notAvailable: "N/A"
        },
        orderDetail: {
            title: "Đơn hàng",
            pendingPayment: {
                title: "Đơn hàng chưa thanh toán",
                description: "Vui lòng quét mã QR hoặc nhấn nút bên dưới để thanh toán và bắt đầu quá trình làm video.",
                openBankApp: "Mở ứng dụng ngân hàng",
                autoUpdate: "Sau khi thanh toán, đơn hàng sẽ tự động được cập nhật trong vài giây"
            },
            statusMessages: {
                created: "Đơn hàng đã được tạo. Vui lòng hoàn tất thanh toán để bắt đầu sản xuất.",
                pendingPayment: "Đang chờ xác nhận thanh toán.",
                paid: "Đã nhận thanh toán! Chúng tôi sẽ bắt đầu làm video của bạn sớm.",
                inProgress: "Video của bạn đang được sản xuất bởi đội ngũ của chúng tôi.",
                delivered: "Video của bạn đã được giao! Vui lòng xem và cho chúng tôi biết nếu cần thay đổi.",
                completed: "Đơn hàng hoàn thành. Cảm ơn bạn đã sử dụng dịch vụ!",
                canceled: "Đơn hàng này đã bị hủy.",
                refunded: "Đơn hàng này đã được hoàn tiền."
            },
            sections: {
                orderInfo: "Thông tin đơn hàng",
                requirements: "Yêu cầu của bạn",
                deliveries: "Video đã giao",
                adminNote: "Ghi chú từ admin"
            },
            fields: {
                video: "Video",
                package: "Gói",
                price: "Giá",
                createdDate: "Ngày tạo",
                dueDate: "Ngày dự kiến",
                revisions: "Số lần sửa"
            },
            requirements: {
                script: "Kịch bản",
                names: "Tên",
                colorTheme: "Màu chủ đạo",
                note: "Ghi chú"
            },
            actions: {
                close: "Đóng"
            }
        },
        revisionModal: {
            title: "Yêu cầu chỉnh sửa - Đơn hàng",
            orderInfo: {
                title: "Thông tin đơn hàng",
                video: "Video",
                package: "Gói",
                used: "Đã sử dụng",
                remaining: "Còn lại",
                times: "lần"
            },
            warning: {
                title: "Lưu ý quan trọng!",
                description: "Bạn còn {count} lần chỉnh sửa. Hãy mô tả chi tiết những gì cần thay đổi để chúng tôi có thể hỗ trợ tốt nhất."
            },
            form: {
                label: "Mô tả chi tiết yêu cầu chỉnh sửa *",
                placeholder: "Ví dụ:\n- Thay đổi màu sắc từ xanh sang hồng\n- Thêm tên cô dâu chú rể vào cuối video\n- Thay đổi nhạc nền\n- Điều chỉnh tốc độ video ở đoạn 2:30-3:00\n- Thêm hiệu ứng chuyển cảnh...",
                characterCount: "{current}/{max} ký tự"
            },
            tips: {
                title: "💡 Mẹo để yêu cầu chỉnh sửa hiệu quả:",
                item1: "• Mô tả cụ thể những gì cần thay đổi",
                item2: '• Nếu có thể, hãy chỉ rõ thời điểm trong video (ví dụ: "từ 1:30-2:00")',
                item3: "• Đề cập đến màu sắc, âm thanh, hiệu ứng cụ thể",
                item4: "• Nếu muốn thêm nội dung, hãy cung cấp thông tin chi tiết"
            },
            originalRequirements: "Yêu cầu ban đầu của bạn:",
            actions: {
                cancel: "Hủy",
                submit: "Gửi yêu cầu",
                submitting: "Đang gửi..."
            },
            validation: {
                error: "Lỗi"
            },
            confirm: {
                title: "Xác nhận yêu cầu chỉnh sửa",
                message: "Bạn còn {count} lần chỉnh sửa sau lần này. Xác nhận gửi yêu cầu?",
                confirmButton: "Gửi yêu cầu",
                orderLabel: "Đơn hàng:",
                remainingLabel: "Số lần chỉnh sửa còn lại:"
            },
            toast: {
                success: {
                    title: "Thành công",
                    description: "Yêu cầu chỉnh sửa đã được gửi thành công!"
                },
                error: {
                    title: "Lỗi",
                    description: "Không thể gửi yêu cầu chỉnh sửa. Vui lòng thử lại."
                }
            }
        },
        paymentModal: {
            title: "Thanh toán đơn hàng",
            status: {
                waiting: "Đang chờ thanh toán...",
                waitingDescription: "Hệ thống sẽ tự động cập nhật khi bạn thanh toán thành công",
                timeout: "Đã hết thời gian thanh toán",
                timeoutDescription: "Vui lòng tạo lại đơn hàng hoặc liên hệ hỗ trợ"
            },
            instructions: {
                title: "Hướng dẫn thanh toán",
                step1: "Mở ứng dụng ngân hàng hoặc ví điện tử trên điện thoại",
                step2: "Quét mã QR bên dưới",
                step3: "Xác nhận thanh toán",
                step4: "Đợi hệ thống xác nhận (tự động)"
            },
            qrCode: {
                alt: "QR Code thanh toán",
                loading: "Đang tải mã QR..."
            },
            paymentLink: {
                title: "Hoặc thanh toán bằng app",
                openApp: "Mở ứng dụng ngân hàng"
            },
            timer: {
                remaining: "Thời gian còn lại:",
                expireSoon: "Giao dịch sẽ hết hạn sau {minutes} phút"
            },
            orderInfo: {
                label: "Mã đơn hàng"
            },
            actions: {
                cancel: "Hủy",
                close: "Đóng",
                retry: "Tạo lại đơn hàng"
            },
            help: {
                text: "Gặp vấn đề? Liên hệ hỗ trợ qua",
                supportLink: "trang hỗ trợ"
            },
            toast: {
                success: {
                    title: "Thanh toán thành công!",
                    description: "Đơn hàng của bạn đang được xử lý."
                },
                timeout: {
                    title: "Hết thời gian",
                    description: "Vui lòng tạo lại đơn hàng hoặc liên hệ hỗ trợ."
                }
            }
        },
        common: {
            confirm: "Xác nhận",
            cancel: "Hủy",
            close: "Đóng",
            download: "Tải xuống"
        },
        deliveryTimeline: {
            empty: {
                title: "Chưa có video nào được giao",
                description: "Video sẽ được giao khi hoàn thành"
            },
            delivery: "Lần giao",
            finalVersion: "Bản cuối",
            latest: "Mới nhất",
            noteFromAdmin: "Ghi chú từ admin:",
            actions: {
                download: "Tải video",
                preview: "Xem preview"
            }
        },
        orderProgress: {
            title: "Trạng thái đơn hàng",
            canceled: "Đơn hàng đã bị hủy",
            refunded: "Đơn hàng đã được hoàn tiền",
            steps: {
                pendingPayment: "Chờ thanh toán",
                paid: "Đã thanh toán",
                inProgress: "Đang thực hiện",
                delivered: "Đã giao",
                completed: "Hoàn thành"
            }
        },
        catalogDetail: {
            completionTime: "Thời gian hoàn thành:",
            days: "ngày",
            selectPackage: "Chọn gói dịch vụ",
            selected: "Đã chọn",
            quality: "Chất lượng:",
            revisions: "Số lần sửa:",
            requirementsTitle: "Yêu cầu chi tiết",
            requirements: {
                script: {
                    label: "Script/Kịch bản (tùy chọn)",
                    placeholder: "Nhập script hoặc kịch bản cho video..."
                },
                names: {
                    label: "Tên cần xuất hiện trong video",
                    placeholder: "Tên",
                    addName: "Thêm tên"
                },
                colorTheme: {
                    label: "Chủ đề màu sắc (tùy chọn)",
                    placeholder: "Ví dụ: Trắng vàng, Hồng pastel, Xanh dương..."
                },
                note: {
                    label: "Ghi chú thêm (tùy chọn)",
                    placeholder: "Nhập bất kỳ yêu cầu đặc biệt nào khác..."
                }
            },
            orderSummary: {
                title: "Tóm tắt đơn hàng",
                video: "Video:",
                package: "Gói:",
                completionTime: "Thời gian hoàn thành:",
                total: "Tổng cộng:"
            },
            actions: {
                cancel: "Hủy",
                orderNow: "Đặt hàng ngay",
                creating: "Đang tạo đơn hàng..."
            },
            toast: {
                error: {
                    selectPackage: {
                        title: "Lỗi",
                        description: "Vui lòng chọn gói dịch vụ"
                    },
                    createOrder: {
                        title: "Lỗi",
                        description: "Không thể tạo đơn hàng. Vui lòng thử lại."
                    }
                },
                success: {
                    title: "Thành công",
                    description: "Đơn hàng đã được tạo thành công! Vui lòng thanh toán để bắt đầu."
                }
            }
        },
        videoCatalog: {
            banner: {
                badge: "Video Templates",
                title: "DỊCH VỤ VIDEO CHUYÊN NGHIỆP",
                description: 'Với nhiều gói dịch vụ chất lượng cao, tạo ra những video "Đặc Biệt" và "Đáng Nhớ" cho sự kiện của bạn.',
                titleMobile: "VIDEO CHUYÊN NGHIỆP",
                descriptionMobile: "Tạo ra những video đặc biệt và đáng nhớ cho sự kiện của bạn."
            },
            tabs: {
                all: "Tất cả",
                basic: "Cơ bản",
                pro: "Chuyên nghiệp",
                vip: "VIP"
            },
            sort: {
                label: "Sắp xếp",
                newest: "Mới nhất",
                oldest: "Cũ nhất",
                name: "Tên"
            },
            search: {
                placeholder: "Tìm kiếm mẫu video...",
                placeholderMobile: "Tìm kiếm..."
            },
            filter: {
                allCategories: "Tất cả danh mục"
            },
            results: {
                showing: "Hiển thị",
                of: "trên",
                templates: "mẫu",
                found: "mẫu được tìm thấy"
            },
            card: {
                days: "ngày",
                availablePackages: "Gói có sẵn:",
                viewDetails: "Xem chi tiết",
                orderNow: "Đặt hàng",
                from: "Từ"
            },
            categories: {
                wedding: "Cưới hỏi",
                event: "Sự kiện",
                birthday: "Sinh nhật",
                anniversary: "Kỷ niệm"
            },
            messages: {
                errorLoading: "Có lỗi xảy ra khi tải danh sách video",
                noTemplates: "Không tìm thấy mẫu video nào"
            }
        }
    })
}, 178521, e => {
    e.v({
        pageTitle: {
            title: "Kế Hoạch Cưới",
            subtitle: "Theo dõi những gì cần làm và giữ cho việc chuẩn bị đám cưới của bạn luôn thuận tiện.",
            description: "Giữ cho mọi thứ ngăn nắp giúp bạn tránh được căng thẳng vào phút chót và tận hưởng đám cưới của mình nhiều hơn.",
            addGroupButton: "Thêm Nhóm Nhiệm Vụ",
            exportButton: "Xuất Checklist",
            manageTitle: "Quản Lý Kế Hoạch",
            manageDescription: "Tạo nhóm nhiệm vụ mới hoặc sắp xếp các nhóm hiện tại"
        },
        statistics: {
            totalTasks: {
                label: "Tổng đầu việc",
                description: "Tất cả kế hoạch"
            },
            completed: {
                label: "Đã hoàn thành",
                description: "Các nhiệm vụ đã hoàn thành"
            },
            inProgress: {
                label: "Đang tiến hành",
                description: "Hiện đang tiến hành"
            },
            progress: {
                label: "Tiến độ",
                description: "Tổng mức hoàn thành"
            }
        },
        todoList: {
            tasksCompleted: "{{completed}} trong {{total}} nhiệm vụ đã hoàn thành",
            addTask: "Thêm nhiệm vụ",
            loading: "Đang tải nhiệm vụ...",
            noTasks: "Chưa có nhiệm vụ nào"
        },
        task: {
            statusCompleted: "Công việc đã hoàn thành",
            statusReset: "Công việc đã đặt lại",
            statusUpdateError: "Không thể cập nhật trạng thái",
            deleted: "Đã xóa công việc",
            deleteError: "Không thể xóa công việc",
            updated: "Đã cập nhật công việc",
            updateError: "Không thể cập nhật công việc",
            titleRequired: "Tiêu đề không được để trống",
            edit: "Chỉnh sửa",
            delete: "Xóa",
            confirmDelete: "Xác nhận xóa",
            confirmDeleteMessage: 'Bạn có chắc chắn muốn xóa công việc "{{title}}"?',
            confirmDeleteButton: "Xóa",
            cancel: "Hủy",
            editTitle: "Chỉnh sửa công việc",
            titleLabel: "Tiêu đề",
            titlePlaceholder: "Nhập tiêu đề công việc",
            descriptionLabel: "Mô tả",
            descriptionPlaceholder: "Nhập mô tả công việc (không bắt buộc)",
            dueDateLabel: "Ngày hết hạn",
            saveChanges: "Lưu thay đổi",
            addNewTask: "Thêm công việc mới",
            addTaskButton: "Thêm công việc"
        },
        todoListManager: {
            loadError: "Không thể tải danh sách công việc",
            loadStatsError: "Không thể tải thống kê",
            titleRequired: "Tiêu đề không được để trống",
            createListSuccess: "Đã tạo danh sách mới",
            createListError: "Không thể tạo danh sách mới",
            addTaskError: "Không thể thêm công việc",
            addTaskSuccess: "Đã thêm công việc mới",
            updateTitleError: "Không thể cập nhật tiêu đề",
            updateTitleSuccess: "Đã cập nhật tiêu đề",
            deleteListError: "Không thể xóa danh sách",
            deleteListSuccess: "Đã xóa danh sách",
            confirmDeleteList: "Xác nhận xóa",
            confirmDeleteListMessage: "Bạn có chắc chắn muốn xóa danh sách này?",
            editList: "Chỉnh sửa danh sách",
            editListTitle: "Chỉnh sửa danh sách",
            newTitlePlaceholder: "Nhập tiêu đề mới",
            update: "Cập nhật",
            listTitle: "Danh sách công việc",
            loadingLists: "Đang tải danh sách công việc...",
            noLists: "Chưa có danh sách công việc nào",
            noListsDescription: "Tạo danh mục công việc đầu tiên để bắt đầu",
            addTaskGroup: "Thêm danh mục công việc",
            addNewTaskGroup: "Thêm danh mục công việc mới",
            titleLabel: "Tiêu đề",
            titlePlaceholder: "Nhập tiêu đề danh mục công việc",
            createButton: "Tạo danh mục",
            exportNotImplemented: "Tính năng xuất sẽ có sớm"
        },
        spendingPlan: {
            title: "Ngân Sách Đám Cưới",
            subtitle: "Lập kế hoạch chi tiêu, theo dõi thanh toán và kiểm soát chi phí đám cưới.",
            description: "Theo dõi sớm giúp bạn tránh căng thẳng vào phút chót.",
            addCategory: "Thêm Danh Mục",
            card: {
                title: "Kế hoạch hiện tại",
                newPlan: "Kế hoạch mới",
                totalBudget: "Tổng Ngân Sách",
                notes: "Ghi Chú",
                noNotes: "Chưa có ghi chú nào",
                editPlan: "Chỉnh sửa kế hoạch",
                deletePlan: "Xóa kế hoạch"
            },
            summary: {
                title: "Tổng Quan Ngân Sách",
                loading: "Đang tải tổng quan...",
                noData: "Không có dữ liệu tổng quan",
                totalBudget: "Tổng Ngân Sách",
                estimatedCost: "Chi Phí Dự Kiến",
                paid: "Đã Thanh Toán",
                unpaid: "Chưa Thanh Toán",
                paymentProgress: "Tiến Độ Thanh Toán",
                paymentStatus: "Trạng Thái Thanh Toán",
                planned: "Đã Lên Kế Hoạch",
                unpaidItems: "Chưa Thanh Toán",
                partial: "Thanh Toán Một Phần",
                paidItems: "Đã Thanh Toán"
            },
            categories: {
                title: "Danh Mục Chi Tiêu",
                addItem: "Thêm khoản chi",
                estimated: "Dự kiến",
                actual: "Thực tế",
                loading: "Đang tải danh mục...",
                empty: "Chưa có danh mục chi tiêu nào",
                pleaseSelect: "Vui lòng chọn một kế hoạch chi tiêu"
            },
            plan: {
                loading: "Đang tải kế hoạch chi tiêu...",
                empty: "Chưa có kế hoạch chi tiêu nào",
                create: "Tạo kế hoạch chi tiêu",
                nameRequired: "Tên kế hoạch không được để trống",
                created: "Đã tạo kế hoạch chi tiêu mới",
                createError: "Không thể tạo kế hoạch chi tiêu",
                updated: "Đã cập nhật kế hoạch chi tiêu",
                updateError: "Không thể cập nhật kế hoạch chi tiêu",
                deleted: "Đã xóa kế hoạch chi tiêu",
                deleteError: "Không thể xóa kế hoạch chi tiêu"
            },
            category: {
                nameRequired: "Tên danh mục không được để trống",
                created: "Đã tạo danh mục mới",
                createError: "Không thể tạo danh mục",
                updated: "Đã cập nhật danh mục",
                updateError: "Không thể cập nhật danh mục",
                deleted: "Đã xóa danh mục",
                deleteError: "Không thể xóa danh mục"
            },
            item: {
                deleted: "Đã xóa khoản chi",
                deleteError: "Không thể xóa khoản chi",
                created: "Đã thêm khoản chi mới",
                createError: "Không thể thêm khoản chi",
                updated: "Đã cập nhật khoản chi",
                updateError: "Không thể cập nhật khoản chi",
                markedPaid: "Đã đánh dấu đã thanh toán",
                markedUnpaid: "Đã đánh dấu chưa thanh toán"
            },
            modal: {
                addPlan: "Thêm kế hoạch chi tiêu mới",
                editPlan: "Chỉnh sửa kế hoạch chi tiêu",
                addCategory: "Thêm danh mục chi tiêu mới",
                editCategory: "Chỉnh sửa danh mục",
                addItem: "Thêm khoản chi mới",
                editItem: "Chỉnh sửa khoản chi",
                planName: "Tên kế hoạch",
                planNamePlaceholder: "Nhập tên kế hoạch chi tiêu",
                totalBudget: "Tổng ngân sách (Vnđ)",
                totalBudgetPlaceholder: "Nhập tổng ngân sách (không bắt buộc)",
                notes: "Ghi chú",
                notesPlaceholder: "Nhập ghi chú (không bắt buộc)",
                categoryName: "Tên danh mục",
                categoryNamePlaceholder: "Nhập tên danh mục",
                description: "Mô tả",
                descriptionPlaceholder: "Nhập mô tả (không bắt buộc)",
                itemName: "Tên công việc",
                itemNamePlaceholder: "Nhập tên công việc chi tiêu",
                estimatedCost: "Chi phí dự kiến (Vnđ)",
                estimatedCostPlaceholder: "Nhập chi phí dự kiến",
                actualCost: "Chi phí thực tế (Vnđ)",
                actualCostPlaceholder: "Nhập chi phí thực tế",
                dueDate: "Ngày đến hạn",
                status: "Trạng thái",
                statusPlanned: "Lên kế hoạch",
                statusUnpaid: "Chưa thanh toán",
                statusPartial: "Thanh toán một phần",
                statusPaid: "Đã thanh toán",
                statusCanceled: "Đã hủy",
                cancel: "Hủy",
                save: "Lưu thay đổi",
                create: "Tạo kế hoạch",
                delete: "Xóa",
                creating: "Đang tạo...",
                saving: "Đang lưu...",
                adding: "Đang thêm...",
                confirmDelete: "Xác nhận xóa",
                confirmDeletePlan: 'Bạn có chắc chắn muốn xóa kế hoạch chi tiêu "{{name}}"? Tất cả danh mục và khoản chi sẽ bị xóa vĩnh viễn.',
                confirmDeleteCategory: 'Bạn có chắc chắn muốn xóa danh mục "{{name}}"? Tất cả các khoản chi trong danh mục này cũng sẽ bị xóa.',
                confirmDeleteItem: 'Bạn có chắc chắn muốn xóa khoản chi "{{name}}"?'
            }
        }
    })
}, 568152, e => {
    e.v({
        header: {
            nav: {
                about: "Về chúng tôi",
                services: "Dịch vụ",
                templates: "Mẫu thiệp",
                community: "Các cặp đôi",
                features: "Tính năng",
                pricing: "Bảng giá",
                contact: "Liên hệ"
            },
            navMobile: {
                home: "Home",
                community: "Cặp đôi",
                pricing: "Giá",
                contact: "Liên hệ",
                manage: "Quản lý",
                managePage: "Thiệp đã tạo",
                create: "Tạo"
            },
            signIn: "Đăng nhập",
            access: "Bảng điều khiển",
            accessExpanded: "Quản lý thiệp đã tạo"
        },
        banner: {
            tag: "MỜI CƯỚI THỜI 5.0",
            titlePrefix: "TẠO THIỆP CƯỚI",
            typing: ["ĐIỆN TỬ", "ONLINE"],
            subtitle: "HOÀN TOÀN MIỄN PHÍ",
            description: "Cho Đám Cưới của bạn trở nên <0>Độc Đáo</0> và <0>Đáng Nhớ</0> hơn ♥",
            button: "Tạo Thiệp Ngay",
            manageButton: "Mở quản lý thiệp",
            secondaryButton: "XEM CÁC MẪU THIỆP",
            intro: {
                title: "Giới thiệu chung",
                description: "Nền tảng tạo Website Đám Cưới (Thiệp Cưới Online) miễn phí giúp cô dâu chú rể sở hữu ngay một đám cưới thời thượng 4.0 với nhiều tính năng cực kỳ hữu ích."
            }
        },
        introduction: {
            label: "Giới thiệu",
            title: "Website Đám Cưới - Thiệp cưới Online",
            content: "Thiệp cưới online, Thiệp cưới điện tử, Website đám cưới là 1 trang web dành riêng cho đám cưới của các cặp đôi. Nơi dùng để lưu trữ những khoảnh khắc, kỷ niệm, hình ảnh, Video 1 cách mãi mãi. <br /><br /> Là trang web dùng để mời cưới tới bạn bè và người thân thay cho những chiếc thiệp giấy cổ điển, là chiếc thiệp cưới thời 5.0 với rất nhiều tính năng và sự hữu ích. Nơi cung cấp đầy đủ các thông tin cưới cho khách mời của bạn, giúp bạn dễ dàng chia sẻ đến mọi người, mời cưới để đánh sánh điệu, lưu trữ và chia sẻ câu chuyện tình yêu, album ảnh cưới đến mọi người. Cho phép mọi người gửi lời chúc mừng, gửi tiền mừng cưới online, và có thể xác nhận tham dự đám cưới của bạn,...thật tuyệt phải không !!"
        },
        feature: {
            title: "TÍNH NĂNG NỔI BẬT",
            heading: "Trải nghiệm những tính năng <br /> <span>chỉ có trên Thiệp Cưới Điện Tử</span>",
            description: "Không giống như những chiếc thiệp giấy cổ điển, Thiệp Cưới Điện Tử mang đến những tính năng hữu ích, giúp Dâu Rể chia sẻ, quản lý và chuẩn bị cho đám cưới một cách trọn vẹn nhất.",
            items: {
                info: {
                    title: "Thông tin Đám cưới",
                    list: ["Thông tin Cô Dâu & Chú Rể", "Địa điểm tổ chức hôn lễ, tiệc mừng", "Thời gian diễn ra sự kiện (Timeline...)", "Các sự kiện cưới (Tiệc cưới, lễ cưới,...)", "Bố mẹ 2 bên + Tứ gia 2 nhà"]
                },
                share: {
                    title: "Chia sẻ Cảm xúc",
                    list: ["Chia sẻ Album ảnh cưới và Video.", "Câu chuyện tình yêu của Dâu Rể", "Hành trình yêu, các dấu mốc thời gian.", "Giới thiệu riêng cô Dâu chú Rể.", "Lời ngỏ, lời cảm ơn."]
                },
                features: {
                    title: "Các tính năng Thiệp cưới",
                    list: ["Gửi lời chúc mừng đám cưới + quản lý lời chúc.", "Xác nhận tham dự đám cưới.", "Quản lý danh sách khách mời tham dự.", "Mừng cưới online qua STK, mã QR Code.", "Đếm ngược thời gian tới sự kiện cưới.", "Google maps chỉ dẫn đến tân nơi cưới.", "Phát bài nhạc yêu thích và hiệu ứng thiệp.", "Ghi tên khách mời, hiển thị tự động tên khách mời hoặc mời đích danh khách."]
                },
                benefits: {
                    title: "Quyền Lợi & Quà tặng",
                    list: ["Trình thiết kế thiệp cưới miễn phí, chuyên nghiệp", "Quản lý kế hoạch cưới, ngân sách cưới miễn phí", "Tạo thiệp cưới và sử dụng miễn phí", "Gửi mời Miễn phí không giới hạn", "Đội ngũ hỗ trợ nhiệt tình tận tâm", "Chỉnh sửa thiệp không giới hạn", "Tùy chỉnh theo ý bạn dễ dàng"]
                }
            },
            cta: {
                heading: "Bắt đầu <span className='text-rose-500'>Đám Cưới Như Mơ</span> của bạn <br /> với 1 chiếc <span className='text-rose-500'>Thiệp Online</span> ngay hôm nay!",
                button: "Bắt đầu ngay"
            }
        },
        featureHot: {
            title: "Cho Đám Cưới của bạn trở nên Đặc Biệt hơn với <span className='text-rose-500'>Thiệp Cưới Online</span>",
            description: "Tạo ấn tượng mạnh mẽ với khách mời bằng thiệp cưới hiện đại, sang trọng và đầy đủ thông tin.",
            button: "CHỌN THIỆP NGAY"
        },
        listTemplate: {
            label: "KHO GIAO DIỆN",
            title: "Kho Giao Diện Mẫu Thiệp Cưới",
            description: "Bắt đầu Đám Cưới của bạn với 1 chiếc Thiệp Cưới thật đẹp ngay nhé ♥",
            heading: "Các Mẫu Thiệp Cưới Đẹp",
            subHeading: "Bắt đầu Đám Cưới của bạn với 1 chiếc Thiệp Cưới thật đẹp ngay nhé ♥",
            filter: {
                label: "Lọc theo tag:",
                allTags: "Tất cả tags",
                showing: "Hiển thị {{count}} mẫu thiệp",
                forTag: 'cho tag "{{tag}}"'
            },
            seeAll: "Xem tất cả các mẫu Thiệp",
            error: "Đã có lỗi xảy ra khi tải dữ liệu."
        },
        community: {
            label: "CÁC CẶP ĐÔI",
            title: "Thiệp Cưới Từ Cộng Đồng",
            description: "Khám phá những thiệp cưới tuyệt đẹp được tạo bởi cộng đồng người dùng meWedding.",
            heading: "Thiệp Cưới Của Các Cặp Đôi",
            subHeading: "Cùng xem những thiệp cưới xinh đẹp từ cộng đồng và lấy cảm hứng cho đám cưới của bạn ♥",
            seeAll: "Xem tất cả thiệp cưới",
            error: "Đã có lỗi xảy ra khi tải dữ liệu."
        },
        step: {
            title: "4 Bước Để Sở Hữu Thiệp Cưới Điện Tử",
            items: {
                1: {
                    title: "Bước 1: Đăng ký/Đăng nhập",
                    description: "Tạo tài khoản miễn phí để bắt đầu thiết kế thiệp cưới của bạn."
                },
                2: {
                    title: "Bước 2: Chọn Mẫu Thiệp",
                    description: "Lựa chọn mẫu thiệp ưng ý từ kho giao diện đa dạng của chúng tôi."
                },
                3: {
                    title: "Bước 3: Nhập Thông Tin",
                    description: "Điền thông tin đám cưới, tải ảnh và video lên thiệp."
                },
                4: {
                    title: "Bước 4: Xuất Bản & Chia Sẻ",
                    description: "Hoàn tất và chia sẻ thiệp cưới đến bạn bè, người thân."
                }
            }
        },
        whyChoose: {
            title: "VÌ SAO CHỌN CHÚNG TÔI",
            heading: "Tại sao nên lựa chọn <br /> <span className='text-rose-500'>Thiệp Cưới Điện Tử</span>",
            items: {
                memory: {
                    title: "Lưu giữ kỷ niệm",
                    description: "Lưu giữ album ảnh cưới, video và câu chuyện tình yêu mãi mãi."
                },
                share: {
                    title: "Chia sẻ dễ dàng",
                    description: "Chia sẻ thiệp cưới đến bạn bè qua mạng xã hội chỉ với 1 cú click."
                },
                features: {
                    title: "Tính năng hiện đại",
                    description: "Tích hợp bản đồ, mừng cưới online, xác nhận tham dự và nhiều tính năng khác."
                },
                design: {
                    title: "Đa dạng mẫu mã",
                    description: "Kho giao diện phong phú, cập nhật liên tục các xu hướng thiết kế mới nhất."
                },
                cost: {
                    title: "Tiết kiệm chi phí",
                    description: "Hoàn toàn miễn phí, không phát sinh chi phí in ấn và gửi thiệp."
                },
                manage: {
                    title: "Quản lý khách mời",
                    description: "Dễ dàng kiểm soát số lượng khách mời tham dự và lời chúc mừng."
                }
            }
        },
        description: {
            title: "4 Bước Để Tạo Thiệp Cưới Điện Tử Miễn Phí",
            items: {
                1: {
                    title: "Đăng ký tài khoản",
                    description: "Chỉ cần 1 phút để tạo tài khoản và bắt đầu."
                },
                2: {
                    title: "Chọn giao diện",
                    description: "Hàng trăm mẫu thiệp đẹp đang chờ bạn lựa chọn."
                },
                3: {
                    title: "Chỉnh sửa nội dung",
                    description: "Thay đổi thông tin, hình ảnh theo ý muốn."
                },
                4: {
                    title: "Chia sẻ thiệp",
                    description: "Gửi link thiệp cưới đến khách mời qua mạng xã hội."
                }
            }
        }
    })
}, 415526, e => {
    e.v({
        header: {
            nav: {
                templates: "Mẫu Thiệp",
                pricing: "Bảng Giá",
                contact: "Liên Hệ"
            },
            signIn: "Đăng Nhập",
            access: "Bảng Điều Khiển"
        },
        inviteMenu: {
            invitation: "Thiệp mời",
            guests: "Quản lý khách mời",
            wishes: "Quản lý lời chúc",
            productAffiliates: "Sản phẩm liên kết",
            referral: "Giới thiệu",
            settings: "Cài đặt thiệp mời"
        },
        inviteManager: {
            description: "Quản lý các thiệp mời sự kiện của bạn",
            createNew: "Tạo thiệp mời mới",
            stats: {
                totalInvitations: "Tổng số thiệp mời",
                publicInvitations: "Thiệp công khai",
                activeInvitations: "Thiệp đang hoạt động",
                totalViews: "Tổng lượt xem",
                guests: "Khách mời",
                wishes: "Lời chúc"
            },
            create: {
                title: "Tạo thiệp mời mới",
                description: "Thiết kế một thiệp mời đẹp cho sự kiện đặc biệt của bạn",
                button: "Tạo thiệp mời"
            },
            request: {
                title: "Bạn bận rộn? Chúng tôi sẽ thiết kế giúp bạn ❤️",
                description: "Nếu bạn đang quá tải hoặc không có thời gian, đội ngũ của chúng tôi có thể tạo và thiết kế thiệp mời cho bạn.",
                button: "Yêu cầu Hỗ trợ Thiết kế"
            },
            card: {
                weddingDate: "Ngày sự kiện:",
                created: "Ngày tạo:",
                expiresAt: "Hạn sử dụng:",
                expired: "Đã hết hạn",
                expiresIn: "{{date}} (còn {{days}} ngày)",
                permanent: "Vĩnh viễn",
                unpublished: "Chưa công khai",
                countdown: {
                    before: "Đếm ngược đến sự kiện"
                },
                unlockCountup: "Mở khóa đếm ngược",
                noDomain: "Chưa có tên miền",
                public: "Công khai",
                private: "Riêng tư",
                views: "{{count}} lượt xem",
                guestsCount: "{{count}} khách mời",
                wishesCount: "{{count}} lời chúc",
                unlockStats: "Mở khóa thống kê",
                editInvitation: "Chỉnh sửa",
                preview: "Xem trước",
                guests: "Khách mời",
                publish: "Công khai",
                unpublish: "Ẩn đi"
            },
            menu: {
                wishes: "Quản lý lời chúc",
                settings: "Cài đặt",
                qrCode: "Mã QR",
                socialShare: "Chia sẻ mạng xã hội",
                designRequest: "Yêu cầu thiết kế",
                changeTemplate: "Đổi giao diện",
                clone: "Nhân bản",
                resetToTemplate: "Reset lại theo mẫu",
                delete: "Xóa"
            }
        },
        banner: {
            tag: "Miễn phí & Đơn giản",
            titlePrefix: "Tạo thiệp mời",
            typing: ["Sinh nhật", "Thôi nôi", "Khai trương", "Hội nghị"],
            subtitle: "Online miễn phí",
            description: "Tạo thiệp mời sự kiện <0>đẹp mắt</0> và <0>chuyên nghiệp</0> chỉ trong vài phút.<br/>Sinh nhật, thôi nôi, khai trương, hội nghị và nhiều hơn nữa.",
            button: "Bắt đầu ngay"
        },
        introduction: {
            label: "Về meInvite",
            title: "Thiệp mời sự kiện chuyên nghiệp",
            content: "meInvite là nền tảng tạo thiệp mời sự kiện trực tuyến miễn phí. Dù bạn cần thiệp mời sinh nhật, thôi nôi, khai trương hay hội nghị, chúng tôi đều có mẫu phù hợp cho bạn.<br/><br/>Với giao diện trực quan và dễ sử dụng, bạn có thể tạo thiệp mời đẹp mắt chỉ trong vài phút."
        },
        feature: {
            title: "Tính năng",
            heading: "Tạo thiệp mời <span>chuyên nghiệp</span>",
            description: "Mọi công cụ bạn cần để tạo thiệp mời đẹp và quản lý sự kiện hiệu quả",
            items: {
                eventTypes: {
                    title: "Đa dạng loại sự kiện",
                    list: {
                        0: "Sinh nhật, thôi nôi",
                        1: "Khai trương, khánh thành",
                        2: "Hội nghị, hội thảo",
                        3: "Tiệc công ty, sự kiện đặc biệt"
                    }
                },
                share: {
                    title: "Chia sẻ dễ dàng",
                    list: {
                        0: "Gửi qua link, QR code",
                        1: "Chia sẻ qua mạng xã hội",
                        2: "Gửi email hàng loạt",
                        3: "Theo dõi lượt xem"
                    }
                },
                features: {
                    title: "Tính năng phong phú",
                    list: {
                        0: "Quản lý khách mời",
                        1: "Thu thập bình luận",
                        2: "Nhạc nền tùy chỉnh",
                        3: "Hiệu ứng đẹp mắt"
                    }
                },
                benefits: {
                    title: "Lợi ích nổi bật",
                    list: {
                        0: "Hoàn toàn miễn phí",
                        1: "Thiết kế chuyên nghiệp",
                        2: "Tiết kiệm thời gian",
                        3: "Thân thiện môi trường"
                    }
                }
            }
        },
        listTemplate: {
            title: "Mẫu thiệp mời",
            description: "Khám phá các mẫu thiệp mời đẹp mắt",
            label: "Mẫu thiệp",
            heading: "Mẫu thiệp mời sự kiện",
            subHeading: "Chọn mẫu phù hợp với sự kiện của bạn",
            seeAll: "Xem tất cả mẫu",
            error: "Có lỗi xảy ra khi tải mẫu thiệp"
        },
        step: {
            title: "<span>4 bước</span> tạo thiệp mời",
            items: {
                1: {
                    title: "Chọn mẫu thiệp",
                    description: "Duyệt qua hàng trăm mẫu thiệp mời đẹp mắt và chọn mẫu phù hợp với sự kiện của bạn."
                },
                2: {
                    title: "Tùy chỉnh nội dung",
                    description: "Thêm thông tin sự kiện, hình ảnh và tùy chỉnh thiết kế theo ý muốn của bạn."
                },
                3: {
                    title: "Chia sẻ thiệp mời",
                    description: "Gửi thiệp mời qua link, QR code hoặc chia sẻ trực tiếp lên mạng xã hội."
                },
                4: {
                    title: "Quản lý khách mời",
                    description: "Theo dõi danh sách khách mời, xác nhận tham dự và thu thập bình luận."
                }
            }
        },
        inviteGuest: {
            title: "Quản lý khách mời",
            description: "Quản lý danh sách khách mời cho thiệp mời sự kiện",
            placeholder: "Tính năng quản lý khách mời sẽ được phát triển ở giai đoạn tiếp theo",
            addGuest: "Thêm khách mời",
            emailManagement: "Gửi Email",
            vipOnlyFeatureTitle: "Chú ý",
            vipOnlyFeatureDesc: 'Tính năng "Ghi tên khách mời" trong thiệp và khi gửi link chỉ dành riêng cho gói VIP, với gói FREE/PRO bạn chỉ thêm được 3 khách mời để trải nghiệm. Bạn có thể mua thêm tính năng này hoặc nâng cấp gói để sử dụng tất cả tính năng.',
            unlockFeature: "Mở khóa tính năng",
            personalizedInvitesFeatureName: "Ghi tên khách mời"
        },
        inviteComments: {
            description: "Xem và quản lý lời chúc từ khách mời",
            placeholder: "Tính năng quản lý lời chúc sẽ được phát triển ở giai đoạn tiếp theo",
            premiumTitle: "Quản lý lời chúc là tính năng Premium",
            premiumDescription: "Nâng cấp gói dịch vụ để sử dụng tính năng quản lý lời chúc.",
            unlockButton: "Mở khóa tính năng",
            featureName: "Quản lý lời chúc"
        },
        inviteSettings: {
            description: "Cấu hình và tùy chỉnh thiệp mời sự kiện",
            placeholder: "Tính năng cài đặt sẽ được phát triển ở giai đoạn tiếp theo"
        }
    })
}, 802019, e => {
    e.v({
        title: "Cảm ơn bạn đã tạo thiệp tại meHappy!",
        subtitle: "MeHappy rất vui khi được góp 1 phần nhỏ trong khoảnh khắc đặc biệt này của bạn.",
        quickNote: "Nếu bạn đang rảnh, hãy giúp meHappy một chút nhé",
        rating: {
            label: "Đánh giá của bạn",
            veryUnsatisfied: "Rất không hài lòng",
            unsatisfied: "Không hài lòng",
            normal: "Bình thường",
            satisfied: "Hài lòng",
            verySatisfied: "Rất hài lòng",
            selectRating: "Chọn số sao đánh giá"
        },
        title_field: {
            label: "Tiêu đề đánh giá",
            placeholder: "Nhập tiêu đề cho đánh giá của bạn..."
        },
        social: {
            heading: "Ủng hộ MeHappy bằng cách Like/Follow các nền tảng của Me nha!",
            description: "Nếu bạn hài lòng, hãy gửi đến chúng mình 1 đánh giá tích cực trên fanpage để chúng mình có thêm động lực phát triển nha.",
            hint: "Bấm vào các nền tảng của MeHappy bên dưới và ủng hộ chúng mình nhé",
            buttons: {
                facebook: "Facebook",
                instagram: "Instagram",
                tiktok: "TikTok"
            },
            mobileSummary: "Theo dõi MeHappy trên các nền tảng bên dưới để ủng hộ tụi mình nhé."
        },
        dissatisfied: {
            heading: "Nếu bạn chưa hài lòng về 1 điều gì đó!",
            description: "Hãy góp ý lại với MeHappy để chúng mình cải thiện thêm cho sản phẩm nha. MeHappy rất trân trọng và mong được lắng nghe ý kiến của bạn!",
            ratingLabel: "Đánh giá của bạn:",
            contentLabel: "Nội dung đánh giá:",
            referral: "Nếu thấy hữu ích, hãy giới thiệu MeHappy đến bạn bè và người thân của bạn nha",
            mobileDescription: "Bạn chưa hài lòng? Hãy để lại góp ý ngắn gọn để MeHappy cải thiện tốt hơn.",
            referralShort: "Thấy hữu ích thì giới thiệu MeHappy cho bạn bè nhé."
        },
        description: {
            label: "Nội dung đánh giá",
            placeholder: "Chia sẻ trải nghiệm và góp ý của bạn với MeHappy"
        },
        autoTitle: {
            default: "Đánh giá từ người dùng",
            star1: "1 sao - Rất không hài lòng",
            star2: "2 sao - Không hài lòng",
            star3: "3 sao - Bình thường",
            star4: "4 sao - Hài lòng",
            star5: "5 sao - Rất hài lòng"
        },
        buttons: {
            cancel: "Hủy",
            close: "Đóng",
            submit: "Gửi đánh giá",
            submitting: "Đang gửi..."
        },
        validation: {
            titleRequired: "Vui lòng nhập tiêu đề đánh giá",
            descriptionRequired: "Vui lòng nhập nội dung đánh giá",
            ratingRequired: "Vui lòng chọn số sao đánh giá"
        },
        success: {
            title: "Thành công",
            description: "Cảm ơn bạn đã gửi đánh giá! Chúng tôi sẽ xem xét và cải thiện dịch vụ."
        },
        error: {
            title: "Lỗi",
            description: "Có lỗi xảy ra khi gửi đánh giá. Vui lòng thử lại."
        },
        subtitleShort: "MeHappy rất vui khi đồng hành cùng khoảnh khắc đặc biệt của bạn.",
        mobileTabs: {
            feedback: "Đánh giá",
            social: "Like/Follow"
        },
        main: {
            title: "💌 Cảm ơn bạn đã tạo thiệp tại meHappy!",
            subtitle: "MeHappy rất vui khi được góp 1 phần nhỏ trong khoảnh khắc đặc biệt này của bạn 🖤",
            quickNote: "Nếu bạn đang rảnh, hãy giúp meHappy một chút nhé ❤️",
            social: {
                heading: "Ủng hộ MeHappy bằng cách Like/Follow các nền tảng của Me!",
                descriptionPrefix: "Nếu bạn hài lòng, hãy gửi đến chúng mình 1",
                descriptionHighlight: "Đánh giá tích cực",
                descriptionSuffix: "trên Fanpage để chúng mình có thêm động lực phát triển nha🖤. Chân thành cảm ơn bạn rất nhiều!",
                hint: "👇 Bấm và Follow các nền tảng của MeHappy bên dưới để ủng hộ chúng mình nhé 💗"
            },
            dissatisfied: {
                heading: "Nếu bạn chưa hài lòng về 1 điều gì đó!",
                description: "Hãy góp ý lại với MeHappy để chúng mình cải thiện thêm cho sản phẩm nha. MeHappy rất trân trọng và mong được lắng nghe ý kiến của bạn ạ!"
            },
            openForm: "Gửi góp ý / Đánh giá",
            referral: "🎁 Nếu thấy hữu ích, hãy giới thiệu MeHappy đến bạn bè và người thân của bạn nha ❤️"
        },
        form: {
            title: "Gửi góp ý / Đánh giá",
            subtitle: "Chia sẻ nhanh trải nghiệm của bạn để MeHappy cải thiện dịch vụ tốt hơn nhé.",
            ratingLabel: "Đánh giá của bạn:",
            contentLabel: "Nội dung đánh giá:",
            submit: "Gửi đánh giá",
            back: "Quay lại"
        }
    })
}, 562543, e => {
    e.v({
        title: "Mã QR",
        description: "Quét mã QR để truy cập thiệp",
        settings: {
            show: "Cài đặt QR",
            hide: "Ẩn cài đặt",
            title: "Cài đặt QR Code",
            dotColor: "Màu chấm",
            backgroundColor: "Màu nền",
            cornerSquareColor: "Màu góc vuông",
            cornerDotColor: "Màu góc chấm",
            dotType: "Kiểu chấm",
            cornerSquareType: "Kiểu góc vuông",
            cornerDotType: "Kiểu góc chấm",
            errorCorrectionLevel: "Mức sửa lỗi",
            margin: "Khoảng cách (px)",
            centerImage: "Hình ảnh trung tâm",
            selectImage: "Chọn hình ảnh",
            preview: "Xem trước:",
            deleteImage: "Xóa hình ảnh",
            imageSize: "Kích thước hình ảnh",
            hideBackgroundDots: "Ẩn chấm nền"
        },
        dotTypes: {
            square: "Vuông",
            rounded: "Bo tròn",
            extraRounded: "Rất bo tròn",
            classy: "Cổ điển",
            classyRounded: "Cổ điển bo tròn"
        },
        cornerTypes: {
            square: "Vuông",
            extraRounded: "Rất bo tròn",
            dot: "Chấm"
        },
        errorLevels: {
            L: "L (7%)",
            M: "M (15%)",
            Q: "Q (25%)",
            H: "H (30%)"
        },
        actions: {
            copyLink: "Sao chép link",
            downloadQR: "Tải xuống QR"
        },
        messages: {
            copySuccess: "Đã sao chép!",
            copyDescription: "Link đã được sao chép vào clipboard",
            copyError: "Lỗi",
            copyErrorDescription: "Không thể sao chép link",
            downloadSuccess: "Thành công!",
            downloadDescription: "Mã QR đã được tải xuống",
            downloadError: "Lỗi",
            downloadErrorDescription: "Không thể tải xuống mã QR"
        }
    })
}, 49283, e => {
    e.v({
        title: "Chọn tệp",
        tabs: {
            browse: "Duyệt tệp",
            upload: "Tải lên mới",
            storage: "Dung lượng"
        },
        search: {
            placeholder: "Tìm kiếm tệp...",
            groupPlaceholder: "Tìm kiếm nhóm..."
        },
        groups: {
            label: "Chọn nhóm:",
            all: "Tất cả",
            showMore: "+ Xem thêm {{count}} tag",
            showLess: "- Thu gọn"
        },
        upload: {
            dragDrop: "Kéo và thả tệp vào đây hoặc nhấp để duyệt",
            selectFiles: "Chọn tệp",
            progress: "Tiến trình tải lên:",
            addTags: "Thêm tag cho tệp tải lên:",
            addNewTag: "Thêm tag mới"
        },
        footer: {
            selected: "{{count}} tệp đã chọn",
            selected_other: "{{count}} tệp đã chọn",
            cancel: "Hủy",
            select: "Chọn"
        },
        messages: {
            noFiles: "Không tìm thấy tệp",
            invalidType: "Loại tệp không hợp lệ: {{name}} không được hỗ trợ",
            uploadSuccess: "Đã tải lên thành công {{count}} tệp",
            uploadFailed: "Tải lên thất bại: {{name}}",
            endOfFiles: "Đã hiển thị tất cả tệp"
        }
    })
}, 845169, e => {
    e.v({
        title: "Yêu Cầu Hỗ Trợ Thiết Kế",
        fields: {
            requestTitle: "Tiêu Đề Yêu Cầu *",
            requestTitlePlaceholder: "Tiêu đề ngắn gọn cho yêu cầu thiết kế của bạn",
            description: "Mô Tả *",
            descriptionPlaceholder: "Mô tả chi tiết yêu cầu thiết kế của bạn...",
            selectPage: "Chọn Trang (Tùy chọn)",
            selectPagePlaceholder: "Chọn trang để liên kết với yêu cầu",
            noPage: "Không chọn trang",
            contactEmail: "Email Liên Hệ *",
            contactEmailPlaceholder: "email@example.com",
            phone: "Số Điện Thoại",
            phonePlaceholder: "0123-456-789",
            priority: "Mức Độ Ưu Tiên",
            priorityPlaceholder: "Chọn mức độ ưu tiên"
        },
        priority: {
            low: "Ưu Tiên Thấp (7-14 ngày)",
            medium: "Ưu Tiên Trung Bình (3-7 ngày)",
            high: "Ưu Tiên Cao (1-3 ngày)",
            urgent: "Khẩn Cấp (24-48 giờ)"
        },
        actions: {
            cancel: "Hủy",
            submit: "Gửi Yêu Cầu"
        },
        messages: {
            noPermission: "Không có quyền tạo yêu cầu",
            noPermissionDescription: "Bạn cần nâng cấp gói để sử dụng tính năng hỗ trợ thiết kế"
        },
        userInfoGate: {
            title: "Cần bổ sung thông tin cô dâu/chú rể",
            message: "Bạn cần điền đủ Tên chú rể, Tên cô dâu, Ngày cưới và Địa điểm cưới trước khi gửi yêu cầu hỗ trợ thiết kế.",
            confirm: "Đi đến Bride/Groom",
            cancel: "Để sau"
        }
    })
}, 586845, e => {
    e.v({
        header: {
            feedback: "Góp ý",
            upgradeToPremium: "Nâng cấp",
            buyFeatures: "Mua tính năng",
            plan: {
                basic: "Cơ bản",
                pro: "Pro",
                vip: "VIP",
                loading: "...",
                free: "Miễn phí"
            }
        },
        menu: {
            invitation: {
                title: "Thiệp cưới",
                manage: "Quản lý thiệp cưới",
                brideGroom: "Hồ sơ thiệp cưới",
                yourCard: "Thiệp của bạn"
            },
            wedding: {
                title: "Đám cưới",
                manage: "Kế hoạch cưới",
                spending: "Quản lý chi tiêu",
                guests: "Quản lý khách mời",
                wishes: "Quản lý lời chúc",
                photobook: "Quản lý Photobook"
            },
            settings: {
                title: "Cài đặt",
                invitation: "Cài đặt thiệp cưới",
                notificationGuide: "Hướng dẫn thông báo"
            },
            design: {
                title: "Thiết kế",
                saveTheDate: "Thiệp Save The Date",
                videoOrders: "Đơn hàng video của tôi",
                logo: "Logo đám cưới"
            },
            referral: {
                title: "Giới thiệu",
                dashboard: "Giới thiệu",
                commissionHistory: "Lịch sử hoa hồng",
                referees: "Người được giới thiệu",
                withdrawals: "Quản lý rút tiền"
            },
            productAffiliates: "Sản phẩm liên kết",
            quickMenu: "Danh mục quản lý",
            expand: "Mở rộng menu",
            collapse: "Thu gọn menu"
        },
        templateSelect: {
            title: "Chọn Template",
            allTiers: "Tất cả",
            tierInfo: "Hiển thị templates cho gói {{tier}}",
            searchPlaceholder: "Tìm kiếm template...",
            loading: "Đang tải templates...",
            error: "Lỗi khi tải templates",
            resultsCount: "Hiển thị {{count}} template",
            withKeyword: 'với từ khóa "{{keyword}}"',
            noImage: "Không có hình ảnh",
            noResults: "Không tìm thấy template nào",
            empty: "Không có template nào"
        },
        time: {
            days: "ngày",
            hours: "giờ",
            minutes: "phút",
            seconds: "giây"
        },
        notification: {
            expired: "Đã hết hạn",
            timeLeft: "Thời gian còn lại:",
            dismissTooltip: "Đóng thông báo (sẽ hiện lại sau 2 giờ)"
        },
        systemSettings: {
            theme: "Giao diện",
            language: "Ngôn ngữ"
        },
        modal: {
            confirmTitle: "Xác nhận",
            confirm: "Đồng ý",
            cancel: "Hủy"
        },
        actions: {
            back: "Quay lại",
            copy: "Sao chép",
            copied: "Đã sao chép",
            copyColor: "Sao chép màu"
        },
        featureUnlockModal: {
            title: "Mở khóa tính năng",
            subtitle: 'Tính năng "{{featureName}}" cần được nâng cấp để sử dụng',
            tabUpgrade: "Nâng cấp gói",
            tabUpgradeShort: "Nâng cấp",
            tabBuyFeature: "Mua riêng tính năng",
            tabBuyFeatureShort: "Mua riêng",
            upgradeDescription: "Chọn gói phù hợp để mở khóa nhiều tính năng",
            buyFeatureDescription: "Mua riêng lẻ tính năng này với giá ưu đãi",
            openFeatureStore: "Mở cửa hàng tính năng",
            hasFeature: "Có tính năng này"
        },
        success: "Thành công",
        error: "Lỗi"
    })
}, 227195, e => {
    e.v({
        title: "Thông báo",
        markAllAsRead: "Đánh dấu đã đọc",
        loading: "Đang tải thông báo...",
        empty: "Không có thông báo nào",
        pinned: "Ghim",
        previous: "Trước",
        next: "Sau",
        timeAgo: {
            justNow: "Vừa xong",
            hoursAgo: "{{count}} giờ trước",
            daysAgo: "{{count}} ngày trước"
        }
    })
}, 645066, e => {
    e.v({
        background: {
            title: "Màu & Hình nền",
            type: "Loại nền",
            placeholder: "Chọn loại nền",
            color: "Màu nền",
            gradientType: "Kiểu Gradient",
            gradientAngle: "Góc",
            gradientColor1: "Màu 1",
            gradientColor2: "Màu 2",
            gradientPattern: "Mẫu Gradient",
            image: "Hình ảnh",
            imagePlaceholder: "https://...",
            select: "Chọn",
            remove: "Xóa",
            size: "Kích thước",
            position: "Vị trí",
            repeat: "Lặp lại",
            videoSource: "Nguồn video",
            videoPlaceholder: "Chọn nguồn video",
            youtubeUrl: "YouTube URL",
            videoUrl: "URL Video (MP4)",
            selectVideo: "Chọn video",
            parallaxDesc: "Parallax: cố định nền khi cuộn (cover + fixed).",
            advanced: "Tùy chỉnh",
            hideAdvanced: "Ẩn nâng cao",
            types: {
                none: "Không chọn",
                color: "Màu đơn",
                transparent: "Trong suốt",
                gradient: "Gradient",
                image: "Hình ảnh",
                video: "Video"
            },
            sizes: {
                auto: "Auto",
                cover: "Cover",
                contain: "Contain",
                custom: "Tùy chỉnh",
                parallax: "Parallax"
            },
            repeats: {
                "no-repeat": "Không lặp",
                repeat: "Lặp",
                "repeat-x": "Lặp X",
                "repeat-y": "Lặp Y"
            }
        },
        border: {
            title: "Viền & Bo góc",
            style: "Kiểu viền",
            color: "Màu viền",
            width: "Độ dày",
            radius: "Bo góc",
            styles: {
                none: "Không có",
                solid: "Solid",
                dashed: "Dashed",
                dotted: "Dotted",
                double: "Double",
                groove: "Groove",
                ridge: "Ridge",
                inset: "Inset",
                outset: "Outset"
            }
        },
        overlay: {
            title: "Overlay",
            type: "Chọn kiểu",
            blendMode: "Blend mode",
            color: "Màu lớp phủ",
            gradientDirection: "Hướng phủ",
            gradientStart: "Biên độ bắt đầu (%)",
            gradientEnd: "Biên độ kết thúc (%)",
            imageUrl: "URL Hình ảnh",
            opacity: "Trong suốt",
            directions: {
                toRight: "Trái sang phải",
                toLeft: "Phải sang trái",
                toBottom: "Trên xuống dưới",
                toTop: "Dưới lên trên",
                toBottomRight: "Trên trái xuống dưới phải",
                toTopRight: "Dưới trái lên trên phải",
                toBottomLeft: "Trên phải xuống dưới trái",
                toTopLeft: "Dưới phải lên trên trái"
            },
            sizes: {
                auto: "Mặc định",
                cover: "Vừa khung cao (Cover)",
                contain: "Vừa khung rộng (Contain)"
            },
            blendModes: {
                normal: "Bình thường",
                multiply: "Multiply",
                screen: "Screen",
                overlay: "Overlay",
                darken: "Darken",
                lighten: "Lighten",
                "color-dodge": "Color Dodge",
                "color-burn": "Color Burn",
                "hard-light": "Hard Light",
                "soft-light": "Soft Light",
                difference: "Difference",
                exclusion: "Exclusion",
                hue: "Hue",
                saturation: "Saturation",
                color: "Color",
                luminosity: "Luminosity"
            },
            gradientTypes: {
                linear: "Tuyến tính",
                radial: "Hình tròn"
            }
        },
        shadow: {
            title: "Đổ bóng",
            type: "Kiểu đổ bóng",
            presets: "Mẫu có sẵn",
            offset: "Dịch chuyển",
            blur: "Độ mờ",
            spread: "Độ tối",
            color: "Màu bóng"
        },
        transform: {
            title: "Mẫu Transform nhanh",
            reset: "Reset",
            "3dCard": "3D Card",
            tilt: "Nghiêng",
            transparent: "Trong suốt"
        }
    })
}, 341073, e => {
    e.v({
        editor: {
            loading: {
                message: "Đang tải trang thiệp...",
                submessage: "Chuẩn bị mọi thứ cho bạn"
            }
        }
    })
}, 603387, e => {
    e.v({
        animationManager: {
            displayAnimation: {
                title: "Hiệu ứng Hiển thị",
                preview: "Xem trước",
                duration: "Thời gian (giây)",
                repeat: "Lặp lại",
                effects: {
                    none: "Không chọn",
                    bounce: "Nảy lên",
                    flash: "Nhấp nháy",
                    pulse: "Nhịp đập",
                    rubberBand: "Co giãn",
                    shake: "Rung lắc",
                    swing: "Đung đưa",
                    tada: "Tada",
                    wobble: "Lắc lư",
                    bounceIn: "Nảy vào",
                    bounceInDown: "Nảy từ trên xuống",
                    bounceInLeft: "Nảy từ trái sang",
                    bounceInRight: "Nảy từ phải sang",
                    bounceInUp: "Nảy từ dưới lên",
                    fadeIn: "Hiện dần",
                    fadeInDown: "Hiện dần từ trên xuống",
                    fadeInDownBig: "Hiện dần từ trên xuống (Lớn)",
                    fadeInLeft: "Hiện dần từ trái sang",
                    fadeInLeftBig: "Hiện dần từ trái sang (Lớn)",
                    fadeInRight: "Hiện dần từ phải sang",
                    fadeInRightBig: "Hiện dần từ phải sang (Lớn)",
                    fadeInUp: "Hiện dần từ dưới lên",
                    fadeInUpBig: "Hiện dần từ dưới lên (Lớn)",
                    flip: "Lật",
                    flipInX: "Lật theo trục X",
                    flipInY: "Lật theo trục Y",
                    lightSpeedIn: "Lướt nhanh vào",
                    rotateIn: "Xoay vào",
                    rotateInDownLeft: "Xoay vào xuống trái",
                    rotateInDownRight: "Xoay vào xuống phải",
                    rotateInUpLeft: "Xoay vào lên trái",
                    rotateInUpRight: "Xoay vào lên phải",
                    slideInUp: "Trượt từ dưới lên",
                    slideInDown: "Trượt từ trên xuống",
                    slideInLeft: "Trượt từ trái sang",
                    slideInRight: "Trượt từ phải sang",
                    hinge: "Rơi bản lề",
                    rollIn: "Lăn vào"
                }
            },
            hoverAnimation: {
                title: "Hiệu ứng Rê chuột",
                status: "Trạng thái",
                preview: "Xem trước hiệu ứng rê chuột",
                borderColor: "Màu viền",
                textColor: "Màu chữ",
                iconColor: "Màu icon",
                backgroundColor: "Màu nền",
                opacity: "Trong suốt (%)",
                scale: "Phóng to (%)",
                rotate: "Xoay đều (độ)",
                blur: "Độ mờ (px)",
                grayscale: "Trắng đen (%)",
                clearBorderColor: "Xóa màu viền",
                clearTextColor: "Xóa màu chữ",
                clearIconColor: "Xóa màu icon",
                clearBackgroundColor: "Xóa màu nền"
            }
        }
    })
}, 677482, e => {
    e.v({
        assetSaveModal: {
            title: "Lưu mẫu phần tử",
            tag: {
                label: "Tag",
                placeholder: "Nhập tag cho mẫu phần tử hoặc chọn từ danh sách bên dưới...",
                loading: "Đang tải danh sách tags...",
                available: "Tags có sẵn:",
                noMatch: "Không tìm thấy tag phù hợp. Nhập để tạo tag mới.",
                empty: "Chưa có tags nào. Nhập để tạo tag đầu tiên."
            },
            preview: {
                label: "Ảnh preview",
                description: "Tải ảnh preview tùy chỉnh hoặc để trống để tự động tạo.",
                uploadButton: "Tải ảnh lên",
                uploading: "Đang tải lên...",
                uploadSuccess: "Tải ảnh preview thành công!",
                customUploaded: "Đã tải ảnh preview tùy chỉnh",
                autoGenerateNote: "Nếu không tải ảnh, hệ thống sẽ tự động tạo preview."
            },
            category: {
                label: "Loại mẫu",
                weddingCard: "Thiệp cưới",
                giftBox: "Hộp mừng cười"
            },
            buttons: {
                cancel: "Hủy",
                save: "Lưu",
                generating: "Đang tạo preview...",
                saving: "Đang lưu..."
            },
            errors: {
                submit: "Lỗi khi xử lý yêu cầu lưu mẫu phần tử. Vui lòng thử lại.",
                adminOnly: "Chỉ Admin mới có thể lưu mẫu Group.",
                missingPlatform: "Một trong hai platform không có content. Asset có thể không hoạt động đúng trên cả 2 platforms.",
                invalidStructure: "Cấu trúc phần tử không hợp lệ. Vui lòng thử lại.",
                maxIterations: "Vòng lặp vô hạn khi thu thập nodes. Có thể có circular reference trong cấu trúc phần tử.",
                elementNotFound: "Element not found in DOM",
                blobCreation: "Failed to create blob from canvas",
                fallbackBlobCreation: "Fallback blob creation failed",
                placeholderBlob: "Failed to create placeholder blob",
                saveFailed: "Lỗi khi lưu asset vào database:",
                invalidImageType: "File không hợp lệ. Vui lòng chọn file ảnh.",
                previewUploadFailed: "Lỗi khi tải ảnh preview. Vui lòng thử lại."
            },
            warnings: {
                missingNodes: "node(s) không tìm thấy và đã bị bỏ qua:",
                skippedNodes: "node(s) bị bỏ qua khi serialize:",
                moreNodes: "... và {count} node(s) khác",
                noMobileNode: "Node not found in mobile content, will use converted version",
                noDesktopNode: "Node not found in desktop content, will use same as mobile",
                noMobileContent: "No mobile content available, will use converted version",
                noDesktopContent: "No desktop content available, will use same as mobile",
                fontNotFound: 'Font "{fontName}" is used but not found in current fontMap'
            },
            info: {
                nodesRecovered: "Đã khôi phục {count} node(s) từ editor state."
            },
            validation: {
                title: "Tree Validation Failed: {label}",
                errorsFound: "{count} error{plural} found:",
                moreErrors: "... and {count} more error(s). Check console for details.",
                missingRootNodeId: "Missing rootNodeId",
                emptyNodes: "Empty nodes object",
                rootNotFound: 'Root node "{rootNodeId}" not found in nodes',
                invalidParent: 'Node "{nodeId}" ({nodeType}) has invalid parent "{parent}"',
                missingChild: 'Node "{nodeId}" ({nodeType}) has missing child "{childId}"',
                missingLinkedNode: 'Node "{nodeId}" ({nodeType}) has missing linked node "{linkedId}" in slot "{slot}"'
            },
            success: {
                title: "✅ Asset Saved Successfully",
                desktopNodes: "📦 Desktop Nodes: {count}",
                mobileNodes: "📦 Mobile Nodes: {count}",
                desktopSize: "💾 Desktop: {size} KB",
                mobileSize: "📱 Mobile: {size} KB",
                fonts: "🔤 Fonts: {count}",
                savedFrom: "Saved from: {platform}"
            }
        }
    })
}, 215983, e => {
    e.v({
        audioSettingsModal: {
            title: "Cài đặt Âm thanh Nền",
            selectAudio: {
                label: "Chọn âm thanh",
                upload: "Tải lên",
                loading: "Đang tải...",
                placeholder: "-- Chọn audio template --",
                search: "Tìm kiếm...",
                noResults: "Không tìm thấy kết quả",
                noTemplates: "Chưa có audio template",
                noPublicTemplates: "Chưa có mẫu hệ thống",
                noOwnerTemplates: "Bạn chưa có mẫu nhạc riêng",
                quickGuide: "Chọn mẫu nhạc, nghe thử rồi bấm Chọn để áp dụng.",
                scopeHint: "Mẫu hệ thống được ưu tiên hiển thị trước.",
                selectedTemplateLabel: "Đang dùng",
                selectedBadge: "Đã chọn",
                listenPreview: "Nghe thử",
                stopPreview: "Dừng",
                choose: "Chọn",
                countLabel: "{{count}} mẫu",
                scopes: {
                    public: "Mẫu hệ thống",
                    owner: "Mẫu của bạn"
                },
                sources: {
                    owner: "Của bạn",
                    system: "Hệ thống"
                },
                browserNotSupported: "Trình duyệt của bạn không hỗ trợ audio."
            },
            tiers: {
                all: "Tất cả",
                free: "Free",
                pro: "Pro",
                vip: "VIP",
                custom: "Custom"
            },
            icons: {
                typeLabel: "Loại biểu tượng",
                typeStatic: "Biểu tượng tĩnh",
                typeAnimated: "Biểu tượng động (VIP)",
                presetLabel: "Biểu tượng phát nhạc",
                vipBadge: "(VIP)",
                proBadge: "(PRO+)",
                advancedTitle: "Nâng cao",
                customModeLabel: "Dùng icon tùy chỉnh",
                customModeHint: "Lưu theo URL/icon picker và màu đã chọn.",
                usePresetHint: "Đang dùng preset ở trên.",
                modeAnimatedShort: "Động",
                modeStaticShort: "Tĩnh",
                animatedFeatureName: "Biểu tượng nhạc động",
                proFeatureName: "Biểu tượng nhạc động Pro",
                animatedVipHint: "Biểu tượng động chỉ dành cho tài khoản VIP hoặc Agent.",
                animatedTierHint: "Một số biểu tượng động yêu cầu gói PRO trở lên.",
                noAnimatedPresets: "Chưa có mẫu biểu tượng động.",
                invalidAnimatedPreset: "Mẫu biểu tượng động không hợp lệ.",
                defaultIcons: "Biểu tượng mặc định",
                defaultIconsHint: "Áp dụng cho các trạng thái đang ở chế độ tĩnh.",
                defaultIconsApplied: "Đang dùng biểu tượng tĩnh mặc định.",
                whenOpen: "Khi mở:",
                whenPause: "Khi ngừng:",
                preview: "Preview:",
                color: "Màu",
                select: "Chọn",
                urlPlaceholder: "Nhập URL hoặc chọn từ thư viện"
            },
            settings: {
                animations: "Hiệu ứng chuyển động",
                autoPlay: "Phát khi cuộn",
                tooltipLabel: "Nội dung tooltip",
                tooltipPlaceholder: "Nhập nội dung tooltip khi rê chuột/chạm vào nút nhạc",
                tooltipDefault: "Click vào đây nếu bạn muốn phát nhạc"
            },
            buttons: {
                remove: "Xóa âm thanh",
                cancel: "Hủy",
                save: "Lưu cài đặt"
            },
            errors: {
                noAudio: "Vui lòng chọn file âm thanh.",
                animatedProRequired: "Bạn cần gói PRO trở lên để lưu biểu tượng nhạc động này.",
                animatedVipRequired: "Bạn cần gói VIP để lưu biểu tượng nhạc động.",
                saveFailed: "Không thể lưu cài đặt âm thanh. Vui lòng thử lại."
            },
            confirm: {
                deleteMessage: "Bạn có chắc chắn muốn xóa cài đặt âm thanh không?",
                deleteButton: "Xóa"
            },
            upgrade: {
                title: "Bài nhạc chưa phù hợp gói hiện tại",
                description: "Bạn cần gói {{tier}} hoặc đổi sang bài nhạc khác để lưu.",
                featureName: "Nâng cấp lên gói {{tier}}"
            }
        }
    })
}, 420674, e => {
    e.v({
        calendarProviderModal: {
            title: "Thêm vào lịch",
            eventInfo: {
                locationIcon: "📍"
            },
            providers: {
                google: {
                    label: "Google Calendar",
                    description: "Mở Google Calendar trong trình duyệt"
                },
                apple: {
                    label: "Apple Calendar",
                    description: "Thêm vào lịch (Safari)"
                },
                ics: {
                    label: "Tải file .ics",
                    description: "Tải xuống file lịch để import"
                }
            },
            errors: {
                openCalendar: "Lỗi khi mở lịch"
            }
        }
    })
}, 256011, e => {
    e.v({
        commonSettings: {
            tabs: {
                design: "Thiết kế",
                event: "Sự kiện",
                animation: "Hiệu ứng",
                advanced: "Nâng cao"
            },
            quickActions: "Tác vụ nhanh",
            size: {
                title: "Kích thước",
                width: "W",
                height: "H"
            },
            background: {
                title: "Nền"
            },
            border: {
                title: "Bo & Viền"
            },
            filter: {
                title: "Bộ lọc",
                blendMode: "Chế độ hòa trộn",
                contrast: "Tương phản",
                brightness: "Độ sáng",
                saturate: "Hòa màu",
                grayscale: "Trắng đen",
                opacity: "Độ mờ",
                invert: "Đảo ngược",
                sepia: "Nâu sepia",
                hueRotate: "Xoay màu",
                contrastShort: "T.phản",
                brightnessShort: "Sáng",
                saturateShort: "Bão hòa",
                grayscaleShort: "Xám",
                invertShort: "Đảo",
                hueRotateShort: "Xoay màu"
            },
            transform: {
                title: "Biến đổi",
                origin: "Điểm gốc",
                originShort: "Gốc",
                rotate: "Xoay",
                skew: "Nghiêng",
                perspective: "Phối cảnh",
                presets: "Mẫu có sẵn",
                reset: "Đặt lại",
                "3d": "3D",
                "3dCard": "Thẻ 3D",
                skewPreset: "Nghiêng",
                transparent: "Trong suốt",
                opacity: "Độ mờ"
            },
            transformOrigin: {
                center: "Giữa",
                topLeft: "Trên trái",
                topCenter: "Trên giữa",
                topRight: "Trên phải",
                centerLeft: "Giữa trái",
                centerRight: "Giữa phải",
                bottomLeft: "Dưới trái",
                bottomCenter: "Dưới giữa",
                bottomRight: "Dưới phải"
            },
            shadow: {
                title: "Đổ bóng"
            },
            overlay: {
                title: "Lớp phủ"
            },
            brandProtection: {
                title: "Bảo vệ thương hiệu",
                label: "Phần tử thương hiệu",
                description: "Đánh dấu phần tử này là thương hiệu để bảo vệ khỏi xóa\nCần khóa phần tử lại sau khi chỉnh xong"
            },
            visibility: {
                title: "Hiển thị",
                hiddenOnLoad: "Ẩn phần tử khi vào trang",
                hiddenOnLoadDescription: "Phần tử sẽ bị ẩn khi vào chế độ xem. Có thể hiện lại qua sự kiện."
            }
        }
    })
}, 400060, e => {
    e.v({
        colorPickerModal: {
            title: "Chọn màu",
            recentColors: "Màu đã sử dụng gần đây",
            errors: {
                parseColor: "Không thể phân tích màu",
                parseHistory: "Không thể tải lịch sử màu"
            }
        }
    })
}, 327213, e => {
    e.v({
        title: "Tải lên âm thanh của tôi",
        name: {
            label: "Tên âm thanh",
            placeholder: "Nhập tên cho âm thanh"
        },
        tier: {
            label: "Phân loại",
            free: "Free",
            pro: "Pro",
            vip: "VIP"
        },
        file: {
            label: "File audio hoặc video",
            clickToSelect: "Nhấn để chọn file audio hoặc video",
            supportedFormats: "Hỗ trợ: MP3, WAV, OGG, MIDI, AAC, WebM, MP4, AVI, MOV, WMV, FLV, MKV, 3GP",
            change: "Thay đổi",
            willConvert: "(Sẽ được convert thành MP3)",
            videoConvertInfo: "📹 File video sẽ được tự động convert thành MP3 khi tải lên"
        },
        buttons: {
            cancel: "Hủy",
            upload: "Tải lên",
            uploading: "Đang tải lên..."
        },
        uploading: {
            default: "Đang tải lên...",
            convertingVideo: "Đang convert video thành MP3 và tải lên..."
        },
        errors: {
            unsupportedFormat: "Định dạng file không được hỗ trợ. Vui lòng chọn file audio (MP3, WAV, OGG, MIDI, AAC, WebM) hoặc video (MP4, AVI, MOV, WMV, FLV, MKV, 3GP).",
            fileTooLarge: "File quá lớn. Kích thước tối đa cho {{format}} là {{maxSize}}.",
            invalidFile: "File không hợp lệ",
            pleaseSelectFile: "Vui lòng chọn file audio hoặc video",
            pleaseEnterName: "Vui lòng nhập tên âm thanh"
        }
    })
}, 219122, e => {
    e.v({
        title: "Đồng bộ đa nền tảng",
        titleCompact: "Đồng bộ",
        statusNotSynced: "Không đồng bộ",
        description: {
            synced: "Phần tử sẽ đồng bộ giữa Desktop và Mobile",
            notSynced: "Phần tử không đồng bộ giữa các nền tảng"
        }
    })
}, 293983, e => {
    e.v({
        title: "Cài đặt Hiệu ứng Tùy chỉnh",
        autoScroll: {
            enable: "Bật cuộn tự động",
            speedPreset: {
                label: "Nhịp độ cuộn",
                options: {
                    slow: "Chậm",
                    normal: "Vừa",
                    fast: "Nhanh"
                },
                hint: "Tốc độ thực tế vẫn tự tối ưu theo chiều cao màn hình để cuộn mượt hơn."
            }
        },
        buttons: {
            cancel: "Hủy",
            save: "Lưu"
        }
    })
}, 265858, e => {
    e.v({
        title: "Cài đặt HTML Tùy chỉnh",
        description: "Thêm mã HTML tùy chỉnh sẽ được chèn vào cuối trang",
        htmlLabel: "Mã HTML:",
        previewLabel: "Xem trước:",
        placeholder: "Nhập mã HTML tùy chỉnh của bạn...",
        buttons: {
            cancel: "Hủy",
            save: "Lưu cài đặt",
            edit: "Chỉnh sửa",
            preview: "Xem trước"
        }
    })
}, 776881, e => {
    e.v({
        title: "Chỉnh sửa ID phần tử",
        label: "ID phần tử",
        placeholder: "Nhập ID mới cho phần tử",
        note: {
            title: "Lưu ý:",
            description: "ID phải bắt đầu bằng chữ cái và chỉ chứa chữ cái, số, dấu gạch dưới (_) và dấu gạch ngang (-)."
        },
        buttons: {
            cancel: "Hủy",
            save: "Lưu"
        },
        errors: {
            empty: "ID không được để trống",
            invalidFormat: "ID phải bắt đầu bằng chữ cái và chỉ chứa chữ cái, số, dấu gạch dưới và dấu gạch ngang",
            duplicate: "ID này đã tồn tại, vui lòng chọn ID khác",
            checkUniqueness: "Không thể kiểm tra tính duy nhất của ID",
            noElement: "Không có phần tử nào được chọn",
            alreadyUsed: "ID này đã được sử dụng, vui lòng chọn ID khác",
            updateFailed: "Không thể cập nhật ID. Vui lòng thử lại."
        }
    })
}, 279447, e => {
    e.v({
        sectionHeader: "Sự kiện",
        addEvent: "Thêm sự kiện",
        noEvents: 'Chưa có sự kiện nào. Nhấn "Thêm sự kiện" để bắt đầu.',
        actionType: {
            label: "Hành động",
            click: "Nhấp chuột",
            firstClick: "Nhấp chuột đầu tiên",
            secondClick: "Nhấp chuột thứ 2",
            hover: "Rê chuột (hover)",
            submit: "Gửi form (submit)"
        },
        eventType: {
            label: "Sự kiện",
            none: "Không chọn",
            navigateSection: "Chuyển Section",
            call: "Mở cuộc gọi",
            link: "Mở liên kết",
            toggleElement: "Ẩn/Hiện phần tử",
            copyClipboard: "Copy Clipboard",
            email: "Mở email",
            openPopup: "Mở Popup",
            openDropbox: "Mở Dropbox",
            openLightbox: "Mở LightBox",
            openAlbumModal: "Mở Album Modal",
            addToCalendar: "Thêm vào lịch",
            setValue: "Set Value (Form)"
        },
        navigateSection: {
            selectSection: "Chọn Section:",
            placeholder: "Chọn section"
        },
        call: {
            phoneNumber: "Số điện thoại:",
            placeholder: "0123456789"
        },
        link: {
            url: "Liên kết:",
            urlPlaceholder: "https://example.com",
            openOption: "Tuỳ chọn mở:",
            currentTab: "Trang hiện tại",
            newTab: "Cửa sổ mới",
            forwardGuestInfo: "Chuyển tiếp thông tin khách",
            forwardGuestInfoHint: "Thông tin khách (guestId) sẽ được tự động thêm vào liên kết",
            autoFillLabel: "Tự điền từ thông tin đã lưu",
            autoFillEmpty: 'Chưa có thông tin. Vui lòng điền trong phần "Thông tin tự điền".',
            autoFill: {
                none: "Không tự điền",
                groomLink1: "Link MXH 1 - Chú rể",
                groomLink2: "Link MXH 2 - Chú rể",
                groomLink3: "Link MXH 3 - Chú rể",
                brideLink1: "Link MXH 1 - Cô dâu",
                brideLink2: "Link MXH 2 - Cô dâu",
                brideLink3: "Link MXH 3 - Cô dâu"
            }
        },
        toggleElement: {
            hideElements: "ID phần tử để ẩn (mỗi ID một dòng hoặc cách nhau bằng dấu phẩy):",
            hidePlaceholder: "element-id-1\nelement-id-2\nhoặc: element-id-1, element-id-2",
            showElements: "ID phần tử để hiện (mỗi ID một dòng hoặc cách nhau bằng dấu phẩy):",
            showPlaceholder: "element-id-3\nelement-id-4\nhoặc: element-id-3, element-id-4"
        },
        copyClipboard: {
            elementId: "ID phần tử để copy:",
            elementIdPlaceholder: "element-id",
            defaultValue: "Giá trị mặc định:",
            defaultValuePlaceholder: "Văn bản mặc định để copy",
            autoFillLabel: "Tự điền từ thông tin đã lưu",
            autoFillEmpty: 'Chưa có thông tin. Vui lòng điền trong phần "Thông tin tự điền".',
            autoFill: {
                none: "Không tự điền",
                groomLink1: "Link MXH 1 - Chú rể",
                groomLink2: "Link MXH 2 - Chú rể",
                groomLink3: "Link MXH 3 - Chú rể",
                groomGoogleMap: "Google Map URL - Chú rể",
                groomBankName: "Ngân hàng - Chú rể",
                groomAccountNumber: "Số tài khoản - Chú rể",
                groomAccountHolder: "Chủ tài khoản - Chú rể",
                groomQrCode: "URL QR ngân hàng - Chú rể",
                brideLink1: "Link MXH 1 - Cô dâu",
                brideLink2: "Link MXH 2 - Cô dâu",
                brideLink3: "Link MXH 3 - Cô dâu",
                brideGoogleMap: "Google Map URL - Cô dâu",
                brideBankName: "Ngân hàng - Cô dâu",
                brideAccountNumber: "Số tài khoản - Cô dâu",
                brideAccountHolder: "Chủ tài khoản - Cô dâu",
                brideQrCode: "URL QR ngân hàng - Cô dâu"
            }
        },
        email: {
            address: "Địa chỉ email:",
            placeholder: "example@email.com"
        },
        popup: {
            selectPopup: "Chọn Popup:",
            placeholder: "Chọn popup",
            noPopups: "Chưa có popup nào. Tạo popup trước để sử dụng."
        },
        dropbox: {
            selectDropbox: "Chọn Dropbox:",
            placeholder: "Chọn dropbox",
            noDropboxes: "Chưa có dropbox nào. Tạo dropbox trước để sử dụng.",
            position: "Vị trí:",
            distance: "Khoảng cách (px):",
            positions: {
                topLeft: "Trên cùng trái",
                topCenter: "Trên cùng giữa",
                topRight: "Trên cùng phải",
                bottomLeft: "Dưới cùng trái",
                bottomCenter: "Dưới cùng giữa",
                bottomRight: "Dưới cùng phải",
                leftTop: "Trái trên",
                leftCenter: "Trái giữa",
                leftBottom: "Trái dưới",
                rightTop: "Phải trên",
                rightCenter: "Phải giữa",
                rightBottom: "Phải dưới"
            }
        },
        lightbox: {
            type: "Kiểu:",
            typePlaceholder: "Chọn loại media",
            image: "Hình ảnh",
            video: "Video",
            imageLabel: "Hình ảnh:",
            changeImage: "Thay đổi hình ảnh",
            selectFromLibrary: "Chọn từ thư viện",
            pasteImageUrl: "Hoặc dán URL hình ảnh:",
            imagePlaceholder: "https://example.com/image.jpg",
            videoType: "Loại video:",
            videoTypePlaceholder: "Chọn loại video",
            youtube: "Youtube",
            meHappyVideo: "meHappyVideo",
            youtubeUrl: "URL Youtube:",
            videoUrl: "Video:",
            changeVideo: "Thay đổi video",
            pasteVideoUrl: "Hoặc dán URL video:",
            youtubePlaceholder: "https://www.youtube.com/watch?v=...",
            videoPlaceholder: "https://example.com/video.mp4",
            delete: "Xóa"
        },
        albumModal: {
            selectAlbumModal: "Chọn Album Modal:",
            placeholder: "Chọn Album Modal",
            noAlbumModals: "Không có Album Modal nào. Hãy thêm Album Modal vào trang trước."
        },
        calendar: {
            title: "Tiêu đề sự kiện:",
            titlePlaceholder: "Lễ cưới",
            description: "Mô tả:",
            descriptionPlaceholder: "Mô tả về sự kiện...",
            location: "Địa điểm:",
            locationPlaceholder: "Nhà hàng tiệc cưới...",
            date: "Ngày sự kiện:",
            datePlaceholder: "yyyy-mm-dd",
            autoFill: "Tự động điền",
            autoFillHint: '💡 Nhấn "Tự động điền" để sử dụng ngày từ trang: {date}',
            startTime: "Giờ bắt đầu:",
            endTime: "Giờ kết thúc:",
            preview: "Preview:",
            defaultTitle: "Sự kiện quan trọng",
            addToCalendar: "📅 Thêm vào lịch (Preview)",
            textOverrides: {
                title: "Nhãn hiển thị",
                modalTitle: "Tiêu đề modal",
                modalTitlePlaceholder: "Tiêu đề modal (để trống dùng mặc định)",
                displayDate: "Dòng ngày hiển thị",
                displayDatePlaceholder: "Dòng ngày hiển thị (để trống tự format)",
                googleLabel: "Google label",
                googleLabelPlaceholder: "Google label (để trống dùng mặc định)",
                googleDescription: "Google description",
                googleDescriptionPlaceholder: "Google description (để trống dùng mặc định)",
                appleLabel: "Apple label",
                appleLabelPlaceholder: "Apple label (để trống dùng mặc định)",
                appleDescription: "Apple description",
                appleDescriptionPlaceholder: "Apple description (để trống dùng mặc định)",
                icsLabel: "ICS label",
                icsLabelPlaceholder: "ICS label (để trống dùng mặc định)",
                icsDescription: "ICS description",
                icsDescriptionPlaceholder: "ICS description (để trống dùng mặc định)"
            }
        },
        setValue: {
            targetId: "ID phần tử form:",
            targetIdPlaceholder: "standard-fullName, custom-xxx, wishform-guestName...",
            targetIdHint: "Xem ID trong phần cài đặt các trường form (RSVPForm/WishForm)",
            value: "Giá trị để set:",
            valuePlaceholder: "Nhập giá trị cần điền vào form..."
        },
        triggerAutoScroll: {
            label: "Trigger tự cuộn",
            hint: "Khi event này được kích hoạt, trang sẽ bắt đầu tự cuộn (nếu chưa bị dừng vĩnh viễn)."
        },
        toast: {
            copySuccess: "Đã sao chép thành công!",
            copyError: "Không thể sao chép",
            popupOpened: "Đã mở popup",
            dropboxOpened: "Đã mở dropbox",
            lightboxOpened: "Đã mở lightbox",
            albumModalOpened: "Đã mở album",
            calendarOpened: "Đã mở lịch",
            navigated: "Đã chuyển đến section",
            linkOpened: "Đang mở liên kết...",
            callStarted: "Đang mở ứng dụng gọi điện...",
            emailOpened: "Đang mở ứng dụng email...",
            elementToggled: "Đã cập nhật hiển thị",
            valueSet: "Đã điền giá trị"
        }
    })
}, 573438, e => {
    e.v({
        title: "Quản lý File",
        fileTypes: {
            image: "Hình ảnh",
            video: "Video",
            audio: "Âm thanh",
            document: "Tài liệu",
            font: "Font",
            icon: "Icon",
            other: "Khác"
        },
        tagFilter: {
            label: "Lọc theo tag:",
            loading: "Đang tải...",
            searchPlaceholder: "Tìm kiếm tag...",
            all: "Tất cả",
            showMore: "+ Xem thêm {{count}} tag",
            collapse: "- Thu gọn",
            currentTag: "Tag: {{tag}}"
        },
        actions: {
            selectAll: "Chọn tất cả",
            deselectAll: "Bỏ chọn tất cả",
            selectedCount: "Đã chọn {{count}} file",
            delete: "Xóa đã chọn",
            deleting: "Đang xóa..."
        },
        loading: "Đang tải danh sách file...",
        error: "Lỗi khi tải file: {{message}}",
        noFiles: "Chưa có file nào thuộc loại này.",
        allLoaded: "Đã hiển thị tất cả files",
        deleteConfirm: {
            message: "Bạn có chắc chắn muốn xóa {{count}} file đã chọn? Hành động này không thể hoàn tác.",
            confirmLabel: "Xóa",
            error: "Vui lòng chọn ít nhất một file để xóa.",
            errorDeleting: "Có lỗi xảy ra khi xóa file. Vui lòng thử lại."
        }
    })
}, 952558, e => {
    e.v({
        title: {
            prefix: "Chọn hoặc Tải lên",
            image: "Hình ảnh",
            video: "Video",
            audio: "Âm thanh",
            document: "Tài liệu",
            font: "Font",
            file: "File"
        },
        supportedFormats: {
            image: "Hỗ trợ: JPG, PNG, GIF, WebP, SVG, BMP, TIFF",
            video: "Hỗ trợ: MP4, MOV, AVI, WMV, WebM, OGG, 3GP",
            audio: "Hỗ trợ: MP3, WAV, OGG, MIDI, WebM, AAC",
            document: "Hỗ trợ: PDF, DOC, DOCX, XLS, XLSX, TXT, CSV",
            font: "Hỗ trợ: TTF, OTF, WOFF, WOFF2",
            all: "Hỗ trợ tất cả các loại file"
        },
        tabs: {
            select: "Chọn từ Thư viện",
            upload: "Tải lên Mới",
            storage: "Mua thêm ảnh"
        },
        loading: "Đang tải danh sách file...",
        error: "Lỗi khi tải file: {{message}}",
        noFiles: "Chưa có file nào được tải lên.",
        tagFilter: {
            label: "Lọc theo tag:",
            searchPlaceholder: "Tìm kiếm tag...",
            all: "Tất cả",
            showMore: "+ Xem thêm {{count}} tag",
            collapse: "- Thu gọn",
            noFilesWithTag: 'Không có file nào với tag "{{tag}}"'
        },
        upload: {
            clickToSelect: "Nhấn để chọn file tải lên",
            multipleSupport: "Hỗ trợ chọn nhiều file cùng lúc",
            uploading: "Đang tải lên file...",
            filesSelected: "{{count}} file được chọn:",
            fileSelected: "File được chọn:",
            total: "Tổng: {{size}} MB",
            tagLabel: "Tag (tùy chọn)",
            tagPlaceholder: "Nhập tag cho file (ví dụ: asset, profile-image, ...)",
            tagHelp: "Tag giúp phân loại và tìm kiếm file dễ dàng hơn.",
            tagHelpMultiple: " Tag này sẽ được áp dụng cho tất cả {{count}} file được chọn.",
            tagHelpSingle: " Bạn có thể chọn từ danh sách có sẵn hoặc nhập tag mới.",
            uploadButton: "Tải lên",
            uploadMultiple: "Tải lên {{count}} file",
            cancel: "Hủy",
            successSingle: "✓ Tải lên thành công!",
            successMultiple: "✓ Tải lên {{count}} file thành công!",
            failedCount: "✗ {{count}} file tải lên thất bại:",
            retrying: "Đang thử lại...",
            retry: "Thử lại {{count}} file",
            switchToLibrary: 'Bạn có thể chuyển qua tab "Chọn từ Thư viện" để sử dụng file đã tải lên.'
        },
        validation: {
            fileTooLarge: "File quá lớn. Kích thước tối đa cho {{extension}} là {{maxSize}} (file hiện tại: {{currentSize}})",
            unsupportedType: "Loại file không được hỗ trợ. Vui lòng chọn file: {{formats}}",
            invalid: "File không hợp lệ"
        },
        preview: {
            browserNotSupport: "Trình duyệt của bạn không hỗ trợ {{type}}."
        },
        multiSelect: {
            selected: "Đã chọn: {{count}}/{{max}} file",
            deselectAll: "Bỏ chọn tất cả",
            confirmHint: 'Bấm "Xác nhận" để chọn {{count}} file này',
            confirm: "Xác nhận ({{count}})",
            close: "Đóng"
        },
        infiniteScroll: {
            endMessage: "Đã hiển thị tất cả file"
        }
    })
}, 449051, e => {
    e.v({
        title: "Chọn hoặc Tải lên Font chữ",
        tabs: {
            select: "Chọn từ Thư viện",
            upload: "Tải lên Font mới"
        },
        select: {
            loading: "Đang tải danh sách font...",
            error: "Lỗi khi tải font: {{message}}",
            empty: "Chưa có font nào được tải lên.",
            searchPlaceholder: "Tìm kiếm font theo tên...",
            noResults: 'Không tìm thấy font nào phù hợp với "{{searchTerm}}"',
            previewText: "meHappy",
            previewNumbers: "0123456789 !@#$%^&*()",
            allLoaded: "Đã hiển thị tất cả font"
        },
        upload: {
            clickToSelect: "Nhấn để chọn font tải lên",
            supportedFormats: "Hỗ trợ định dạng TTF, OTF, WOFF, WOFF2",
            uploading: "Đang tải lên...",
            success: "Tải lên thành công!",
            successHint: 'Bạn có thể chuyển qua tab "Chọn từ Thư viện" để sử dụng font này.'
        },
        error: {
            title: "Error Loading Font Selector",
            message: "There was a problem loading the font selector.",
            close: "Close"
        }
    })
}, 470804, e => {
    e.v({
        selectedCount: "{{count}} phần tử đã chọn",
        createGroup: "Tạo nhóm",
        clearSelection: "Hủy chọn",
        ungroup: "Hủy nhóm",
        toast: {
            nestedGroupNotAllowedTitle: "Không thể tạo nhóm",
            nestedGroupNotAllowedDescription: "Không thể tạo nhóm lồng nhau. Vui lòng hủy nhóm hiện tại trước."
        }
    })
}, 63380, e => {
    e.v({
        title: "Chọn biểu tượng",
        tabs: {
            fontawesome: "Icons hệ thống",
            assets: "Mẫu có sẵn",
            upload: "Upload SVG"
        },
        assets: {
            noAssets: "Chưa có mẫu icon nào"
        },
        search: {
            placeholder: "Tìm kiếm biểu tượng...",
            noResults: "Không tìm thấy biểu tượng nào"
        },
        upload: {
            button: "Nhấn để chọn SVG file tải lên",
            uploading: "Đang tải lên SVG...",
            format: "Hỗ trợ định dạng SVG, tối đa 2MB",
            uploadedTitle: "SVG Icons đã tải lên",
            allLoaded: "Đã hiển thị tất cả icons"
        },
        footer: {
            showing: "Hiển thị {{count}} biểu tượng",
            showingWithSearch: 'Hiển thị {{count}} biểu tượng cho "{{term}}"'
        },
        errors: {
            invalidFileType: "Vui lòng chọn một file SVG",
            fileTooLarge: "File SVG phải nhỏ hơn 2MB",
            uploadError: "Lỗi khi tải lên SVG",
            loadError: "Lỗi khi tải SVG"
        }
    })
}, 504426, e => {
    e.v({
        closePopup: "Đóng popup",
        closeDropbox: "Đóng dropbox",
        dragToMove: "Kéo để di chuyển",
        bringForward: "Đưa lên trước",
        sendBackward: "Đưa xuống sau",
        duplicate: "Nhân bản phần tử",
        changeImage: "Thay đổi hình ảnh",
        delete: "Xóa phần tử",
        hideToolbar: "Ẩn thanh công cụ",
        showToolbar: "Hiện thanh công cụ",
        moreOptions: "Thêm tùy chọn",
        lockElement: "Khoá phần tử",
        unlockElement: "Mở khoá phần tử",
        hideElement: "Ẩn phần tử",
        showElement: "Hiện phần tử",
        syncFromMobile: "Đồng bộ từ Mobile",
        syncFromDesktop: "Đồng bộ từ Desktop",
        copyElement: "Sao chép phần tử",
        saveTemplate: "Lưu mẫu phần tử",
        unlockToDelete: "Mở khoá để xoá phần tử này",
        quickAdd: "Thêm nhanh",
        hidden: "Đang ẩn",
        visible: "Hiển thị"
    })
}, 114573, e => {
    e.v({
        show: "Hiện",
        hide: "Ẩn",
        unlock: "Mở khóa",
        lock: "Khóa",
        bringForward: "Lên trước",
        sendBackward: "Xuống sau",
        duplicate: "Nhân bản",
        saveTemplate: "Lưu mẫu",
        syncFromMobile: "Từ Mobile",
        syncFromDesktop: "Từ Desktop",
        closePopup: "Đóng popup",
        closeDropbox: "Đóng dropbox",
        delete: "Xóa"
    })
}, 878680, e => {
    e.v({
        title: "Cài đặt thông báo lời chúc",
        cancel: "Hủy",
        save: "Lưu cài đặt",
        premium: "Premium",
        enable: "Bật/Tắt thông báo lời chúc:",
        enableLabel: "Bật thông báo lời chúc",
        disableLabel: "Tắt thông báo lời chúc",
        enableDescription: "Tắt tính năng này nếu trang không có lời chúc hoặc để tắt trong xem trước template",
        displayDuration: "Thời gian hiển thị (s):",
        seconds: "giây",
        size: "Kích cỡ:",
        sizePlaceholder: "Chọn kích cỡ",
        sizeSmall: "Bé",
        sizeMedium: "Vừa",
        sizeLarge: "Lớn",
        iconDisplay: "Icon hiển thị:",
        showIcon: "Hiển thị icon",
        useDefaultIcon: "Sử dụng icon mặc định",
        iconUrlPlaceholder: "Nhập URL icon hoặc chọn từ thư viện",
        selectIcon: "Chọn icon",
        iconColor: "Màu icon"
    })
}, 700473, e => {
    e.v({
        title: "Cài đặt Hiệu ứng Rơi",
        effectType: {
            label: "Loại hiệu ứng",
            snow: "Hiệu ứng bông tuyết",
            heart: "Hiệu ứng trái tim",
            custom: "Hiệu ứng tuỳ chọn"
        },
        icons: {
            label: "Biểu tượng",
            add: "Thêm biểu tượng",
            remove: "Xóa biểu tượng"
        },
        fallMode: {
            label: "Kiểu rơi",
            straight: "Rơi thẳng",
            wobble: "Rơi lắc lư",
            tumble: "Rơi lộn nhào",
            float: "Bay lơ lửng",
            description: {
                straight: "Các hạt rơi thẳng xuống không xoay",
                wobble: "Các hạt lắc lư nhẹ khi rơi",
                tumble: "Các hạt xoay tròn và lộn nhào khi rơi",
                float: "Các hạt bay lơ lửng nhẹ nhàng"
            }
        },
        preview: "Xem trước:",
        iconColor: "Màu biểu tượng",
        customIcon: {
            label: "Chọn biểu tượng tuỳ chọn",
            button: "Chọn biểu tượng"
        },
        coverageLevel: "Mức độ phủ",
        fallSpeed: "Tốc độ rơi",
        minSize: "Kích thước nhỏ nhất",
        maxSize: "Kích thước lớn nhất",
        tooltips: {
            coverageLevel: "Điều chỉnh mức độ phủ của hiệu ứng",
            fallSpeed: "Điều chỉnh tốc độ rơi của các hạt",
            minSize: "Kích thước nhỏ nhất của các hạt (px)",
            maxSize: "Kích thước lớn nhất của các hạt (px)"
        },
        buttons: {
            remove: "Xóa hiệu ứng",
            cancel: "Hủy",
            apply: "Áp dụng",
            preview: "Xem trước"
        },
        confirmDelete: {
            message: "Bạn có chắc chắn muốn xóa tất cả hiệu ứng không?",
            confirm: "Xóa"
        },
        errors: {
            noIcon: "Vui lòng chọn biểu tượng để sử dụng hiệu ứng.",
            title: "Lỗi"
        }
    })
}, 609572, e => {
    e.v({
        pinElement: "Ghim phần tử",
        enablePinning: "Bật ghim phần tử",
        position: "Vị trí",
        selectPosition: "Chọn vị trí",
        positions: {
            auto: "Trên dưới tự động",
            topLeft: "Trên cùng trái",
            topCenter: "Trên cùng giữa",
            topRight: "Trên cùng phải",
            middleLeft: "Giữa trái",
            middleRight: "Giữa phải",
            bottomLeft: "Dưới cùng trái",
            bottomCenter: "Dưới cùng giữa",
            bottomRight: "Dưới cùng phải"
        },
        stickyDistanceFromTop: "Khoảng cách dính từ trên (px)",
        distanceFromTop: "Khoảng cách từ trên (px)",
        distanceFromBottom: "Khoảng cách từ dưới (px)",
        distanceFromLeft: "Khoảng cách từ trái (px)",
        distanceFromRight: "Khoảng cách từ phải (px)"
    })
}, 251746, e => {
    e.v({
        resizeSectionHeight: "Thay đổi chiều cao section",
        addNewSectionBelow: "Thêm section mới bên dưới",
        addSection: "Thêm section"
    })
}, 915667, e => {
    e.v({
        show: "Hiện",
        hide: "Ẩn",
        unlock: "Mở khóa",
        lock: "Khóa",
        moveUp: "Lên trước",
        moveDown: "Xuống sau",
        addNew: "Thêm mới",
        duplicate: "Nhân bản",
        saveTemplate: "Lưu mẫu",
        delete: "Xóa",
        fromMobile: "Từ Mobile",
        fromDesktop: "Từ Desktop"
    })
}, 163404, e => {
    e.v({
        label: "🎯 Chọn vùng"
    })
}, 844955, e => {
    e.v({
        title: "Thông tin khi chia sẻ",
        whatIsSeo: "Người nhận sẽ thấy gì khi mở hoặc chia sẻ link?",
        seoExplanation: "Khi bạn gửi link thiệp qua Zalo, Facebook, Messenger..., phần xem trước sẽ hiện tiêu đề, mô tả và ảnh. Bạn có thể chỉnh để người nhận dễ hiểu hơn trước khi mở link.",
        cancel: "Hủy",
        save: "Lưu cài đặt",
        error: "Lỗi",
        titleRequired: "Vui lòng nhập tiêu đề hiển thị.",
        descriptionRequired: "Vui lòng nhập mô tả ngắn.",
        pageTitle: "Tiêu đề hiển thị *:",
        pageTitlePlaceholder: "Ví dụ: Đám cưới Minh & Lan",
        pageTitleHelper: "{{count}}/200 ký tự.",
        guestTitle: "Tiêu đề cho từng khách (tùy chọn):",
        guestTitlePlaceholder: "Ví dụ: Thiệp mời cho {guestName}",
        guestTitleHelper: "{{count}}/200 ký tự. Có thể dùng {guestName}, {TenChuRe}, {TenCoDau}, {Address}, {ThongTinKhac}.",
        guestTitleExample: "Ví dụ: Thiệp cưới {TenChuRe} & {TenCoDau} dành cho {guestName}",
        pageDescription: "Mô tả ngắn *:",
        pageDescriptionPlaceholder: "Ví dụ: Hân hạnh mời bạn đến chung vui cùng gia đình chúng tôi.",
        pageDescriptionHelper: "{{count}}/160 ký tự.",
        guestDescription: "Mô tả cho từng khách (tùy chọn):",
        guestDescriptionPlaceholder: "Ví dụ: Kính mời {guestName} tham dự...",
        guestDescriptionHelper: "{{count}}/160 ký tự. Có thể dùng {guestName}, {TenChuRe}, {TenCoDau}, {Address}, {ThongTinKhac}.",
        guestDescriptionExample: "Ví dụ: Kính mời {guestName} tham dự đám cưới {TenChuRe} và {TenCoDau}",
        keywords: "Từ khóa (tùy chọn):",
        keywordPlaceholder: "Nhập từ khóa rồi nhấn Enter",
        addKeyword: "Thêm",
        socialImage: "Ảnh khi chia sẻ:",
        socialImagePlaceholder: "Dán link ảnh hoặc chọn từ thư viện",
        selectImage: "Chọn hình ảnh",
        socialImageHelper: "Nên dùng ảnh ngang 1200x630px.",
        favicon: "Biểu tượng trên tab trình duyệt (favicon):",
        faviconPlaceholder: "Dán link biểu tượng hoặc chọn từ thư viện",
        selectIcon: "Chọn biểu tượng",
        faviconHelper: "Nên dùng PNG/ICO 32x32 hoặc 16x16.",
        password: "Khóa trang bằng mật khẩu (tùy chọn):",
        passwordPlaceholder: "Nhập mật khẩu, hoặc để trống nếu không cần",
        passwordHelper: "Nếu đặt mật khẩu, người xem cần nhập để truy cập.",
        socialImageAlt: "Social Media Preview",
        faviconAlt: "Favicon Preview"
    })
}, 875719, e => {
    e.v({
        selectedFont: "Font đang chọn:",
        selectFromLibrary: "Chọn từ Thư viện"
    })
}, 250757, e => {
    e.v({
        title: "Cài đặt toàn trang",
        cancel: "Hủy",
        save: "Lưu",
        error: "Lỗi",
        saveError: "Không thể lưu cài đặt viewport. Vui lòng thử lại.",
        mobileWidth: "Chiều rộng Mobile",
        desktopWidth: "Chiều rộng Desktop",
        mode: "Mode",
        mobileBackground: "Nền cho Mobile",
        custom: "Tùy chỉnh",
        preset: "Preset",
        customPlaceholder: "Ví dụ: {{example}}",
        customHelper: "Nhập chiều rộng (ví dụ: {{examples}})",
        mobileOnlyConfirmTitle: "Xác nhận bật chế độ Mobile Only",
        mobileOnlyConfirmMessage: 'Bạn có chắc chắn muốn bật chế độ "Chỉ Mobile"?\n\nKhi bật:\n• Editor sẽ chỉ hiển thị giao diện mobile\n• Không thể chuyển sang chế độ desktop\n• Tính năng đồng bộ giữa mobile và desktop vẫn hoạt động bình thường\n• Nội dung desktop vẫn được duy trì và có thể đồng bộ\n\nNhấn Đồng ý để tiếp tục hoặc Hủy để hủy.',
        confirm: "Đồng ý",
        bulkFontChange: "Đổi font toàn trang",
        bulkFontChangeHint: "Chọn font để áp dụng cho tất cả phần tử văn bản trong trang",
        selectFont: "Chọn font...",
        fontApplied: "Đã áp dụng font",
        fontAppliedCount: "Đã thay đổi font cho {{count}} phần tử"
    })
}, 994650, e => {
    e.v({
        title: "Làm thiệp nhanh",
        loading: "Đang tải thông tin...",
        infoNotice: {
            withData: "Thông tin được tải từ hệ thống. Bạn có thể chỉnh sửa và áp dụng vào thiết kế.",
            withoutData: "Nhập thông tin và áp dụng vào các trường đã được đánh dấu trong thiết kế."
        },
        uploadSection: {
            description: "Tải lên file CSV hoặc Excel để điền thông tin tự động",
            quickImport: "Nhập nhanh từ file:",
            quickActions: "Tác vụ nhanh:"
        },
        sections: {
            basic: "Thông tin cơ bản",
            contact: "Liên hệ & Mô tả",
            family: "Thông tin gia đình",
            bank: "Thông tin ngân hàng",
            datetime: "Ngày tháng",
            social: "Domain & Social Media",
            events: "Sự kiện"
        },
        sectionsShort: {
            basic: "Cơ bản",
            contact: "Liên hệ",
            family: "Gia đình",
            bank: "Ngân hàng",
            datetime: "Ngày tháng",
            social: "MXH",
            events: "Sự kiện"
        },
        fields: {
            groom: "Chú rể",
            bride: "Cô dâu",
            date: "Ngày cưới",
            location: "Địa điểm",
            phone: "Số điện thoại",
            address: "Địa chỉ",
            description: "Mô tả",
            father: "Cha",
            mother: "Mẹ",
            bankName: "Tên ngân hàng",
            accountNumber: "Số tài khoản",
            accountHolder: "Chủ tài khoản",
            qrCode: "QR Code",
            hour: "Giờ",
            dayOfWeek: "Thứ",
            day: "Ngày",
            month: "Tháng",
            year: "Năm",
            domain: "Domain",
            subDomain: "Sub Domain",
            socialLink1: "Link MXH 1",
            socialLink2: "Link MXH 2",
            socialLink3: "Link MXH 3",
            solarDateTime: "Ngày giờ (Dương lịch)",
            lunarTime: "Ngày giờ (Âm lịch)",
            eventTitle: "Tiêu đề sự kiện",
            eventDateTime: "Ngày giờ sự kiện",
            eventVenueLabel: "Nhãn địa điểm",
            eventLocation: "Địa chỉ",
            eventMapUrl: "Link chỉ đường",
            eventGiftUrl: "Link mừng cưới"
        },
        placeholders: {
            groom: "Nhập tên chú rể",
            bride: "Nhập tên cô dâu",
            date: "VD: 01/01/2024",
            location: "Nhập địa điểm tổ chức",
            groomPhone: "Nhập SĐT chú rể",
            bridePhone: "Nhập SĐT cô dâu",
            groomAddress: "Nhập địa chỉ chú rể",
            brideAddress: "Nhập địa chỉ cô dâu",
            groomDescription: "Mô tả về chú rể",
            brideDescription: "Mô tả về cô dâu",
            groomFather: "Tên cha chú rể",
            groomMother: "Tên mẹ chú rể",
            brideFather: "Tên cha cô dâu",
            brideMother: "Tên mẹ cô dâu",
            bankName: "VD: Vietcombank",
            accountNumber: "Nhập STK",
            accountHolder: "Tên chủ TK",
            qrCodeUrl: "URL hình ảnh QR code",
            hour: "VD: 10:00",
            dayOfWeek: "VD: Thứ Bảy",
            day: "VD: 15",
            month: "VD: 12",
            year: "VD: 2024",
            lunarTime: "VD: 15:28 Thứ 4 ngày 10 tháng 12 năm Giáp Thìn",
            domain: "VD: example.com",
            subDomain: "VD: wedding.example.com",
            socialLink: "Facebook, Instagram, etc.",
            eventTitle: "VD: Tiệc Cưới Nhà Trai",
            eventVenueLabel: "VD: Tại Tư gia nhà Trai:",
            eventLocation: "VD: Hoàn Kiếm, Hà Nội",
            eventMapUrl: "VD: https://maps.google.com/...",
            eventGiftUrl: "VD: https://momo.vn/..."
        },
        labels: {
            groomParents: "Bố mẹ chú rể",
            brideParents: "Bố mẹ cô dâu",
            solarCalendar: "Dương lịch",
            lunarCalendar: "Âm lịch",
            groomSolarCalendar: "Ngày giờ Chú rể (Dương lịch)",
            brideSolarCalendar: "Ngày giờ Cô dâu (Dương lịch)",
            groomSocialLinks: "Social Links - Chú rể",
            brideSocialLinks: "Social Links - Cô dâu",
            eventsList: "Danh sách sự kiện",
            eventIndex: "Sự kiện {{index}}"
        },
        buttons: {
            close: "Đóng",
            apply: "Áp dụng thông tin",
            select: "Chọn",
            uploadFile: "Tải file lên",
            downloadTemplate: "Tải mẫu",
            quickReplaceImages: "Thay ảnh nhanh",
            addEvent: "Thêm sự kiện"
        },
        quickGuide: {
            title: "3 bước làm thiệp nhanh",
            step1: "1. Chọn mục cần sửa bên dưới",
            step2: "2. Nhập thông tin cơ bản của bạn",
            step3: '3. Nhấn "Áp dụng thông tin" để hoàn tất'
        },
        messages: {
            noEvents: "Chưa có sự kiện nào. Hãy thêm sự kiện để selector tự động sinh card."
        },
        toast: {
            success: {
                title: "Thành công",
                description: "Đã áp dụng thông tin vào các trường!"
            },
            uploadSuccess: {
                title: "Đã nhập thông tin từ file!"
            },
            uploadError: {
                title: "Lỗi đọc file",
                invalidFormat: "Chỉ hỗ trợ file CSV hoặc Excel",
                emptyFile: "File rỗng hoặc không có dữ liệu"
            }
        },
        mapFeature: {
            featureName: "Bản đồ cơ bản"
        }
    })
}, 830597, e => {
    e.v({
        title: "Cảnh báo chỉnh sửa đồng thời",
        activeUsers: "{{count}} người đang chỉnh sửa",
        pageBeingEdited: "Trang này hiện đang được chỉnh sửa bởi {{count}} người khác",
        templateBeingEdited: "Template này hiện đang được chỉnh sửa bởi {{count}} người khác",
        continueQuestion: "Bạn có muốn tiếp tục chỉnh sửa không?",
        warningNote: "Lưu ý:",
        warningMessagePage: "Nếu tiếp tục, nhiều người sẽ cùng chỉnh sửa trang này. Điều này có thể dẫn đến xung đột dữ liệu và mất thay đổi.",
        warningMessageTemplate: "Nếu tiếp tục, nhiều người sẽ cùng chỉnh sửa template này. Điều này có thể dẫn đến xung đột dữ liệu và mất thay đổi.",
        risk1: "Các thay đổi có thể bị ghi đè lẫn nhau",
        risk2: "Một số chỉnh sửa có thể bị mất",
        risk3: "Khuyến nghị chờ người khác hoàn thành trước khi chỉnh sửa",
        cancelButton: "Quay lại",
        acceptButton: "Chấp nhận"
    })
}, 54372, e => {
    e.v({
        title: "Chọn trang để tải xuống",
        description: "Chọn trang cụ thể hoặc tải xuống tất cả trang cùng lúc.",
        downloadAll: "Tải xuống tất cả ({{count}} trang)",
        download: "Tải",
        page: "Trang {{number}}",
        close: "Đóng",
        noPages: "Không tìm thấy trang nào để tải xuống.",
        success: {
            title: "Thành công",
            singlePage: 'Đã tải xuống "{{pageName}}" thành công!',
            allPages: "Đã tải xuống tất cả {{count}} trang thành công!"
        },
        error: {
            title: "Lỗi",
            singlePage: 'Không thể tải xuống "{{pageName}}". Vui lòng thử lại.',
            allPages: "Không thể tải xuống tất cả trang. Vui lòng thử lại."
        }
    })
}, 960019, e => {
    e.v({
        copyIdSuccess: "Đã sao chép!",
        copyId: "Sao chép ID",
        editElementId: "Chỉnh sửa ID phần tử",
        loadingSettings: "Đang tải cài đặt...",
        retryingAttempt: "Đang thử lại lần {{count}}/3",
        failedToLoadSettings: "Không thể tải cài đặt",
        refreshToRetry: "Vui lòng refresh trang (F5) để thử lại",
        initializing: "Đang khởi tạo...",
        pleaseWait: "Vui lòng đợi...",
        selectElementToEdit: "Chọn phần tử để bắt đầu chỉnh sửa",
        premiumElement: "Phần tử Premium",
        unlockToEditBranding: "Mở khoá tính năng để chỉnh sửa hoặc xoá logo meWedding",
        unlockFeature: "Mở khoá ngay"
    })
}, 507705, e => {
    e.v({
        ariaLabel: "Thanh công cụ chỉnh sửa"
    })
}, 488480, e => {
    e.v({
        header: {
            title: "Quản lý hoặc thêm phần tử trong trang"
        },
        tabs: {
            basic: "Cơ bản",
            file: "File",
            popup: "Popup",
            dropbox: "Dropbox",
            albumModal: "Album Modal",
            quickActions: "QuickActions"
        },
        mobile: {
            advanced: "Nâng cao"
        },
        tabGuide: {
            basic: "Tab Cơ bản chứa các phần tử thiết kế cơ bản như: container, văn bản, hình ảnh, nút bấm, icon, đường kẻ, form lời chúc, RSVP, lịch, đếm ngược và các phần tử HTML tùy chỉnh.",
            file: "Tab File cho phép bạn quản lý và chèn các file đã upload như hình ảnh, video, âm thanh, tài liệu và font chữ vào thiết kế của bạn.",
            popup: "Tab Popup cho phép tạo và quản lý các cửa sổ popup tùy chỉnh. Popup có thể được kích hoạt bằng các sự kiện như click vào nút hoặc tự động mở.",
            dropbox: "Tab Dropbox cho phép tạo các tooltip/dropdown xuất hiện khi hover hoặc click vào một phần tử. Phù hợp cho menu, thông tin chi tiết hoặc nội dung ẩn.",
            albumModal: "Tab Album Modal cho phép tạo modal hiển thị album ảnh dạng gallery. Modal này có thể được kích hoạt từ các phần tử khác thông qua sự kiện.",
            quickActions: "Tab QuickActions cho phép tạo nút hành động nhanh nổi (floating action button) với nhiều nút phụ. Phù hợp cho các tính năng như gọi điện, nhắn tin, chỉ đường."
        },
        elements: {
            container: "Khối/ Hộp",
            text: "Văn bản",
            guestText: "Tên khách",
            button: "Nút bấm",
            form: "Form",
            image: "Hình ảnh",
            album: "Album ảnh",
            icon: "Biểu tượng",
            line: "Đường kẻ",
            video: "Video",
            calendar: "Lịch",
            eventcards: "Cụm sự kiện",
            countdown: "Đếm ngược",
            html: "HTML",
            page: "Page",
            section: "Section",
            weddingCard: "Thiệp mời",
            giftBox: "Hộp mừng cười",
            wishlist: "Lời chúc",
            other: "Khác",
            audio: "Âm thanh",
            document: "Tài liệu",
            font: "Font",
            createNew: "Tạo mới",
            popup: "Popup"
        },
        actions: {
            addNew: "Thêm mới",
            delete: "Xóa mẫu",
            deletePopup: "Xóa Popup",
            deleteDropbox: "Xóa Dropbox",
            deleteAlbumModal: "Xóa Album Modal",
            deleteQuickActions: "Xóa QuickActions",
            deleteTemplate: "Xóa mẫu popup",
            deleteDropboxTemplate: "Xóa mẫu dropbox",
            deleteQuickActionsTemplate: "Xóa mẫu QuickActions",
            deleteAsset: "Xóa mẫu"
        },
        tags: {
            selectGroup: "Chọn nhóm:",
            searchGroup: "Tìm kiếm nhóm...",
            all: "Tất cả",
            showMore: "Xem thêm",
            collapse: "Thu gọn",
            tag: "tag"
        },
        assetGroups: {
            private: "Mẫu của bạn",
            public: "Mẫu hệ thống"
        },
        messages: {
            loading: "Loading ...",
            loadingFiles: "Đang tải file...",
            loadingContent: "Đang tải nội dung...",
            pleaseWait: "Vui lòng đợi trong giây lát",
            noTemplates: "Không có mẫu nào trong danh mục này",
            noTemplatesInGroup: "Không có mẫu nào trong nhóm",
            noFiles: "Không có file nào trong danh mục này",
            noFilesInGroup: "Không có file nào trong nhóm",
            noAssets: "Không có mẫu nào trong danh mục này",
            noAssetsInGroup: "Không có mẫu nào trong nhóm",
            noName: "Không có tên",
            assetLoaded: "Đã thêm",
            intoEditor: "vào editor",
            noPopups: "Chưa có popup nào. Tạo popup mới để bắt đầu.",
            noDropboxes: "Chưa có dropbox nào. Tạo dropbox mới để bắt đầu.",
            noAlbumModals: "Chưa có Album Modal nào. Tạo Album Modal mới để bắt đầu.",
            noQuickActions: "Chưa có QuickActions nào. Tạo QuickActions mới để bắt đầu.",
            loadingPopupTemplates: "Đang tải popup mẫu...",
            loadingDropboxTemplates: "Đang tải dropbox mẫu...",
            loadingQuickActionsTemplates: "Đang tải QuickActions mẫu...",
            eventCardsLimitTitle: "Đã đạt giới hạn Cụm sự kiện",
            eventCardsLimitDescription: "Mỗi nền tảng chỉ được thêm tối đa 1 Cụm sự kiện (EventCards)."
        },
        fileTab: {
            inPage: "Trong trang",
            templates: "Mẫu",
            emptyPopup: "Popup trống",
            emptyPopupDesc: "Tạo popup mới với nội dung trống",
            emptyDropbox: "Dropbox trống",
            emptyDropboxDesc: "Tạo dropbox mới với nội dung trống",
            emptyQuickActions: "QuickActions trống",
            emptyQuickActionsDesc: "Tạo QuickActions mới với nội dung trống",
            popupTemplate: "Popup mẫu",
            dropboxTemplate: "Dropbox mẫu",
            quickActionsTemplate: "QuickActions mẫu",
            clickToAdd: "Nhấn để thêm popup mẫu",
            clickToAddDropbox: "Nhấn để thêm dropbox mẫu",
            clickToAddQuickActions: "Nhấn để thêm QuickActions mẫu",
            dropboxInfo: "Dropbox hoạt động như tooltip xuất hiện khi có sự kiện kích hoạt",
            albumModalInfo: "Album Modal cho phép bạn tạo modal hiển thị album ảnh có thể được kích hoạt từ các thành phần khác thông qua sự kiện.",
            quickActionsInfo: "QuickActions là nút hành động nhanh nổi cho phép người dùng thực hiện các hành động quan trọng một cách nhanh chóng",
            quickActionsDetailInfo: "QuickActions cho phép bạn tạo nút hành động nhanh nổi với nhiều action button có thể được cấu hình để thực hiện các sự kiện khác nhau. Bạn có thể tạo nhiều QuickActions và đặt chúng ở các vị trí khác nhau trên trang.",
            actionButtons: "action button(s)",
            position: "Position:",
            defaultPosition: "bottom-right (default)",
            asset: "Mẫu"
        },
        positions: {
            topLeft: "Trên cùng trái",
            topCenter: "Trên cùng giữa",
            topRight: "Trên cùng phải",
            middleLeft: "Giữa trái",
            middleRight: "Giữa phải",
            bottomLeft: "Dưới cùng trái",
            bottomCenter: "Dưới cùng giữa",
            bottomRight: "Dưới cùng phải"
        },
        errors: {
            invalidAsset: "Invalid Asset Structure",
            circularReference: "Asset có circular reference(s). Cần save lại asset.",
            incompleteAsset: "Incomplete Asset",
            missingNodes: "Asset có",
            nodeMissing: "node bị thiếu",
            loadFailed: "Load Asset Failed",
            cannotLoad: "Không thể load asset từ thư viện:",
            cannotLoadSection: "Không thể load Section asset từ thư viện:",
            cannotLoadPage: "Không thể load Page asset từ thư viện:",
            processingError: "Lỗi khi xử lý asset data:",
            invalidPageAsset: "Invalid Page Asset",
            pageCircularRef: "Page asset có circular reference(s). Asset này cần được save lại.",
            incompleteSection: "Incomplete Section",
            sectionMissingNodes: "Section asset có",
            and: "và",
            otherNodes: "node(s) khác",
            otherCircularRefs: "circular ref(s) khác",
            needResave: "Asset này cần được save lại để fix structure."
        },
        confirmations: {
            deleteAssetMessage: 'Bạn có chắc chắn muốn xóa mẫu "{{name}}"? Hành động này không thể hoàn tác.',
            deleteNodeMessage: "Bạn có chắc chắn muốn xóa {{type}} này không?",
            deleteButton: "Xóa"
        },
        guideModal: {
            title: "Hướng dẫn sử dụng",
            guide: "Hướng dẫn",
            images: "Hình ảnh minh họa",
            noImages: "Chưa có hình ảnh minh họa",
            understood: "Đã hiểu"
        }
    })
}, 921616, e => {
    e.v(JSON.parse('{"backButton":"Quay về","addElements":"Thêm / Quản lý phần tử","layer":"Layer","undo":"Hoàn tác","undoShortcut":"Undo (Ctrl+Z)","redo":"Làm lại","redoShortcut":"Redo (Ctrl+Shift+Z or Ctrl+Y)","settings":"Cài đặt","effectsSettings":"Cài đặt hiệu ứng","audioSettings":"Cài đặt âm thanh nền","customHtmlSettings":"Cài đặt HTML tùy chỉnh","seoSettings":"Cài đặt SEO","guestSeoSettings":"Cài đặt SEO khách mời","notificationSettings":"Cài đặt thông báo lời chúc","customEffectsSettings":"Cài đặt hiệu ứng tùy chỉnh","openingEffectSettings":"Hiệu ứng mở thiệp","fileManagement":"Quản lý File","viewportSettings":"Cài đặt toàn trang","autoFillInfo":"Làm thiệp nhanh","quickBuild":"Làm thiệp nhanh","quickBuildChooser":{"title":"Làm thiệp nhanh","description":"Chọn thao tác bạn muốn thực hiện trước khi bắt đầu chỉnh nhanh.","personalInfo":"Thông tin cá nhân","quickReplace":"Thay ảnh nhanh"},"themeManager":"Màu sắc chủ đạo","themeManagerSelectDesc":"Chọn một bộ màu để áp dụng cho toàn bộ trang.","addPalette":"Thêm bộ màu","editPalette":"Chỉnh sửa bộ màu","savePalette":"Lưu bộ màu","deletePaletteConfirm":"Bạn có chắc chắn muốn xóa bộ màu này không?","paletteName":"Tên bộ màu","desktopEdit":"Desktop - Edit desktop version","desktopLabel":"Máy tính","mobileEdit":"Mobile - Edit mobile version","mobileLabel":"Điện thoại","save":"Lưu","edit":"Sửa","publish":"Xuất bản","unpublish":"Hủy xuất bản","unpublishPage":"Hủy xuất bản trang","publishPage":"Xuất bản trang","unpublishTemplate":"Hủy xuất bản template","publishTemplate":"Xuất bản template","publishSocialGate":{"title":"Trước khi xuất bản, hãy ủng hộ MeHappy","description":"Để mở khóa xuất bản, bạn vui lòng ghé một kênh social của MeHappy rồi chờ {{seconds}} giây.","freeNotice":"Người dùng Free cần tham quan social để mở khóa xuất bản.","followOnlyDescription":"Trang của bạn đã được xuất bản. Nếu tiện, hãy ghé ủng hộ MeHappy ở các kênh social bên dưới nhé.","followOnlyNotice":"Gói Pro/VIP không cần tương tác để xuất bản.","linksHint":"Bấm vào ít nhất 1 link social bên dưới:","requiredVisitNotice":"Bạn cần tham quan social trước khi xuất bản trang.","visitRequired":"Vui lòng ghé một kênh social trước khi xuất bản","visitRequirement":"Đã tham quan ít nhất 1 kênh social","visitHint":"Mở một kênh social bên trên để tiếp tục xuất bản.","startCountdownHint":"Bấm vào một kênh social để bắt đầu đếm {{seconds}} giây.","waitRequirement":"Đang mở khóa xuất bản... còn {{seconds}} giây.","readyToPublish":"Bạn có thể xuất bản ngay.","publishButton":"Xuất bản ngay","cancelButton":"Để sau"},"downloadLogo":"Tải xuống logo","downloadPage":"Tải xuống trang","downloadLogoShort":"Tải logo","downloadPageShort":"Tải trang","hideSidebar":"Ẩn sidebar","showSidebar":"Hiển thị sidebar","loading":"Đang tải ...","success":"Thành công","error":"Lỗi","downloadLogoSuccess":"Đã tải xuống logo thành công!","downloadLogoError":"Không thể tải xuống logo. Vui lòng thử lại.","downloadPageSuccess":"Đã tải xuống trang thành công!","downloadPageError":"Không thể tải xuống trang. Vui lòng thử lại.","noPageFound":"Không tìm thấy trang nào để tải xuống.","pageNotFound":"Không thể tìm thấy thông tin trang","templateNotFound":"Không thể tìm thấy thông tin template","publishPageSuccess":"Trang đã được xuất bản thành công","unpublishPageSuccess":"Trang đã được hủy xuất bản","publishTemplateSuccess":"Template đã được xuất bản thành công","unpublishTemplateSuccess":"Template đã được hủy xuất bản","publishError":"Có lỗi xảy ra khi cập nhật trạng thái xuất bản","navigationConfirmTitle":"Xác nhận rời khỏi trang","navigationConfirmMessage":"Bạn có thay đổi chưa được lưu. Bạn có chắc chắn muốn rời khỏi trang này?","leaveButton":"Rời khỏi","stayButton":"Ở lại","premiumAssetsFeature":"Mẫu thiết kế Premium","premiumAssetsWarningTitle":"Có mẫu thiết kế Premium","premiumAssetsWarningDescription":"Trang của bạn có chứa mẫu thiết kế Premium. Vui lòng mua tính năng hoặc nâng cấp gói để lưu.","tierUpgradeRequired":"Cần nâng cấp gói","tierUpgradeDescription":"Bạn cần nâng cấp gói lớn hơn hoặc bằng mẫu này để xuất bản","tierUpgradeFeatureName":"Nâng cấp gói để xuất bản","audioTierForbiddenTitle":"Bài nhạc chưa phù hợp với gói hiện tại","audioTierForbiddenDescription":"Vui lòng đổi bài nhạc khác hoặc nâng cấp gói để tiếp tục.","audioTierForbiddenModalTitle":"Bài nhạc chưa phù hợp với gói","audioTierForbiddenPublishTitle":"Không thể xuất bản với bài nhạc hiện tại","audioTierForbiddenSaveTitle":"Không thể lưu với bài nhạc hiện tại","audioTierForbiddenModalDescription":"Gói hiện tại chưa có quyền dùng bài nhạc này.","audioTierForbiddenCountLabel":"Số bài nhạc chưa phù hợp:","audioTierForbiddenCountHint":"Bạn có thể đổi bài nhạc khác để lưu ngay trong editor.","audioTierForbiddenUpgradeButton":"Nâng cấp lên {{tier}}","audioTierForbiddenUpgradeFeatureName":"Nâng cấp lên gói {{tier}}","audioTierForbiddenPickAnotherButton":"Chọn nhạc khác","tierForbiddenUpgradeButton":"Nâng cấp lên {{tier}}","tierForbiddenUpgradeFeatureName":"Nâng cấp lên gói {{tier}}","lastSaved":"Đã lưu {{time}}","justNow":"vừa xong","secondsAgo":"{{seconds}}s trước","minutesAgo":"{{minutes}} phút trước","hoursAgo":"{{hours}} giờ trước","autoSaveOn":"Tự động lưu đang bật","mobileDock":{"add":"Thêm","edit":"Chỉnh sửa","layer":"Lớp","quickBuild":"Làm thiệp nhanh","actions":"Tác vụ"},"mobileActionSheet":{"title":"Tác vụ","close":"Đóng"},"history":"Lịch sử chỉnh sửa","saveAndExit":"Lưu và thoát chỉnh sửa","guide":{"label":"Hướng dẫn","running":"Đang hướng dẫn","menuTitle":"Mở hướng dẫn","groups":{"basic":"Cơ bản","advanced":"Nâng cao"},"next":"Tiếp theo","prev":"Quay lại","done":"Hoàn thành","desktopOnlyTitle":"Chưa hỗ trợ trên mobile","desktopOnlyDescription":"Hướng dẫn này hiện chỉ hỗ trợ màn hình desktop (>= 640px).","modalBlockedTitle":"Đang có cửa sổ khác mở","modalBlockedDescription":"Vui lòng đóng các cửa sổ đang mở trước khi bắt đầu hướng dẫn.","quickStart":{"menu":"Bắt đầu nhanh","edit":{"title":"Bắt đầu chỉnh sửa","description":"Nhấn nút \\"Sửa\\" để vào chế độ chỉnh sửa."},"elements":{"title":"Mở kho phần tử","description":"Nhấn \\"Thêm / Quản lý phần tử\\" để mở bảng thêm phần tử."},"container":{"title":"Chọn Khối / Hộp","description":"Nhấn vào \\"Khối/ Hộp\\" để chọn loại phần tử cơ bản."},"addNew":{"title":"Thêm phần tử vào trang","description":"Nhấn \\"Thêm mới\\" để chèn phần tử vào canvas."},"canvas":{"title":"Chọn phần tử trên canvas","description":"Nhấn vào phần tử vừa thêm để xem và chỉnh cài đặt chi tiết."},"settings":{"title":"Panel cài đặt","description":"Bạn có thể chỉnh style, nội dung, hành vi của phần tử ngay tại panel này."},"save":{"title":"Lưu thay đổi","description":"Nhấn \\"Lưu\\" để thoát chế độ chỉnh sửa sau khi hoàn tất."}},"advanced":{"menu":"Nâng cao","overview":{"menu":"Nâng cao: Tổng quan"},"elementsFlow":{"menu":"Nâng cao: Popup/Dropbox/Album/QuickActions","openElements":{"description":"Mở bảng phần tử để bắt đầu tạo Popup."},"popupTab":{"title":"Chọn tab Popup","description":"Chọn tab Popup để tạo một popup mới trước."},"createPopup":{"title":"Tạo popup mới","description":"Nhấn \\"Thêm mới\\" để tạo popup. Popup sẽ tự mở và được chọn trong panel cài đặt."},"renamePopupId":{"title":"Đổi ID popup","description":"Nhấn nút sửa ID và đặt tên popup dễ nhớ để chọn nhanh ở phần cấu hình event."},"renamePopupIdInput":{"description":"Nhập ID rõ nghĩa (ví dụ: popup-thong-tin) để dễ nhận biết khi chọn popup cho event."},"renamePopupIdSave":{"title":"Lưu ID mới","description":"Nhấn Lưu để áp dụng ID mới cho popup."},"openElementsInPopup":{"title":"Mở lại bảng phần tử","description":"Khi popup còn đang mở, mở bảng phần tử để thêm nội dung trực tiếp vào popup."},"basicTabInPopup":{"title":"Chọn tab Cơ bản","description":"Dùng tab Cơ bản để chèn các phần tử vào popup đang mở."},"selectPopupButton":{"title":"Chọn phần tử Button cho popup","description":"Chọn mục Button để thêm nút tương tác vào bên trong popup."},"addPopupButton":{"title":"Thêm Button vào popup","description":"Nhấn \\"Thêm mới\\" để chèn Button vào popup hiện tại."},"selectPopupBeforeClose":{"title":"Chọn lại popup để hiện nút đóng","description":"Nhấn vào nền popup trên canvas để chọn đúng popup. Khi đã chọn đúng, thanh NodeIndicator sẽ có nút đóng (x)."},"closePopupBeforeBasic":{"title":"Đóng popup hiện tại","description":"Sau khi đã thêm nội dung trong popup, nhấn nút đóng trên thanh NodeIndicator để quay lại canvas chính."},"reopenElements":{"title":"Mở lại bảng phần tử","description":"Mở lại bảng phần tử để thêm Button ngoài canvas làm nút mở popup."},"basicTab":{"title":"Chọn tab Cơ bản","description":"Chuyển sang tab Cơ bản để thêm phần tử dùng gắn sự kiện."},"selectTriggerButton":{"title":"Chọn phần tử Button","description":"Chọn Button để tạo nút trực quan dùng kích hoạt mở popup."},"addTriggerButton":{"title":"Thêm Button trên canvas","description":"Nhấn \\"Thêm mới\\" để chèn Button lên canvas chính, sau đó gắn event mở popup cho nút này."},"selectBasicGroup":{"title":"Chọn nhóm phần tử cơ bản","description":"Chọn một nhóm (ví dụ Khối/Hộp) rồi thêm phần tử mới."},"addBasicElement":{"title":"Thêm phần tử cơ bản","description":"Nhấn \\"Thêm mới\\" để chèn phần tử lên canvas."},"openEventTab":{"title":"Mở tab Sự kiện","description":"Trong panel cài đặt phần tử, mở tab Sự kiện để gắn hành vi."},"addEvent":{"title":"Thêm event","description":"Nhấn \\"Thêm sự kiện\\", sau đó chọn loại event phù hợp."},"selectEventType":{"title":"Chọn loại event mở Popup","description":"Chọn event loại \\"Mở popup\\" để liên kết phần tử này với popup vừa tạo."},"selectEventTypeOption":{"title":"Chọn option Mở popup","description":"Trong danh sách loại event, chọn \\"Mở popup\\"."},"selectPopupTarget":{"title":"Chọn popup đích","description":"Mở danh sách popup và chọn popup theo ID dễ nhớ bạn vừa đặt."},"selectPopupTargetOption":{"title":"Chọn popup trong danh sách","description":"Chọn popup bạn muốn mở khi người dùng click vào phần tử."},"editPopup":{"title":"Mở nhanh popup để chỉnh sửa","description":"Bạn có thể nhấn \\"Chỉnh sửa\\" để mở đúng popup và tinh chỉnh nội dung ngay."},"reopenPopupElements":{"title":"Mở lại bảng phần tử","description":"Mở lại bảng phần tử để xem danh sách popup đã tạo trong trang."},"revisitPopupTab":{"title":"Mở tab Popup","description":"Trong tab Popup, bạn có thể mở lại các popup đã tạo để chỉnh sửa nhanh."},"openExistingPopup":{"title":"Mở lại popup trong danh sách","description":"Nhấn vào một popup trong danh sách để mở lại popup đó trên canvas."},"save":{"description":"Nhấn \\"Lưu\\" để thoát chế độ chỉnh sửa và kiểm tra tương tác thực tế."},"testClick":{"title":"Kiểm tra mở popup","description":"Nhấn vào phần tử vừa gắn event trên canvas để kiểm tra popup mở đúng."},"similarPattern":{"title":"Áp dụng tương tự cho Dropbox / Album / QuickActions","description":"Dropbox, Album Modal và QuickActions cũng làm tương tự: tạo phần tử trước, rồi gắn event phù hợp trong tab Sự kiện của phần tử kích hoạt."}},"publishFlow":{"menu":"Nâng cao: Lưu và xuất bản"},"enterEdit":{"title":"Vào chế độ chỉnh sửa","description":"Nếu đang ở chế độ xem, nhấn \\"Sửa\\" để mở đầy đủ công cụ nâng cao."},"layer":{"title":"Layer panel","description":"Nhấn nút Layer để xem cấu trúc phần tử theo cây."},"history":{"title":"Lịch sử chỉnh sửa","description":"Nhấn để xem các mốc chỉnh sửa và khôi phục phiên bản cũ."},"settings":{"title":"Cài đặt nâng cao","description":"Mở menu cài đặt để cấu hình hiệu ứng, âm thanh, SEO và toàn trang."},"elements":{"title":"Mở lại bảng phần tử","description":"Tiếp theo, mở bảng phần tử để xem các nhóm nâng cao."},"popup":{"title":"Popup","description":"Tab Popup dùng để tạo popup hiển thị nội dung theo sự kiện."},"dropbox":{"title":"Dropbox","description":"Tab Dropbox phù hợp cho nội dung mở theo click/hover."},"albumModal":{"title":"Album Modal","description":"Tab Album Modal giúp tạo modal gallery ảnh cho thiệp."},"quickActions":{"title":"QuickActions","description":"Tab QuickActions tạo nút hành động nhanh nổi trên màn hình."},"publish":{"title":"Xuất bản trang","description":"Khi hoàn tất chỉnh sửa, quay về chế độ xem và dùng nút Xuất bản."}},"resume":{"menu":"Xem lại bước đã bỏ qua"}},"publishShort":"Công khai","unpublishShort":"Hủy"}'))
}, 138441, e => {
    e.v({
        title: "Lớp",
        close: "Đóng",
        searchPlaceholder: "Tìm kiếm theo tên, ID..."
    })
}, 355233, e => {
    e.v({
        componentTypes: {
            albumPhoto: "Album Ảnh",
            albumPhotoPopup: "Album Ảnh Popup",
            icon: "Biểu tượng",
            divider: "Đường kẻ",
            video: "Video",
            calendar: "Lịch",
            countdown: "Đếm ngược",
            html: "HTML",
            section: "Section",
            wishes: "Lời chúc",
            text: "Văn bản",
            image: "Hình ảnh",
            button: "Nút bấm",
            box: "Khối hộp",
            dropbox: "Dropbox",
            form: "Form",
            group: "Group",
            actionButton: "Nút hành động",
            popup: "Popup",
            lightBox: "Light Box",
            input: "Input"
        },
        actions: {
            show: "Hiển thị phần tử",
            hide: "Ẩn phần tử",
            delete: "Xóa phần tử"
        },
        empty: "Chưa có phần tử nào. Thêm một số thành phần để xem chúng ở đây.",
        deleteModal: {
            title: "Xác nhận xóa phần tử",
            message: "Bạn có chắc chắn muốn xóa phần tử này không?",
            warning: "⚠️ Hành động này không thể hoàn tác!",
            confirm: "Xóa",
            cancel: "Hủy",
            idLabel: "ID"
        },
        warnings: {
            cannotDelete: "Phần tử này không thể xóa"
        }
    })
}, 464147, e => {
    e.v({
        title: "Cài đặt QR Code",
        sections: {
            colors: "Màu sắc",
            shapes: "Hình dạng",
            size: "Kích thước",
            logo: "Logo/Favicon"
        },
        colors: {
            dotColor: "Màu chấm",
            backgroundColor: "Màu nền",
            cornerSquareColor: "Màu góc vuông",
            cornerDotColor: "Màu chấm góc"
        },
        shapes: {
            dotType: "Kiểu chấm",
            cornerSquareType: "Kiểu góc vuông",
            cornerDotType: "Kiểu chấm góc",
            errorCorrectionLevel: "Mức độ sửa lỗi"
        },
        shapeOptions: {
            square: "Vuông",
            rounded: "Bo tròn",
            extraRounded: "Rất bo tròn",
            dot: "Chấm tròn"
        },
        errorLevels: {
            low: "Thấp (L)",
            medium: "Trung bình (M)",
            high: "Cao (Q)",
            veryHigh: "Rất cao (H)"
        },
        size: {
            margin: "Khoảng cách viền",
            marginValue: "{{value}}px"
        },
        logo: {
            chooseImage: "Chọn ảnh",
            remove: "Xóa",
            selectedImage: "Ảnh đã chọn:",
            logoSize: "Kích thước logo",
            logoSizeValue: "{{value}}%",
            hideBackgroundDots: "Ẩn chấm nền dưới logo"
        },
        actions: {
            reset: "Reset mặc định",
            cancel: "Hủy",
            save: "Lưu cài đặt"
        },
        toasts: {
            saved: {
                title: "Đã lưu!",
                description: "Cài đặt QR code đã được lưu"
            },
            reset: {
                title: "Đã reset!",
                description: "Đã khôi phục cài đặt mặc định"
            }
        }
    })
}, 189823, e => {
    e.v({
        shareButton: "Chia sẻ",
        openPage: "Mở trang",
        copyLink: "Copy Link thiệp",
        copyRefreshFB: "Copy + Làm mới cache",
        cacheRefreshSuccess: "Đã gửi yêu cầu làm mới cache",
        cacheRefreshError: "Không thể xóa cache",
        socialShare: "Chia sẻ qua mạng xã hội",
        generateQR: "Tạo mã QR",
        qrSettings: "Cài đặt QR",
        copiedTitle: "Đã sao chép!",
        copiedDescription: "Link đã được sao chép vào clipboard",
        errorTitle: "Lỗi",
        copyErrorDescription: "Không thể sao chép link",
        infoTitle: "Thông báo",
        shareNotSupportedDescription: "Trình duyệt không hỗ trợ chia sẻ trực tiếp. Link đã được sao chép.",
        qrModalTitle: "Mã QR",
        qrModalDescription: "Quét mã QR để truy cập thiệp",
        qrFileNamePage: "qr-thiep-cuoi.png",
        qrFileNameTemplate: "qr-mau-thiep.png"
    })
}, 995063, e => {
    e.v({
        closeSidebar: "Đóng sidebar",
        switchToDraggable: "Chuyển sang sidebar có thể kéo",
        switchToFixed: "Chuyển sang sidebar cố định"
    })
}, 374576, e => {
    e.v({
        noAvailableSections: "Không còn phần khả dụng, đang thêm phần trống",
        noAvailableSectionsAfterHiding: "Không còn phần khả dụng sau khi ẩn, đang thêm phần trống",
        settingsButtonClicked: "Đã nhấp nút cài đặt",
        settingsButtonTouched: "Đã chạm nút cài đặt",
        deleteButtonClicked: "Đã nhấp nút xóa",
        deleteButtonTouched: "Đã chạm nút xóa",
        failedCheckDeletable: "Không thể kiểm tra isDeletable cho node",
        errorDeletingNode: "Lỗi khi xóa node, đang ẩn thay thế:",
        fallbackHideFailed: "Ẩn dự phòng cũng thất bại:",
        errorGettingNodeDOM: "Lỗi khi lấy DOM của node cho",
        errorDuplicatingNode: "Lỗi khi nhân bản node:",
        errorDuplicatingSection: "Lỗi khi nhân bản phần:",
        errorAddingNewSection: "Lỗi khi thêm phần mới:",
        errorAddingEmptySection: "Lỗi khi thêm phần trống:",
        errorCheckingAvailableSections: "Lỗi khi kiểm tra các phần khả dụng:",
        errorCheckingNode: "Lỗi khi kiểm tra node"
    })
}, 59362, e => {
    e.v({
        title: "404 - Trang không tìm thấy",
        heading: "Oops! Trang không tìm thấy",
        description: "Trang bạn đang tìm kiếm có thể đã bị xóa, đổi tên hoặc tạm thời không khả dụng.",
        buttons: {
            home: "Về Trang Chủ",
            back: "Quay Lại"
        },
        helpText: "Hoặc bạn có thể:",
        links: {
            createInvitation: "Tạo thiệp cưới miễn phí",
            viewTemplates: "Xem các mẫu thiệp cưới",
            manageInvitations: "Quản lý thiệp của tôi"
        }
    })
}, 718506, e => {
    e.v({
        sectionHeader: {
            albumImages: "Hình ảnh Album"
        },
        buttons: {
            addImage: "Thêm ảnh",
            addMultipleImages: "Thêm nhiều ảnh",
            exitMultiSelect: "Thoát chọn nhiều",
            multiSelect: "Chọn nhiều",
            selectAll: "Chọn tất cả",
            deselectAll: "Bỏ chọn tất cả",
            delete: "Xóa"
        },
        multiSelect: {
            selected: "Đã chọn",
            of: "/"
        },
        emptyState: {
            noImages: "Chưa có hình ảnh nào",
            clickToStart: 'Nhấn "Thêm ảnh" để bắt đầu'
        },
        placeholders: {
            imageUrl: "URL ảnh...",
            imageAlt: "Mô tả ảnh...",
            imageTitle: "Tiêu đề ảnh..."
        },
        tooltips: {
            selectImage: "Chọn ảnh",
            deleteImage: "Xóa ảnh",
            dragToReorder: "Kéo để sắp xếp lại"
        },
        imageLabel: "Image"
    })
}, 347562, e => {
    e.v({
        editorMode: {
            title: "Album ảnh Popup",
            imageCount: "Album đang có {count} ảnh - Thêm ảnh ở mục cài đặt",
            closeButton: "Đóng Album Modal",
            moreImages: "+{count}"
        },
        imageLabel: "Ảnh",
        thumbnailLabel: "Hình thu nhỏ"
    })
}, 891653, e => {
    e.v({
        cropModal: {
            title: "Cắt ảnh Album",
            image: "Image",
            error: "Lỗi",
            selectCropArea: "Vui lòng chọn vùng cắt",
            cropError: "Lỗi cắt ảnh",
            cropErrorDescription: "Không thể lưu thông tin cắt ảnh. Vui lòng thử lại.",
            scale: "Tỷ lệ",
            rotate: "Xoay",
            cancel: "Hủy",
            confirm: "Xác nhận",
            processing: "Đang xử lý..."
        },
        resizeModal: {
            title: "Thay đổi kích thước",
            image: "Image",
            error: "Lỗi",
            sizeError: "Kích thước phải lớn hơn 0",
            resizeError: "Lỗi thay đổi kích thước",
            resizeErrorDescription: "Không thể lưu thông tin kích thước. Vui lòng thử lại.",
            size: "Kích thước",
            width: "W",
            height: "H",
            lockAspectRatio: "Khóa tỷ lệ khung hình",
            currentSize: "Kích thước hiện tại",
            px: "px",
            cancel: "Hủy",
            confirm: "Xác nhận",
            processing: "Đang xử lý..."
        },
        settings: {
            sectionHeight: "Chiều cao Section",
            height: "Chiều cao",
            carouselConfig: "Cấu hình Carousel",
            autoPlay: "Tự động chạy",
            showDots: "Hiện chấm",
            showArrows: "Hiện mũi tên",
            loop: "Vòng lặp",
            centerMode: "Trung tâm nổi bật",
            speed: "Tốc độ (s)",
            transitionDuration: "Thời gian chuyển (s)",
            desktop: "Desktop",
            mobile: "Mobile",
            inactiveScale: "Scale item phụ",
            inactiveOpacity: "Opacity item phụ",
            imageSpacing: "Khoảng cách ảnh",
            wrapperSpacing: "Khoảng cách tổng",
            useIndividualEdges: "Sử dụng từng cạnh",
            padding: "Padding",
            top: "Trên",
            right: "Phải",
            bottom: "Dưới",
            left: "Trái",
            images: "Hình ảnh",
            totalImages: "Tổng cộng",
            imagesCount: "hình ảnh",
            addImages: "Thêm hình ảnh",
            image: "Ảnh",
            noDescription: "Không có mô tả",
            replace: "Thay thế",
            crop: "Cắt ảnh",
            resize: "Thay đổi kích thước",
            delete: "Xóa ảnh",
            noImages: 'Chưa có hình ảnh nào. Nhấn "Thêm hình ảnh" để bắt đầu.',
            imageDisplay: "Hiển thị ảnh",
            borderRadius: "Bo góc",
            objectFit: "Chế độ hiển thị",
            objectFitCover: "Lấp đầy (Cover)",
            objectFitContain: "Vừa khung (Contain)",
            showThumbnails: "Hiện ảnh Thumb"
        }
    })
}, 856362, e => {
    e.v({
        "iconSection.title": "Thiết lập biểu tượng",
        "iconSection.showIcon": "Hiển thị icon",
        "iconSection.position": "Vị trí",
        "iconSection.positionLeft": "Bên trái",
        "iconSection.positionCenter": "Chính giữa",
        "iconSection.positionRight": "Bên phải",
        "iconSection.offset": "Khoảng cách",
        "iconSection.horizontalPosition": "Vị trí ngang",
        "tab.button": "Nút bấm",
        "tab.buttonShort": "Nút",
        "tab.text": "Văn bản",
        "tab.textShort": "Chữ",
        "tab.icon": "Biểu tượng",
        "tab.iconShort": "Icon"
    })
}, 74037, e => {
    e.v({
        title: "Cấu hình lịch",
        mode: {
            label: "Chế độ",
            today: "Hôm nay",
            custom: "Ngày tùy chỉnh",
            placeholder: "Chọn chế độ"
        },
        date: {
            label: "Ngày"
        },
        highlight: {
            label: "Highlight",
            color: "Màu sắc",
            icon: "Biểu tượng",
            colorLabel: "Màu highlight",
            placeholder: "Chọn highlight"
        },
        svg: {
            label: "SVG",
            placeholder: "Nhập code svg của biểu tượng",
            select: "Chọn",
            fillNote: "Fill trong SVG sẽ được thay bằng màu highlight"
        },
        colors: {
            title: "Màu chữ & viền",
            border: "Viền lịch",
            header: "Tiêu đề",
            date: "Ngày",
            selectedDate: "Ngày chọn"
        },
        typography: {
            title: "Kiểu chữ",
            font: "Font",
            fontSizeMode: "Chế độ cỡ chữ",
            auto: "Tự động",
            custom: "Tùy chỉnh",
            fontSize: "Cỡ chữ (px)",
            placeholder: "Chọn chế độ"
        },
        layout: {
            label: "Kiểu bố cục",
            standard: "Chuẩn",
            elegant: "Thanh lịch",
            compact: "Gọn gàng",
            decorated: "Trang trí",
            placeholder: "Chọn kiểu"
        },
        decoration: {
            position: "Vị trí trang trí",
            corners: "Góc",
            header: "Tiêu đề",
            both: "Cả hai",
            selectIcon: "Chọn trang trí"
        },
        highlightDates: {
            label: "Ngày highlight thêm",
            add: "Thêm ngày"
        },
        animation: {
            label: "Animation",
            none: "Không"
        },
        weekStart: {
            label: "Tuần bắt đầu từ",
            monday: "Thứ 2",
            sunday: "Chủ nhật"
        },
        showYear: {
            label: "Hiển thị năm"
        },
        showAdjacent: {
            label: "Hiện ngày tháng trước/sau"
        },
        titleSettings: {
            title: "Tiêu đề lịch",
            templateLabel: "Mẫu tiêu đề",
            templatePlaceholder: "{month} / {year}",
            templateHint: "Dùng {month} và {year} để tạo tiêu đề theo ý muốn",
            monthNamesLabel: "Tên tháng (12 dòng hoặc 12 mục cách nhau bởi dấu phẩy)",
            weekdayNamesLabel: "Tên thứ (7 dòng hoặc 7 mục cách nhau bởi dấu phẩy, thứ 2 -> CN)"
        },
        common: {
            yes: "Có",
            no: "Không"
        },
        multiColor: {
            label: "Highlight nhiều màu"
        }
    })
}, 788134, e => {
    e.v({
        countdown: {
            title: "Cấu hình đếm ngược",
            type: "Kiểu",
            selectType: "Chọn kiểu",
            minutes: "Phút",
            endTime: "Thời gian kết thúc",
            mode: "Loại",
            selectMode: "Chọn loại",
            countDown: "Đếm ngược",
            countUp: "Đếm xuôi",
            minutesValue: "Số phút",
            endTimeValue: "Kết thúc",
            autoCountUp: "Tự động đếm xuôi",
            showDays: "Hiện ngày",
            showHours: "Hiện giờ",
            showMinutes: "Hiện phút",
            showSeconds: "Hiện giây"
        },
        spacing: {
            title: "Khoảng cách",
            cellSpacing: "Khoảng cách ô"
        },
        label: {
            title: "Nhãn",
            contentTitle: "Nội dung nhãn",
            typographyTitle: "Kiểu chữ nhãn",
            showLabels: "Hiện nhãn",
            position: "Vị trí",
            positionTop: "Phía trên",
            positionBottom: "Phía dưới",
            days: "Nhãn ngày",
            hours: "Nhãn giờ",
            minutes: "Nhãn phút",
            seconds: "Nhãn giây",
            font: "Font chữ",
            fontSize: "Cỡ chữ",
            format: "Định dạng",
            lineHeight: "Chiều cao dòng",
            letterSpacing: "Khoảng cách chữ",
            textTransform: "Kiểu chữ hoa/thường",
            color: "Màu chữ"
        },
        typography: {
            title: "Kiểu chữ",
            font: "Font",
            fontSize: "Cỡ chữ",
            color: "Màu chữ",
            textTransform: "Kiểu chữ hoa/thường",
            selectTextTransform: "Chọn kiểu chữ"
        }
    })
}, 419119, e => {
    e.v({
        formType: {
            title: "Loại Form",
            selectType: "Chọn loại form",
            weddingWish: "Form lời chúc cưới",
            guest: "Form khách mời"
        },
        customQuestions: {
            title: "Câu hỏi tùy chỉnh",
            upgradeToUse: "Nâng cấp để sử dụng tính năng này",
            addQuestion: "Thêm câu hỏi",
            deleteAll: "Xóa tất cả",
            questionPlaceholder: "Câu hỏi",
            deleteQuestion: "Xóa câu hỏi"
        },
        suggestedWishes: {
            title: "Lời chúc gợi ý",
            customTitleLabel: "Tiêu đề popup",
            customTitlePlaceholder: "Để trống để dùng mặc định theo ngôn ngữ",
            show: "Hiển thị lời chúc gợi ý",
            on: "Bật",
            add: "Thêm",
            newWish: "Lời chúc mới",
            deleteWish: "Xóa lời chúc",
            characters: "ký tự",
            limitReached: "Đã đạt giới hạn tối đa 20 lời chúc"
        },
        spacing: {
            title: "Khoảng cách",
            gap: "Khoảng cách giữa các phần tử"
        },
        submission: {
            title: "Cài đặt gửi form",
            type: "Kiểu gửi",
            selectType: "Chọn kiểu gửi",
            comingSoon: "Sắp có",
            apiUrl: "API URL"
        },
        fields: {
            yourName: "Tên của bạn *",
            yourWish: "Lời chúc của bạn *",
            sendWish: "Gửi lời chúc",
            fullName: "Họ và tên *",
            phone: "Số điện thoại *",
            email: "Email *",
            guestOf: "Khách của",
            numberOfPeople: "Số người tham dự",
            willAttend: "Bạn có tham dự không?",
            yesAttend: "Có, tôi sẽ tham dự",
            noAttend: "Không, tôi không thể tham dự",
            selectEvent: "Chọn sự kiện...",
            sendInfo: "Gửi thông tin"
        },
        events: {
            mainWedding: "Lễ cưới chính",
            weddingParty: "Tiệc cưới",
            engagement: "Lễ đính hôn",
            yearEndParty: "Tiệc tất niên",
            betrothal: "Lễ hỏi",
            intimateParty: "Tiệc thân mật"
        },
        guestOfOptions: {
            bride: "Cô dâu",
            groom: "Chú rể",
            both: "Cả hai",
            family: "Gia đình",
            friend: "Bạn bè"
        }
    })
}, 232270, e => {
    e.v({
        modal: {
            title: "Chỉnh sửa HTML",
            description: "Nhập mã HTML tùy chỉnh cho component",
            htmlLabel: "Mã HTML:",
            placeholder: "Nhập mã HTML tùy chỉnh của bạn...",
            previewLabel: "Xem trước:"
        },
        validation: {
            unclosedQuotes: "Thuộc tính HTML có dấu ngoặc kép không được đóng đúng.",
            malformedTags: "Có thẻ HTML không đúng định dạng.",
            scriptTag: "Thẻ script phải được đóng đúng cách.",
            genericError: "Không thể xác thực mã HTML. Vui lòng kiểm tra cú pháp.",
            saveError: "Đã xảy ra lỗi khi lưu. Vui lòng thử lại.",
            overLimit: "Vượt quá giới hạn {{max}} ký tự"
        },
        buttons: {
            edit: "Chỉnh sửa",
            preview: "Xem trước",
            cancel: "Hủy",
            save: "Lưu",
            saving: "Đang lưu..."
        },
        settings: {
            sectionTitle: "Nội dung HTML",
            editButton: "Chỉnh sửa HTML",
            charCount: "{{current}} / {{max}} ký tự",
            overLimit: "Vượt giới hạn!"
        }
    })
}, 166249, e => {
    e.v({
        title: "Thiết lập biểu tượng",
        svg: "SVG",
        svgPlaceholder: "Nhập code svg của biểu tượng",
        select: "Chọn",
        color: "Màu"
    })
}, 200747, e => {
    e.v({
        title: "Thiết lập hình ảnh",
        urlPlaceholder: "Nhập URL hình ảnh",
        selectImage: "Chọn hình ảnh",
        autoFill: "Tự điền từ form cho",
        selectField: "Chọn trường",
        guestInfo: "Thông tin khách",
        selectGuestInfo: "Chọn thông tin khách mời",
        lockAspectRatio: "Khóa tỉ lệ",
        displayMode: "Chế độ hiển thị",
        selectMode: "Chọn chế độ",
        cropImage: "Crop ảnh",
        editCrop: "Chỉnh sửa Crop",
        resetCrop: "Reset Crop",
        cropModal: {
            title: "Cắt ảnh",
            cancel: "Hủy",
            apply: "Áp dụng",
            loading: "Đang tải ảnh...",
            error: "Lỗi khi cắt ảnh. Vui lòng thử lại.",
            dragToCrop: "Kéo và thả để chọn vùng cắt. Kéo các góc để thay đổi kích thước.",
            cropSize: "Kích thước",
            coverage: "Phủ"
        },
        objectFit: {
            cover: "Vừa khít",
            contain: "Vừa khung",
            fill: "Lấp đầy",
            none: "Không xử lý"
        },
        initField: {
            none: "None",
            groomQr: "QR Code chú rể",
            brideQr: "QR Code cô dâu"
        },
        guestInfoField: {
            none: "None",
            avatar: "Avatar khách mời"
        }
    })
}, 721003, e => {
    e.v({
        inputConfig: {
            title: "Cấu hình Input",
            type: "Kiểu",
            selectType: "Chọn kiểu input",
            dataName: "Tên lấy dữ liệu",
            dataNamePlaceholder: "input_field",
            required: "Bắt buộc nhập",
            placeholder: "Chữ gợi nhắc",
            placeholderPlaceholder: "Nhập nội dung...",
            defaultValue: "Giá trị mặc định",
            noSelection: "Không chọn",
            elementPosition: "Vị trí phần tử",
            options: "Tùy chọn (mỗi dòng một tùy chọn)",
            optionsPlaceholder: "Tùy chọn 1\nTùy chọn 2\nTùy chọn 3",
            direction: "Hướng hiển thị",
            vertical: "Chiều dọc",
            horizontal: "Chiều ngang"
        },
        inputTypes: {
            text: "Nhập chữ",
            password: "Mật khẩu",
            number: "Nhập số",
            email: "Nhập Email",
            tel: "Nhập điện thoại",
            date: "Ngày tháng",
            textarea: "Nhập đoạn văn",
            select: "Hộp chọn giá trị",
            radio: "Chọn một giá trị",
            checkbox: "Chọn nhiều giá trị",
            file: "Chọn File"
        },
        typography: {
            title: "Kiểu chữ",
            font: "Font",
            fontSize: "Cỡ chữ",
            color: "Màu chữ"
        }
    })
}, 189747, e => {
    e.v({
        lineConfig: {
            title: "Đường kẻ",
            direction: "Hướng",
            selectDirection: "Chọn hướng",
            horizontal: "Ngang",
            vertical: "Dọc"
        }
    })
}, 92147, e => {
    e.v({
        autoOpenSection: {
            title: "Tự mở Popup",
            enableLabel: "Bật tự mở",
            delayLabel: "Độ trễ (giây)"
        }
    })
}, 592074, e => {
    e.v({
        "mainButton.title": "Nút chính",
        "mainButton.icon": "Biểu tượng",
        "mainButton.iconPlaceholder": "Nhập code svg",
        "mainButton.searchIcon": "Tìm biểu tượng",
        "mainButton.iconColor": "Màu biểu tượng",
        "mainButton.iconSize": "Kích thước biểu tượng",
        "mainButton.backgroundType": "Kiểu nền",
        "mainButton.backgroundColor": "Màu nền",
        "mainButton.gradientType": "Kiểu Gradient",
        "mainButton.gradientAngle": "Góc",
        "mainButton.gradientColor1": "Màu 1",
        "mainButton.gradientColor2": "Màu 2",
        "mainButton.buttonSize": "Kích thước nút",
        "mainButton.spacing": "Khoảng cách",
        "mainButton.expandDirection": "Hướng mở rộng",
        "mainButton.animationDuration": "Thời gian animation (s)",
        "openButton.title": "Nút chính khi mở",
        "openButton.icon": "Biểu tượng khi mở",
        "openButton.iconPlaceholder": "Nhập code svg",
        "openButton.searchIcon": "Tìm biểu tượng",
        "openButton.iconColor": "Màu biểu tượng khi mở",
        "openButton.iconSize": "Kích thước biểu tượng khi mở",
        "openButton.backgroundType": "Kiểu nền khi mở",
        "openButton.backgroundColor": "Màu nền khi mở",
        "openButton.gradientType": "Kiểu Gradient khi mở",
        "openButton.gradientAngle": "Góc",
        "openButton.gradientColor1": "Màu 1 khi mở",
        "openButton.gradientColor2": "Màu 2 khi mở",
        "layout.title": "Bố cục & Animation",
        "actionButtons.title": "Nút hành động",
        "actionButtons.count": "Nút hành động ({{count}}/8)",
        "actionButtons.add": "Thêm nút hành động",
        "actionButtons.maxReached": "Đã đạt giới hạn tối đa 8 nút",
        "actionButtons.empty": "Chưa có nút hành động nào. Nhấn + để thêm.",
        "actionButtons.button": "Nút {{index}}",
        "actionButtons.edit": "Sửa",
        "actionButtons.collapse": "Thu gọn",
        "actionButtons.delete": "Xóa",
        "actionButtons.icon": "Biểu tượng",
        "actionButtons.iconPlaceholder": "Nhập code svg",
        "actionButtons.searchIcon": "Tìm biểu tượng",
        "actionButtons.iconColor": "Màu biểu tượng",
        "actionButtons.iconSize": "Kích thước",
        "actionButtons.backgroundType": "Kiểu nền",
        "actionButtons.backgroundColor": "Màu nền",
        "actionButtons.events": "Sự kiện",
        "actionButtons.tooltip": "Tooltip",
        "actionButtons.tooltipEnable": "Bật tooltip",
        "actionButtons.tooltipText": "Nội dung",
        "actionButtons.tooltipTextPlaceholder": "Nhập nội dung tooltip",
        "actionButtons.tooltipPosition": "Vị trí",
        "actionButtons.tooltipDelay": "Độ trễ (s)",
        "position.title": "Cài đặt vị trí",
        "position.enable": "Bật vị trí cố định",
        "position.position": "Vị trí",
        "position.topDistance": "Cách trên (px)",
        "position.bottomDistance": "Cách dưới (px)",
        "position.leftDistance": "Cách trái (px)",
        "position.rightDistance": "Cách phải (px)",
        "position.preview": "Xem trước",
        "position.previewLabel": "Trang web",
        "autoOpen.title": "Tự động mở",
        "autoOpen.enable": "Bật tự động mở",
        "backgroundType.color": "Màu sắc",
        "backgroundType.gradient": "Gradient",
        "gradientType.linear": "Tuyến tính",
        "gradientType.radial": "Hình tròn",
        "expandDirection.up": "Lên trên",
        "expandDirection.down": "Xuống dưới",
        "expandDirection.left": "Sang trái",
        "expandDirection.right": "Sang phải",
        "tooltipPosition.top": "Trên",
        "tooltipPosition.bottom": "Dưới",
        "tooltipPosition.left": "Trái",
        "tooltipPosition.right": "Phải",
        "position.topLeft": "Trên cùng trái",
        "position.topCenter": "Trên cùng giữa",
        "position.topRight": "Trên cùng phải",
        "position.middleLeft": "Giữa trái",
        "position.middleRight": "Giữa phải",
        "position.bottomLeft": "Dưới cùng trái",
        "position.bottomCenter": "Dưới cùng giữa",
        "position.bottomRight": "Dưới cùng phải",
        "select.backgroundTypePlaceholder": "Chọn kiểu nền",
        "select.gradientTypePlaceholder": "Chọn kiểu gradient",
        "select.expandDirectionPlaceholder": "Chọn hướng mở rộng",
        "select.tooltipPositionPlaceholder": "Chọn vị trí",
        "select.positionPlaceholder": "Chọn vị trí",
        "preview.title": "Nút hành động - Chế độ chỉnh sửa",
        "preview.label": "Xem trước:",
        "preview.instruction": "Nhấp vào nút kích hoạt để kiểm tra mở rộng/thu gọn",
        "preview.saveTemplate": "Lưu làm mẫu",
        "preview.closeModal": "Đóng modal QuickActions",
        "preview.buttonLabel": "Nút hành động {{index}}",
        "preview.eventsConfigured": "{{count}} sự kiện đã cấu hình",
        "preview.noButtons": "Chưa có nút hành động nào được cấu hình",
        "preview.addFirstButton": 'Nhấp "Thêm nút" để tạo nút hành động đầu tiên',
        "preview.addButton": "Thêm nút",
        "preview.dragToReorder": "Kéo để sắp xếp lại",
        "preview.editButton": "Chỉnh sửa nút",
        "preview.deleteButton": "Xóa nút",
        "preview.deleteConfirm": "Bạn có chắc chắn muốn xóa action button này không?",
        "preview.deleteLabel": "Xóa",
        "preview.stateOpen": "Đang mở - Nhấn vào nút chính để đóng",
        "preview.stateClosed": "Đã đóng - Nhấn vào nút chính để mở",
        "preview.clickToOpen": "Nhấn để mở xem trước",
        "preview.clickToClose": "Nhấn để đóng xem trước"
    })
}, 208114, e => {
    e.v({
        "contentSection.title": "Nội dung",
        "contentSection.placeholder": "Nhập nội dung văn bản",
        "textSetupSection.title": "Thiết lập chữ",
        "textSetupSection.autofill": "Tự điền",
        "textSetupSection.autofillPlaceholder": "Chọn trường tự điền",
        "textSetupSection.guestInfo": "Thông tin khách",
        "textSetupSection.guestInfoPlaceholder": "Chọn thông tin khách mời",
        "textSetupSection.font": "Font",
        "textSetupSection.size": "Cỡ",
        "textSetupSection.textTransform": "Text Transform",
        "textSetupSection.textTransformPlaceholder": "Chọn transform",
        "tooltip.bold": "In đậm",
        "tooltip.italic": "In nghiêng",
        "tooltip.underline": "Gạch chân",
        "tooltip.strikethrough": "Gạch ngang",
        "tooltip.uppercase": "Chữ hoa",
        "tooltip.alignLeft": "Căn trái",
        "tooltip.alignCenter": "Căn giữa",
        "tooltip.alignRight": "Căn phải",
        "tooltip.alignJustify": "Căn đều",
        "colorControl.textColor": "Màu chữ",
        "shadowSection.title": "Đổ bóng chữ",
        "shadowSection.enable": "Bật",
        "shadowSection.x": "X",
        "shadowSection.y": "Y",
        "shadowSection.blur": "Blur",
        "shadowSection.color": "Màu bóng",
        "strokeSection.title": "Viền chữ",
        "strokeSection.width": "Độ dày",
        "strokeSection.color": "Màu viền"
    })
}, 968804, e => {
    e.v({
        videoSource: {
            title: "Nguồn video",
            type: "Loại",
            selectType: "Chọn loại video",
            youtubeUrl: "YouTube URL",
            videoPath: "Đường dẫn",
            youtubePlaceholder: "https://youtube.com/watch?v=...",
            videoPlaceholder: "https://.../video.mp4",
            selectButton: "Chọn"
        },
        videoTypes: {
            youtube: "YouTube",
            library: "Thư viện"
        },
        playback: {
            title: "Phát & hiển thị",
            showControls: "Hiển thị điều khiển",
            autoPlay: "Tự phát"
        },
        messages: {
            enterVideoUrl: "Nhập URL video",
            invalidYoutubeUrl: "URL YouTube không hợp lệ",
            browserNotSupported: "Trình duyệt của bạn không hỗ trợ video."
        },
        overlay: {
            disableToControl: "Tắt overlay để điều khiển video",
            enableToSelect: "Bật overlay để chọn element",
            enableControls: "Bật điều khiển video",
            disableControls: "Tắt điều khiển video"
        }
    })
}, 520204, e => {
    e.v({
        listContent: "Nội dung danh sách",
        maxWishes: "Số lời chúc tối đa",
        showDemo: "Hiển thị demo",
        emptyWishText: "Chữ khi chưa có lời chúc",
        emptyWishTextPlaceholder: "Chưa có lời chúc nào",
        typography: "Kiểu chữ",
        wishNameSection: "Tên người chúc",
        wishContentSection: "Nội dung lời chúc",
        replySection: "Phản hồi từ chủ rể & cô dâu",
        font: "Font",
        size: "Cỡ",
        color: "Màu",
        transform: "Transform",
        textTransform: "Biến đổi",
        lineHeight: "LineHeight",
        letter: "Letter",
        cardStyle: "Kiểu thẻ lời chúc",
        backgroundColor: "Màu nền",
        padding: "Padding",
        border: "Viền",
        borderRadius: "Bo góc",
        borderColor: "Màu viền",
        borderStyle: "Kiểu viền",
        replyBackground: "Nền phản hồi",
        replyBorder: "Viền phản hồi",
        replyContentSize: "Cỡ nội dung",
        replyContentColor: "Màu nội dung",
        selectTransform: "Chọn transform",
        selectTextTransform: "Chọn biến đổi",
        selectBorderStyle: "Chọn kiểu viền"
    })
}, 978994, e => {
    e.v({
        templatePassword: {
            title: "Template được bảo vệ",
            description: "Vui lòng nhập mật khẩu để xem template này",
            placeholder: "Nhập mật khẩu",
            submit: "Xác nhận",
            error: {
                notFound: "Template không tìm thấy",
                incorrect: "Mật khẩu không đúng",
                generic: "Đã có lỗi xảy ra. Vui lòng thử lại."
            }
        }
    })
}, 264399, e => {
    e.v({
        title: "Nâng Cấp Gói Để Sử Dụng Tính Năng",
        description: "Tính năng Hỗ Trợ Thiết Kế chỉ có sẵn cho gói có chọn Yêu cầu thiết kế hộ. Nâng cấp ngay để được hỗ trợ thiết kế chuyên nghiệp từ đội ngũ của chúng tôi!",
        featuresTitle: "Những gì bạn nhận được:",
        features: {
            designSupport: "Hỗ trợ thiết kế chuyên nghiệp",
            prioritySupport: "Hỗ trợ ưu tiên 24/7",
            customDesign: "Thiết kế tùy chỉnh theo yêu cầu",
            unlimitedRevisions: "Chỉnh sửa không giới hạn"
        },
        actions: {
            cancel: "Để sau",
            viewPricing: "Xem Bảng Giá"
        }
    })
}, 52958, e => {
    e.v({
        tabs: {
            pageTemplates: "Template Trang",
            spendingPlans: "Template Kế hoạch Chi tiêu",
            todoLists: "Template Danh sách Công việc"
        },
        pageTemplatesTab: {
            title: "Template Trang",
            subtitle: "Quản lý các template trang thiệp",
            createFromPage: "Tạo từ trang có sẵn",
            searchPlaceholder: "Tìm kiếm theo tên template...",
            resultsCount: "Tìm thấy {{count}} template",
            loading: "Đang tải...",
            empty: "Chưa có template nào",
            noResults: "Không tìm thấy template phù hợp",
            noImage: "Không có ảnh",
            status: {
                published: "Đã xuất bản",
                draft: "Bản nháp"
            },
            actions: {
                edit: "Chỉnh sửa",
                openNew: "Mở tab mới"
            }
        },
        createFromPage: {
            title: "Tạo Template từ Trang có sẵn",
            description: "Tạo template mới bằng cách sao chép nội dung từ một trang có sẵn. Template sẽ bao gồm toàn bộ nội dung và cài đặt của trang gốc.",
            fields: {
                sourcePage: "Trang nguồn",
                name: "Tên template",
                domain: "Domain",
                description: "Mô tả",
                tier: "Gói",
                category: "Danh mục",
                tags: "Tags",
                isPublished: "Xuất bản ngay"
            },
            placeholders: {
                selectPage: "Chọn trang nguồn",
                name: "Nhập tên template...",
                domain: "vd: my-template hoặc my-template.mehappy.info",
                description: "Nhập mô tả template...",
                tags: "Nhập tags cách nhau bằng dấu phẩy..."
            },
            helper: {
                tags: "Nhập nhiều tags để phân loại template (cách nhau bằng dấu phẩy)",
                domain: "Nhập subdomain hoặc domain đầy đủ. Nếu không có dấu chấm, hệ thống sẽ tự thêm hậu tố mặc định."
            },
            tier: {
                free: "Miễn phí",
                pro: "Pro",
                vip: "VIP"
            },
            category: {
                wedding: "Thiệp Cưới",
                birthday: "Thiệp Sinh Nhật",
                baby: "Thiệp Thôi Nôi",
                newHouse: "Thiệp Tân Gia",
                newYear: "Thiệp Năm Mới",
                grandOpening: "Thiệp Khai Trương",
                reunite: "Thiệp Họp Lớp",
                event: "Thiệp Sự Kiện"
            },
            currentTags: "Tags hiện tại",
            suggestedTags: "Gợi ý tags",
            actions: {
                cancel: "Hủy",
                create: "Tạo Template",
                creating: "Đang tạo..."
            },
            errors: {
                title: "Lỗi",
                pageRequired: "Vui lòng chọn trang nguồn",
                nameRequired: "Vui lòng nhập tên template",
                createFailed: "Có lỗi xảy ra khi tạo template"
            },
            success: {
                title: "Thành công",
                description: "Template đã được tạo thành công"
            },
            selectPageModal: {
                title: "Chọn trang nguồn",
                searchPlaceholder: "Tìm kiếm theo tiêu đề, domain...",
                allTypes: "Tất cả",
                loading: "Đang tải...",
                resultsCount: "Tìm thấy {{count}} trang",
                noResults: "Không tìm thấy trang phù hợp",
                empty: "Chưa có trang nào"
            },
            pageType: {
                page: "Thiệp cưới",
                card: "Thiệp mời",
                logo: "Logo"
            },
            status: {
                published: "Đã xuất bản",
                unpublished: "Chưa xuất bản",
                disabled: "Vô hiệu hóa"
            }
        },
        spendingPlanTemplatesTab: {
            title: "Template Kế hoạch Chi tiêu",
            subtitle: "Quản lý các template cho kế hoạch chi tiêu",
            createButton: "Tạo Template",
            emptyMessage: "Không có template nào",
            loadingMessage: "Đang tải danh sách template...",
            resetButton: "Đặt lại bộ lọc",
            columns: {
                id: "ID",
                name: "Tên Template",
                description: "Mô tả",
                status: "Trạng thái",
                createdAt: "Ngày tạo",
                noDescription: "Không có mô tả"
            },
            status: {
                active: "Hoạt động",
                inactive: "Không hoạt động"
            },
            actions: {
                view: "Xem",
                edit: "Chỉnh sửa",
                delete: "Xóa"
            },
            filters: {
                searchPlaceholder: "Tìm kiếm theo tên template...",
                statusLabel: "Trạng thái",
                allStatus: "Tất cả trạng thái",
                activeStatus: "Đang hoạt động",
                inactiveStatus: "Không hoạt động"
            },
            deleteModal: {
                title: "Xác nhận xóa template",
                message: 'Bạn có chắc chắn muốn xóa template "{{name}}"? Hành động này không thể hoàn tác.',
                confirm: "Xóa",
                cancel: "Hủy"
            }
        },
        todoListTemplatesTab: {
            title: "Template Danh sách Công việc",
            subtitle: "Quản lý các template cho danh sách công việc",
            createButton: "Tạo Template",
            emptyMessage: "Không có template nào",
            loadingMessage: "Đang tải danh sách template...",
            resetButton: "Đặt lại bộ lọc",
            columns: {
                id: "ID",
                title: "Tiêu đề Template",
                description: "Mô tả",
                taskCount: "Số task",
                status: "Trạng thái",
                createdAt: "Ngày tạo",
                noDescription: "Không có mô tả"
            },
            status: {
                active: "Hoạt động",
                inactive: "Không hoạt động"
            },
            actions: {
                edit: "Chỉnh sửa",
                delete: "Xóa"
            },
            deleteModal: {
                title: "Xác nhận xóa template",
                message: 'Bạn có chắc chắn muốn xóa template "{{title}}"? Hành động này không thể hoàn tác.',
                confirm: "Xóa",
                cancel: "Hủy"
            }
        },
        todoListTemplate: {
            modal: {
                createTitle: "Tạo Template Mới",
                editTitle: "Chỉnh sửa Template",
                basicInfo: "Thông tin cơ bản",
                templateTitle: "Tiêu đề Template",
                templateTitlePlaceholder: "Nhập tiêu đề template...",
                description: "Mô tả",
                descriptionPlaceholder: "Nhập mô tả template...",
                activeStatus: "Trạng thái hoạt động",
                tasks: "Danh sách Task",
                addTask: "Thêm task",
                taskTitle: "Task {{number}}",
                taskTitleLabel: "Tiêu đề Task",
                taskTitlePlaceholder: "Nhập tiêu đề task...",
                taskDescription: "Mô tả Task",
                taskDescriptionPlaceholder: "Nhập mô tả task...",
                taskStatus: "Trạng thái",
                taskStatusPlaceholder: "Chọn trạng thái...",
                dueDate: "Ngày đến hạn",
                deleteTask: "Xóa task",
                noTasks: 'Chưa có task nào. Nhấn "Thêm Task" để bắt đầu.',
                cancel: "Hủy",
                create: "Tạo Template",
                update: "Cập nhật",
                creating: "Đang tạo...",
                updating: "Đang cập nhật..."
            },
            taskStatus: {
                todo: "Cần làm",
                done: "Đã hoàn thành",
                archived: "Đã lưu trữ"
            },
            toast: {
                error: "Lỗi",
                success: "Thành công",
                titleRequired: "Vui lòng nhập tiêu đề template",
                templateCreated: "Template đã được tạo",
                templateUpdated: "Template đã được cập nhật",
                saveFailed: "Có lỗi xảy ra khi lưu template"
            }
        },
        spendingPlanTemplate: {
            modal: {
                createTitle: "Tạo Template Mới",
                editTitle: "Chỉnh sửa Template",
                basicInfo: "Thông tin cơ bản",
                templateName: "Tên Template",
                templateNamePlaceholder: "Nhập tên template...",
                description: "Mô tả",
                descriptionPlaceholder: "Nhập mô tả template...",
                notes: "Ghi chú",
                notesPlaceholder: "Nhập ghi chú...",
                totalBudget: "Ngân sách tổng",
                totalBudgetPlaceholder: "Nhập ngân sách tổng...",
                activeStatus: "Trạng thái hoạt động",
                categories: "Danh mục chi tiêu",
                addCategory: "Thêm danh mục",
                categoryTitle: "Danh mục {{number}}",
                categoryName: "Tên danh mục",
                categoryNamePlaceholder: "Nhập tên danh mục...",
                categoryDescription: "Mô tả danh mục",
                categoryDescriptionPlaceholder: "Nhập mô tả danh mục...",
                items: "Chi tiết chi tiêu",
                addItem: "Thêm chi tiết",
                itemTitle: "Chi tiết {{number}}",
                itemTitleLabel: "Tiêu đề",
                itemTitlePlaceholder: "Nhập tiêu đề...",
                itemDescription: "Mô tả",
                itemDescriptionPlaceholder: "Nhập mô tả...",
                estimatedAmount: "Số tiền dự kiến",
                estimatedAmountPlaceholder: "Nhập số tiền...",
                paymentStatus: "Trạng thái thanh toán",
                paymentStatusPlaceholder: "Chọn trạng thái...",
                dueDate: "Ngày đến hạn",
                cancel: "Hủy",
                create: "Tạo Template",
                update: "Cập nhật",
                creating: "Đang tạo...",
                updating: "Đang cập nhật...",
                deleteCategory: "Xóa danh mục",
                deleteItem: "Xóa chi tiết"
            },
            paymentStatus: {
                planned: "Đã lên kế hoạch",
                unpaid: "Chưa thanh toán",
                partial: "Thanh toán một phần",
                paid: "Đã thanh toán",
                canceled: "Đã hủy"
            },
            toast: {
                error: "Lỗi",
                success: "Thành công",
                nameRequired: "Vui lòng nhập tên template",
                templateCreated: "Template đã được tạo",
                templateUpdated: "Template đã được cập nhật",
                saveFailed: "Có lỗi xảy ra khi lưu template"
            }
        }
    })
}, 739794, e => {
    e.v({
        title: "Lưu trữ ảnh",
        myStorage: {
            title: "Dung lượng của tôi",
            defaultLimit: "Giới hạn mặc định",
            purchasedPhotos: "Đã mua thêm",
            totalLimit: "Tổng giới hạn",
            currentCount: "Đang sử dụng",
            remaining: "Còn lại",
            tier: "Gói hiện tại",
            photos: "ảnh",
            upgradeStorage: "Mua thêm dung lượng"
        },
        packages: {
            title: "Mua thêm ảnh",
            description: "Chọn gói lưu trữ phù hợp với nhu cầu của bạn",
            photoCount: "ảnh",
            price: "Giá",
            vnd: "VNĐ",
            purchase: "Mua ngay",
            popular: "Phổ biến",
            bestValue: "Giá trị tốt nhất",
            noPackages: "Hiện tại chưa có gói lưu trữ nào"
        },
        purchaseModal: {
            title: "Xác nhận mua gói",
            selectedPackage: "Gói đã chọn",
            photoCount: "Số lượng ảnh",
            price: "Giá",
            total: "Tổng cộng",
            vnd: "VNĐ",
            currentLimit: "Giới hạn hiện tại",
            afterPurchase: "Sau khi mua",
            photos: "ảnh",
            cancel: "Hủy",
            confirm: "Xác nhận thanh toán",
            processing: "Đang xử lý...",
            note: "Lưu ý: Bạn sẽ được chuyển đến trang thanh toán để hoàn tất giao dịch.",
            orderCanceled: "Đơn hàng đã bị hủy"
        },
        subscriptions: {
            title: "Lịch sử mua hàng",
            packageName: "Tên gói",
            photoCount: "Số ảnh",
            price: "Giá",
            status: "Trạng thái",
            purchasedAt: "Ngày mua",
            transactionId: "Mã giao dịch",
            statusActive: "Đang hoạt động",
            statusExpired: "Đã hết hạn",
            statusCancelled: "Đã hủy",
            noData: "Chưa có lịch sử mua hàng",
            loadMore: "Xem thêm"
        },
        storageInfo: {
            title: "Thông tin lưu trữ",
            usage: "Đã sử dụng",
            of: "trên",
            photos: "ảnh",
            almostFull: "Dung lượng sắp đầy",
            almostFullMessage: "Bạn đã sử dụng hơn 80% dung lượng. Hãy mua thêm để tiếp tục tải ảnh lên.",
            full: "Dung lượng đã đầy",
            fullMessage: "Bạn đã đạt giới hạn lưu trữ. Vui lòng mua thêm dung lượng để tiếp tục."
        },
        tierLimits: {
            basic: "10 ảnh",
            pro: "40 ảnh",
            vip: "500 ảnh"
        },
        messages: {
            purchaseSuccess: "Mua gói thành công! Dung lượng của bạn đã được cập nhật.",
            purchaseError: "Có lỗi xảy ra khi mua gói. Vui lòng thử lại.",
            loadError: "Không thể tải thông tin lưu trữ"
        }
    })
}, 466338, e => {
    e.v({
        title: "Quản lý gói lưu trữ ảnh",
        description: "Quản lý các gói lưu trữ ảnh có sẵn cho người dùng",
        createPackage: "Tạo gói mới",
        editPackage: "Chỉnh sửa gói",
        deletePackage: "Xóa gói",
        packageName: "Tên gói",
        packageDescription: "Mô tả",
        photoCount: "Số lượng ảnh",
        price: "Giá",
        currency: "Đơn vị tiền tệ",
        isActive: "Kích hoạt",
        sortOrder: "Thứ tự sắp xếp",
        actions: "Thao tác",
        edit: "Sửa",
        delete: "Xóa",
        active: "Đang hoạt động",
        inactive: "Không hoạt động",
        vnd: "VNĐ",
        photos: "ảnh",
        createPackageModal: {
            title: "Tạo gói lưu trữ mới",
            nameLabel: "Tên gói",
            namePlaceholder: "VD: 50_photos",
            descriptionLabel: "Mô tả",
            descriptionPlaceholder: "VD: Gói 50 ảnh",
            photoCountLabel: "Số lượng ảnh",
            photoCountPlaceholder: "VD: 50",
            priceLabel: "Giá (VNĐ)",
            pricePlaceholder: "VD: 50000",
            currencyLabel: "Đơn vị tiền tệ",
            isActiveLabel: "Kích hoạt gói",
            sortOrderLabel: "Thứ tự sắp xếp",
            sortOrderPlaceholder: "VD: 1",
            cancel: "Hủy",
            create: "Tạo gói",
            update: "Cập nhật"
        },
        deleteConfirm: {
            title: "Xác nhận xóa",
            message: "Bạn có chắc chắn muốn xóa gói này? Hành động này không thể hoàn tác.",
            cancel: "Hủy",
            confirm: "Xóa"
        },
        subscriptions: {
            title: "Lịch sử mua gói",
            userId: "ID người dùng",
            userEmail: "Email",
            userName: "Tên người dùng",
            packageName: "Tên gói",
            photoCount: "Số ảnh",
            price: "Giá",
            status: "Trạng thái",
            purchasedAt: "Ngày mua",
            transactionId: "Mã giao dịch",
            statusActive: "Đang hoạt động",
            statusExpired: "Đã hết hạn",
            statusCancelled: "Đã hủy",
            noData: "Chưa có dữ liệu"
        },
        validation: {
            nameRequired: "Tên gói là bắt buộc",
            photoCountRequired: "Số lượng ảnh là bắt buộc",
            photoCountMin: "Số lượng ảnh phải lớn hơn 0",
            priceRequired: "Giá là bắt buộc",
            priceMin: "Giá phải lớn hơn hoặc bằng 0",
            priceInteger: "Giá phải là số nguyên"
        }
    })
}, 290856, e => {
    e.v({
        packages: {
            title: "Mua thêm Page Slots",
            description: "Chọn gói phù hợp để tạo thêm trang thiệp",
            popular: "Phổ biến",
            slotCount: "slots",
            vnd: "VNĐ",
            purchase: "Mua ngay",
            noPackages: "Hiện không có gói nào khả dụng"
        },
        error: {
            title: "Hết Page Slots",
            buyMore: "Mua thêm Page Slots",
            close: "Đóng"
        },
        purchaseModal: {
            title: "Xác nhận mua Page Slots",
            packageInfo: "Thông tin gói",
            slotCount: "Số lượng slots",
            slots: "slots",
            price: "Giá",
            vnd: "VNĐ",
            promotionCode: "Mã giảm giá (nếu có)",
            promotionCodePlaceholder: "Nhập mã giảm giá",
            applyPromotion: "Áp dụng",
            summary: "Tổng cộng",
            subtotal: "Tạm tính",
            discount: "Giảm giá",
            total: "Tổng tiền",
            note: "Sau khi thanh toán, page slots sẽ được tự động thêm vào tài khoản của bạn.",
            cancel: "Hủy",
            confirm: "Xác nhận thanh toán",
            processing: "Đang xử lý..."
        },
        paymentModal: {
            title: "Thanh toán đơn hàng",
            orderId: "Mã đơn hàng",
            amount: "Số tiền",
            vnd: "VNĐ",
            scanQR: "Quét mã QR để thanh toán",
            bankInfo: "Thông tin chuyển khoản",
            bank: "Ngân hàng",
            accountNumber: "Số tài khoản",
            transferDescription: "Nội dung chuyển khoản",
            note: "Vui lòng chuyển khoản đúng nội dung để hệ thống tự động xác nhận.",
            close: "Đóng",
            checkStatus: "Kiểm tra trạng thái",
            copied: "Đã sao chép",
            copiedDesc: "đã được sao chép"
        },
        messages: {
            purchaseSuccess: "Đơn hàng đã được tạo thành công",
            purchaseError: "Không thể tạo đơn hàng",
            invalidPromotion: "Mã giảm giá không hợp lệ",
            paymentPending: "Đang chờ thanh toán",
            paymentSuccess: "Thanh toán thành công! Page slots đã được thêm vào tài khoản.",
            paymentFailed: "Thanh toán thất bại"
        },
        notifications: {
            orderCreated: {
                title: "Đơn hàng đã được tạo",
                description: "Vui lòng thực hiện thanh toán để kích hoạt gói dịch vụ"
            },
            paymentSuccess: {
                title: "Thanh toán thành công! 🎉",
                description: "Gói dịch vụ của bạn đã được kích hoạt"
            },
            paymentFailed: {
                title: "Thanh toán không thành công",
                description: "Vui lòng thử lại hoặc liên hệ hỗ trợ"
            },
            orderError: {
                title: "Lỗi tạo đơn hàng"
            }
        }
    })
}, 115032, e => {
    e.v({
        title: "Quản lý gói Page Slot",
        description: "Quản lý các gói page slot cho người dùng mua",
        createPackage: "Tạo gói mới",
        edit: "Sửa",
        delete: "Xóa",
        active: "Hoạt động",
        inactive: "Không hoạt động",
        vnd: "VNĐ",
        slots: "slots",
        packageName: "Tên gói",
        packageDescription: "Mô tả",
        slotCount: "Số lượng slots",
        price: "Giá",
        isActive: "Trạng thái",
        sortOrder: "Thứ tự",
        createdAt: "Ngày tạo",
        updatedAt: "Cập nhật",
        form: {
            title: {
                create: "Tạo gói Page Slot mới",
                edit: "Chỉnh sửa gói Page Slot"
            },
            name: {
                label: "Tên gói",
                placeholder: "VD: 5_slots",
                required: "Tên gói là bắt buộc"
            },
            description: {
                label: "Mô tả",
                placeholder: "VD: Gói 5 page slots (tiết kiệm 10%)",
                required: "Mô tả là bắt buộc"
            },
            slotCount: {
                label: "Số lượng slots",
                placeholder: "VD: 5",
                required: "Số lượng slots là bắt buộc",
                min: "Số lượng slots phải lớn hơn 0"
            },
            priceCents: {
                label: "Giá (VNĐ)",
                placeholder: "VD: 225000",
                required: "Giá là bắt buộc",
                min: "Giá phải lớn hơn 0",
                helper: "Nhập giá theo VNĐ (hệ thống sẽ tự động chuyển đổi)"
            },
            currency: {
                label: "Loại tiền",
                placeholder: "VND"
            },
            isActive: {
                label: "Kích hoạt gói",
                helper: "Chỉ các gói được kích hoạt mới hiển thị cho người dùng"
            },
            sortOrder: {
                label: "Thứ tự hiển thị",
                placeholder: "VD: 1",
                helper: "Số thứ tự càng nhỏ sẽ hiển thị càng trước"
            },
            cancel: "Hủy",
            create: "Tạo gói",
            update: "Cập nhật",
            creating: "Đang tạo...",
            updating: "Đang cập nhật..."
        },
        deleteConfirm: {
            title: "Xác nhận xóa gói",
            message: "Bạn có chắc chắn muốn xóa gói page slot này? Hành động này không thể hoàn tác.",
            confirm: "Xóa",
            cancel: "Hủy"
        },
        messages: {
            createSuccess: "Tạo gói page slot thành công",
            updateSuccess: "Cập nhật gói page slot thành công",
            deleteSuccess: "Xóa gói page slot thành công",
            createError: "Không thể tạo gói page slot",
            updateError: "Không thể cập nhật gói page slot",
            deleteError: "Không thể xóa gói page slot",
            noData: "Chưa có gói page slot nào"
        }
    })
}, 558905, e => {
    e.v({
        packages: {
            title: "Gia hạn thời gian công khai",
            description: "Chọn gói phù hợp để gia hạn thời gian công khai cho thiệp của bạn",
            popular: "Phổ biến",
            bestValue: "Tiết kiệm nhất",
            lifetime: "Vĩnh viễn",
            months: "tháng",
            vnd: "VNĐ",
            purchase: "Mua ngay",
            noPackages: "Hiện không có gói nào khả dụng"
        },
        purchaseModal: {
            title: "Xác nhận gia hạn thời gian",
            pageInfo: "Thông tin thiệp",
            pageName: "Tên thiệp",
            currentExpiry: "Ngày hết hạn hiện tại",
            newExpiry: "Ngày hết hạn mới (dự kiến)",
            packageInfo: "Thông tin gói",
            duration: "Thời gian gia hạn",
            months: "tháng",
            lifetime: "Vĩnh viễn",
            price: "Giá",
            vnd: "VNĐ",
            promotionCode: "Mã giảm giá (nếu có)",
            promotionCodePlaceholder: "Nhập mã giảm giá",
            applyPromotion: "Áp dụng",
            summary: "Tổng cộng",
            subtotal: "Tạm tính",
            discount: "Giảm giá",
            total: "Tổng tiền",
            note: "Sau khi thanh toán, thời gian công khai sẽ được tự động gia hạn cho thiệp của bạn.",
            cancel: "Hủy",
            confirm: "Xác nhận thanh toán",
            processing: "Đang xử lý..."
        },
        paymentModal: {
            title: "Thanh toán đơn hàng",
            orderId: "Mã đơn hàng",
            amount: "Số tiền",
            vnd: "VNĐ",
            scanQR: "Quét mã QR để thanh toán",
            bankInfo: "Thông tin chuyển khoản",
            bank: "Ngân hàng",
            accountNumber: "Số tài khoản",
            transferDescription: "Nội dung chuyển khoản",
            note: "Vui lòng chuyển khoản đúng nội dung để hệ thống tự động xác nhận.",
            close: "Đóng",
            checkStatus: "Kiểm tra trạng thái",
            copied: "Đã sao chép",
            copiedDesc: "đã được sao chép"
        },
        messages: {
            purchaseSuccess: "Đơn hàng đã được tạo thành công",
            purchaseError: "Không thể tạo đơn hàng",
            invalidPromotion: "Mã giảm giá không hợp lệ",
            paymentPending: "Đang chờ thanh toán",
            paymentSuccess: "Thanh toán thành công! Thời gian công khai đã được gia hạn.",
            paymentFailed: "Thanh toán thất bại"
        },
        notifications: {
            orderCreated: {
                title: "Đơn hàng đã được tạo",
                description: "Vui lòng thực hiện thanh toán để gia hạn thời gian công khai"
            },
            paymentSuccess: {
                title: "Thanh toán thành công! 🎉",
                description: "Thời gian công khai đã được gia hạn"
            },
            paymentFailed: {
                title: "Thanh toán không thành công",
                description: "Vui lòng thử lại hoặc liên hệ hỗ trợ"
            },
            orderError: {
                title: "Lỗi tạo đơn hàng"
            }
        },
        button: {
            extend: "Gia hạn",
            extendTime: "Gia hạn thời gian"
        }
    })
}, 338950, e => {
    e.v({
        title: "Quản lý gói gia hạn thời gian",
        description: "Quản lý các gói gia hạn thời gian công khai cho người dùng mua",
        createPackage: "Tạo gói mới",
        edit: "Sửa",
        delete: "Xóa",
        active: "Hoạt động",
        inactive: "Không hoạt động",
        vnd: "VNĐ",
        months: "tháng",
        lifetime: "Vĩnh viễn",
        packageName: "Tên gói",
        packageLabel: "Nhãn hiển thị",
        packageDescription: "Mô tả",
        durationMonths: "Thời gian gia hạn",
        price: "Giá",
        isActive: "Trạng thái",
        sortOrder: "Thứ tự",
        createdAt: "Ngày tạo",
        updatedAt: "Cập nhật",
        form: {
            title: {
                create: "Tạo gói gia hạn mới",
                edit: "Chỉnh sửa gói gia hạn"
            },
            name: {
                label: "Tên gói (unique)",
                placeholder: "VD: 6_months",
                required: "Tên gói là bắt buộc"
            },
            label: {
                label: "Nhãn hiển thị",
                placeholder: "VD: 6 Tháng",
                required: "Nhãn hiển thị là bắt buộc"
            },
            description: {
                label: "Mô tả",
                placeholder: "VD: Gia hạn trang thêm 6 tháng"
            },
            durationMonths: {
                label: "Số tháng gia hạn",
                placeholder: "VD: 6 (để trống = vĩnh viễn)",
                helper: "Để trống hoặc nhập null để đặt gói vĩnh viễn"
            },
            priceCents: {
                label: "Giá (VNĐ)",
                placeholder: "VD: 200000",
                required: "Giá là bắt buộc",
                min: "Giá phải lớn hơn 0",
                helper: "Nhập giá theo VNĐ"
            },
            currency: {
                label: "Loại tiền",
                placeholder: "VND"
            },
            isActive: {
                label: "Kích hoạt gói",
                helper: "Chỉ các gói được kích hoạt mới hiển thị cho người dùng"
            },
            sortOrder: {
                label: "Thứ tự hiển thị",
                placeholder: "VD: 1",
                helper: "Số thứ tự càng nhỏ sẽ hiển thị càng trước"
            },
            cancel: "Hủy",
            create: "Tạo gói",
            update: "Cập nhật",
            creating: "Đang tạo...",
            updating: "Đang cập nhật..."
        },
        deleteConfirm: {
            title: "Xác nhận xóa gói",
            message: "Bạn có chắc chắn muốn xóa gói gia hạn này? Hành động này không thể hoàn tác.",
            confirm: "Xóa",
            cancel: "Hủy"
        },
        messages: {
            createSuccess: "Tạo gói gia hạn thành công",
            updateSuccess: "Cập nhật gói gia hạn thành công",
            deleteSuccess: "Xóa gói gia hạn thành công",
            createError: "Không thể tạo gói gia hạn",
            updateError: "Không thể cập nhật gói gia hạn",
            deleteError: "Không thể xóa gói gia hạn",
            noData: "Chưa có gói gia hạn nào"
        }
    })
}, 100115, e => {
    e.v({
        title: "Quản lý Assets",
        description: "Quản lý tất cả assets cho hệ thống",
        columns: {
            id: "ID",
            key: "Key",
            previewUrl: "Preview",
            tag: "Tag",
            ownerId: "Owner ID",
            isPublic: "Public",
            tier: "Tier",
            createdAt: "Ngày tạo",
            updatedAt: "Cập nhật"
        },
        filters: {
            search: "Tìm kiếm theo key...",
            tag: "Lọc theo tag",
            tier: "Lọc theo tier",
            allTags: "Tất cả tags",
            allTiers: "Tất cả tiers",
            allKeys: "Tất cả keys"
        },
        tier: {
            basic: "Basic",
            pro: "Pro",
            vip: "VIP"
        },
        public: {
            yes: "Công khai",
            no: "Riêng tư"
        },
        actions: {
            edit: "Sửa",
            delete: "Xóa",
            togglePublic: "Đổi trạng thái public"
        },
        form: {
            title: {
                edit: "Chỉnh sửa Asset"
            },
            key: {
                label: "Key",
                placeholder: "VD: invitation-card-1"
            },
            previewUrl: {
                label: "Preview URL",
                placeholder: "https://example.com/preview.jpg"
            },
            tag: {
                label: "Tag",
                placeholder: "VD: invitation"
            },
            isPublic: {
                label: "Công khai",
                helper: "Asset công khai sẽ hiển thị cho tất cả người dùng"
            },
            tier: {
                label: "Tier",
                placeholder: "Chọn tier",
                helper: "Tier quyết định cấp độ truy cập của người dùng"
            },
            cancel: "Hủy",
            save: "Lưu",
            saving: "Đang lưu..."
        },
        deleteConfirm: {
            title: "Xác nhận xóa asset",
            message: "Bạn có chắc chắn muốn xóa asset này? Hành động này không thể hoàn tác.",
            confirm: "Xóa",
            cancel: "Hủy"
        },
        messages: {
            updateSuccess: "Cập nhật asset thành công",
            updateError: "Không thể cập nhật asset",
            deleteSuccess: "Xóa asset thành công",
            deleteError: "Không thể xóa asset",
            togglePublicSuccess: "Đã đổi trạng thái public",
            togglePublicError: "Không thể đổi trạng thái public",
            noData: "Chưa có asset nào"
        }
    })
}, 357355, e => {
    e.v({
        autoSaveSuccess: "Tự động lưu thành công",
        autoSaveSuccessDescription: "Thay đổi của bạn đã được lưu tự động",
        autoSaveError: "Lỗi tự động lưu",
        autoSaveErrorDescription: "Không thể tự động lưu thay đổi. Vui lòng thử lại sau",
        autoSaveException: "Lỗi hệ thống",
        autoSaveExceptionDescription: "Đã xảy ra lỗi khi tự động lưu. Vui lòng kiểm tra kết nối mạng"
    })
}, 533716, e => {
    e.v({
        title: "Hiệu ứng mở thiệp",
        direction: {
            label: "Hướng mở",
            horizontal: "Ngang (Trái/Phải)",
            vertical: "Dọc (Trên/Dưới)"
        },
        startTriggerMode: {
            label: "Cách bắt đầu mở",
            auto: "Tự mở",
            centerTap: "Chạm để mở",
            centerTapHint: "Trang khách sẽ chờ chạm vào màn hình để mở hiệu ứng. Nếu không chạm, hệ thống sẽ tự mở sau 5 giây."
        },
        renderer: {
            label: "Kiểu mở thiệp",
            splitPanels: "Tách 2 cánh",
            video: "Video toàn màn"
        },
        timing: {
            duration: "Thời gian mở",
            delay: "Độ trễ bắt đầu"
        },
        configMode: {
            label: "Chế độ cấu hình",
            template: "Dùng mẫu có sẵn",
            custom: "Tùy chỉnh chi tiết"
        },
        selectTemplate: "Chọn mẫu",
        desktopSettings: "Cài đặt Desktop",
        mobileSettings: "Cài đặt Mobile",
        leftPanel: {
            label: "Panel bên trái",
            labelVertical: "Panel bên trên"
        },
        rightPanel: {
            label: "Panel bên phải",
            labelVertical: "Panel bên dưới"
        },
        panelType: {
            color: "Màu nền",
            template: "Mẫu có sẵn",
            custom: "Tải ảnh riêng"
        },
        imageSource: {
            template: "Mẫu có sẵn",
            custom: "Tải ảnh riêng"
        },
        zIndexPriority: {
            label: "Panel phía trên",
            left: "Bên trái/Trên",
            right: "Bên phải/Dưới"
        },
        initialOffset: {
            label: "Vị trí khởi tạo panel",
            description: "Dùng để canh vị trí ban đầu của 2 panel trước khi bắt đầu mở.",
            desktop: "Desktop",
            mobile: "Mobile",
            left: "Panel trái/trên",
            right: "Panel phải/dưới",
            x: "Lệch ngang (X)",
            y: "Lệch dọc (Y)",
            rightHint: "Gợi ý: tăng X cho panel phải để kéo con dấu/nút về giữa màn hình."
        },
        selectImage: "Chọn ảnh",
        video: {
            title: "Cài đặt video opening",
            desktop: "Video Desktop",
            mobile: "Video Mobile",
            hardcoded: "Video opening đang dùng preset cứng cho mobile.",
            select: "Chọn video",
            clear: "Xóa",
            empty: "Chưa chọn video",
            urlPlaceholder: "Dán URL video hoặc chọn từ thư viện",
            autoplayHint: "Video sẽ tự phát muted và mở thiệp ngay khi kết thúc.",
            pageFade: {
                label: "Fade trang sau video",
                enabled: "Bật fade",
                disabled: "Tắt fade",
                duration: "Thời gian fade",
                fixed: "Fade trang được cố định: bật, 1.0 giây."
            }
        },
        autoSplit: {
            title: "Tải ảnh tự động cắt",
            description: "Tải lên 1 ảnh, hệ thống sẽ tự động cắt thành 2 phần (Trái/Phải hoặc Trên/Dưới) dựa theo hướng mở.",
            desktopButton: "Tải ảnh Desktop",
            mobileButton: "Tải ảnh Mobile",
            desktopSuccess: "Đã cập nhật ảnh cho Desktop",
            mobileSuccess: "Đã cập nhật ảnh cho Mobile"
        },
        customImageTip: "Mẹo: Ảnh tùy chỉnh cần giữ nguyên kích thước gốc (ví dụ: 1920x1080). Cắt bỏ phần không cần cho từng bên phù hợp và để trong suốt (transparent) cho phần đó. File cần tải nên là ảnh png hoặc webp.",
        vip: {
            badge: "VIP",
            hint: "Opening Video và Phong bì chéo là hiệu ứng VIP.",
            required: "Opening Video và Phong bì chéo chỉ dành cho tài khoản VIP.",
            featureName: "Hiệu ứng mở VIP"
        },
        buttons: {
            preview: "Xem trước",
            apply: "Áp dụng",
            cancel: "Hủy",
            remove: "Xóa hiệu ứng"
        },
        confirmDelete: {
            message: "Bạn có chắc chắn muốn xóa hiệu ứng mở thiệp?",
            confirm: "Xóa"
        }
    })
}, 164473, e => {
    e.v({
        settings: {
            sectionTitle: "Bản đồ",
            selectLocationButton: "Chọn địa điểm",
            changeLocationButton: "Đổi địa điểm",
            clearLocationButton: "Xóa địa điểm",
            autoFillLabel: "Tự điền từ",
            autoFillOptions: {
                none: "Không tự điền",
                weddingLocation: "Địa điểm tổ chức",
                groomLocation: "Địa chỉ nhà trai",
                brideLocation: "Địa chỉ nhà gái"
            }
        },
        placeholder: "Nhấn để chọn địa điểm"
    })
}, 523372, e => {
    e.v({
        title: "Chọn địa điểm",
        searchPlaceholder: "Tìm kiếm địa điểm...",
        noResults: "Không tìm thấy kết quả",
        selectButton: "Chọn",
        cancelButton: "Hủy",
        loading: "Đang tải..."
    })
}, 609008, e => {
    e.v({
        title: "Quản lý tính năng",
        subtitle: "Quản lý danh sách tính năng và giá cho từng tính năng",
        searchPlaceholder: "Tìm kiếm theo key hoặc mô tả...",
        sortBy: {
            label: "Sắp xếp",
            order: "Sắp xếp theo thứ tự",
            key: "Sắp xếp theo key",
            description: "Sắp xếp theo mô tả"
        },
        sortOrder: {
            asc: "Tăng dần",
            desc: "Giảm dần"
        },
        columns: {
            order: "Thứ tự",
            key: "Key",
            description: "Mô tả",
            tiers: {
                basic: "Basic",
                pro: "Pro",
                vip: "VIP"
            },
            price: "Giá (VND)",
            status: "Trạng thái",
            actions: "Thao tác"
        },
        status: {
            active: "Hoạt động",
            inactive: "Tạm dừng"
        },
        empty: {
            noResults: "Không tìm thấy tính năng nào phù hợp",
            noData: "Chưa có tính năng nào"
        },
        summary: "Tổng cộng: {{count}} tính năng",
        summaryActive: "Hoạt động: {{count}}",
        summaryInactive: "Tạm dừng: {{count}}",
        modal: {
            createTitle: "Thêm tính năng mới",
            editTitle: "Chỉnh sửa tính năng",
            key: {
                label: "Key tính năng",
                placeholder: "Nhập key tính năng (ví dụ: design_full_service)",
                warning: "Key không thể thay đổi khi chỉnh sửa"
            },
            description: {
                label: "Mô tả tính năng",
                placeholder: "Nhập mô tả chi tiết tính năng"
            },
            order: {
                label: "Thứ tự hiển thị"
            },
            price: {
                label: "Giá (VND)"
            },
            originalPrice: {
                label: "Giá gốc (VND) - Tùy chọn"
            },
            previewType: {
                label: "Loại Preview",
                image: "Hình ảnh",
                video: "Video"
            },
            previewLink: {
                label: "Link Preview (URL)",
                placeholder: "https://example.com/image.jpg",
                selectFile: "Chọn file"
            },
            availableInTiers: {
                label: "Gói áp dụng"
            },
            status: {
                label: "Trạng thái"
            },
            actions: {
                cancel: "Hủy",
                create: "Tạo tính năng",
                update: "Cập nhật"
            },
            errors: {
                keyRequired: "Vui lòng nhập key tính năng",
                descriptionRequired: "Vui lòng nhập mô tả tính năng",
                priceNegative: "Giá không thể âm",
                sortOrderNegative: "Thứ tự không thể âm"
            }
        },
        delete: {
            title: "Xác nhận xóa",
            message: "Bạn có chắc chắn muốn xóa tính năng này?",
            confirm: "Xóa",
            cancel: "Hủy"
        },
        quickEdit: {
            title: "Cập nhật gói áp dụng",
            message: "Bạn có chắc chắn muốn thay đổi trạng thái gói {{tier}} cho tính năng {{feature}}?",
            confirm: "Cập nhật",
            cancel: "Hủy"
        }
    })
}, 554649, e => {
    e.v({
        title: "Bảng điều khiển Analytics",
        description: "Rollup realtime mục tiêu khoảng 5 phút. Dữ liệu lưu lượng/nguồn/phiên chỉ đảm bảo chính xác từ ngày go-live analytics.",
        actions: {
            refresh: "Làm mới",
            createAffiliateRevenue: "Thêm doanh thu affiliate",
            edit: "Sửa",
            cancel: "Hủy",
            update: "Cập nhật",
            create: "Tạo mới"
        },
        tabs: {
            overview: "Tổng quan",
            content: "Nội dung",
            agents: "Đại lý",
            affiliate: "Tiếp thị liên kết"
        },
        filters: {
            from: "Từ ngày (Asia/Ho_Chi_Minh)",
            to: "Đến ngày (Asia/Ho_Chi_Minh)",
            granularity: "Mức tổng hợp",
            hour: "Theo giờ",
            day: "Theo ngày",
            platform: "Nền tảng",
            flowType: "Loại luồng",
            source: "Nguồn traffic",
            allPlatforms: "Tất cả nền tảng",
            allFlows: "Tất cả luồng",
            allSources: "Tất cả nguồn"
        },
        platform: {
            wedding: "Thiệp cưới",
            inviter: "Thiệp mời",
            birthday: "Sinh nhật",
            event: "Sự kiện",
            video: "Video",
            affiliate: "Tiếp thị liên kết",
            other: "Khác"
        },
        flow: {
            user: "Người dùng",
            mod_design: "Thiết kế moderator",
            agent: "Đại lý",
            admin: "Quản trị",
            design_support: "Hỗ trợ thiết kế",
            system: "Hệ thống"
        },
        source: {
            direct: "Trực tiếp",
            facebook: "Facebook",
            tiktok: "TikTok",
            google: "Google",
            referral: "Giới thiệu",
            organic: "Tự nhiên",
            other: "Khác"
        },
        sections: {
            kpi: "Chỉ số KPI",
            traffic: "Lưu lượng truy cập",
            funnel: "Phễu chuyển đổi",
            content: "Nội dung",
            contentTier: "Phân tầng gói",
            contentTopTemplates: "Top mẫu thiệp",
            contentTemplateSeries: "Xu hướng dùng mẫu",
            agents: "Phân tích đại lý",
            agentsDrilldown: "Chi tiết theo đại lý",
            agentReminders: "Nhắc nhở CSKH đại lý",
            revenue: "Doanh thu",
            affiliateRevenue: "Doanh thu affiliate"
        },
        messages: {
            noData: "Chưa có dữ liệu",
            noKpi: "Chưa có dữ liệu KPI.",
            noContent: "Chưa có dữ liệu nội dung.",
            noAgents: "Chưa có dữ liệu đại lý.",
            noReminders: "Không có nhắc nhở nào.",
            noAffiliateRevenue: "Chưa có bản ghi doanh thu affiliate.",
            loadError: "Lỗi tải {{name}}"
        },
        funnel: {
            range: "Khoảng thời gian",
            summaryTitle: "Tổng quan chuyển đổi",
            ratesTitle: "Tỷ lệ chuyển đổi"
        },
        charts: {
            trafficTrend: "Biểu đồ lưu lượng",
            funnelSteps: "Biểu đồ các bước phễu",
            revenueByType: "Biểu đồ doanh thu theo loại",
            contentTierDistribution: "Biểu đồ phân tầng gói",
            agentBalance: "Top số dư đại lý",
            affiliateRevenueByPartner: "Doanh thu affiliate theo đối tác"
        },
        endpoints: {
            dashboard: "Bảng điều khiển",
            traffic: "Lưu lượng",
            funnel: "Phễu",
            content: "Nội dung",
            agents: "Đại lý",
            agentsReminders: "Nhắc nhở đại lý",
            revenue: "Doanh thu",
            affiliateRevenue: "Doanh thu affiliate"
        },
        table: {
            id: "ID",
            revenueDate: "Ngày ghi nhận (HCM)",
            partnerName: "Đối tác",
            productName: "Sản phẩm",
            revenueCents: "Doanh thu (cents)",
            currency: "Tiền tệ",
            source: "Nguồn",
            reminderType: "Loại nhắc nhở",
            level: "Mức độ",
            agent: "Đại lý",
            message: "Nội dung",
            reportTime: "Thời gian báo cáo",
            action: "Thao tác"
        },
        affiliateFilters: {
            partnerName: "Lọc theo đối tác",
            productName: "Lọc theo sản phẩm",
            campaignName: "Lọc theo chiến dịch",
            partnerNamePlaceholder: "Nhập tên đối tác",
            productNamePlaceholder: "Nhập tên sản phẩm",
            campaignNamePlaceholder: "Nhập tên chiến dịch"
        },
        metrics: {
            users: "Người dùng",
            sessions: "Phiên",
            pageviews: "Lượt xem trang",
            bounce: "Tỷ lệ thoát",
            avgSessionDuration: "Thời lượng phiên trung bình",
            createdPages: "Thiệp đã tạo",
            publishedPages: "Thiệp đã xuất bản",
            paidOrders: "Đơn đã thanh toán",
            paidUsers: "Người dùng đã thanh toán",
            revenue: "Doanh thu",
            visitors: "Lượt truy cập",
            visitToCreateRate: "Tỷ lệ truy cập -> tạo",
            createToPublishRate: "Tỷ lệ tạo -> xuất bản",
            createToPayRate: "Tỷ lệ tạo -> thanh toán",
            manualAffiliateRevenue: "Doanh thu affiliate thủ công",
            topupRevenue: "Doanh thu nạp tiền",
            agentTopupRevenue: "Doanh thu nạp tiền đại lý",
            source: "Nguồn",
            utmSource: "UTM Source",
            utmMedium: "UTM Medium",
            utmCampaign: "UTM Campaign",
            platform: "Nền tảng",
            flowType: "Loại luồng",
            createRate: "Tỷ lệ tạo",
            publishRate: "Tỷ lệ xuất bản",
            payRate: "Tỷ lệ thanh toán",
            revenueCents: "Doanh thu (cents)",
            avgOrderValueCents: "Giá trị đơn trung bình (cents)",
            orders: "Số đơn",
            type: "Loại",
            granularity: "Mức tổng hợp",
            from: "Từ",
            to: "Đến",
            agentUserId: "Mã người dùng đại lý",
            fullName: "Họ tên",
            dealerLevel: "Cấp đại lý",
            isActive: "Đang hoạt động",
            balanceCents: "Số dư (cents)",
            currentSubscriptionTier: "Gói hiện tại",
            subscriptionEndsAt: "Ngày hết hạn gói",
            email: "Email"
        },
        columns: {
            date: "Ngày",
            time: "Thời gian",
            hour: "Giờ",
            day: "Ngày",
            source: "Nguồn",
            platform: "Nền tảng",
            flowType: "Loại luồng",
            users: "Người dùng",
            sessions: "Phiên",
            pageviews: "Lượt xem trang",
            bounce: "Tỷ lệ thoát",
            avgSessionDuration: "Thời lượng phiên TB",
            visitors: "Lượt truy cập",
            createdPages: "Thiệp đã tạo",
            publishedPages: "Thiệp đã xuất bản",
            paidUsers: "Người dùng trả phí",
            paidOrders: "Đơn trả phí",
            revenue: "Doanh thu",
            templateId: "Mã mẫu",
            templateName: "Tên mẫu",
            tier: "Gói",
            count: "Số lượng",
            value: "Giá trị",
            metric: "Chỉ số",
            type: "Loại",
            orders: "Số đơn",
            revenueCents: "Doanh thu (cents)",
            avgOrderValueCents: "Giá trị đơn TB (cents)",
            createRate: "Tỷ lệ tạo",
            publishRate: "Tỷ lệ xuất bản",
            payRate: "Tỷ lệ thanh toán",
            granularity: "Mức tổng hợp",
            from: "Từ",
            to: "Đến",
            agentUserId: "Mã người dùng đại lý",
            fullName: "Họ tên",
            dealerLevel: "Cấp đại lý",
            isActive: "Đang hoạt động",
            balanceCents: "Số dư (cents)",
            currentSubscriptionTier: "Gói hiện tại",
            subscriptionEndsAt: "Ngày hết hạn gói",
            email: "Email"
        },
        values: {
            true: "Có",
            false: "Không",
            hour: "Theo giờ",
            day: "Theo ngày",
            free: "Miễn phí",
            basic: "Cơ bản",
            pro: "Pro",
            vip: "VIP",
            page_plan: "Gói trang",
            photo_storage: "Lưu trữ ảnh",
            page_slot: "Mở thêm slot trang",
            feature_purchase: "Mua tính năng",
            agent_topup: "Nạp tiền đại lý",
            video: "Video",
            wedding: "Thiệp cưới",
            inviter: "Thiệp mời",
            birthday: "Sinh nhật",
            event: "Sự kiện",
            affiliate: "Tiếp thị liên kết",
            other: "Khác",
            user: "Người dùng",
            mod_design: "Thiết kế moderator",
            agent: "Đại lý",
            admin: "Quản trị",
            design_support: "Hỗ trợ thiết kế",
            system: "Hệ thống",
            direct: "Trực tiếp",
            facebook: "Facebook",
            tiktok: "TikTok",
            google: "Google",
            referral: "Giới thiệu",
            organic: "Tự nhiên",
            level_1: "Cấp 1",
            level_2: "Cấp 2",
            level_3: "Cấp 3",
            unlimited: "Không giới hạn",
            null: "-"
        },
        modal: {
            title: {
                create: "Tạo doanh thu affiliate",
                edit: "Cập nhật doanh thu affiliate"
            },
            description: "Payload sẽ map theo contract BE: revenueDate, partnerName, productName, revenueCents, currency...",
            fields: {
                revenueDate: "Ngày ghi nhận (Asia/Ho_Chi_Minh)",
                revenueCents: "Doanh thu (cents)",
                partnerName: "Tên đối tác",
                productName: "Tên sản phẩm",
                currency: "Tiền tệ",
                source: "Nguồn",
                platform: "Nền tảng (tùy chọn)",
                flowType: "Loại luồng (tùy chọn)",
                metadata: "Metadata JSON (tùy chọn)",
                metadataPlaceholder: '{"campaign":"spring"}'
            }
        },
        toasts: {
            createSuccess: "Đã tạo doanh thu affiliate",
            updateSuccess: "Đã cập nhật doanh thu affiliate",
            saveError: {
                title: "Không lưu được doanh thu affiliate",
                description: "Vui lòng kiểm tra lại dữ liệu và thử lại."
            },
            validation: {
                missingRequired: {
                    title: "Thiếu thông tin bắt buộc",
                    description: "Cần nhập partnerName và productName."
                },
                invalidRevenueDate: {
                    title: "revenueDate không hợp lệ",
                    description: "Vui lòng chọn ngày giờ theo múi giờ Asia/Ho_Chi_Minh."
                },
                invalidRevenueCents: {
                    title: "revenueCents không hợp lệ",
                    description: "Giá trị phải là số nguyên không âm."
                },
                invalidMetadata: {
                    title: "metadata không hợp lệ",
                    description: "metadata phải là JSON object.",
                    parseError: "Không parse được JSON metadata."
                },
                missingRecordId: {
                    title: "Thiếu ID bản ghi",
                    description: "Không thể cập nhật vì bản ghi không có trường id. Vui lòng dùng tạo mới."
                }
            }
        }
    })
}, 78102, e => {
    e.v({
        banner: {
            badge: "Cộng đồng meWedding",
            title: "Thư Viện Thiệp Cưới",
            description: "Khám phá những thiệp cưới tuyệt đẹp được tạo bởi cộng đồng người dùng meWedding.",
            titleMobile: "Thư Viện Thiệp Cưới",
            descriptionMobile: "Khám phá thiệp cưới từ cộng đồng"
        },
        search: {
            placeholder: "Tìm kiếm theo tên cô dâu, chú rể, địa điểm…",
            placeholderMobile: "Tìm kiếm thiệp cưới..."
        },
        sort: {
            label: "Sắp xếp",
            newest: "Mới nhất",
            oldest: "Cũ nhất"
        },
        filter: {
            allTypes: "Tất cả loại",
            normal: "Thiệp cưới",
            card: "Thiệp mời",
            logo: "Logo cưới"
        },
        results: {
            showing: "Hiển thị",
            of: "trong",
            pages: "thiệp cưới",
            found: "thiệp cưới được tìm thấy"
        },
        messages: {
            errorLoading: "Không thể tải thiệp cưới. Vui lòng thử lại sau.",
            noPages: "Không tìm thấy thiệp cưới nào"
        },
        card: {
            viewPage: "Xem thiệp",
            by: "bởi",
            couple: "Cặp đôi",
            location: "Địa điểm",
            template: "Mẫu"
        }
    })
}, 193749, e => {
    e.v({
        title: "Kiểu chữ",
        font: "Font",
        fontSize: "Cỡ chữ",
        color: "Màu chữ",
        colorMode: "Loại màu",
        colorModeSolid: "Màu đơn",
        colorModeGradient: "Gradient",
        gradientType: "Loại gradient",
        gradientLinear: "Linear",
        gradientRadial: "Radial",
        gradientAngle: "Góc gradient",
        gradientColor1: "Màu 1",
        gradientColor2: "Màu 2",
        textTransform: "Kiểu chữ hoa/thường",
        bold: "In đậm",
        italic: "In nghiêng",
        underline: "Gạch chân",
        strikethrough: "Gạch ngang",
        uppercase: "Chữ hoa",
        lineHeight: "Chiều cao dòng",
        letterSpacing: "Khoảng cách chữ"
    })
}, 424891, e => {
    e.v({
        meta: {
            title: "Điều Khoản Sử Dụng | meHappy",
            description: "Điều khoản sử dụng dịch vụ của meHappy - Cam kết và trách nhiệm giữa người dùng và nền tảng"
        },
        title: "ĐIỀU KHOẢN SỬ DỤNG",
        effectiveDate: "Ngày hiệu lực: 01/11/2025",
        intro: {
            paragraph1: "Chào mừng bạn đến với meHappy. Khi bạn truy cập trang web hoặc sử dụng dịch vụ của chúng tôi, bạn đồng ý tuân thủ các Điều khoản sử dụng này. Vui lòng đọc kỹ trước khi bắt đầu.",
            paragraph2: "Nếu bạn không đồng ý với bất kỳ điều khoản nào, vui lòng ngừng sử dụng dịch vụ của chúng tôi ngay lập tức."
        },
        section1: {
            title: "1. CHẤP NHẬN ĐIỀU KHOẢN",
            content: "Bằng việc sử dụng meHappy, bạn xác nhận rằng bạn đã đủ độ tuổi pháp lý để ký kết hợp đồng hoặc có sự đồng ý của cha mẹ/người giám hộ hợp pháp. Bạn đồng ý tuân thủ tất cả các luật và quy định hiện hành."
        },
        section2: {
            title: "2. TÀI KHOẢN NGƯỜI DÙNG",
            content: "Bạn chịu trách nhiệm bảo mật thông tin tài khoản và mật khẩu của mình. Bạn đồng ý thông báo ngay cho chúng tôi nếu phát hiện bất kỳ hành vi sử dụng trái phép nào đối với tài khoản của bạn.",
            item1: "Cung cấp thông tin chính xác và đầy đủ khi đăng ký.",
            item2: "Không chia sẻ mật khẩu của bạn với bất kỳ ai."
        },
        section3: {
            title: "3. QUYỀN SỞ HỮU TRÍ TUỆ",
            content: "Nội dung, thiết kế, đồ họa, và phần mềm trên meHappy là tài sản của MEHAPPY hoặc các bên cấp phép của chúng tôi và được bảo vệ bởi luật bản quyền và sở hữu trí tuệ."
        },
        section4: {
            title: "4. NỘI DUNG NGƯỜI DÙNG",
            content: "Bạn giữ quyền sở hữu đối với nội dung bạn tải lên (hình ảnh, văn bản). Tuy nhiên, bằng cách tải lên, bạn cấp cho chúng tôi quyền sử dụng, lưu trữ và hiển thị nội dung đó để cung cấp dịch vụ cho bạn.",
            prohibited: "Nghiêm cấm tải lên nội dung khiêu dâm, bạo lực, vi phạm pháp luật hoặc vi phạm quyền của người khác."
        },
        section5: {
            title: "5. THANH TOÁN VÀ HOÀN TIỀN",
            content: "Các dịch vụ trả phí phải được thanh toán theo quy định hiện hành. Chúng tôi có chính sách không hoàn tiền trừ khi có lỗi kỹ thuật từ phía hệ thống hoặc quy định pháp luật bắt buộc."
        },
        section6: {
            title: "6. GIỚI HẠN TRÁCH NHIỆM",
            content: 'meHappy cung cấp dịch vụ "nguyên trạng". Chúng tôi không chịu trách nhiệm về bất kỳ thiệt hại gián tiếp, ngẫu nhiên hoặc đặc biệt nào phát sinh từ việc sử dụng dịch vụ của bạn.'
        },
        section7: {
            title: "7. LIÊN HỆ",
            content: "Nếu bạn có câu hỏi về Điều khoản sử dụng này, vui lòng liên hệ với chúng tôi qua email hỗ trợ: mehappy.info1@gmail.com"
        }
    })
}, 137738, e => {
    e.v({
        meta: {
            title: "Chính Sách Thanh Toán | meHappy",
            description: "Hướng dẫn và chính sách thanh toán của meHappy"
        },
        title: "CHÍNH SÁCH THANH TOÁN",
        effectiveDate: "Ngày hiệu lực: 01/11/2025",
        intro: {
            paragraph1: "meHappy cung cấp phương thức thanh toán linh hoạt và an toàn qua hình thức Chuyển khoản ngân hàng (Quét mã QR) để bạn có thể dễ dàng nâng cấp dịch vụ và trải nghiệm các tính năng cao cấp.",
            paragraph2: "Dưới đây là chi tiết quy trình thanh toán."
        },
        section1: {
            title: "1. PHƯƠNG THỨC THANH TOÁN",
            intro: "Hiện tại, meHappy hỗ trợ thanh toán duy nhất qua hình thức Chuyển khoản ngân hàng (Quét mã QR). Hệ thống sẽ tự động tạo mã QR chính xác cho từng đơn hàng của bạn."
        },
        section2: {
            title: "2. QUY TRÌNH THANH TOÁN",
            content: "Để thực hiện thanh toán nhanh chóng và chính xác, vui lòng làm theo các bước sau:",
            step1: "Chọn gói dịch vụ hoặc tính năng bạn muốn mua.",
            step2: "Tại bước thanh toán, hệ thống sẽ hiển thị mã QR chuyển khoản chứa thông tin đơn hàng.",
            step3: "Sử dụng ứng dụng Ngân hàng (Mobile Banking) để quét mã QR (Nội dung và số tiền sẽ được điền tự động).",
            step4: "Xác nhận chuyển khoản trên ứng dụng ngân hàng và hoàn tất.",
            note: "Lưu ý: Mã QR chỉ có hiệu lực cho phiên giao dịch hiện tại. Hệ thống sẽ tự động kích hoạt dịch vụ ngay sau khi nhận được thanh toán (thường trong vòng 1-2 phút)."
        },
        section3: {
            title: "3. CHÍNH SÁCH HỦY VÀ HOÀN TIỀN",
            content: "Hiện tại, meHappy KHÔNG áp dụng chính sách hoàn tiền cho các gói dịch vụ đã mua, trừ các trường hợp sau:",
            item1: "Lỗi kỹ thuật nghiêm trọng từ hệ thống khiến bạn không thể sử dụng dịch vụ.",
            item2: "Thanh toán trùng lặp do lỗi hệ thống.",
            note: "Mọi yêu cầu hoàn tiền cần được gửi đến bộ phận hỗ trợ trong vòng 24 giờ kể từ khi thanh toán."
        },
        section4: {
            title: "4. BẢO MẬT THANH TOÁN",
            content: "Chúng tôi cam kết bảo mật thông tin thanh toán của bạn. meHappy không lưu trữ thông tin thẻ tín dụng hay tài khoản ngân hàng của bạn. Mọi giao dịch được xử lý tự động và an toàn."
        },
        section5: {
            title: "5. HỖ TRỢ THANH TOÁN",
            content: "Nếu bạn gặp bất kỳ vấn đề nào trong quá trình thanh toán (ví dụ: đã chuyển khoản nhưng chưa được kích hoạt), vui lòng liên hệ ngay với chúng tôi:",
            email: "Email: mehappy.info1@gmail.com",
            phone: "Các kênh hỗ trợ trực tuyến (Fanpage, Zalo) để được hỗ trợ nhanh nhất."
        }
    })
}, 748980, e => {
    e.v({
        meta: {
            title: "Chăm Sóc Khách Hàng | meHappy",
            description: "Trung tâm hỗ trợ khách hàng của meHappy. Liên hệ với chúng tôi để được giải đáp thắc mắc và hỗ trợ kỹ thuật."
        },
        title: "CHĂM SÓC KHÁCH HÀNG",
        intro: {
            title: "Chúng tôi luôn sẵn sàng hỗ trợ bạn",
            desc: "Đội ngũ meHappy luôn túc trực để giải đáp mọi thắc mắc và hỗ trợ bạn tạo nên những tấm thiệp cưới tuyệt vời nhất."
        },
        channels: {
            title: "Kênh Hỗ Trợ Chính",
            zalo: {
                title: "Zalo Chính Thức",
                desc: "Chat trực tiếp để được hỗ trợ nhanh nhất.",
                action: "Chat qua Zalo"
            },
            messenger: {
                title: "Facebook Messenger",
                desc: "Theo dõi fanpage và nhắn tin hỗ trợ.",
                action: "Chat qua Messenger"
            },
            email: {
                title: "Email Hỗ Trợ",
                desc: "Gửi yêu cầu hỗ trợ kỹ thuật hoặc hợp tác.",
                action: "Gửi Email"
            },
            hotline: {
                title: "Hotline",
                desc: "Liên hệ khẩn cấp trong giờ hành chính.",
                action: "Gọi ngay"
            }
        },
        faq: {
            title: "Câu Hỏi Thường Gặp",
            desc: "Tìm nhanh câu trả lời cho các vấn đề phổ biến.",
            action: "Xem FAQ"
        },
        workingHours: {
            title: "Giờ Làm Việc",
            content: "Thứ 2 - Chủ Nhật: 8:00 - 22:00"
        }
    })
}]);

//# debugId=0f40d74a-2637-615b-8349-f19afdd2e2ad
//# sourceMappingURL=f049d639da656784.js.map